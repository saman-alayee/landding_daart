<template>
    <div>
            <!-- 🌟 Customer Slider Section - Modernized -->
    <section
      id="customers"
      class="relative flex flex-col justify-center py-16 md:py-20 lg:py-24 overflow-hidden transition-all duration-700"
      data-reveal
      data-delay="150"
    >
      <!-- 🌫️ Shared Gradient Background -->
      <SharedGradientBackground />

      <!-- Modern Grid Pattern Overlay - Dark mode support -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
      ></div>

      <!-- Floating Gradient Orbs - Blue Theme with dark mode -->
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/15 rounded-full blur-3xl animate-float-slow pointer-events-none"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-600/15 rounded-full blur-3xl animate-float-slow animation-delay-2000 pointer-events-none"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-300/10 dark:bg-sky-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
      ></div>

      <!-- 💠 Enhanced Title -->
      <div class="relative z-10 text-center mb-8 md:mb-12">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100/80 to-cyan-100/80 dark:from-blue-900/50 dark:to-cyan-900/50 backdrop-blur-md border border-blue-200/50 dark:border-blue-800/50 shadow-sm"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-blue-500 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-400"
            ></span>
          </span>
          <span class="text-sm font-medium text-blue-700 dark:text-blue-300"
            >Trusted Partners</span
          >
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          <span
            class="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
          >
            {{ $t("home.customersTitle") || "Trusted by Industry" }}
          </span>
          <span
            class="bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 dark:from-blue-400 dark:via-cyan-400 dark:to-sky-400 bg-clip-text text-transparent"
          >
            {{ $t("home.customersHighlight") || "Leaders" }}
          </span>
        </h2>

        <p class="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
          Join 500+ innovative companies worldwide
        </p>
      </div>

      <!-- 💫 Enhanced Logo Marquee -->
      <div class="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div
          class="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 pointer-events-none z-20 rounded-l-full"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 pointer-events-none z-20 rounded-r-full"
        ></div>

        <div class="overflow-hidden">
          <div class="logo-marquee inline-flex gap-6 md:gap-8 animate-marquee">
            <div
              v-for="item in cardsBrands"
              :key="'first-' + item.id"
              class="logo-item group"
            >
              <div
                class="relative flex items-center justify-center w-28 h-16 md:w-36 md:h-20 rounded-xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"
                ></div>
                <img
                  :src="item.icon"
                  :alt="'Logo ' + item.id"
                  class="logo-img h-7 md:h-9 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                ></div>
              </div>
            </div>

            <div
              v-for="item in cardsBrands"
              :key="'second-' + item.id"
              class="logo-item group"
            >
              <div
                class="relative flex items-center justify-center w-28 h-16 md:w-36 md:h-20 rounded-xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"
                ></div>
                <img
                  :src="item.icon"
                  :alt="'Logo ' + item.id"
                  class="logo-img h-7 md:h-9 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                />
                <div
                  class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                ></div>
              </div>
            </div>
          </div>
        </div>
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
  { id: 7, icon: fidibo },
];

const isDark = ref(false);
let mo: MutationObserver | null = null;
let observer: IntersectionObserver | null = null;

function updateDarkFromHtml() {
  isDark.value = document.documentElement.classList.contains("dark");
}

onMounted(async () => {
  await nextTick();

  updateDarkFromHtml();
  mo = new MutationObserver(() => updateDarkFromHtml());
  mo.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  const rootEl =
    document.querySelector("#customers")?.closest("div.relative") ||
    document.body;
  const targets = Array.from(
    rootEl.querySelectorAll("[data-reveal]"),
  ) as HTMLElement[];

  if ("IntersectionObserver" in window && targets.length) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
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
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer?.observe(el));
  } else {
    targets.forEach((el) => el.classList.add("reveal-visible"));
  }

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
/* Floating Animations */
@keyframes float-slow {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}
.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

/* Marquee Animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* Particle Float */
@keyframes particle-float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    transform: translateY(-30px) translateX(15px);
    opacity: 0.8;
  }
  75% {
    opacity: 0.3;
  }
}
.animate-particle-float {
  animation: particle-float 6s ease-in-out infinite;
}

/* Logo Styling - Gray in light mode, White in dark mode */
.logo-img {
  opacity: 0.7;
  /* Light mode: Gray logos */
  filter: grayscale(100%) brightness(0.6) contrast(0.8);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* On hover - logos remain gray but slightly lighter */
.logo-item:hover .logo-img {
  opacity: 1;
  filter: grayscale(100%) brightness(0.8) contrast(0.9);
  transform: scale(1.1);
}

/* Dark mode: White logos */
.dark .logo-img {
  opacity: 0.9;
  filter: brightness(0) invert(1) grayscale(0);
}

.dark .logo-item:hover .logo-img {
  opacity: 1;
  filter: brightness(0) invert(1) grayscale(0);
  transform: scale(1.1);
}

/* Card hover effects with dark mode */
.logo-item div {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-item:hover div {
  transform: translateY(-2px);
  border-color: rgba(59, 130, 246, 0.3);
}

.dark .logo-item:hover div {
  border-color: rgba(96, 165, 250, 0.4);
}

/* Animation delays */
.animation-delay-2000 {
  animation-delay: 2s;
}

/* Reveal Animations */
[data-reveal] {
  opacity: 0;
  transform: translateY(18px) scale(0.992);
  transition: opacity 820ms cubic-bezier(0.2, 0.9, 0.3, 1),
    transform 820ms cubic-bezier(0.2, 0.9, 0.3, 1);
  will-change: opacity, transform;
  transition-delay: 0ms;
}

.reveal-visible {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
  .animate-marquee,
  .animate-float-slow,
  .animate-pulse-slow,
  .animate-particle-float,
  .animate-bounce-slow {
    animation: none !important;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .animate-marquee {
    animation-duration: 15s;
  }
}
</style>
