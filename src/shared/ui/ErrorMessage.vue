<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary-500 to-primary-200 text-white flex items-center justify-center"
  >
    <div class="text-center">
      <div class="text-6xl mb-4">⚠️</div>
      <h1 class="text-2xl font-bold mb-2">{{ title }}</h1>
      <p class="text-lg mb-6">{{ message }}</p>
      <button
        @click="$emit('retry')"
        class="bg-white text-primary-200 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  message?: string;
  showRetryButton?: boolean;
  retryButtonText?: string;
}

interface Emits {
  retry: [];
}

defineEmits<Emits>();

withDefaults(defineProps<Props>(), {
  title: "Error loading data",
  message: "An error occurred while loading the data",
  showRetryButton: true,
  retryButtonText: "Try again",
});
</script>
