<template>
    <div class="mt-2 mb-2">

        <label class="base-select__label" for="input">{{ label }} <!-- Help icon with tooltip on hover -->
            <div v-if="helpText" class="relative group inline-block  ml-1">
                <img class="w-4 cursor-pointer" src="/assets/icon/Icon-help.svg" alt="help icon" />

                <!-- Tooltip / Popup -->
                <div
                    class="absolute z-1000 hidden group-hover:block bg-gray-900 text-white text-xs rounded p-1.5 shadow-md w-max max-w-xs top-full mt-1 left-1/2 -translate-x-1/2">
                    {{ helpText }}
                </div>
            </div>
        </label>
        <div class="tag-input mt-2" :class="['tag-input mt-2', { 'input-error': error }]">
            <div class="tags">
                <span v-for="(tag, index) in tags" :key="index" class="tag">
                    {{ tag }}
                    <button type="button" class="remove-tag" @click="removeTag(index)">×</button>
                </span>
            </div>
            <input type="text" v-model="inputValue" @keyup.enter="addTag" :placeholder=placeholder
                class="tag-input-field text-gray-900" />
        </div>
        <span v-if="error" class="error-message">{{ error }}</span>
        <p class="text-slate-600">{{ subtitle }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    error: String,
    subtitle: String,
    helpText: String

});

const emit = defineEmits(['update:modelValue']);
const inputValue = ref('');
const tags = ref(Array.isArray(props.modelValue) ? props.modelValue : (props.modelValue ? props.modelValue.split(',') : []));

function addTag() {
    const newTag = inputValue.value.trim();
    if (newTag && !tags.value.includes(newTag)) {
        tags.value.push(newTag);
        emit('update:modelValue', tags.value.join(','));
    }
    inputValue.value = '';
}

function removeTag(index: number) {
    tags.value.splice(index, 1);
    emit('update:modelValue', tags.value.join(','));
}

watch(() => props.modelValue, (newValue) => {
    tags.value = newValue ? newValue.split(',') : [];
});
</script>


<style scoped>
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


.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

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

.tag-input:focus-within {
    box-shadow: 0 0 0 4px #aacfee, 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    border: solid 1px #5596cd;
    background-color: #fff;
    outline: none;
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
.z-1000 {
  z-index: 1000;
}
.tag-input-field::placeholder {
    color: var(--color-gray-300);
    font-size: 16px;
}
</style>