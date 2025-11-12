<template>
  <!-- 🌟 Combined Component -->
  <div class="relative">
    <!-- 🌟 Customer Slider Section -->
    <section
      id="customers"
      class="relative flex flex-col justify-center h-[20rem] py-10 md:py-14 lg:py-10 overflow-hidden transition-all duration-700"
      data-reveal
      data-delay="150"
    >
      <!-- 🌫️ Shared Gradient Background -->
      <SharedGradientBackground />

      <!-- 💠 Title -->
      <h5
        class="flex items-center justify-center gap-4 mt-32 text-center text-gray-600 dark:text-gray-300 font-base text-lg tracking-wide mb-6 relative z-10"
      >
        <span class="h-px w-12 sm:w-20 bg-gray-300 dark:bg-gray-600"></span>
        {{ $t("home.customersTitle") }}
        <span class="h-px w-12 sm:w-20 bg-gray-300 dark:bg-gray-600"></span>
      </h5>

      <!-- 💫 Swiper -->
      <div
        class="relative z-10 px-4"
        data-reveal
        data-delay="300"
      >
        <swiper
          :modules="[Autoplay]"
          :slides-per-view="6"
          :space-between="10"
          :loop="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :breakpoints="{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 }
          }"
        >
          <swiper-slide
            v-for="item in cardsBrands"
            :key="'logo-' + item.id"
            class="flex justify-center"
          >
            <div
              class="relative flex items-center justify-center rounded-xl mt-2 p-2 w-fit transition-all duration-500 hover:scale-125 hover:z-10 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-sm"
            >
              <img
                class="h-8 sm:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-500 drop-shadow-md dark:drop-shadow-[0_0_6px_rgba(99,102,241,0.4)]"
                :src="item.icon"
                alt="Logo"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <hr
      class="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"
    />

    <!-- 🌟 Info Section -->
    <section
      class="relative flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-12 overflow-hidden min-h-[60vh] transition-colors duration-700"
      :class="$i18n.locale === 'ar' ? 'lg:flex-row-reverse' : ''"
      data-reveal
      data-delay="150"
    >
      <!-- 🌫️ Shared Gradient Background -->
      <SharedGradientBackground />

      <!-- ✨ Floating Particles -->
      <div
        v-for="n in 8"
        :key="'info-particle-' + n"
        class="absolute w-2 h-2 rounded-full animate-particle hidden dark:block bg-gradient-to-r from-blue-600 to-indigo-500"
        :style="{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${n * 0.5}s`,
          animationDuration: `${5 + Math.random() * 4}s`
        }"
      ></div>

      <!-- 🌌 Text Content -->
      <div
        class="lg:w-6/12 text-center lg:text-center relative z-10"
        data-reveal
        data-delay="300"
      >
        <h2
          class="text-3xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-gray-100 transition-all duration-500 hover:text-indigo-700 dark:hover:text-sky-400"
        >
          {{ $t("info2.title") }}
        </h2>
        <p
          class="text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-700 hover:text-gray-800 dark:hover:text-gray-100"
          data-reveal
          data-delay="450"
        >
          {{ $t("info2.desc") }}
        </p>
        <div class="flex justify-center mt-8">
          <NuxtLink :to="localePath('/service')">
            <BaseButton
              size="lg"
              type="submit"
              class="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 dark:from-indigo-500 dark:via-blue-500 dark:to-purple-500 text-white border-none hover:shadow-lg hover:shadow-indigo-300/40 dark:hover:shadow-indigo-500/30 transition-transform duration-300 transform hover:scale-110 backdrop-blur-lg relative overflow-hidden"
              data-reveal
              data-delay="600"
            >
              <span class="relative z-10">{{ $t("info1.button") }}</span>
              <div
                class="absolute inset-0 bg-gradient-to-r from-white/10 to-indigo-200/10 dark:to-indigo-400/10 opacity-0 hover:opacity-100 animate-glow-sweep"
              ></div>
            </BaseButton>
          </NuxtLink>
        </div>
      </div>

      <!-- 🖼️ Image -->
      <div
        class="lg:w-6/12 w-full flex justify-center relative z-10"
        :class="$i18n.locale === 'ar' ? 'lg:text-right' : 'lg:text-left'"
        data-reveal
        data-delay="750"
      >
        <img
          src="/assets/image/Google-logo.png"
          :alt="$t('info2.imageAlt')"
          class="w-full max-w-md lg:max-w-lg object-contain transform hover:scale-110 hover:rotate-1 transition-all duration-700 ease-out filter dark:brightness-95"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import banimid from "~/assets/image/banimid-2.png";
