<template>
    <div class="flex flex-wrap gap-3">
        <span 
            v-for="size in bannerSizes" 
            :key="size"
            :class="{
                'bg-green-500 text-white': selectedSizes[size],
                'bg-gray-200': !selectedSizes[size]
            }"
            class="border-form-sm ltr"
        >
            {{ size }}
        </span>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Props for banner sizes and selected sizes
const props = defineProps({
    bannerSizes: {
        type: Array,
        required: true
    },
    selectedSizes: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>


.bg-green-500 {
    background-color: #48bb78; /* Green color for selected */
}

.bg-gray-200 {
    background-color: #edf2f7; /* Gray color for unselected */
}

.text-white {
    color: white;
}
</style>
