<template>
  <a :href="href" :class="[isMobile ? mobileNavLinkClasses : navLinkClasses]">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  href: string;
  isActive?: boolean;
  isMobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false,
  isMobile: false,
});

const navLinkClasses = computed(() => {
  const baseClasses =
    "font-medium transition-colors duration-200 h-full flex items-center";
  const activeClasses = "text-primary-200 border-b-2 border-primary-200";
  const inactiveClasses = "text-primary-200 hover:text-blue-800";

  return `${baseClasses} ${props.isActive ? activeClasses : inactiveClasses}`;
});

const mobileNavLinkClasses = computed(() => {
  const baseClasses =
    "px-3 py-2 font-medium transition-colors duration-200 h-12 flex items-center";
  const activeClasses =
    "text-primary-200 border-l-2 border-primary-200 bg-blue-50";
  const inactiveClasses = "text-primary-200 hover:text-blue-800";

  return `${baseClasses} ${props.isActive ? activeClasses : inactiveClasses}`;
});
</script> 