import { useInvestmentStore } from "@/app";
import type { InvestmentBannerData } from "@/shared/lib/types";
import { computed, watch } from "vue";
import { useInvestmentDataSSR, useInvestmentData } from "../composables";
import { extractErrorMessage } from "@/shared/lib/helpers";

export function getDefaultInvestmentData(): InvestmentBannerData {
  return {
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
  };
}

export function mapClientInvestmentData(
  getters: Record<string, any>
): InvestmentBannerData {
  return {
    daysLeft: getters.getDaysLeft.value,
    totalInvestors: getters.getTotalInvestors.value,
    fundingGoal: getters.getFundingGoal.value,
    fundsRaised: getters.getFundsRaised.value,
    minimumInvestment: getters.getMinimumInvestment.value,
    deadline: getters.getDeadline.value,
    typeOfSecurity: getters.getTypeOfSecurity.value,
    revenueShareDuration: getters.getRevenueShareDuration.value,
    categories: getters.getCategories.value,
    companyName: getters.getCompanyName.value,
    companyDescription: getters.getCompanyDescription.value,
    website: getters.getWebsite.value,
    logoSrc: getters.getLogoSrc.value,
    thumbnailSrc: getters.getThumbnailSrc.value,
    offeringTerms: getters.getOfferingTerms.value,
    documents: getters.getDocuments.value,
    teamMembers: getters.getTeamMembers.value,
    teamDescription: getters.getTeamDescription.value,
    marketingPlan: getters.getMarketingPlan.value,
    faqItems: getters.getFaqItems.value,
  };
}

export function useInvestmentPageController() {
  // SSR source
  const {
    loading: ssrLoading,
    error: ssrError,
    isDataReady: ssrIsDataReady,
    refresh: ssrRefresh,
    investmentInfo: ssrInvestmentInfo,
  } = useInvestmentDataSSR();

  // Client fallback
  const {
    loading: clientLoading,
    error: clientError,
    isDataReady: clientIsDataReady,
    loadData: clientLoadData,
    retryLoad: clientRetryLoad,
    ...clientGetters
  } = useInvestmentData();

  const useClientData = computed(() => ssrError.value !== null);

  const loading = computed(() =>
    useClientData.value ? clientLoading.value : ssrLoading.value
  );

  const error = computed(() =>
    useClientData.value ? clientError.value : ssrError.value
  );

  const isDataReady = computed(() =>
    useClientData.value ? clientIsDataReady.value : ssrIsDataReady.value
  );

  const investmentData = computed<InvestmentBannerData>(() => {
    if (useClientData.value) {
      return mapClientInvestmentData(clientGetters);
    }
    return ssrInvestmentInfo.value ?? getDefaultInvestmentData();
  });

  const errorMessage = computed(() => extractErrorMessage(error.value));

  const refresh = () => {
    if (useClientData.value) {
      clientRetryLoad();
    } else {
      ssrRefresh();
    }
  };

  const investmentStore = useInvestmentStore();
  watch(
    () => ssrIsDataReady.value,
    (ready) => {
      if (ready && !ssrError.value && !investmentStore.isDataLoaded) {
        investmentStore.bannerData = ssrInvestmentInfo.value!;
      }
    },
    { immediate: true }
  );

  // Trigger client fallback when SSR fails
  watch(
    () => ssrError.value,
    (err) => {
      if (err !== null) {
        clientLoadData();
      }
    },
    { immediate: false }
  );

  return {
    loading,
    errorMessage,
    isDataReady,
    investmentData,
    refresh,
  };
}
