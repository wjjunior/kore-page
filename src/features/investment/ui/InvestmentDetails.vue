<template>
  <div class="min-h-screen bg-white pt-[93px] px-40 mb-[137px]">
    <div class="max-w-7xl mx-auto">
      <div class="flex space-x-6">
        <div class="w-[190px] flex-shrink-0">
          <div class="w-[143px] sticky top-[120px]">
            <nav class="flex flex-col gap-4">
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

        <div class="w-[906px] flex-shrink-0">
          <div id="offering-terms" ref="offeringTermsRef">
            <InvestmentCards
              :offering-terms="getOfferingTerms"
              :documents="getDocuments"
              :loading="loading"
            />
          </div>

          <div id="team" class="mt-10" ref="teamRef">
            <InvestmentTeam
              :team-members="getTeamMembers"
              :team-description="getTeamDescription"
              :loading="loading"
            />
          </div>

          <div id="marketing-plan" class="mt-10" ref="marketingPlanRef">
            <InvestmentMarketingPlan
              :marketing-plan="getMarketingPlan"
              :loading="loading"
            />
          </div>

          <div id="faq" class="mt-10" ref="faqRef">
            <InvestmentFaq :loading="loading" :faq-items="getFaqItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useInvestmentData } from "../composables";
import { scrollToSection } from "@/shared/lib";
import {
  InvestmentCards,
  InvestmentTeam,
  InvestmentMarketingPlan,
  InvestmentFaq,
} from "./";

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

const {
  getOfferingTerms,
  getDocuments,
  getTeamMembers,
  getTeamDescription,
  getMarketingPlan,
  getFaqItems,
  loadData,
  loading,
} = useInvestmentData();

const sectionMap = {
  "#offering-terms": offeringTermsRef,
  "#team": teamRef,
  "#marketing-plan": marketingPlanRef,
  "#faq": faqRef,
};

const handleScrollToSection = (href: string) => {
  scrollToSection(href, sectionMap);
};

onMounted(async () => {
  await loadData();
});
</script>
