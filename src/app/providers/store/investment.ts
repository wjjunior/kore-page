import { defineStore } from "pinia";
import type { InvestmentBannerData } from "@/shared/lib/types";
import { investmentAPI } from "@/shared/lib/api";

interface InvestmentState {
  bannerData: InvestmentBannerData | null;
  loading: boolean;
  error: string | null;
}

export const useInvestmentStore = defineStore("investment", {
  state: (): InvestmentState => ({
    bannerData: null,
    loading: false,
    error: null,
  }),

  getters: {
    isDataLoaded: (state) => state.bannerData !== null,
    getDaysLeft: (state) => state.bannerData?.daysLeft ?? 0,
    getTotalInvestors: (state) => state.bannerData?.totalInvestors ?? 0,
    getFundingGoal: (state) => state.bannerData?.fundingGoal ?? 0,
    getFundsRaised: (state) => state.bannerData?.fundsRaised ?? 0,
    getMinimumInvestment: (state) => state.bannerData?.minimumInvestment ?? 0,
    getDeadline: (state) => state.bannerData?.deadline ?? "",
    getTypeOfSecurity: (state) => state.bannerData?.typeOfSecurity ?? "",
    getRevenueShareDuration: (state) =>
      state.bannerData?.revenueShareDuration ?? 0,
    getCategories: (state) => state.bannerData?.categories ?? [],
    getCompanyName: (state) => state.bannerData?.companyName ?? "",
    getCompanyDescription: (state) =>
      state.bannerData?.companyDescription ?? "",
    getWebsite: (state) => state.bannerData?.website ?? "",
    getOfferingTerms: (state) => state.bannerData?.offeringTerms ?? [],
    getDocuments: (state) => state.bannerData?.documents ?? [],
    getTeamMembers: (state) => state.bannerData?.teamMembers ?? [],
    getTeamDescription: (state) => state.bannerData?.teamDescription ?? "",
    getMarketingPlan: (state) => state.bannerData?.marketingPlan ?? "",
    getFaqItems: (state) => state.bannerData?.faqItems ?? [],
  },

  actions: {
    async fetchInvestmentsData() {
      this.loading = true;
      this.error = null;

      try {
        const data = await investmentAPI.fetchInvestmentsData();
        this.bannerData = data;
      } catch (error) {
        this.error =
          error instanceof Error
            ? error.message
            : "Failed to fetch investment data";
        console.error("Error fetching banner data:", error);
      } finally {
        this.loading = false;
      }
    },

    clearError() {
      this.error = null;
    },
  },
});
