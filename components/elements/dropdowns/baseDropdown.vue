<template>
  <div :dir="position === 'right' ? 'ltr' : 'rtl'" class="dropdown-container" ref="dropdownRef" :style="{
    '--bg-color': bgColor,
    '--text-color': textColor,
    '--border-color': borderColor,
    '--hover-bg-color': hoverBgColor,
    '--menu-bg-color': menuBgColor,
    '--menu-text-color': menuTextColor,
    '--menu-hover-bg-color': menuHoverBgColor,
    '--button-padding': buttonPadding,
  }">
    <!-- Dropdown Toggle Button -->
    <button @click="toggleDropdown" class="dropdown-button">
      <span v-if="$slots.rightIcon" class="icon">
        <slot name="rightIcon" />
      </span>

      {{ selectedOption ? selectedOption.label : placeholder }}

      <span v-if="$slots.leftIcon" class="icon">
        <slot name="leftIcon" />
      </span>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="isOpen" class="dropdown-menu" :class="{
      'dropdown-left': position === 'left',
      'dropdown-right': position === 'right',
      'dropdown-center': position === 'center',
    }">
      <button v-for="option in options" :key="option.value" @click="selectOption(option)" class="dropdown-item">
        {{ option.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

interface DropdownOption {
  label: string;
  value: any;
}

const props = defineProps({
  options: {
    type: Array as () => DropdownOption[],
    required: true,
  },
  placeholder: {
    type: String,
    default: "انتخاب کنید",
  },
  bgColor: {
    type: String,
    default: "#ffffff",
  },
  textColor: {
    type: String,
    default: "#333333",
  },
  borderColor: {
    type: String,
    default: "#cccccc",
  },
  hoverBgColor: {
    type: String,
    default: "#f5f5f5",
  },
  menuBgColor: {
    type: String,
    default: "#ffffff",
  },
  menuTextColor: {
    type: String,
    default: "#333333",
  },
  menuHoverBgColor: {
    type: String,
    default: "#e5e5e5",
  },
  buttonPadding: {
    type: String,
    default: "0.65rem 1rem",
  },
  position: {
    type: String as () => "left" | "right" | "center",
    default: "left",
  }, 
  defaultValue: {
    type: [String, Number], // match your option.value type
    default: null,
  },
});

const emit = defineEmits(["select"]);

const isOpen = ref(false);
const selectedOption = ref<DropdownOption | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);




const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    closeDropdown();
  }
};

onMounted(() => {
  // ✅ check if a default value was passed
  if (props.defaultValue !== null) {
    const found = props.options.find(opt => opt.value === props.defaultValue);
    if (found) {
      selectedOption.value = found;
      emit("select", found.value); // optional: notify parent
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});

const selectOption = (option: DropdownOption) => {
  selectedOption.value = option;
  closeDropdown();
  emit("select", option.value);
};
</script>

<style scoped>
/* Dropdown Container */
.dropdown-container {
  position: relative;
  display: inline-block;
  text-align: right;
}

/* Dropdown Button */
.dropdown-button {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--button-padding, 0.65rem 1rem);
  border: 1px solid var(--border-color, #cccccc);
  border-radius: 8px;
  background-color: var(--bg-color, #ffffff);
  color: var(--text-color, #333333);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.dropdown-button:hover {
  background-color: var(--hover-bg-color, #f5f5f5);
}

/* Icon */
.icon {
  width: 1rem;
  margin: 0 0.25rem;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  margin-top: 0.5rem;
  width: 14rem;
  background-color: var(--menu-bg-color, #ffffff);
  border: 1px solid var(--border-color, #cccccc);
  border-radius: 0.375rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000000;
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Alignment helpers */
.dropdown-left {
  left: 0;
}

.dropdown-right {
  right: 0;
}

.dropdown-center {
  left: 50%;
  transform: translateX(-20%);
}

/* Dropdown Item */
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: right;
  font-size: 0.875rem;
  color: var(--menu-text-color, #333333);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.dropdown-item:hover {
  background-color: var(--menu-hover-bg-color, #e5e5e5);
}
</style>
