<template>
  <div
    class="border border-primary-200 rounded-lg bg-white p-3 md:p-4 cursor-pointer hover:bg-gray-50 transition-colors"
    @click="$emit('toggle')"
  >
    <div class="flex items-center justify-between">
      <span
        class="font-hanken-grotesk text-primary-200 text-sm md:text-base pr-2 flex-1"
      >
        {{ title }}
      </span>
      <FontAwesomeIcon
        :icon="faChevronDown"
        class="text-primary-200 transition-transform w-3 h-3 md:w-[12.53px] md:h-[22.2px] flex-shrink-0"
        :class="{ 'rotate-180': props.isOpen }"
      />
    </div>
    <div
      v-if="props.isOpen"
      class="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-200"
    >
      <p class="text-gray-700 text-sm leading-relaxed break-words">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

defineOptions({
  name: "AccordionItem",
});

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
}

const props = withDefaults(defineProps<AccordionItemProps>(), {
  isOpen: false,
});

defineEmits<{
  toggle: [];
}>();
</script>
