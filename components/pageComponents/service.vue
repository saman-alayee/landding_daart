<template>
  <div
    class="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300"
  >
    <!-- 🌟 Hero Section -->
    <section
      class="relative overflow-hidden min-h-[80vh] flex items-center justify-center"
    >
      <!-- 🌫️ Dark Mode Gradient Background -->
      <div
        class="absolute inset-0 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-neutral-900 animate-gradient-flow"
      ></div>
      <div
        class="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(30,41,59,0.25),transparent_60%)]"
      ></div>

      <!-- 🌌 Aurora Mist Waves -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute w-[150%] h-[200%] dark:bg-gradient-to-r dark:from-indigo-900/30 dark:via-blue-900/30 dark:to-purple-900/30 blur-3xl animate-aurora-sweep"
        ></div>
      </div>

      <!-- 🫧 Floating Blobs -->
      <div
        class="absolute w-[30rem] h-[30rem] rounded-full blur-3xl top-0 left-0 animate-blob dark:bg-indigo-900/30"
      ></div>
      <div
        class="absolute w-[24rem] h-[24rem] rounded-full blur-3xl bottom-0 right-0 animate-blob animation-delay-2000 dark:bg-sky-900/28"
      ></div>

      <!-- Content -->
      <div class="relative z-10 text-center py-4 px-6 max-w-4xl mx-auto">
        <div class="flex justify-center mb-8" data-aos="zoom-in">
          <div
            class="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl dark:shadow-indigo-500/20"
          >
            <img
              :src="require('~/assets/image/google-logo.png')"
              :alt="$t('googleAds.hero.logoAlt')"
              class="w-16 h-16"
            />
          </div>
        </div>

        <h1
          class="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          data-aos="fade-up"
        >
          {{ $t("googleAds.hero.title") }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500"
          >
            {{ $t("googleAds.hero.highlighted") }}
          </span>
        </h1>

        <p
          class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {{ $t("googleAds.hero.subtitle") }}
        </p>

        <p
          class="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {{ $t("googleAds.hero.description") }}
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="600"
        ></div>
        <div class="mb-4">
          <NuxtLink :to="localePath('/#contact')">
            <BaseButton>
              {{ $t("googleAds.hero.ctaButton") }}
            </BaseButton>
            </NuxtLink
          >
        </div>
      </div>
    </section>

    <!-- 📊 Overview Section -->
    <section
      class="relative py-20 overflow-hidden bg-gray-50/50 dark:bg-slate-800/20"
    >
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div class="relative z-10" data-aos="fade-right">
            <div class="text-center">
              <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {{ $t("googleAds.overview.title") }}
                <span class="text-blue-600 dark:text-blue-400">{{
                  $t("googleAds.overview.highlighted")
                }}</span>
              </h2>
              <p
                class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                {{ $t("googleAds.overview.description1") }}
              </p>
              <p
                class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                {{ $t("googleAds.overview.description2") }}
              </p>
            </div>
            <div class="grid grid-cols-2 gap-6">
              <div
                class="flex items-center space-x-3"
                v-for="stat in stats"
                :key="stat.label"
              >
                <div
                  class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center shadow-sm dark:shadow-blue-900/20"
                >
                  <span class="text-2xl">{{ stat.icon }}</span>
                </div>
                <div>
                  <div class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ stat.value }}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ $t(`googleAds.stats.${stat.key}`) }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual -->
          <div class="relative" data-aos="fade-left" data-aos-delay="200">
            <div
              class="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 shadow-2xl dark:shadow-slate-900/30"
            >
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="n in 4"
                  :key="n"
                  class="bg-gradient-to-br from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20 rounded-2xl p-4 animate-pulse-slow border border-blue-100/20 dark:border-blue-500/10"
                >
                  <div
                    class="h-4 bg-gray-300 dark:bg-slate-600 rounded mb-2"
                  ></div>
                  <div
                    class="h-3 bg-gray-200 dark:bg-slate-700 rounded w-3/4"
                  ></div>
                </div>
              </div>
              <div
                class="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span class="text-white text-sm">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🎯 Features Section -->
    <section class="relative py-20 overflow-hidden bg-white dark:bg-slate-900">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t("googleAds.features.title") }}
            <span class="text-purple-600 dark:text-purple-400">{{
              $t("googleAds.features.highlighted")
            }}</span>
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {{ $t("googleAds.features.subtitle") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BaseHomeCard
            v-for="(feature, index) in features"
            :key="feature.title"
            :title="$t(`googleAds.features.list.${feature.key}.title`)"
            :description="
              $t(`googleAds.features.list.${feature.key}.description`)
            "
            :icon-component="feature.iconComponent"
            :animation-type="index % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
            :animation-delay="index * 100"
            :show-action="false"
            :custom-class="'group dark:hover:shadow-indigo-500/20'"
          >
            <!-- Custom Icon Slot with Gradient Background -->
            <template #icon>
              <div
                class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <component
                  :is="feature.iconComponent"
                  class="w-6 h-6 text-white"
                />
              </div>
            </template>
          </BaseHomeCard>
        </div>
      </div>
    </section>

    <!-- 💡 Benefits Section -->
    <section
      class="relative py-20 overflow-hidden bg-gray-50/50 dark:bg-slate-800/20"
      :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
    >
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Visual -->
          <div
            class="relative"
            data-aos="fade-right"
            :class="$i18n.locale === 'ar' ? 'lg:order-2' : ''"
          >
            <div class="grid grid-cols-2 gap-6">
              <BaseHomeCard
                v-for="(benefit, index) in benefits.slice(0, 4)"
                :key="benefit.key"
                :title="$t(`googleAds.benefits.list.${benefit.key}.title`)"
                :description="
                  $t(`googleAds.benefits.list.${benefit.key}.description`)
                "
                :animation-type="index % 2 === 0 ? 'zoom-in' : 'zoom-in-up'"
                :animation-delay="index * 150"
                :show-action="false"
                :icon-alignment="$i18n.locale === 'ar' ? 'right' : 'left'"
                :custom-class="
                  [
                    'bg-white/80 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 shadow-lg dark:shadow-slate-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-slate-900/50',
                    $i18n.locale === 'ar' ? 'text-right' : 'text-left',
                  ].join(' ')
                "
              >
                <!-- Custom Icon Slot -->
                <template #icon>
                  <div
                    class="w-12 h-12 bg-green-500/20 dark:bg-green-500/30 rounded-xl flex items-center justify-center shadow-sm"
                  >
                    <span class="text-2xl text-green-600 dark:text-green-400"
                      >✓</span
                    >
                  </div>
                </template>
              </BaseHomeCard>
            </div>
          </div>

          <!-- Content -->
          <div
            class="relative z-10"
            data-aos="fade-left"
            :class="$i18n.locale === 'ar' ? 'lg:order-1' : ''"
          >
            <h2
              class="text-4xl font-bold text-gray-900 dark:text-white mb-6"
              :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
            >
              {{ $t("googleAds.benefits.title") }}
              <span class="text-green-600 dark:text-green-400">
                {{ $t("googleAds.benefits.highlighted") }}
              </span>
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
            >
              {{ $t("googleAds.benefits.description") }}
            </p>

            <ul
              class="space-y-4"
              :class="$i18n.locale === 'ar' ? 'ltr' : 'rtl'"
            >
              <li
                v-for="(point, index) in keyPoints"
                :key="index"
                class="flex items-center text-gray-600 dark:text-gray-300 group hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                :data-aos="'fade-left'"
                :data-aos-delay="index * 100"
                :class="[
                  $i18n.locale === 'ar'
                    ? 'flex-row-reverse space-x-reverse'
                    : 'flex-row',
                  $i18n.locale === 'ar' ? 'text-right' : 'text-left',
                ]"
              >
                <div
                  class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-sm"
                  :class="$i18n.locale === 'ar' ? 'ml-3' : 'mr-3'"
                >
                  <span class="text-white text-sm">✓</span>
                </div>
                <span
                  class="transition-transform duration-200"
                  :class="[
                    $i18n.locale === 'ar'
                      ? 'group-hover:-translate-x-1'
                      : 'group-hover:translate-x-1',
                  ]"
                >
                  {{ $t(`googleAds.keyPoints.${point.key}`) }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 📈 Process Section -->
    <section class="relative py-20 overflow-hidden bg-white dark:bg-slate-900">
      <StepCard :process="process" />
    </section>

    <!-- 🚀 CTA Section -->
    <section>
      <LeadSections />
    </section>
  </div>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted, nextTick } from "vue";
