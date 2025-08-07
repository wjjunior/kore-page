<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center"
  >
    <div class="text-center">
      <p class="text-lg mb-4">{{ title }}</p>
      <p class="text-sm mb-4">{{ message }}</p>
      <button
        v-if="showRetryButton"
        @click="$emit('retry')"
        class="bg-white text-primary-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        {{ retryButtonText }}
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
