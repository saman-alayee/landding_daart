<template>
  <button
    :id="id"
    :type="type"
    :disabled="disabled || loading"
    @click="handleClick"
    class="relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out 
           bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl 
           transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300
           overflow-hidden group"
    :style="{ width: width, height: height }"
  >
    <!-- Left Icon Slot -->
    <span v-if="!loading && $slots.leftIcon" class="mr-2 flex items-center">
      <slot name="leftIcon" />
    </span>

    <!-- Loading Spinner -->
    <Loading v-if="loading" />

    <!-- Button Text -->
    <span v-if="!loading" class="mx-2 relative z-10">
      <slot></slot>
    </span>

    <!-- Right Icon Slot -->
    <span v-if="!loading && $slots.rightIcon" class="ml-2 flex items-center">
      <slot name="rightIcon" />
    </span>

    <!-- Glow overlay -->
    <span
      class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500 animate-glow"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Loading from '../loading/loading.vue';

const props = defineProps({
  id: String,
  type: { type: String as () => 'button' | 'submit' | 'reset', default: 'button' },
  width: { type: String, default: 'auto' },
  height: { type: String, default: 'auto' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});

const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<style scoped>
@keyframes glow {
  0% { transform: translateX(-100%); opacity: 0.2; }
  50% { opacity: 0.6; }
  100% { transform: translateX(100%); opacity: 0.2; }
}
.animate-glow {
  animation: glow 2s linear infinite;
}
</style>