import BaseHomeCard from "~/components/elements/cards/BaseHomeCard.vue";
import StepCard from "~/components/elements/cards/stepCard.vue";
import BaseButton from "~/components/elements/button/index.vue";
const localePath = useLocalePath();

import {
  Search,
  Play,
  ShoppingCart,
  Smartphone,
  LayoutGrid,
  BarChart3,
} from "lucide-vue-next";
import LeadSections from "../elements/components/leadSections.vue";

onMounted(async () => {
  await nextTick();
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
  setTimeout(() => AOS.refresh(), 800);
});

const features = [
  {
    key: "search",
    title: "Search Advertising",
    description:
      "Appear at the top of Google search results when potential customers are actively looking for your products or services.",
    iconComponent: Search,
  },
  {
    key: "video",
    title: "Video Campaigns",
    description:
      "Engage your audience with compelling video ads on YouTube and across the Google Display Network.",
    iconComponent: Play,
  },
  {
    key: "shopping",
    title: "Shopping Ads",
    description:
      "Showcase your products directly in Google search results with high-quality images and pricing information.",
    iconComponent: ShoppingCart,
  },
  {
    key: "app",
    title: "App Promotion",
    description:
      "Drive app installs and engagement with targeted campaigns across Google's mobile advertising network.",
    iconComponent: Smartphone,
  },
  {
    key: "display",
    title: "Display Network",
    description:
      "Reach potential customers while they browse websites, use apps, or watch videos across the internet.",
    iconComponent: LayoutGrid,
  },
  {
    key: "analytics",
    title: "Performance Analytics",
    description:
      "Comprehensive reporting and optimization to ensure your campaigns deliver maximum return on investment.",
    iconComponent: BarChart3,
  },
];

