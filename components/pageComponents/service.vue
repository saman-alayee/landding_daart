<template>
  <section
    class="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-6 overflow-hidden"
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <!-- Background Blobs -->
    <div
      class="absolute w-[35rem] h-[35rem] bg-blue-400/18 rounded-full blur-3xl top-[-6rem] left-[-6rem] animate-blob"
      aria-hidden="true"
    ></div>
    <div
      class="absolute w-[35rem] h-[35rem] bg-purple-400/16 rounded-full blur-3xl bottom-[-6rem] right-[-6rem] animate-blob animation-delay-2000"
      aria-hidden="true"
    ></div>

    <!-- HERO -->
    <div class="relative max-w-4xl mx-auto text-center mb-16 z-10" data-aos="fade-down">
      <h1 class="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4">
        Web Development
      </h1>
      <p class="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        We build lightning-fast, secure, and modern websites that elevate your brand and deliver measurable business
        results — with beautiful interfaces, bulletproof performance, and SEO-friendly structure.
      </p>

      <div class="mt-8 flex justify-center gap-4" data-aos="zoom-in" data-aos-delay="200">
        <NuxtLink
          :to="localePath('/contact')"
          class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          {{ $t('services.getStarted') || 'Get Started' }}
        </NuxtLink>

        <button
          @click="scrollToCaseStudy"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/80 text-indigo-700 font-medium shadow-sm hover:shadow-md transition"
        >
          See case study
        </button>
      </div>
    </div>

    <!-- Image + Intro -->
    <div class="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 mb-12 z-10">
      <div class="md:w-1/2 text-gray-700" data-aos="fade-right" data-aos-delay="150">
        <h2 class="text-3xl font-semibold mb-4">Crafting digital experiences that convert</h2>
        <p class="mb-4">
          Our approach combines UX-first design, performant front-end engineering and scalable APIs. We prioritize
          accessibility, fast load times and measurable outcomes so your site becomes a growth engine.
        </p>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <li class="flex items-start gap-3">
            <span class="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500 text-white">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <span>
              Mobile-first, responsive interfaces
            </span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500 text-white">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12h18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <span>
              Accessibility & best practices
            </span>
          </li>
        </ul>
      </div>

      <div class="md:w-1/2" data-aos="fade-left" data-aos-delay="250">
        <div class="relative rounded-3xl overflow-hidden shadow-2xl group">
          <img src="/assets/image/daart-banner.webp" alt="Web development example" class="w-full h-[360px] object-cover transform group-hover:scale-105 transition duration-700" />
          <div class="absolute inset-0 bg-gradient-to-tr from-indigo-600/6 to-blue-500/6 opacity-0 group-hover:opacity-100 transition duration-700" aria-hidden="true"></div>
        </div>
      </div>
    </div>

    <!-- BENEFITS + STATS -->
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12 z-10">
      <!-- Benefits -->
      <div class="space-y-6" data-aos="fade-up">
        <div class="p-6 bg-white/80 backdrop-blur rounded-2xl border border-indigo-100 shadow">
          <h3 class="text-lg font-semibold mb-2">Why choose us</h3>
          <p class="text-gray-600 mb-4">
            We bring product thinking and engineering rigor — from fast prototyping to long-term maintenance and analytics.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">Performance-first</span>
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm">SEO optimized</span>
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm">Secure by default</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="p-5 bg-gradient-to-tr from-blue-500 to-indigo-500 text-white rounded-2xl shadow-md text-center" data-aos="zoom-in" data-aos-delay="100">
            <div class="text-2xl font-bold">99%</div>
            <div class="text-sm opacity-80">Uptime SLA</div>
          </div>
          <div class="p-5 bg-gradient-to-tr from-indigo-500 to-purple-500 text-white rounded-2xl shadow-md text-center" data-aos="zoom-in" data-aos-delay="200">
            <div class="text-2xl font-bold">2s</div>
            <div class="text-sm opacity-80">Avg page load</div>
          </div>
          <div class="p-5 bg-gradient-to-tr from-cyan-500 to-blue-500 text-white rounded-2xl shadow-md text-center" data-aos="zoom-in" data-aos-delay="300">
            <div class="text-2xl font-bold">+35%</div>
            <div class="text-sm opacity-80">Avg conversion lift</div>
          </div>
        </div>
      </div>

      <!-- Feature grid -->
      <div class="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="150">
        <div class="p-6 rounded-2xl bg-white/80 backdrop-blur border border-indigo-100 shadow hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-3">
            <Code class="w-6 h-6 text-indigo-600" />
            <h4 class="font-semibold">Modern stack</h4>
          </div>
          <p class="text-gray-600 text-sm">Vue 3, Nuxt 3, Vite — modern front-end with server-side rendering and incremental static generation.</p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 backdrop-blur border border-indigo-100 shadow hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-3">
            <Globe class="w-6 h-6 text-indigo-600" />
            <h4 class="font-semibold">Responsive & accessible</h4>
          </div>
          <p class="text-gray-600 text-sm">WCAG-aware builds and layouts that work and feel native on every device.</p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 backdrop-blur border border-indigo-100 shadow hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-3">
            <svg class="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            <h4 class="font-semibold">Analytics & SEO</h4>
          </div>
          <p class="text-gray-600 text-sm">Built with semantic markup, fast metrics and analytics hooks for continuous improvements.</p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 backdrop-blur border border-indigo-100 shadow hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-3">
            <Rocket class="w-6 h-6 text-indigo-600" />
            <h4 class="font-semibold">Performance tuning</h4>
          </div>
          <p class="text-gray-600 text-sm">Image optimization, code splitting, caching strategies and CDN integration.</p>
        </div>
      </div>
    </div>

    <!-- CASE STUDY -->
    <div ref="caseStudyRef" class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16 z-10" data-aos="fade-up" data-aos-delay="200">
      <div>
        <img src="/assets/image/daart-banner.webp" alt="Case study example" class="rounded-2xl shadow-lg w-full object-cover h-[360px]" />
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-3">Case Study — E-commerce sprint</h3>
        <p class="text-gray-600 mb-4">
          We redesigned and rebuilt a mid-size e-commerce platform to improve performance and conversion. Key outcomes included an 40% increase in conversions and a 50% reduction in time-to-interactive.
        </p>
        <ul class="list-inside list-disc text-gray-600 space-y-2">
          <li>Full front-end rewrite with Nuxt 3 + SSR</li>
          <li>Checkout flow optimization that reduced drop-offs</li>
          <li>Automated image optimization & CDN deployment</li>
        </ul>
        <div class="mt-6">
          <NuxtLink :to="localePath('/contact')" class="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition">
            Talk about a similar project
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- TESTIMONIALS -->
    <div class="max-w-6xl mx-auto mb-12 z-10" data-aos="fade-up" data-aos-delay="250">
      <h3 class="text-2xl font-bold text-center mb-6">What clients say</h3>
      <div class="grid sm:grid-cols-2 gap-6">
        <div v-for="(t, i) in testimonials" :key="i" class="p-6 bg-white/80 rounded-2xl shadow border border-indigo-100">
          <p class="text-gray-700 mb-3">“{{ t.text }}”</p>
          <div class="flex items-center gap-3">
            <img :src="t.avatar" alt="" class="w-10 h-10 rounded-full object-cover" />
            <div>
              <div class="font-semibold">{{ t.name }}</div>
              <div class="text-sm text-gray-500">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ (accordion) -->
    <div class="max-w-4xl mx-auto mb-20 z-10" data-aos="fade-up" data-aos-delay="300">
      <h3 class="text-2xl font-bold text-center mb-6">Frequently asked questions</h3>
      <div class="space-y-3">
        <div v-for="(f, idx) in faqs" :key="idx" class="bg-white/80 rounded-2xl border border-indigo-100 overflow-hidden">
          <button @click="toggleFaq(idx)" class="w-full px-6 py-4 flex items-center justify-between text-left">
            <div>
              <div class="font-semibold">{{ f.q }}</div>
              <div class="text-sm text-gray-500 mt-1">{{ f.meta }}</div>
            </div>
            <div :class="{'transform rotate-180': openFaq === idx}" class="transition-transform">
              <svg class="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </button>
          <div v-show="openFaq === idx" class="px-6 pb-6 text-gray-600 transition-all">
            {{ f.a }}
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center z-10" data-aos="zoom-in" data-aos-delay="350">
      <NuxtLink :to="localePath('/contact')" class="inline-block px-12 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition">
        Start your project
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Code, Globe, Rocket } from 'lucide-vue-next'
const localePath = useLocalePath()

