<template>
  <div class="min-h-screen bg-white pt-[93px] px-40">
    <div class="max-w-7xl mx-auto">
      <div class="flex space-x-6">
        <!-- Left Navigation Sidebar -->
        <div class="w-[190px] flex-shrink-0">
          <div class="w-[143px]">
            <nav class="flex flex-col gap-4">
              <a
                href="#offering-terms"
                class="block text-primary-200 font-hanken-grotesk font-bold text-base leading-5 hover:text-primary-300 transition-colors"
              >
                Offering Terms and Documents
              </a>
              <a
                href="#team"
                class="block text-primary-200 font-hanken-grotesk font-bold text-base leading-5 hover:text-primary-300 transition-colors"
              >
                Team
              </a>
              <a
                href="#marketing-plan"
                class="block text-primary-200 font-hanken-grotesk font-bold text-base leading-5 hover:text-primary-300 transition-colors"
              >
                Marketing Plan
              </a>
              <a
                href="#faq"
                class="block text-primary-200 font-hanken-grotesk font-bold text-base leading-5 hover:text-primary-300 transition-colors"
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>

        <!-- Middle Column: Offering Terms -->
        <div class="w-[441px] flex-shrink-0">
          <div
            class="bg-white rounded-lg border border-blue-400 overflow-hidden h-full flex flex-col"
          >
            <div class="p-4 flex-1">
              <div class="border-b border-blue-400 mb-4 pb-4">
                <h2
                  class="text-xl font-bold text-primary-200 font-hanken-grotesk leading-6"
                >
                  Offering Terms
                </h2>
              </div>

              <div class="flex flex-col gap-4">
                <div v-for="term in offeringTerms" :key="term.label">
                  <h3
                    class="text-xs font-medium mb-1 text-primary-200 leading-5"
                  >
                    {{ term.label }}
                  </h3>
                  <p class="font-bold text-base leading-5 text-gray-6">
                    {{ term.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Documents -->
        <div class="w-[441px] flex-shrink-0">
          <div
            class="bg-white rounded-lg border border-blue-400 overflow-hidden h-full flex flex-col"
          >
            <div class="p-4 flex-1">
              <div class="border-b border-blue-400 mb-4 pb-4">
                <h2
                  class="text-xl font-bold text-primary-200 font-hanken-grotesk leading-6"
                >
                  Documents
                </h2>
              </div>

              <div class="flex flex-col gap-4">
                <div v-for="document in documents" :key="document.id">
                  <h3
                    class="text-xs font-medium text-primary-200 mb-2 leading-5 align-middle"
                  >
                    {{ document.title }}:
                  </h3>
                  <div class="flex items-center space-x-2">
                    <FileIcon />
                    <a
                      href="#"
                      class="text-base font-bold text-gray-6 leading-5 align-middle underline underline-offset-4"
                    >
                      {{ document.filename }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FileIcon } from "@/shared/ui";

// Types
interface OfferingTerm {
  label: string;
  value: string;
}

interface Document {
  id: number;
  title: string;
  filename: string;
}

// Data
const offeringTerms = ref<OfferingTerm[]>([
  {
    label: "Regulation",
    value: "Regulation Crowdfunding (RegCF)",
  },
  {
    label: "Offering Type",
    value: "Revenue Sharing Agreement",
  },
  { label: "Security Type", value: "Debt" },
  { label: "Target Offering", value: "$250,000" },
  { label: "Max Offering", value: "$2,000,000" },
  { label: "Min Investment", value: "$100" },
  { label: "Max Investment", value: "$50,000" },
  { label: "Minimum Hold Period", value: "36 months" },
  {
    label: "Closing Date",
    value: "Feb 28, 2025 12:59 AM GMT-3",
  },
]);

const documents = ref<Document[]>([
  { id: 1, title: "Form C", filename: "FileName_GoesHere.pdf" },
  {
    id: 2,
    title: "Custodian and Voting Agreement",
    filename: "FileName_GoesHere.pdf",
  },
  {
    id: 3,
    title: "Future Proof Convertible Note",
    filename: "FileName_GoesHere.pdf",
  },
  {
    id: 4,
    title: "Future Proof Convertible Note",
    filename: "FileName_GoesHere.pdf",
  },
  {
    id: 5,
    title: "Future Proof Convertible Note",
    filename: "FileName_GoesHere.pdf",
  },
]);
</script>
