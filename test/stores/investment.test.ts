import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useInvestmentStore } from "@/app/providers/store/investment";
import type { InvestmentBannerData } from "@/shared/lib/types";

vi.mock("@/shared/lib/api", () => ({
  investmentAPI: {
    fetchInvestmentsData: vi.fn(),
  },
}));

describe("useInvestmentStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("initial state", () => {
    it("should start with empty state", () => {
      const store = useInvestmentStore();
      expect(store.bannerData).toBeNull();
      expect(store.loading).toBe(false);
      expect(store.error).toBeNull();
    });
  });

  describe("getters", () => {
    it("should return fallback values when data is null", () => {
      const store = useInvestmentStore();
      expect(store.isDataLoaded).toBe(false);
      expect(store.getDaysLeft).toBe(0);
      expect(store.getCategories).toEqual([]);
      expect(store.getCompanyName).toBe("");
    });

    it("should return correct values when bannerData is set", () => {
      const store = useInvestmentStore();
      const data: InvestmentBannerData = {
        daysLeft: 10,
        totalInvestors: 5,
        fundingGoal: 1000,
        fundsRaised: 500,
        minimumInvestment: 100,
        deadline: "2025-10-01",
        typeOfSecurity: "Type A",
        revenueShareDuration: 12,
        categories: ["Tech"],
        companyName: "Test Corp",
        companyDescription: "Lorem",
        website: "https://test.com",
        logoSrc: "/logo.png",
        thumbnailSrc: "/thumb.png",
        offeringTerms: [],
        documents: [],
        teamMembers: [],
        teamDescription: "Team Desc",
        marketingPlan: "Plan",
        faqItems: [],
      };
      store.bannerData = data;

      expect(store.isDataLoaded).toBe(true);
      expect(store.getCompanyName).toBe("Test Corp");
      expect(store.getDaysLeft).toBe(10);
      expect(store.getCategories).toEqual(["Tech"]);
    });
  });

  describe("actions", () => {
    it("should fetch data successfully", async () => {
      const store = useInvestmentStore();
      const mockData = { companyName: "Kore", ...{} } as InvestmentBannerData;
      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      await store.fetchInvestmentsData();
      expect(store.bannerData).toEqual(mockData);
      expect(store.error).toBeNull();
      expect(store.loading).toBe(false);
    });

    it("should handle error during fetch", async () => {
      const store = useInvestmentStore();
      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockRejectedValue(
        new Error("API fail")
      );

      const consoleSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      await store.fetchInvestmentsData();

      expect(store.bannerData).toBeNull();
      expect(store.error).toBe("API fail");
      expect(consoleSpy).toHaveBeenCalled();

      consoleSpy.mockRestore();
    });

    it("should clear error correctly", () => {
      const store = useInvestmentStore();
      store.error = "Something went wrong";
      store.clearError();
      expect(store.error).toBeNull();
    });
  });
});