const stats = [
  { key: "ctr", icon: "🎯", value: "91%", label: "Click-Through Rate" },
  { key: "roi", icon: "💰", value: "200%", label: "ROI Increase" },
  { key: "searches", icon: "📈", value: "3.5B", label: "Daily Searches" },
  { key: "rating", icon: "⭐", value: "4.9/5", label: "Client Rating" },
];

const benefits = [
  {
    key: "visibility",
    title: "Increased Visibility",
    description:
      "Appear at the top of search results when customers are ready to buy.",
  },
  {
    key: "targeting",
    title: "Targeted Audience",
    description:
      "Reach people based on their search behavior, interests, and demographics.",
  },
  {
    key: "measurable",
    title: "Measurable Results",
    description:
      "Track every click, conversion, and dollar spent with detailed analytics.",
  },
  {
    key: "budgeting",
    title: "Flexible Budgeting",
    description:
      "Control your spending with daily budgets and pay only for results.",
  },
  {
    key: "setup",
    title: "Quick Setup",
    description:
      "Launch campaigns in days, not months, and start seeing results immediately.",
  },
  {
    key: "management",
    title: "Expert Management",
    description:
      "Our certified specialists optimize campaigns for maximum performance.",
  },
];

const keyPoints = [
  { key: "certified", text: "Certified Google Ads Professionals" },
  { key: "dataDriven", text: "Data-Driven Strategy Development" },
  { key: "optimization", text: "Continuous Campaign Optimization" },
  { key: "reporting", text: "Transparent Reporting & Analytics" },
  { key: "accountManagement", text: "Dedicated Account Management" },
  { key: "trackRecord", text: "Proven Track Record of Success" },
];

const process = [
  {
    key: "strategy",
    icon: "🎯",
    title: "Strategy & Planning",
    description:
      "We analyze your business goals and target audience to create a customized Google Ads strategy.",
  },
  {
    key: "setup",
    icon: "🚀",
    title: "Campaign Setup",
    description:
      "Our experts build and launch optimized campaigns with compelling ad copy and targeting.",
  },
  {
    key: "optimization",
    icon: "📊",
    title: "Monitoring & Optimization",
    description:
      "Continuous performance tracking and optimization to maximize your return on investment.",
  },
  {
    key: "reporting",
    icon: "📈",
    title: "Reporting & Growth",
    description:
      "Regular performance reports and strategic recommendations for ongoing campaign growth.",
  },
];
</script>

<style scoped>
/* 🌈 Background Motion */
@keyframes gradient-flow {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
.animate-gradient-flow {
  background-size: 200% 200%;
  animation: gradient-flow 16s ease infinite;
}

/* 🌌 Aurora Wave */
@keyframes aurora-sweep {
  0% {
    transform: translateX(-20%) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateX(20%) rotate(2deg);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-20%) rotate(0deg);
    opacity: 0.3;
  }
}
.animate-aurora-sweep {
  animation: aurora-sweep 14s ease-in-out infinite;
}

/* 🫧 Floating Blobs */
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -40px) scale(1.1);
  }
  66% {
    transform: translate(-40px, 30px) scale(0.9);
  }
}
.animate-blob {
  animation: blob 12s infinite ease-in-out;
  opacity: 0.4;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

/* ✨ Additional Animations */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}
.animate-pulse-slow {
  animation: pulse-slow 5s ease-in-out infinite;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, transform,
    box-shadow;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
