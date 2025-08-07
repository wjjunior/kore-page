<template>
  <div>
    <h2
      class="font-hanken-grotesk font-bold text-[32px] leading-[100%] tracking-[1%] text-primary-200 mb-6"
    >
      FAQ
    </h2>

    <div v-if="loading" class="space-y-4">
      <div v-for="i in 4" :key="i" class="animate-pulse">
        <div class="h-12 bg-gray-200 rounded border border-primary-200"></div>
      </div>
    </div>

    <div v-else class="flex flex-col gap-2">
      <AccordionItem
        v-for="(item, index) in faqItems"
        :key="item.id"
        :title="item.question"
        :content="item.answer"
        :is-open="openItems[index]"
        @toggle="toggleAccordion(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { AccordionItem } from "@/shared/ui";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface InvestmentFaqProps {
  loading?: boolean;
  faqItems?: FaqItem[];
}

withDefaults(defineProps<InvestmentFaqProps>(), {
  loading: false,
  faqItems: () => [
    {
      id: "faq-1",
      question: "Lorem ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq-2",
      question: "Lorem ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq-3",
      question: "Lorem ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "faq-4",
      question: "Lorem ipsum",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
});

const openItems = ref<Record<number, boolean>>({});

const toggleAccordion = (index: number) => {
  openItems.value[index] = !openItems.value[index];
};
</script>
