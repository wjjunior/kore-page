import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ref, type Ref } from "vue";
import { useInvestmentDataSSR } from "@/features/investment";

vi.mock("nuxt/app", () => ({
  useAsyncData: vi.fn(),
  useState: vi.fn(),
}));

vi.mock("@/shared/lib/api", () => ({
  investmentAPI: {
    fetchInvestmentsData: vi.fn(),
  },
}));

const flushPromises = async () => {
  await Promise.resolve();
  await Promise.resolve();
};

describe("useInvestmentDataSSR", () => {
  let stateMap: Map<string, Ref<any>>;

  beforeEach(async () => {
    vi.clearAllMocks();
    stateMap = new Map();

    const { useState, useAsyncData } = await import("nuxt/app");

    vi.mocked(useState).mockImplementation(((key?: any, init?: any) => {
      const name: string = typeof key === "string" ? key : "mock-state-key";
      let initializer: any;
      if (typeof key === "string") {
        initializer = init;
      } else if (typeof key === "function") {
        initializer = key;
      } else {
        initializer = () => undefined;
      }

      if (!stateMap.has(name)) {
        const initialValue =
          typeof initializer === "function" ? initializer() : initializer;
        stateMap.set(name, ref(initialValue));
      }
      return stateMap.get(name) as Ref<any>;
    }) as any);

    vi.mocked(useAsyncData).mockImplementation(((
      _key: any,
      handler: any,
      options?: any
    ) => {
      const pending = ref(true);
      const error = ref<any>(null);
      const refresh = vi.fn(async () => {
        pending.value = true;
        try {
          await handler();
          error.value = null;
        } catch (e) {
          error.value = e;
        } finally {
          pending.value = false;
        }
      });

      if (!options || options.lazy === false) {
        void refresh();
      } else {
        pending.value = false;
      }

      return { pending, error, refresh } as any;
    }) as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("fetches data and exposes state and computed info", async () => {
    const mockData = {
      daysLeft: 213,
      totalInvestors: 157,
      fundingGoal: 250000,
      fundsRaised: 300000,
      minimumInvestment: 100,
      deadline: "Feb, 2025",
      typeOfSecurity: "Revenue Share Agreement",
      revenueShareDuration: 36,
      categories: ["Fintech", "Investments"],
      companyName: "Kore",
      companyDescription: "Lorem ipsum dolor sit",
      website: "https://site.com",
      logoSrc: "/images/kore-logo.svg",
      thumbnailSrc: "/images/thumbnail.svg",
      offeringTerms: [
        { label: "Regulation", value: "Regulation Crowdfunding (RegCF)" },
      ],
      documents: [
        { id: 1, title: "Form C", filename: "FileName_GoesHere.pdf" },
      ],
      teamMembers: [],
      teamDescription: "Lorem ipsum",
      marketingPlan: "Plan",
      faqItems: [],
    };

    const { investmentAPI } = await import("@/shared/lib/api");
    vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

    const { loading, error, isDataReady, investmentData, investmentInfo } =
      useInvestmentDataSSR();

    await flushPromises();

    expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
    expect(loading.value).toBe(false);
    expect(error.value).toBeNull();
    expect(isDataReady.value).toBe(true);
    expect(investmentData.value).toEqual(mockData);
    expect(investmentInfo.value).toEqual(mockData);
  });

  it("does not refetch when state already has data", async () => {
    const existingData = ref({ companyName: "Existing" } as any);
    stateMap.set("investment-data", existingData);

    const { investmentAPI } = await import("@/shared/lib/api");

    const { isDataReady, investmentData } = useInvestmentDataSSR();

    await flushPromises();

    expect(investmentAPI.fetchInvestmentsData).not.toHaveBeenCalled();
    expect(isDataReady.value).toBe(true);
    expect(investmentData.value).toEqual(existingData.value);
  });

  it("handles API errors", async () => {
    const mockError = new Error("API Error");
    const { investmentAPI } = await import("@/shared/lib/api");
    vi.mocked(investmentAPI.fetchInvestmentsData).mockRejectedValue(mockError);

    const { loading, error, isDataReady } = useInvestmentDataSSR();

    await flushPromises();

    expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
    expect(loading.value).toBe(false);
    expect(error.value).toBeInstanceOf(Error);
    expect((error.value as Error).message).toBe("API Error");
    expect(isDataReady.value).toBe(false);
  });

  it("exposes refresh to refetch data when cache cleared", async () => {
    const first = { companyName: "First", daysLeft: 1 } as any;
    const second = { companyName: "Second", daysLeft: 2 } as any;
    const { investmentAPI } = await import("@/shared/lib/api");
    vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValueOnce(first);

    const { investmentData, refresh } = useInvestmentDataSSR();
    await flushPromises();
    expect(investmentData.value).toEqual(first);

    vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValueOnce(second);
    const existing = stateMap.get("investment-data");
    if (existing) existing.value = null;
    await refresh();
    await flushPromises();
    expect(investmentData.value).toEqual(second);
  });

  it("provides default values in investmentInfo when fields missing", async () => {
    stateMap.set("investment-data", ref({} as any));

    const { investmentInfo } = useInvestmentDataSSR();
    await flushPromises();

    expect(investmentInfo.value).toEqual({
      daysLeft: 0,
      totalInvestors: 0,
      fundingGoal: 0,
      fundsRaised: 0,
      minimumInvestment: 0,
      deadline: "",
      typeOfSecurity: "",
      revenueShareDuration: 0,
      categories: [],
      companyName: "",
      companyDescription: "",
      website: "",
      logoSrc: "",
      thumbnailSrc: "",
      offeringTerms: [],
      documents: [],
      teamMembers: [],
      teamDescription: "",
      marketingPlan: "",
      faqItems: [],
    });
  });
});
