<template>
  <div>
    <h2
      class="font-hanken-grotesk font-bold text-2xl md:text-3xl lg:text-[30px] xl:text-[32px] leading-[100%] tracking-[1%] text-primary-200 mb-6"
    >
      Performance Marketing Plan
    </h2>

    <div v-if="loading" class="space-y-8">
      <div v-for="i in 3" :key="i" class="animate-pulse">
        <div
          class="h-6 md:h-7 lg:h-[30px] xl:h-8 bg-gray-200 rounded mb-4 w-32 md:w-40 lg:w-44 xl:w-48"
        ></div>
        <div class="space-y-3">
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div
            class="h-4 bg-gray-200 rounded"
            :class="i === 1 ? 'w-3/4' : i === 2 ? 'w-full' : 'w-4/5'"
          ></div>
          <div
            v-if="i > 1"
            class="h-4 bg-gray-200 rounded"
            :class="i === 2 ? 'w-5/6' : 'w-3/4'"
          ></div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="flex flex-col gap-6 max-w-full lg:max-w-3xl xl:max-w-4xl"
    >
      <div
        v-html="sanitizedMarketingPlan"
        class="prose prose-sm md:prose prose-gray max-w-none break-words"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DOMPurify from "dompurify";
import { computed } from "vue";

defineOptions({
  name: "InvestmentMarketingPlan",
});

interface InvestmentMarketingPlanProps {
  loading?: boolean;
  marketingPlan?: string;
}

const props = withDefaults(defineProps<InvestmentMarketingPlanProps>(), {
  loading: false,
  marketingPlan: "",
});

const sanitizedMarketingPlan = computed(() =>
  DOMPurify.sanitize(props.marketingPlan ?? "")
);
</script>
