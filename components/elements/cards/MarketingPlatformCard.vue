<template>
  <div
    class="group relative cursor-pointer"
    @click="$emit('click', platform)"
  >
    <div
      class="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r"
        :class="`from-${platform.gradientFrom} to-${platform.gradientTo}`"
      ></div>

      <!-- Card Content -->
      <div class="p-6">
        <!-- Icon with animated ring -->
        <div class="relative mb-5 flex justify-center">
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-r opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md"
            :class="`from-${platform.gradientFrom} to-${platform.gradientTo}`"
            style="transform: scale(1.3)"
          ></div>
          <div
            class="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rounded-full"
            :class="[
              `from-${platform.gradientFrom}/10 to-${platform.gradientTo}/10`,
              isDark ? 'bg-slate-700/50' : 'bg-white'
            ]"
          >
            <img
              :src="platform.icon"
              :alt="platform.name"
              class="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-110"
              :class="platform.logoClass"
            />
          </div>
        </div>

        <!-- Platform Name -->
        <h3
          class="text-xl font-bold text-center mb-2 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300"
          :class="[
            isDark
              ? 'from-white to-slate-300'
              : `from-${platform.gradientFrom} to-${platform.gradientTo}`,
            'bg-gradient-to-r'
          ]"
        >
          {{ platform.name }}
        </h3>

        <!-- Short Description -->
        <p class="text-sm text-slate-600 dark:text-slate-400 text-center mb-4 line-clamp-2">
          {{ platform.description }}
        </p>

        <!-- Feature Tags -->
        <div class="flex flex-wrap gap-2 justify-center mb-5">
          <span
            v-for="feature in platform.features.slice(0, 3)"
            :key="feature"
            class="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300"
          >
            {{ feature }}
          </span>
        </div>

        <!-- Action Button -->
        <button
          class="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          :class="[
            isDark
              ? 'bg-slate-700 hover:bg-slate-600 text-white'
              : `bg-gradient-to-r from-${platform.gradientFrom} to-${platform.gradientTo} text-white shadow-md hover:shadow-lg`
          ]"
        >
          <span>Learn More</span>
          <svg
            class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div>

      <!-- Animated Border on Hover -->
      <div
        class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        :class="`bg-gradient-to-r from-${platform.gradientFrom} to-${platform.gradientTo}`"
        style="padding: 2px; mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  platform: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(["click"]);

const isDark = ref(false);

const updateDarkFromHtml = () => {
  isDark.value = document.documentElement.classList.contains("dark");
};

onMounted(() => {
  updateDarkFromHtml();
  const observer = new MutationObserver(updateDarkFromHtml);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>