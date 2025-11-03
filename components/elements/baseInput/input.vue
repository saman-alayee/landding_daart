<template>
  <div class="input-group mt-2 mb-2" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">

    <label v-if="label" :for="computedId"
      :class="['text-sm font-xs', $i18n.locale === 'ar' ? 'text-right' : 'text-left']">
      {{ label }}
      <span v-if="requireText" class="text-red-500">{{ requireText }}</span>

      <!-- Help icon -->
      <div v-if="helpText" class="relative group inline-block" :class="$i18n.locale === 'ar' ? 'mr-1' : 'ml-1'">
        <img class="w-4 cursor-pointer" src="/assets/image/Icon-help.svg" alt="help icon" />

        <div
          class="absolute z-1000 hidden group-hover:block bg-gray-900 text-white text-xs rounded p-1.5 shadow-md w-max max-w-xs top-full"
          :class="$i18n.locale === 'ar' ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'">
          {{ helpText }}
        </div>
      </div>
    </label>

    <div class="input-wrapper">
      <slot name="icon">
        <img v-if="iconSrc" :src="iconSrc" alt="Input Icon" class="input-icon-input" />
      </slot>

      <template v-if="type === 'color'">
        <div class="color-picker-container">
          <input :id="computedId" type="text" :placeholder="placeholder" :value="modelValue" @input="updateValue"
            :maxlength="maxLength"
            :class="['input-field color-input-text', { 'input-error': error, 'input-disabled': disabled }]"
            :style="{ height: height, width: width }" :disabled="disabled" />
          <div class="color-picker-wrapper">
            <input type="color" :value="modelValue" @input="handleColorPickerChange" class="color-picker" />
            <div class="color-preview" :style="{ backgroundColor: modelValue }" @click="openColorPicker"></div>
          </div>
        </div>
      </template>

      <template v-else-if="type !== 'textarea'">
        <input :id="computedId" :type="type" :placeholder="placeholder" :value="modelValue" @input="updateValue"
          :maxlength="maxLength" :class="['input-field', { 'input-error': error, 'input-disabled': disabled }]"
          :style="{ height: height, width: width }" :disabled="disabled" />
      </template>
      <template v-else>
        <textarea :id="computedId" :placeholder="placeholder" :value="modelValue" @input="updateValue"
          :maxlength="maxLength" :disabled="disabled"
          :class="['textarea-field', { 'input-error': error, 'input-disabled': disabled }]"
          :style="{ height: height }" />
      </template>
    </div>

    <p class="text-slate-600 mt-2 text-xs">{{ subtitle }}</p>
    <p v-if="maxLength" class="text-gray-500 text-xs mt-1">{{ charCount }}/{{ maxLength }}</p>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue';

const props = defineProps({
  label: String,
  value: String,
  height: {
    type: String,
    default: '' // Optional: fallback height like '40px'
  },
  width: {
    type: String,
    default: '' // Optional: fallback height like '40px'
  },
  iconSrc: {
    type: String,
    default: ''
  },
  modelValue: String,
  subtitle: String,
  placeholder: String,
  requireText: String,
  type: {
    type: String,
    default: 'text',
  },
  helpText: {
    type: String,
    default: ''
  },

  id: String,
  error: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  maxLength: String || Number,
});

const emit = defineEmits(['update:modelValue']);

const computedId = computed(() => props.id || `input-${props.label?.replace(/\s+/g, '-').toLowerCase() || 'default'}`);

const charCount = ref(props.modelValue?.length || 0);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  charCount.value = target.value.length;
  emit('update:modelValue', target.value);
};

const handleColorPickerChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const openColorPicker = () => {
  if (!props.disabled) {
    const colorInput = document.querySelector(`#${computedId.value} + .color-picker-wrapper input[type="color"]`) as HTMLInputElement;
    colorInput?.click();
  }
};
</script>

<style scoped>
.input-field,
.textarea-field {
  padding: 10px 10px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border: solid 1px var(--color-gray-300);
  background-color: var(--color-base-white);
  width: 100%;
  color: var(--color-gray-900);
}

.input-disabled {
  background-color: var(--color-gray-100);
  cursor: not-allowed;
  color: var(--color-gray-500);
}

input:focus,
textarea:focus {
  border-radius: 8px;
  box-shadow: 0 0 0 4px #aacfee, 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border: solid 1px var(--color-primary-300);
  background-color: var(--color-base-white);
  outline: none;
}

.textarea-field {
  resize: vertical;
  min-height: 80px;
}

/* Color Picker Styles */
.color-picker-container {
  position: relative;
  display: flex;
  align-items: center;
}

.color-input-text {
  padding-right: 40px;
  /* Make space for color preview */
}

.color-picker-wrapper {
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
}

.color-picker {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.color-preview {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid var(--color-gray-300);
  cursor: pointer;
  transition: all 0.2s ease;
}

.color-preview:hover {
  transform: scale(1.1);
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

/* Make the color picker work on mobile */
input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
  border-radius: 4px;
}

/* For Firefox */
input[type="color"] {
  border: none;
  border-radius: 4px;
  padding: 0;
}

.z-1000 {
  z-index: 1000;
}
</style>