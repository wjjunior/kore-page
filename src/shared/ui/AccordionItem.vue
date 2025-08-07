<template>
  <div
    class="border border-primary-200 rounded-lg bg-white p-4 cursor-pointer hover:bg-gray-50 transition-colors"
    @click="$emit('toggle')"
  >
    <div class="flex items-center justify-between">
      <span class="font-hanken-grotesk text-primary-200 text-base">
        {{ title }}
      </span>
      <FontAwesomeIcon
        :icon="faChevronDown"
        class="text-primary-200 transition-transform w-[12.53px] h-[22.2px] mr-5"
        :class="{ 'rotate-180': props.isOpen }"
      />
    </div>
    <div v-if="props.isOpen" class="mt-4 pt-4 border-t border-gray-200">
      <p class="text-gray-700 text-sm leading-relaxed">
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
