<template>
        <div class="input-group mt-2 mb-2 h-12">
            <input disabled v-model="inputValue" :id="computedId" :type="type" class="form-input"
                :placeholder="placeholder || 'Enter text to copy'" />
            <button class="copy-btn" @click="copyToClipboard">
                <slot name="icon"></slot>
                کپی
            </button>
        </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue';
import { useToast } from 'vue-toastification';

const props = defineProps({
    label: String,
    modelValue: {
        type: String,
        default: '', // Default text for the input
    },
    placeholder: String,
    requireText: String,
    type: {
        type: String,
        default: 'text', // Input type
    },
    id: String,
    error: String,
});

const toast = useToast(); // Toast instance
const inputValue = ref(props.modelValue);

const computedId = computed(() =>
    props.id || `input-${props.label?.replace(/\s+/g, '-').toLowerCase() || 'default'}`
);

// Sync modelValue with inputValue
watch(
    () => props.modelValue,
    (newValue) => {
        inputValue.value = newValue;
    }
);

// Copy text to clipboard
const copyToClipboard = async () => {
    if (!inputValue.value) {
        toast.warning(props.requireText || 'متنی برای کپی موجود نیست');
        return;
    }

    if (!navigator.clipboard || !navigator.clipboard.writeText) {
        toast.error('عملیات کپی در این مرورگر پشتیبانی نمی‌شود');
        return;
    }

    try {
        await navigator.clipboard.writeText(inputValue.value);
        toast.success('متن با موفقیت کپی شد');
    } catch (error) {
        toast.error('مشکلی پیش آمده است لطفاً دوباره تلاش کنید');
    }
};

</script>

<style scoped>
.input-group {
    display: flex;
    flex-direction: row;
}

.form-input {
    padding: 10px 14px 10px 36px;
    border-radius: 0px 12px 12px 0px;
    border: solid 1px var(--color-gray-400);
    background-color: var(--color-base-white);
    width: 100%;
    color: var(--color-gray-500);
    font-size: 18px;
    direction: ltr;
    text-align: right;
}


.form-input:focus {
    box-shadow: 0 0 0 4px var(--color-primary-100), 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    border: solid 1px var(--color-primary-300);
    outline: none;
}

.copy-btn {
    padding: 10px 24px;
    background-color: var(--color-base-white);
    color: var(--color-base-black);
    border: solid 1px var(--color-gray-400);
    border-radius: 10px 0px 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
}

.copy-btn:hover {
    background-color: var(--color-gray-300);
}

.icon {
    width: 20px;
    height: 20px;
}
</style>
