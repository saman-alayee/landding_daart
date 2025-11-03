<template>
  <div class="text-slate-800 gap-2 flex">
    <label class="checkbox_container" :for="computedId">
      <input
        :id="computedId"
        type="checkbox"
        :checked="modelValue"
        @change="updateValue"
        :disabled="disabled"
      />
      <span
        class="checkmark"
        :style="{
          backgroundColor: modelValue ? accentBackgroundColor : 'white',
          borderColor: modelValue ? accentBorderColor : 'var(--color-gray, #ccc)',
          color: modelValue ? accentTextColor : 'inherit'
        }"
      >
        <svg
          v-if="modelValue"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="checkmark-icon"
        >
          <path
            d="M20.292 5.293a1 1 0 00-1.414 0L9 15.17l-3.293-3.292a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l11-11a1 1 0 000-1.414z"
          />
        </svg>
      </span>
    </label>
    <p>{{ label }}</p>
  </div>
</template>


<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  accentBackgroundColor: {
    type: String,
    default: 'var(--color-secondary-25)', // Default background color
  },
  accentBorderColor: {
    type: String,
    default: 'var(--color-secondary-500)', // Default border color
  },
  accentTextColor: {
    type: String,
    default: 'var(--color-secondary-300)', // Default text color
  },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};

const computedId = ref(props.id || `checkbox-${Date.now()}`);
onMounted(() => {
  if (!props.id) {
    computedId.value = `checkbox-${Date.now()}`;
  }
});
</script>


<style scoped>
/* Custom checkbox container */
.checkbox_container {
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  color: var(--color-text, #333);
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the native checkbox */
.checkbox_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkmark box */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 2px solid var(--color-gray, #ccc);
  border-radius: 8px;
  background-color: white;
  transition: background-color 0.2s, border-color 0.2s;
}
</style>

