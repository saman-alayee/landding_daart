<template>
  <button :id="id" class="mt-4 text-sm flex items-center justify-center" :type="type" :disabled="disabled || loading"
    @click="handleClick" :style="buttonStyle">
    <!-- Left Icon Slot -->
    <span :id="id" v-if="!loading && $slots.leftIcon" class="flex items-center">
      <slot name="leftIcon" />
    </span>

    <!-- Loading Spinner -->
    <Loading v-if="loading" />

    <!-- Button Text -->
    <span :id="id" v-if="!loading" class="mx-2">
      <slot></slot>
    </span>

    <!-- Right Icon Slot -->
    <span :id="id" v-if="!loading && $slots.rightIcon" class="flex items-center">
      <slot name="rightIcon" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';
import Loading from '../loading/loading.vue';

const props = defineProps({
    id: {
    type: String,
    default: '', 
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  width: {
    type: String,
    default: 'auto',
  },
  height: {
    type: String,
    default: 'auto', // Default height
  },
  backgroundColor: {
    type: String,
    default: '#38a2ff',
  },
  colorText: {
    type: String,
    default: 'var(--color-base-white)',
  },
  hoverBackgroundColor: {
    type: String,
    default: 'var(--color-primary-700)',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const buttonStyle = computed(() => ({
  width: props.width,
  height: props.height,
  backgroundColor: props.backgroundColor,
  color: props.colorText,
  '--hover-background-color': props.hoverBackgroundColor,
}));

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
button {
  padding: 14px 24px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border: solid 1px var(--color-gray-300);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  
}

button:hover {
  background-color: var(--hover-background-color) !important;
  /* Use the dynamic hover color */
  color: var(--color-base-white) !important;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>