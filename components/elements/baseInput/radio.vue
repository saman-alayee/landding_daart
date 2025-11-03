<template>
  <li>
    <input 
      type="radio" 
      :id="id" 
      :name="name" 
      :value="value" 
      :checked="isChecked"
      @change="$emit('update:modelValue', value); $emit('change', value)" 
      class="hidden peer" 
      required 
      v-bind="$attrs" />
    <label 
      :for="id" 
      class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
    >
      <div class="block">
        <div class="w-full text-lg font-semibold">{{ label }}</div>
        <div class="w-full">{{ description }}</div>
      </div>
      <slot name="icon"></slot>
    </label>
  </li>
  <span v-if="error" class="error-message">{{ error }}</span>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  name: String,
  value: String,
  label: String,
  description: String,
  isChecked: Boolean,
  error: String,
})

defineEmits(['update:modelValue', 'change'])

// Disable automatic inheritance of attributes
defineOptions({
  inheritAttrs: false
})
</script>
