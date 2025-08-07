<template>
  <div class="min-h-screen bg-white pt-[93px] px-40">
    <div class="max-w-7xl mx-auto">
      <div class="flex space-x-6">
        <div class="w-[190px] flex-shrink-0">
          <div class="w-[143px] sticky top-[120px]">
            <nav class="flex flex-col gap-4">
              <a
                v-for="link in navigationLinks"
                :key="link.href"
                :href="link.href"
                class="block text-primary-200 font-hanken-grotesk font-bold text-base leading-5 hover:text-primary-300 transition-colors"
              >
                {{ link.text }}
              </a>
            </nav>
          </div>
        </div>

        <div class="w-[906px] flex-shrink-0">
          <InvestmentCards
            :offering-terms="getOfferingTerms"
            :documents="getDocuments"
            :loading="loading"
          />

          <div class="mt-8">
            <InvestmentTeam />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useInvestmentData } from "../composables";
import { InvestmentCards, InvestmentTeam } from "./";

// Types
interface NavigationLink {
  href: string;
  text: string;
}

const { getOfferingTerms, getDocuments, loadData, loading } =
  useInvestmentData();

const navigationLinks: NavigationLink[] = [
  { href: "#offering-terms", text: "Offering Terms and Documents" },
  { href: "#team", text: "Team" },
  { href: "#marketing-plan", text: "Marketing Plan" },
  { href: "#faq", text: "FAQ" },
];

onMounted(async () => {
  await loadData();
});
</script>
