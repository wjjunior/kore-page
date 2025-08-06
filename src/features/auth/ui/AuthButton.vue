<template>
  <button
    @click="$emit('click')"
    :class="[
      'font-bold leading-[120%] text-center transition-all duration-200 flex items-center justify-center',
      isMobile
        ? variant === 'login'
          ? 'w-full h-[46px] p-3 border-2 border-primary-200 text-primary-200 rounded-button hover:bg-primary-200 hover:text-white bg-white'
          : 'w-full h-[46px] pt-3 pr-[14px] pb-3 pl-[14px] bg-primary-200 rounded-button text-white'
        : variant === 'login'
        ? 'w-[68px] h-[46px] p-3 border-2 border-primary-200 text-primary-200 rounded-button hover:bg-primary-200 hover:text-white bg-white'
        : 'w-[90px] h-[46px] pt-3 pr-[14px] pb-3 pl-[14px] bg-primary-200 rounded-button text-white',
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: "login" | "signup";
  isMobile?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "login",
  isMobile: false,
});

defineEmits<{
  click: [];
}>();
</script> 