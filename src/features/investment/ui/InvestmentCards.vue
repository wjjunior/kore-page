<template>
  <div class="flex space-x-6">
    <div class="w-[441px] flex-shrink-0">
      <div
        class="bg-white rounded-lg border border-blue-400 overflow-hidden h-full"
      >
        <div class="p-4">
          <div class="border-b border-blue-400 mb-4 pb-4">
            <h2
              class="text-xl font-bold text-primary-200 font-hanken-grotesk leading-6"
            >
              Offering Terms
            </h2>
          </div>

          <div v-if="loading" class="flex flex-col gap-4">
            <div v-for="i in 5" :key="i" class="animate-pulse">
              <div class="h-3 bg-gray-200 rounded mb-1 w-24"></div>
              <div class="h-4 bg-gray-300 rounded w-48"></div>
            </div>
          </div>

          <div v-else class="flex flex-col gap-4">
            <div v-for="term in offeringTerms" :key="term.label">
              <h3 class="text-xs font-medium mb-1 text-primary-200 leading-5">
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

    <div class="w-[441px] flex-shrink-0">
      <div
        class="bg-white rounded-lg border border-blue-400 overflow-hidden h-full"
      >
        <div class="p-4">
          <div class="border-b border-blue-400 mb-4 pb-4">
            <h2
              class="text-xl font-bold text-primary-200 font-hanken-grotesk leading-6"
            >
              Documents
            </h2>
          </div>

          <div v-if="loading" class="flex flex-col gap-4">
            <div v-for="i in 5" :key="i" class="animate-pulse">
              <div class="h-3 bg-gray-200 rounded mb-2 w-32"></div>
              <div class="flex items-center space-x-2">
                <div class="w-4 h-4 bg-gray-200 rounded"></div>
                <div class="h-4 bg-gray-300 rounded w-40"></div>
              </div>
            </div>
          </div>

          <div v-else class="flex flex-col gap-4">
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
</template>

<script setup lang="ts">
import { FileIcon } from "@/shared/ui";
import type { OfferingTerm, Document } from "@/shared/lib/types";

interface Props {
  offeringTerms: OfferingTerm[];
  documents: Document[];
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  loading: false,
});
</script>
