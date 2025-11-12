<template>
  <section
    id="home"
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
    class="relative overflow-hidden min-h-[95vh] flex flex-col justify-center items-center text-center px-6 lg:px-12"
  >
    <!-- 🌫️ Layered Animated Gradient Background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-50 to-white animate-gradient-flow dark:from-slate-900 dark:via-slate-800 dark:to-neutral-900"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(180,200,255,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(30,41,59,0.25),transparent_60%)]"
    ></div>

    <!-- 🌌 Moving Aurora Mist Waves -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-[150%] h-[200%] bg-gradient-to-r from-indigo-200/40 via-blue-100/40 to-purple-200/40 blur-3xl animate-aurora-sweep dark:from-indigo-900/30 dark:via-blue-900/30 dark:to-purple-900/30"
      ></div>
    </div>

    <!-- 🫧 Floating Blobs -->
    <div
      class="absolute w-[38rem] h-[38rem] rounded-full blur-3xl top-0 left-0 animate-blob bg-indigo-200/25 dark:bg-indigo-900/30"
    ></div>
    <div
      class="absolute w-[30rem] h-[30rem] rounded-full blur-3xl bottom-0 right-0 animate-blob animation-delay-2000 bg-blue-200/25 dark:bg-sky-900/28"
    ></div>
    <div
      class="absolute w-[26rem] h-[26rem] rounded-full blur-3xl top-1/3 left-1/4 animate-blob animation-delay-4000 bg-purple-200/25 dark:bg-purple-900/26"
    ></div>

    <!-- 🔵 Rotating Glow Rings -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border rounded-full animate-spin-slow border-indigo-200/30 dark:border-indigo-800/40"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border rounded-full animate-spin-reverse border-blue-200/25 dark:border-sky-800/28"
    ></div>

    <!-- 🌠 Multi-Layer Floating Particles -->
    <div
      v-for="n in 10"
      :key="'particle-' + n"
      class="absolute w-2 h-2 rounded-full animate-particle bg-gradient-to-r from-indigo-300 to-blue-200 dark:from-indigo-700 dark:to-sky-700"
      :style="{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${n * 0.6}s`,
        animationDuration: `${5 + Math.random() * 3}s`,
      }"
    ></div>

    <div
      v-for="n in 10"
      :key="'particle-slow-' + n"
      class="absolute w-3 h-3 rounded-full animate-particle-slow blur-sm bg-gradient-to-r from-purple-300 to-indigo-200 dark:from-purple-800 dark:to-indigo-800"
      :style="{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${n * 1.2}s`,
      }"
    ></div>

    <!-- 🌟 Main Content (revealed via IntersectionObserver + CSS transitions) -->
    <div class="relative z-10 max-w-4xl">
      <!-- Title -->
      <h1
        data-reveal
        class="reveal delay-200 font-extrabold text-4xl lg:text-6xl lg-2 leading-tight mb-6 tracking-tight drop-shadow-sm"
        :class="isDark ? 'text-gray-100' : 'text-gray-800'"
      >
        {{ $t('hero.title.part1') }} <br />
        {{ $t('hero.title.part2') }}
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 animate-text-glow dark:from-cyan-300 dark:via-indigo-300 dark:to-violet-300"
        >
          {{ $t('hero.title.highlight') }}
        </span>
        .
      </h1>

      <!-- Subtitle -->
      <h5
        data-reveal
        class="reveal delay-400 max-w-2xl mx-auto mb-10 text-lg lg:text-xl leading-relaxed"
        :class="isDark ? 'text-slate-300' : 'text-gray-600'"
      >
        {{ $t('hero.subtitle') }}
      </h5>

      <!-- CTA -->
      <div data-reveal class="reveal delay-600 flex justify-center relative group">
        <div
          class="absolute w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 animate-pulse-wave bg-indigo-300/10 dark:bg-indigo-700/10"
        ></div>

        <NuxtLink :to="localePath('/#contact')">
          <BaseButton
            type="button"
            :class="[
              'glass-button text-white shadow-lg transition-transform duration-300 hover:scale-110 backdrop-blur-lg border border-white/30 relative overflow-hidden',
              isDark
                ? 'bg-gradient-to-r from-blue-600/90 to-indigo-700/90 hover:shadow-indigo-900/40'
                : 'bg-gradient-to-r from-indigo-400/90 via-blue-400/90 to-purple-400/90 hover:shadow-indigo-300/40'
            ]"
          >
            <span class="relative z-10">{{ $t('hero.button') }}</span>
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 animate-glow-sweep"
              :class="isDark ? 'bg-gradient-to-r from-white/6 to-sky-600/6' : 'bg-gradient-to-r from-white/10 to-indigo-200/10'"
            ></div>
          </BaseButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import BaseButton from '~/components/elements/button/index.vue'
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()
const localePath = useLocalePath()

