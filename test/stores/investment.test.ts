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
    it("should have correct initial state", () => {
      const store = useInvestmentStore();

      expect(store.bannerData).toBe(null);
      expect(store.loading).toBe(false);
      expect(store.error).toBe(null);
    });
  });

  describe("getters", () => {
    it("should return correct default values when bannerData is null", () => {
      const store = useInvestmentStore();

      expect(store.isDataLoaded).toBe(false);
      expect(store.getDaysLeft).toBe(0);
      expect(store.getTotalInvestors).toBe(0);
      expect(store.getFundingGoal).toBe(0);
      expect(store.getFundsRaised).toBe(0);
      expect(store.getMinimumInvestment).toBe(0);
      expect(store.getDeadline).toBe("");
      expect(store.getTypeOfSecurity).toBe("");
      expect(store.getRevenueShareDuration).toBe(0);
      expect(store.getCategories).toEqual([]);
      expect(store.getCompanyName).toBe("");
      expect(store.getCompanyDescription).toBe("");
      expect(store.getWebsite).toBe("");
      expect(store.getLogoSrc).toBe("");
      expect(store.getThumbnailSrc).toBe("");
      expect(store.getOfferingTerms).toEqual([]);
      expect(store.getDocuments).toEqual([]);
      expect(store.getTeamMembers).toEqual([]);
      expect(store.getTeamDescription).toBe("");
    });

    it("should return correct values when bannerData is loaded", () => {
      const mockData: InvestmentBannerData = {
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
          {
            label: "Regulation",
            value: "Regulation Crowdfunding (RegCF)",
          },
          {
            label: "Offering Type",
            value: "Revenue Sharing Agreement",
          },
        ],
        documents: [
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
        ],
        teamMembers: [],
        teamDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        marketingPlan:
          "Our comprehensive marketing strategy focuses on digital channels and partnerships.",
        faqItems: [],
      };

      const store = useInvestmentStore();
      store.bannerData = mockData;

      expect(store.isDataLoaded).toBe(true);
      expect(store.getDaysLeft).toBe(213);
      expect(store.getTotalInvestors).toBe(157);
      expect(store.getFundingGoal).toBe(250000);
      expect(store.getFundsRaised).toBe(300000);
      expect(store.getMinimumInvestment).toBe(100);
      expect(store.getDeadline).toBe("Feb, 2025");
      expect(store.getTypeOfSecurity).toBe("Revenue Share Agreement");
      expect(store.getRevenueShareDuration).toBe(36);
      expect(store.getCategories).toEqual(["Fintech", "Investments"]);
      expect(store.getCompanyName).toBe("Kore");
      expect(store.getCompanyDescription).toBe("Lorem ipsum dolor sit");
      expect(store.getWebsite).toBe("https://site.com");
      expect(store.getLogoSrc).toBe("/images/kore-logo.svg");
      expect(store.getThumbnailSrc).toBe("/images/thumbnail.svg");
      expect(store.getOfferingTerms).toEqual(mockData.offeringTerms);
      expect(store.getDocuments).toEqual(mockData.documents);
      expect(store.getTeamMembers).toEqual(mockData.teamMembers);
      expect(store.getTeamDescription).toBe(mockData.teamDescription);
    });

    it("should handle partial bannerData with undefined values", () => {
      const partialData = {
        daysLeft: 100,
        totalInvestors: 50,
        fundingGoal: 100000,
        fundsRaised: 75000,
        minimumInvestment: 50,
        deadline: "Dec, 2024",
        typeOfSecurity: "Equity",
        revenueShareDuration: 24,
        categories: ["Tech"],
        companyName: "Test Company",
        companyDescription: "Test description",
        website: "https://test.com",
        logoSrc: "/img/logo.svg",
        thumbnailSrc: "/img/thumb.svg",
        offeringTerms: [
          {
            label: "Test Term",
            value: "Test Value",
          },
        ],
        documents: [
          {
            id: 1,
            title: "Test Document",
            filename: "test.pdf",
          },
        ],
        teamMembers: [],
        teamDescription: "Test team description",
        marketingPlan:
          "Our comprehensive marketing strategy focuses on digital channels and partnerships.",
        faqItems: [],
      };

      const store = useInvestmentStore();
      store.bannerData = partialData as InvestmentBannerData;

      expect(store.isDataLoaded).toBe(true);
      expect(store.getDaysLeft).toBe(100);
      expect(store.getTotalInvestors).toBe(50);
      expect(store.getFundingGoal).toBe(100000);
      expect(store.getFundsRaised).toBe(75000);
      expect(store.getMinimumInvestment).toBe(50);
      expect(store.getDeadline).toBe("Dec, 2024");
      expect(store.getTypeOfSecurity).toBe("Equity");
      expect(store.getRevenueShareDuration).toBe(24);
      expect(store.getCategories).toEqual(["Tech"]);
      expect(store.getCompanyName).toBe("Test Company");
      expect(store.getCompanyDescription).toBe("Test description");
      expect(store.getWebsite).toBe("https://test.com");
      expect(store.getLogoSrc).toBe("/img/logo.svg");
      expect(store.getThumbnailSrc).toBe("/img/thumb.svg");
      expect(store.getOfferingTerms).toEqual(partialData.offeringTerms);
      expect(store.getDocuments).toEqual(partialData.documents);
      expect(store.getTeamMembers).toEqual(partialData.teamMembers);
      expect(store.getTeamDescription).toBe(partialData.teamDescription);
    });
  });

  describe("fetchInvestmentsData action", () => {
    it("should fetch data successfully", async () => {
      const mockData: InvestmentBannerData = {
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
          {
            label: "Regulation",
            value: "Regulation Crowdfunding (RegCF)",
          },
        ],
        documents: [
          {
            id: 1,
            title: "Form C",
            filename: "FileName_GoesHere.pdf",
          },
        ],
        teamMembers: [],
        teamDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        marketingPlan:
          "Our comprehensive marketing strategy focuses on digital channels and partnerships.",
        faqItems: [],
      };

      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      const store = useInvestmentStore();

      await store.fetchInvestmentsData();

      expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
      expect(store.loading).toBe(false);
      expect(store.error).toBe(null);
      expect(store.bannerData).toEqual(mockData);
      expect(store.isDataLoaded).toBe(true);
    });

    it("should handle API errors with Error instance", async () => {
      const mockError = new Error("API Error");
      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockRejectedValue(
        mockError
      );

      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const store = useInvestmentStore();

      await store.fetchInvestmentsData();

      expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
      expect(store.loading).toBe(false);
      expect(store.error).toBe("API Error");
      expect(store.bannerData).toBe(null);
      expect(store.isDataLoaded).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error fetching banner data:",
        mockError
      );

      consoleErrorSpy.mockRestore();
    });

    it("should handle API errors with non-Error instance", async () => {
      const mockError = "String error";
      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockRejectedValue(
        mockError
      );

      const consoleErrorSpy = vi
        .spyOn(console, "error")
        .mockImplementation(() => {});

      const store = useInvestmentStore();

      await store.fetchInvestmentsData();

      expect(investmentAPI.fetchInvestmentsData).toHaveBeenCalledTimes(1);
      expect(store.loading).toBe(false);
      expect(store.error).toBe("Failed to fetch investment data");
      expect(store.bannerData).toBe(null);
      expect(store.isDataLoaded).toBe(false);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error fetching banner data:",
        mockError
      );

      consoleErrorSpy.mockRestore();
    });

    it("should set loading state correctly during fetch", async () => {
      const mockData: InvestmentBannerData = {
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
        offeringTerms: [],
        documents: [],
        teamMembers: [],
        teamDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        marketingPlan:
          "Our comprehensive marketing strategy focuses on digital channels and partnerships.",
        faqItems: [],
      };

      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      const store = useInvestmentStore();

      const fetchPromise = store.fetchInvestmentsData();

      expect(store.loading).toBe(true);
      expect(store.error).toBe(null);

      await fetchPromise;

      expect(store.loading).toBe(false);
      expect(store.bannerData).toEqual(mockData);
    });

    it("should clear previous error when starting new fetch", async () => {
      const mockData: InvestmentBannerData = {
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
        offeringTerms: [],
        documents: [],
        teamMembers: [],
        teamDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        marketingPlan:
          "Our comprehensive marketing strategy focuses on digital channels and partnerships.",
        faqItems: [],
      };

      const { investmentAPI } = await import("@/shared/lib/api");
      vi.mocked(investmentAPI.fetchInvestmentsData).mockResolvedValue(mockData);

      const store = useInvestmentStore();
      store.error = "Previous error";

      await store.fetchInvestmentsData();

      expect(store.error).toBe(null);
      expect(store.bannerData).toEqual(mockData);
    });
  });

  describe("clearError action", () => {
    it("should clear error state", () => {
      const store = useInvestmentStore();
      store.error = "Test error";

      store.clearError();

      expect(store.error).toBe(null);
    });

    it("should not affect other state when clearing error", () => {
      const mockData: InvestmentBannerData = {
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
        offeringTerms: [],
        documents: [],
        teamMembers: [],
        teamDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        marketingPlan:
          "Our comprehensive marketing strategy focuses on digital channels and partnerships.",
        faqItems: [],
      };

      const store = useInvestmentStore();
      store.bannerData = mockData;
      store.loading = true;
      store.error = "Test error";

      store.clearError();

      expect(store.error).toBe(null);
      expect(store.bannerData).toEqual(mockData);
      expect(store.loading).toBe(true);
    });
  });

  describe("state mutations", () => {
    it("should allow direct state mutations", () => {
      const store = useInvestmentStore();
      const mockData: InvestmentBannerData = {
        daysLeft: 100,
        totalInvestors: 50,
        fundingGoal: 100000,
        fundsRaised: 75000,
        minimumInvestment: 50,
        deadline: "Dec, 2024",
        typeOfSecurity: "Equity",
        revenueShareDuration: 24,
        categories: ["Tech"],
        companyName: "Test Company",
        companyDescription: "Test description",
        website: "https://test.com",
        logoSrc: "/img/logo.svg",
        thumbnailSrc: "/img/thumb.svg",
        offeringTerms: [],
        documents: [],
        teamMembers: [],
        teamDescription: "Test team description",
        marketingPlan:
          "Our comprehensive marketing strategy focuses on digital channels and partnerships.",
        faqItems: [],
      };

      store.bannerData = mockData;
      store.loading = true;
      store.error = "Test error";

      expect(store.bannerData).toEqual(mockData);
      expect(store.loading).toBe(true);
      expect(store.error).toBe("Test error");
      expect(store.isDataLoaded).toBe(true);
    });
  });
});
