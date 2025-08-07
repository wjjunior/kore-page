<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary-500 to-primary-200 text-white flex items-center justify-center"
  >
    <div class="text-center">
      <div
        class="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"
      ></div>
      <p class="text-xl font-semibold">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string;
}

withDefaults(defineProps<Props>(), {
  message: "Loading data...",
});
</script>