// reactive dark flag — observes <html class="dark"> changes
const isDark = ref(false)
let mo: MutationObserver | null = null
let observer: IntersectionObserver | null = null

function updateDarkFromHtml() {
  isDark.value = document.documentElement.classList.contains('dark')
}

function onStorage(e: StorageEvent) {
  if (e.key === 'theme') {
    updateDarkFromHtml()
  }
}

onMounted(async () => {
  await nextTick()

  // initial theme read
  updateDarkFromHtml()

  // observe class changes on <html> so component reacts when global theme toggles
  mo = new MutationObserver(() => updateDarkFromHtml())
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  // also listen to storage events (header toggle might set localStorage)
  window.addEventListener('storage', onStorage)

  // IntersectionObserver reveal
  const revealTargets = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[]

  if (revealTargets.length > 0 && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer?.unobserve(el)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      }
    )

    revealTargets.forEach((el) => observer?.observe(el))
  } else {
    // fallback — immediately show elements if IntersectionObserver not supported
    revealTargets.forEach((el) => el.classList.add('visible'))
  }
})

onBeforeUnmount(() => {
  if (mo) mo.disconnect()
  if (observer) observer.disconnect()
  window.removeEventListener('storage', onStorage)
})
</script>

<style scoped>
/* -------- Existing heavy but harmless background animations (kept) -------- */
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
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes spin-slow {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes spin-reverse {
  0% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 28s linear infinite;
}
.animate-spin-reverse {
  animation: spin-reverse 40s linear infinite;
}

@keyframes text-glow {
  0%,
  100% {
    filter: drop-shadow(0 0 8px rgba(180, 200, 255, 0.4));
  }
  50% {
    filter: drop-shadow(0 0 18px rgba(167, 139, 250, 0.6));
  }
}
.animate-text-glow {
  animation: text-glow 3.5s ease-in-out infinite;
}

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
  animation: particle 6s ease-in-out infinite;
}
@keyframes particle-slow {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-10px) scale(1.1);
    opacity: 0.8;
  }
}
.animate-particle-slow {
  animation: particle-slow 9s ease-in-out infinite;
}

@keyframes glow-sweep {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
.animate-glow-sweep {
  animation: glow-sweep 2.4s linear infinite;
}

@keyframes pulse-wave {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  70% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
.animate-pulse-wave {
  animation: pulse-wave 2.5s ease-out infinite;
}

.glass-button {
  padding: 1rem 2.8rem;
  border-radius: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}
.lg-2 {
  line-height: 1.3 !important;
}

/* ---------------- New reveal (CSS-only) ---------------- */
/* base reveal state */
.reveal {
  opacity: 0;
  transform: translateY(18px) scale(0.992);
  transition-property: opacity, transform;
  transition-duration: 820ms;
  transition-timing-function: cubic-bezier(.2,.9,.3,1);
  will-change: opacity, transform;
}

/* visible state — added by IntersectionObserver */
.reveal.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* delay helpers (transition-delay) */
.delay-100 { transition-delay: .1s; }
.delay-150 { transition-delay: .15s; }
.delay-200 { transition-delay: .2s; }
.delay-300 { transition-delay: .3s; }
.delay-400 { transition-delay: .4s; }
.delay-600 { transition-delay: .6s; }

/* make CTA feel slightly "zoom in" on reveal */
.reveal.delay-600 { transform-origin: center; }

/* small accessibility: prefers-reduced-motion respected */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
