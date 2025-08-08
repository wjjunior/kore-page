import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useInvestmentStore } from "@/app/providers/store/investment";

export function useInvestmentData(ssrDataAvailable = false) {
  const investmentStore = useInvestmentStore();

  const {
    loading,
    error,
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
    getLogoSrc,
    getThumbnailSrc,
    getOfferingTerms,
    getDocuments,
    getTeamMembers,
    getTeamDescription,
    getMarketingPlan,
    getFaqItems,
  } = storeToRefs(investmentStore);

  const isDataReady = computed(
    () => investmentStore.isDataLoaded && !loading.value && !error.value
  );

  const loadData = async () => {
    // Only load data if SSR data is not available and store data is not loaded
    if (!ssrDataAvailable && !investmentStore.isDataLoaded) {
      await investmentStore.fetchInvestmentsData();
    }
  };

  const retryLoad = () => {
    investmentStore.fetchInvestmentsData();
  };

  return {
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
    getLogoSrc,
    getThumbnailSrc,
    getOfferingTerms,
    getDocuments,
    getTeamMembers,
    getTeamDescription,
    getMarketingPlan,
    getFaqItems,
    loadData,
    retryLoad,
  };
}
