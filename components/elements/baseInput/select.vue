<template>
  <div class="dropdown flex flex-col relative mt-2 mb-2" ref="dropdown">
    <label v-if="label" class="input-label font-medium">
      {{ label }}
      <span v-if="requireText" class="text-red-500">{{ requireText }}</span>
       <!-- Help icon with tooltip on hover -->
      <div v-if="helpText" class="relative group inline-block  ml-1">
        <img class="w-4 cursor-pointer" src="/assets/icon/Icon-help.svg" alt="help icon" />

        <!-- Tooltip / Popup -->
        <div
          class="absolute z-1000 hidden group-hover:block bg-gray-900 text-white text-xs rounded p-1.5 shadow-md w-max max-w-xs top-full mt-1 left-1/2 -translate-x-1/2">
          {{ helpText }}
        </div>
      </div>
    </label>
    <div class="dropdown__wrapper relative" :class="{ 'dropdown-disabled': disabled }">
      <div class="dropdown__selected w-full"
        :class="['input-field', { 'input-error': error, 'input-disabled': disabled }]" @click="toggleDropdown">
        {{ selectedLabel }}
        <span class="dropdown__icon flex item-center" :class="{ open: isOpen }">
          <img src="/assets/icon/chevron-down.svg" alt="" />
        </span>
      </div>

      <div v-if="isOpen && !disabled" class="dropdown__menu">
        <div v-for="option in options" :key="option.value" class="dropdown__item flex justify-between" @click="selectOption(option)">
          <div>
            {{ option.label }}
          </div>
          <div v-if="color" class="ml-2 w-6 h-6 rounded-full border" :style="{ backgroundColor: option.value }"></div>

        </div>

      </div>
    </div>

    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch, onMounted, onBeforeUnmount } from "vue";

interface Option {
  label: string;
  value: string | number;
}

const props = defineProps<{
  modelValue: string | number | null;
  options: Option[];
  label?: string;
  placeholder?: string;
  error?: string;
  requireText?: string;
  disabled?: boolean;
  color?: boolean;
  helpText?: String;
}>();

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedLabel = ref(props.placeholder || "انتخاب کنید...");
const dropdown = ref<HTMLElement | null>(null);

watch(
  () => props.modelValue,
  (newValue) => {
    const selectedOption = props.options.find((o) => o.value === newValue);
    selectedLabel.value = selectedOption?.label || props.placeholder || "انتخاب کنید...";
  },
  { immediate: true }
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: Option) => {
  emit("update:modelValue", option.value);
  isOpen.value = false;
};

const closeDropdown = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
.dropdown {
  color: var(--color-base-black);
}

.dropdown__selected {
  padding: 10px 10px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border: solid 1px var(--color-gray-300);
  background-color: var(--color-base-white);
  color: var(--color-gray-900);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.dropdown-disabled .dropdown__selected {
  background-color: var(--color-gray-100);
  cursor: not-allowed;
  color: var(--color-gray-500);
}

.input-disabled {
  background-color: var(--color-gray-100);
  cursor: not-allowed;
  color: var(--color-gray-500);
}

.dropdown__custom-icon {
  width: 1rem;
  height: 1rem;
}

.dropdown__icon.open {
  transform: rotate(180deg);
}

.dropdown__menu {
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 10rem;
  overflow-y: auto;
}

.dropdown__item {
  padding: 0.5rem;
  cursor: pointer;
  margin: 0.3rem;
}

.dropdown__item:hover {
  background-color: var(--color-gray-50);
  border-radius: 8px;
}

.dropdown__icon {
  transition: transform 0.2s ease-in-out;
}
.z-1000 {
  z-index: 1000;
}
</style>
