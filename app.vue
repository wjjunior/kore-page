<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Kore" },
  ],
});
</script>
