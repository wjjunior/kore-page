<template>
  <div>
    <Header active-nav-item="invest" />

    <div v-if="isDataReady">
      <InvestmentOverview
        :investment-data="investmentData"
        :loading="loading"
        :error="errorMessage"
        @retry="refresh"
      />

      <ClientOnly
        fallback-tag="div"
        fallback-class="min-h-[400px] flex items-center justify-center"
      >
        <InvestmentDetails
          :investment-data="investmentData"
          :loading="loading"
        />
      </ClientOnly>
    </div>

    <div
      v-else-if="loading"
      class="min-h-screen w-full bg-gradient-to-br from-primary-500 to-primary-200 flex items-center justify-center"
    >
      <LoadingSpinner />
    </div>

    <div
      v-else-if="errorMessage"
      class="min-h-screen flex items-center justify-center"
    >
      <ErrorMessage :message="errorMessage" @retry="refresh" />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Header } from "@/widgets/header";
import { LoadingSpinner, ErrorMessage } from "@/shared/ui";
import {
  InvestmentOverview,
  InvestmentDetails,
  useInvestmentPageController,
} from "@/features/investment";

defineOptions({ name: "InvestmentPage" });

const { loading, errorMessage, isDataReady, investmentData, refresh } =
  useInvestmentPageController();

const Footer = defineAsyncComponent({
  loader: () => import("@/widgets/footer/ui/Footer.vue"),
  suspensible: false,
});
</script>
