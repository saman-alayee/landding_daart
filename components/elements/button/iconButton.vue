<template>
  <button
    class="flex items-center justify-center relative group"
    :class="[{ 'border border-gray-300': border }]"
    :type="type"
    :disabled="disabled || loading"
    @click="handleClick"
    :style="{ width: computedWidth, backgroundColor: currentBgColor, transition: 'background-color 0.2s' }"
    @mouseenter="hoverActive = true"
    @mouseleave="hoverActive = false"
  >
    <!-- Tooltip -->
    <span
      v-if="tooltip"
      class="absolute w-max mt-20 px-2 py-2 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity"
    >
      {{ tooltip }}
    </span>

    <!-- Left icon slot -->
    <span v-if="!loading && !$slots.default" class="flex items-center">
      <slot name="leftIcon" />
    </span>

    <!-- Loading -->
    <Loading v-if="loading" />

    <!-- Default slot -->
    <span v-if="!loading && $slots.default" class="mx-2">
      <slot></slot>
    </span>

    <!-- Right icon slot -->
    <span v-if="!loading && !$slots.default && $slots.rightIcon" class="flex items-center">
      <slot name="rightIcon" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue';
import Loading from '../loading/loading.vue';

const props = defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  width: {
    type: String,
    default: 'auto',
  },
  backgroundColor: {
    type: String,
    default: '', // default
  },
  hoverBackgroundColor: {
    type: String,
    default: 'var(--color-gray-100)', // configurable hover color
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
    default: '',
  },
  border: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);
const hoverActive = ref(false);

const computedWidth = computed(() => props.width);

// Compute background color based on hover state
const currentBgColor = computed(() =>
  hoverActive.value ? props.hoverBackgroundColor : props.backgroundColor
);

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
button {
  padding: 6px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: relative;
}

.group:hover .absolute {
  opacity: 1;
}

.absolute {
  transition: opacity 0.2s ease-in-out;
}
</style>
