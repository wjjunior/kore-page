<template>
  <div>
    <Header active-nav-item="invest" />
    <InvestmentOverview />
    <div
      class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"
    >
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">
          Investment Page
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Header } from "@/widgets/header";
import InvestmentOverview from "@/features/investment/ui/InvestmentOverview.vue";
import { useInvestmentData } from "@/features/investment";

defineOptions({
  name: "InvestmentPage",
});

const { loadData } = useInvestmentData();

onMounted(async () => {
  await loadData();
});
</script>
