import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useInvestmentStore } from "@/stores";

export function useInvestmentData() {
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
    if (!investmentStore.isDataLoaded) {
      await investmentStore.fetchInvestmentsData();
    }
  };

  const retryLoad = () => {
    investmentStore.fetchInvestmentsData();
  };

  return {
    // State
    loading,
    error,
    isDataReady,

    // Data getters
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
    getTeamMembers,
    getTeamDescription,
    getMarketingPlan,
    getFaqItems,

    // Actions
    loadData,
    retryLoad,
  };
}
