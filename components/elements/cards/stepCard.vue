<template>
  <section class="relative py-20 overflow-hidden bg-white dark:bg-slate-900" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="container mx-auto px-6">
      <!-- Section Title -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t("googleAds.process.title") }}
          <span class="text-orange-600 dark:text-orange-400">
            {{ $t("googleAds.process.highlighted") }}
          </span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ $t("googleAds.process.subtitle") }}
        </p>
      </div>

      <!-- Step Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(step, index) in process"
          :key="step.key"
          class="relative group"
          :data-aos="'flip-left'"
          :data-aos-delay="index * 200"
        >
          <!-- Step Number -->
          <div
            class="absolute -top-4"
            :class="[
              $i18n.locale === 'ar' ? '-right-4' : '-left-4',
              'w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg z-20 shadow-lg dark:shadow-orange-500/25'
            ]"
          >
            {{ index + 1 }}
          </div>

          <!-- Card -->
          <div
            class="bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 shadow-xl dark:shadow-slate-900/30 h-full transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl dark:hover:shadow-slate-900/50"
          >
            <div
              class="w-16 h-16 bg-orange-500/20 dark:bg-orange-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm"
            >
              <span class="text-2xl text-orange-600 dark:text-orange-400">{{ step.icon }}</span>
            </div>

            <h3
              :class="[
                $i18n.locale === 'ar' ? 'text-right' : 'text-left',
                'text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300'
              ]"
            >
              {{ $t(`googleAds.process.steps.${step.key}.title`) }}
            </h3>
            <p
              :class="[
                $i18n.locale === 'ar' ? 'text-right' : 'text-left',
                'text-gray-600 dark:text-gray-300 leading-relaxed'
              ]"
            >
              {{ $t(`googleAds.process.steps.${step.key}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  process: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
/* Slight floating effect animation for polish */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.group:hover {
  animation: float 6s ease-in-out infinite;
}
</style>
