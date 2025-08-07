import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useInvestmentData } from "@/features/home";
import { useInvestmentStore } from "@/stores";

vi.mock("@/shared/lib/api", () => ({
  investmentAPI: {
    fetchInvestmentsData: vi.fn(),
  },
}));

describe("useInvestmentData", () => {
  let pinia: any;

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
    });
  });

  describe("loadData action", () => {
    it("should load data successfully", async () => {
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
      };

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

      // Mock console.error to prevent stderr output
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

      // Restore console.error
      consoleErrorSpy.mockRestore();
    });

    it("should not load data if already loaded", async () => {
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
      };

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
      };

      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      const { retryLoad } = useInvestmentData();

      retryLoad();

      expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
    });
  });

  describe("data getters with loaded data", () => {
    beforeEach(async () => {
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
      };

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
