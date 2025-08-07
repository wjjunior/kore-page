<template>
  <div>
    <Header active-nav-item="invest" />
    <InvestmentOverview />
    <InvestmentDetails />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Header } from "@/widgets/header";
import InvestmentOverview from "@/features/investment/ui/InvestmentOverview.vue";
import InvestmentDetails from "@/features/investment/ui/InvestmentDetails.vue";
import { useInvestmentData } from "@/features/investment";

defineOptions({
  name: "InvestmentPage",
});

const { loadData } = useInvestmentData();

onMounted(async () => {
  await loadData();
});
</script>