// small reusable data
const features = [
  { title: 'Modern Stack', text: 'Vue 3 + Nuxt 3 with Vite for the fastest DX and runtime.', icon: Code },
  { title: 'Responsive', text: 'Pixel-perfect layouts and accessible experiences across devices.', icon: Globe },
  { title: 'Performance', text: 'Image optimization, caching, and CDN delivery for fast pages.', icon: Rocket }
]

const testimonials = [
  { name: 'Sara Ali', role: 'Head of Growth — RetailCo', text: 'Daart delivered a high-performing site and conversion improvements exceeded expectations.', avatar: '/assets/image/avatar1.jpg' },
  { name: 'John Miller', role: 'Founder — AppX', text: 'Fast delivery, clear communication and measurable outcomes. Highly recommended.', avatar: '/assets/image/avatar2.jpg' }
]

// FAQ accordion state
const faqs = [
  { q: 'How long does a typical project take?', meta: 'Timeline & phases', a: 'A typical website (5–10 pages) takes 6–10 weeks depending on scope and integrations.' },
  { q: 'Will my site be SEO ready?', meta: 'Search & structure', a: 'Yes. We include on-page SEO, semantic HTML and performance improvements designed to help ranking.' },
  { q: 'Do you provide post-launch support?', meta: 'Maintenance', a: 'Yes — we offer maintenance, monitoring and iterative improvements packages.' }
]

const openFaq = ref<number | null>(null)
function toggleFaq(i: number) {
  openFaq.value = openFaq.value === i ? null : i
}

// scroll to case study ref
const caseStudyRef = ref<HTMLElement | null>(null)
function scrollToCaseStudy() {
  if (caseStudyRef.value) {
    caseStudyRef.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<style scoped>
/* blob animation */
@keyframes blob {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(32px, -36px) scale(1.06); }
  66% { transform: translate(-24px, 22px) scale(0.96); }
  100% { transform: translate(0, 0) scale(1); }
}
.animate-blob {
  animation: blob 14s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

/* small show/hide transition for FAQ (v-show) */
[v-cloak] { display: none !important; }

/* minor responsive tweaks */
@media (max-width: 640px) {
  .animate-blob { opacity: 0.6; }
}
</style>
