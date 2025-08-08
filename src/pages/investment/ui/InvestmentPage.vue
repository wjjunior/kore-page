<template>
  <div>
    <Header active-nav-item="invest" />
    <InvestmentOverview />
    <InvestmentDetails />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import {
  InvestmentOverview,
  InvestmentDetails,
  useInvestmentData,
} from "@/features/investment";

defineOptions({
  name: "InvestmentPage",
});

const { loadData } = useInvestmentData();

onMounted(async () => {
  await loadData();
});
</script>
