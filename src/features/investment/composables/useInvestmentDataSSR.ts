import { computed } from "vue";
import { investmentAPI } from "@/shared/lib/api";
import type { InvestmentBannerData } from "@/shared/lib/types";
import { useAsyncData, useState } from "nuxt/app";

export function useInvestmentDataSSR() {
  const investmentData = useState<InvestmentBannerData | null>(
    "investment-data",
    () => null
  );

  const {
    pending: loading,
    error,
    refresh,
  } = useAsyncData(
    "fetch-investment-data",
    async () => {
      if (investmentData.value) return investmentData.value;

      const data = await investmentAPI.fetchInvestmentsData();
      investmentData.value = data;
      return data;
    },
    {
      server: true,
      lazy: false,
      default: () => investmentData.value,
    }
  );

  const isDataReady = computed(
    () => investmentData.value !== null && !loading.value && !error.value
  );

  const investmentInfo = computed(() => {
    const data = investmentData.value;
    return {
      daysLeft: data?.daysLeft ?? 0,
      totalInvestors: data?.totalInvestors ?? 0,
      fundingGoal: data?.fundingGoal ?? 0,
      fundsRaised: data?.fundsRaised ?? 0,
      minimumInvestment: data?.minimumInvestment ?? 0,
      deadline: data?.deadline ?? "",
      typeOfSecurity: data?.typeOfSecurity ?? "",
      revenueShareDuration: data?.revenueShareDuration ?? 0,
      categories: data?.categories ?? [],
      companyName: data?.companyName ?? "",
      companyDescription: data?.companyDescription ?? "",
      website: data?.website ?? "",
      offeringTerms: data?.offeringTerms ?? [],
      documents: data?.documents ?? [],
      teamMembers: data?.teamMembers ?? [],
      teamDescription: data?.teamDescription ?? "",
      marketingPlan: data?.marketingPlan ?? "",
      faqItems: data?.faqItems ?? [],
    };
  });

  return {
    loading,
    error,
    isDataReady,
    investmentData,
    investmentInfo,
    refresh,
  };
}
