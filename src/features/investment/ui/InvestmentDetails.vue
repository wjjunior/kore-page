<template>
  <div
    class="bg-white pt-6 pb-10 sm:pt-8 sm:pb-12 md:pt-10 md:pb-14 lg:pt-[93px] lg:pb-[137px]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div class="w-full lg:w-[280px] lg:flex-shrink-0">
          <div class="sticky top-8">
            <nav class="space-y-2">
              <button
                v-for="link in navigationLinks"
                :key="link.href"
                @click="handleScrollToSection(link.href)"
                class="block text-left text-primary-200 font-hanken-grotesk font-bold text-base leading-5 hover:text-primary-300 transition-colors cursor-pointer"
              >
                {{ link.text }}
              </button>
            </nav>
          </div>
        </div>

        <div class="w-full lg:w-[906px] lg:flex-shrink-0">
          <div id="offering-terms" ref="offeringTermsRef">
            <InvestmentCards
              :offering-terms="investmentData.offeringTerms"
              :documents="investmentData.documents"
              :loading="loading"
            />
          </div>

          <div id="team" class="mt-10" ref="teamRef">
            <InvestmentTeam
              :team-members="investmentData.teamMembers"
              :team-description="investmentData.teamDescription"
              :loading="loading"
            />
          </div>

          <div id="marketing-plan" class="mt-10" ref="marketingPlanRef">
            <InvestmentMarketingPlan
              :marketing-plan="investmentData.marketingPlan"
              :loading="loading"
            />
          </div>

          <div id="faq" class="mt-10" ref="faqRef">
            <InvestmentFaq
              :loading="loading"
              :faq-items="investmentData.faqItems"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { scrollToSection } from "@/shared/lib";
import {
  InvestmentCards,
  InvestmentTeam,
  InvestmentMarketingPlan,
  InvestmentFaq,
} from "./";
import type { InvestmentBannerData } from "@/shared/lib/types";

interface Props {
  investmentData: InvestmentBannerData;
  loading: boolean;
}

defineProps<Props>();

const offeringTermsRef = ref<HTMLElement | null>(null);
const teamRef = ref<HTMLElement | null>(null);
const marketingPlanRef = ref<HTMLElement | null>(null);
const faqRef = ref<HTMLElement | null>(null);

const navigationLinks = [
  { href: "#offering-terms", text: "Offering Terms and Documents" },
  { href: "#team", text: "Team" },
  { href: "#marketing-plan", text: "Marketing Plan" },
  { href: "#faq", text: "FAQ" },
];

const sectionMap = {
  "#offering-terms": offeringTermsRef,
  "#team": teamRef,
  "#marketing-plan": marketingPlanRef,
  "#faq": faqRef,
};

const handleScrollToSection = (href: string) => {
  scrollToSection(href, sectionMap);
};

onMounted(() => {});
</script>