import evano from "~/assets/image/evano-1.png";
import taghcheh from "~/assets/image/taghcheh-1.png";
import signal from "~/assets/image/signal.png";
import okala from "~/assets/image/okala-1.png";
import khanoomi from "~/assets/image/khanoomi-1.png";
import fidibo from "~/assets/image/fidibo-1.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useI18n } from "vue-i18n";
import BaseButton from "~/components/elements/button/index.vue";

const { t } = useI18n();
const localePath = useLocalePath();

const cardsBrands = [
  { id: 1, icon: banimid },
  { id: 2, icon: evano },
  { id: 3, icon: taghcheh },
  { id: 4, icon: signal },
  { id: 5, icon: okala },
  { id: 6, icon: khanoomi },
  { id: 7, icon: fidibo }
];

// optional dark mode reactive (if you need it elsewhere)
const isDark = ref(false);
let mo: MutationObserver | null = null;
let observer: IntersectionObserver | null = null;

function updateDarkFromHtml() {
  isDark.value = document.documentElement.classList.contains("dark");
}

onMounted(async () => {
  await nextTick();

  // theme observer (optional — keeps look consistent)
  updateDarkFromHtml();
  mo = new MutationObserver(() => updateDarkFromHtml());
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  // IntersectionObserver for reveal animations
  // select only elements inside this component (scoped)
  const rootEl = document.querySelector("#customers")?.closest("div.relative") || document.body;
  const targets = Array.from(rootEl.querySelectorAll("[data-reveal]")) as HTMLElement[];

  if ("IntersectionObserver" in window && targets.length) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // apply visible class with per-element delay support
            const delayAttr = el.getAttribute("data-delay");
            if (delayAttr) {
              const d = Number(delayAttr);
              el.style.transitionDelay = `${d}ms`;
            }
            el.classList.add("reveal-visible");
            observer?.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    targets.forEach((el) => observer?.observe(el));
  } else {
    // fallback: show all
    targets.forEach((el) => el.classList.add("reveal-visible"));
  }

  // listen storage (if theme toggles via localStorage)
  window.addEventListener("storage", onStorage);
});

onBeforeUnmount(() => {
  if (mo) mo.disconnect();
  if (observer) observer.disconnect();
  window.removeEventListener("storage", onStorage);
});

function onStorage(e: StorageEvent) {
  if (e.key === "theme") {
    updateDarkFromHtml();
  }
}
</script>

<style scoped>
/* ---------------- SHARED background & particle animations (kept) ---------------- */
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

/* particles */
@keyframes particle {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-25px) scale(1.2);
    opacity: 0.9;
  }
}
.animate-particle {
  animation: particle 7s ease-in-out infinite;
}

/* Swiper hover zoom */
.swiper-slide div {
  transform-origin: center;
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.swiper-slide:hover div {
  transform: scale(1.25);
}
.swiper-slide img {
  transition: opacity 0.4s ease;
}
.swiper-slide:hover img {
  opacity: 1;
}

/* ---------------- NEW: Reveal CSS ---------------- */
/* Base hidden state for revealable elements */
[data-reveal] {
  opacity: 0;
  transform: translateY(18px) scale(0.992);
  transition: opacity 820ms cubic-bezier(.2,.9,.3,1), transform 820ms cubic-bezier(.2,.9,.3,1);
  will-change: opacity, transform;
  transition-delay: 0ms; /* can be overridden inline by script */
}

/* Visible state applied by IntersectionObserver */
.reveal-visible {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
