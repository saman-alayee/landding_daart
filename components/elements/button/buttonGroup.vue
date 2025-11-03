<template>
  <div class="inline-flex mt-3 flex-wrap h-2/3" role="group">
    <button
      v-for="(button, index) in visibleButtons"
      :key="index"
      type="button"
      :class="getButtonClass(button.index)"
      @click="setActiveButton(button.index, button.onClick)"
    >
      {{ button.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

// Props
const props = defineProps({
  buttons: {
    type: Array as () => Array<{ label: string; onClick: () => void }>,
    required: true,
  },
  modelValue: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["update:modelValue"]);

const totalPages = computed(() => props.buttons.length);
const visibleRange = 5;

// Dynamically calculate visible buttons
const visibleButtons = computed(() => {
  const buttons = [];
  const halfRange = Math.floor(visibleRange / 2);
  const startPage = Math.max(
    1,
    props.modelValue > halfRange ? props.modelValue - halfRange : 1
  );
  const endPage = Math.min(totalPages.value, startPage + visibleRange - 1);

  // First page + ellipsis
  if (startPage > 1) {
    buttons.push({ label: "1", index: 1, onClick: () => setPage(1) });
    if (startPage > 2) {
      buttons.push({ label: "...", index: "ellipsis", onClick: () => {} });
    }
  }

  // Pages in range
  for (let i = startPage; i <= endPage; i++) {
    buttons.push({ label: i.toString(), index: i, onClick: () => setPage(i) });
  }

  // Last page + ellipsis
  if (endPage < totalPages.value) {
    if (endPage < totalPages.value - 1) {
      buttons.push({ label: "...", index: "ellipsis", onClick: () => {} });
    }
    buttons.push({
      label: totalPages.value.toString(),
      index: totalPages.value,
      onClick: () => setPage(totalPages.value),
    });
  }

  return buttons;
});

// Change page
function setPage(page: number) {
  emit("update:modelValue", page); // notify parent
  props.buttons[page - 1]?.onClick?.();
}

// Button styling
function getButtonClass(index: number | string) {
  const baseClass =
    "px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ";
  const activeClass = "bg-blue-500 text-white border-blue-500";
  const firstClass = "rounded-s-lg";
  const lastClass = "rounded-e-lg";

  let classes = baseClass;
  const numericIndex = typeof index === "string" ? -1 : Number(index);

  if (numericIndex === props.modelValue) {
    classes += ` ${activeClass}`;
  }
  if (numericIndex === 1) {
    classes += ` ${firstClass}`;
  } else if (numericIndex === totalPages.value) {
    classes += ` ${lastClass}`;
  }

  return classes;
}

// Button click
function setActiveButton(index: number | string, onClick: () => void) {
  if (index !== "ellipsis" && index > 0) {
    setPage(Number(index));
    onClick();
  }
}
</script>
