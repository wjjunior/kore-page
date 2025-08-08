import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useInvestmentData } from "@/features/investment";
import { useInvestmentStore } from "@/app/providers/store";
import { mockCompleteInvestmentData } from "../../../mocks";

vi.mock("nuxt/app", () => ({
  useAsyncData: vi.fn(),
  useState: vi.fn(),
}));

vi.mock("@/shared/lib/api", () => ({
  investmentAPI: {
    fetchInvestmentsData: vi.fn(),
  },
}));

describe("useInvestmentData", () => {
  let pinia: ReturnType<typeof createPinia>;

  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("initial state", () => {
    it("should return initial state with default values", () => {
      const {
        loading,
        error,
        isDataReady,
        getDaysLeft,
        getTotalInvestors,
        getFundingGoal,
        getFundsRaised,
        getMinimumInvestment,
        getDeadline,
        getTypeOfSecurity,
        getRevenueShareDuration,
        getCategories,
        getCompanyName,
        getCompanyDescription,
        getWebsite,
        getOfferingTerms,
        getDocuments,
      } = useInvestmentData();

      expect(loading.value).toBe(false);
      expect(error.value).toBe(null);
      expect(isDataReady.value).toBe(false);
      expect(getDaysLeft.value).toBe(0);
      expect(getTotalInvestors.value).toBe(0);
      expect(getFundingGoal.value).toBe(0);
      expect(getFundsRaised.value).toBe(0);
      expect(getMinimumInvestment.value).toBe(0);
      expect(getDeadline.value).toBe("");
      expect(getTypeOfSecurity.value).toBe("");
      expect(getRevenueShareDuration.value).toBe(0);
      expect(getCategories.value).toEqual([]);
      expect(getCompanyName.value).toBe("");
      expect(getCompanyDescription.value).toBe("");
      expect(getWebsite.value).toBe("");
      expect(getOfferingTerms.value).toEqual([]);
      expect(getDocuments.value).toEqual([]);
    });
  });

  describe("loadData action", () => {
    it("should load data successfully", async () => {
      const mockData = mockCompleteInvestmentData;

      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      const { loadData, isDataReady } = useInvestmentData();

      await loadData();

      expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
      expect(isDataReady.value).toBe(true);
    });

    it("should handle API errors", async () => {
      const mockError = new Error("API Error");
      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockRejectedValue(
        mockError
      );

      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const { loadData, error, loading } = useInvestmentData();

      await loadData();

      expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
      expect(error.value).toBe("API Error");
      expect(loading.value).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error fetching banner data:",
        mockError
      );

      consoleErrorSpy.mockRestore();
    });

    it("should not load data if already loaded", async () => {
      const mockData = mockCompleteInvestmentData;

      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      const { loadData } = useInvestmentData();

      await loadData();
      await loadData();

      expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
    });
  });

  describe("retryLoad action", () => {
    it("should retry loading data", async () => {
      const mockData = mockCompleteInvestmentData;

      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      const { retryLoad } = useInvestmentData();

      retryLoad();

      expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
    });
  });

  describe("data getters with loaded data", () => {
    beforeEach(async () => {
      const mockData = mockCompleteInvestmentData;

      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      const { loadData } = useInvestmentData();
      await loadData();
    });

    it("should return correct data values after loading", () => {
      const {
        getDaysLeft,
        getTotalInvestors,
        getFundingGoal,
        getFundsRaised,
        getMinimumInvestment,
        getDeadline,
        getTypeOfSecurity,
        getRevenueShareDuration,
        getCategories,
        getCompanyName,
        getCompanyDescription,
        getWebsite,
        getOfferingTerms,
        getDocuments,
      } = useInvestmentData();

      expect(getDaysLeft.value).toBe(213);
      expect(getTotalInvestors.value).toBe(157);
      expect(getFundingGoal.value).toBe(250000);
      expect(getFundsRaised.value).toBe(300000);
      expect(getMinimumInvestment.value).toBe(100);
      expect(getDeadline.value).toBe("Feb, 2025");
      expect(getTypeOfSecurity.value).toBe("Revenue Share Agreement");
      expect(getRevenueShareDuration.value).toBe(36);
      expect(getCategories.value).toEqual(["Fintech", "Investments"]);
      expect(getCompanyName.value).toBe("Kore");
      expect(getCompanyDescription.value).toBe("Lorem ipsum dolor sit");
      expect(getWebsite.value).toBe("https://site.com");
      expect(getOfferingTerms.value).toEqual([
        {
          label: "Regulation",
          value: "Regulation Crowdfunding (RegCF)",
        },
        {
          label: "Offering Type",
          value: "Revenue Sharing Agreement",
        },
      ]);
      expect(getDocuments.value).toEqual([
        {
          id: 1,
          title: "Form C",
          filename: "FileName_GoesHere.pdf",
        },
        {
          id: 2,
          title: "Custodian and Voting Agreement",
          filename: "FileName_GoesHere.pdf",
        },
      ]);
    });

    it("should have correct loading and error states after successful load", () => {
      const { loading, error, isDataReady } = useInvestmentData();

      expect(loading.value).toBe(false);
      expect(error.value).toBe(null);
      expect(isDataReady.value).toBe(true);
    });
  });

  describe("store integration", () => {
    it("should use the same store instance", () => {
      const { loadData } = useInvestmentData();
      const store = useInvestmentStore();

      expect(store).toBeDefined();
      expect(typeof loadData).toBe("function");
    });
  });
});
