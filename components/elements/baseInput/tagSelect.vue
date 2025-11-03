<template>
    <div class="mt-2 mb-4">
        <label class="base-select__label" for="input">{{ label }} <span v-if="requireText" class="text-red-500">{{
                requireText }}</span>
            <div v-if="helpText" class="relative group inline-block  ml-1">
                <img class="w-4 cursor-pointer" src="/assets/icon/Icon-help.svg" alt="help icon" />
                <!-- Tooltip / Popup -->
                <div
                    class="absolute z-1000 hidden group-hover:block bg-gray-900 text-white text-xs rounded p-1.5 shadow-md w-max max-w-xs top-full mt-1 left-1/2 -translate-x-1/2">
                    {{ helpText }}
                </div>
            </div>
        </label>

        <div ref="dropdownWrapper" class="relative tag-input mt-2" :class="['input-field', { 'input-error': error }]">
            <div class="flex flex-wrap gap-2">
                <span v-for="(tag, index) in tags" :key="index" class="tag">
                    {{ tag?.label }}
                    <button type="button" class="remove-tag" @click="removeTag(index)">×</button>
                </span>
            </div>
            <input type="text" v-model="inputValue" @input="filterOptions" @focus="openDropdown"
                :placeholder="placeholder" class="tag-input-field" />
            <ul v-if="isDropdownVisible"
                class="absolute z-10 w-full bg-white border border-gray-300 pb-4 mt-11 rounded-md shadow-lg max-h-56 overflow-y-auto">
                <!-- Select All Option -->
                <li @click="toggleSelectAll" class="cursor-pointer px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                    {{ isAllSelected ? 'پاک کردن همه' : 'انتخاب همه' }}
                </li>
                <!-- Options List -->
                <li v-for="(option, index) in filteredOptions" :key="index" @click="toggleTag(option)"
                    class="cursor-pointer px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 flex items-center">
                    <input type="checkbox" :checked="isOptionSelected(option)" class="m-1" />
                    {{ option.label }}
                </li>
            </ul>
            <ul v-if="filteredOptions.length === 0 && inputValue.trim() !== ''"
                class="absolute z-10 w-full bg-white border border-gray-300 mt-11 mx-8 rounded-md shadow-lg max-h-40 overflow-y-auto">
                <li class="px-4 py-2 text-sm text-gray-600">نتیجه ای پیدا نشد.</li>
            </ul>
        </div>
        <p class="text-slate-600">{{ subtitle }}</p>
        <span v-if="error" class="text-sm text-red-500">{{ error }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    modelValue: {
        type: Array as () => { label: string, value: any }[],
        default: () => [],
    },
    label: String,
    subtitle: String,
    placeholder: String,
    requireText: String,
    error: String,
    helpText: String,
    options: {
        type: Array as () => { label: string, value: any }[],
        default: () => [],
    },
});

const emit = defineEmits(['update:modelValue']);
const inputValue = ref('');
const tags = ref([...props.modelValue]);
const filteredOptions = ref(props.options);
const isDropdownVisible = ref(false);
const dropdownWrapper = ref<HTMLElement | null>(null);
const isAllSelected = ref(false); // Tracks if all options are selected

function openDropdown() {
    isDropdownVisible.value = true;
    filteredOptions.value = props.options;
}

function closeDropdown() {
    isDropdownVisible.value = false;
    inputValue.value = '';
}

function handleClickOutside(event: MouseEvent) {
    if (dropdownWrapper.value && !dropdownWrapper.value.contains(event.target as Node)) {
        closeDropdown();
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

function addTagFromOption(option: { label: string, value: any }) {
    if (!tags.value.some(tag => tag.value === option.value)) {
        tags.value.push(option);
        emit('update:modelValue', tags.value);
    }
    inputValue.value = '';
}

function removeTag(index: number) {
    tags.value.splice(index, 1);
    emit('update:modelValue', tags.value);
    isAllSelected.value = tags.value.length === props.options.length;
}

function filterOptions() {
    const searchValue = inputValue.value.trim().toLowerCase();
    filteredOptions.value = props.options.filter(
        (option) =>
            option.label.toLowerCase().includes(searchValue) && !tags.value.some(tag => tag.value === option.value)
    );
}

// Toggle Select All functionality
function toggleSelectAll() {
    if (isAllSelected.value) {
        tags.value = [];
        isAllSelected.value = false;
    } else {
        tags.value = [...props.options];
        isAllSelected.value = true;
    }
    emit('update:modelValue', tags.value);
}

// Handle single option toggle
function toggleTag(option: { label: string, value: any }) {
    const index = tags.value.findIndex(tag => tag.value === option.value);
    if (index > -1) {
        tags.value.splice(index, 1);
    } else {
        tags.value.push(option);
    }
    emit('update:modelValue', tags.value);
    isAllSelected.value = tags.value.length === props.options.length;
}

// Check if the option is selected
function isOptionSelected(option: { value: any }) {
    return tags.value.some(tag => tag.value === option.value);
}

// Watch for changes in modelValue
watch(() => props.modelValue, (newTags) => {
    tags.value = [...newTags];
    isAllSelected.value = tags.value.length === props.options.length;
});
</script>


<style scoped>
.tag {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f8f8f8;
    color: var(--color-base-black);
    padding: 1px 4px;
    border-radius: 6px;
    font-size: 14px;
    border: 1px solid var(--color-gray-300);
}

.remove-tag {
    background: none;
    border: none;
    color: var(--color-gray-400);
    margin-right: 8px;
    font-weight: bold;
    cursor: pointer;
}

.remove-tag:hover {
    color: var(--color-gray-600);
}

.tag-input:focus-within {
    box-shadow: 0 0 0 4px #aacfee, 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    border: solid 1px #5596cd;
    background-color: #fff;
    outline: none;
}

.tag-input:focus {
    border-radius: 8px;
    box-shadow: 0 0 0 4px #aacfee, 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    border: solid 1px #5596cd;
    background-color: #fff;
    outline: none;
}

.tag-input-field {
    border: none;
    outline: none;
    padding: 5px;
    font-size: 14px;
    flex: 1;
}

.tag-input-field::placeholder {
    color: var(--color-gray-300);
    font-size: 16px;
}

.tag-input {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    border: solid 1px var(--color-gray-300);
    background-color: var(--color-base-white);
    width: 100%;
    color: var(--color-gray-900);
}

ul {
    margin-right: -10px;
}
.z-1000 {
  z-index: 1000;
}
input[type="checkbox"] {
    margin-right: 10px;
}
</style>
