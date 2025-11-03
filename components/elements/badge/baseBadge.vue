<template>
  <div class="base-badge text-xs font-medium px-4 py-1"
    :style="{ backgroundColor: computedBackgroundColor, color: computedTextColor, width: computedWidth }">
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: {
    type: [String, Number, Boolean, Array, Object, Date],
    default: '',
  },
  color: {
    type: String,
    default: '', // Fallback color for text
  },
  backgroundColor: {
    type: String,
    default: '', // Fallback background color
  },
  width: {
    type: [String, Number],
    default: '', // Accepts width as a string (e.g., "100px") or number (e.g., 100)
  },
});

const computedBackgroundColor = computed(() => props.backgroundColor || 'var(--color-success-50)');
const computedTextColor = computed(() => props.color || 'var(--color-success-700)');
const computedWidth = computed(() => {
  if (typeof props.width === 'number') {
    return `${props.width}px`; // Convert number to a valid CSS width value
  }
  return props.width || 'auto'; // Use the width prop or fallback to 'auto'
});
</script>

<style scoped>
.base-badge {
  text-align: center;
  border-radius: 24px;
}
</style>
