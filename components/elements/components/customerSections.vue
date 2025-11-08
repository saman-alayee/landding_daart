<template>
  <!-- 🌟 Customer Slider Section -->
  <section
    id="customers"
    class="relative flex flex-col justify-center h-[20rem] py-10 md:py-14 lg:py-10 overflow-hidden transition-all duration-700"
    data-aos="fade-up"
  >
    <!-- 🌫️ Layered Animated Gradient Background (🌑 Dark mode only) -->
    <div
      class="absolute inset-0 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-neutral-900 animate-gradient-flow"
    ></div>
    <div
      class="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(30,41,59,0.25),transparent_60%)]"
    ></div>

    <!-- 🌌 Aurora Mist Waves (dark mode only) -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-[150%] h-[200%] dark:bg-gradient-to-r dark:from-indigo-900/30 dark:via-blue-900/30 dark:to-purple-900/30 blur-3xl animate-aurora-sweep"
      ></div>
    </div>

    <!-- 🫧 Floating Blobs (dark only) -->
    <div
      class="absolute w-[30rem] h-[30rem] rounded-full blur-3xl top-0 left-0 animate-blob dark:bg-indigo-900/30"
    ></div>
    <div
      class="absolute w-[24rem] h-[24rem] rounded-full blur-3xl bottom-0 right-0 animate-blob animation-delay-2000 dark:bg-sky-900/28"
    ></div>

    <!-- 💠 Title -->
    <h5
      class="flex items-center justify-center gap-4 mt-32 text-center text-gray-600 dark:text-gray-300 font-base text-lg tracking-wide mb-6 relative z-10"
    >
      <span class="h-px w-12 sm:w-20 bg-gray-300 dark:bg-gray-600"></span>
      {{ $t('home.customersTitle') }}
      <span class="h-px w-12 sm:w-20 bg-gray-300 dark:bg-gray-600"></span>
    </h5>

    <!-- 💫 Swiper -->
    <div data-aos="zoom-in-up" data-aos-delay="200" class="relative z-10 px-4">
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
</template>

<script setup lang="ts">
import banimid from '~/assets/image/banimid-2.png'
import evano from '~/assets/image/evano-1.png'
import taghcheh from '~/assets/image/taghcheh-1.png'
import signal from '~/assets/image/signal.png'
import okala from '~/assets/image/okala-1.png'
import khanoomi from '~/assets/image/khanoomi-1.png'
import fidibo from '~/assets/image/fidibo-1.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()

onMounted(async () => {
  await nextTick()
  AOS.init({ duration: 1000, once: true, offset: 100 })
  setTimeout(() => AOS.refresh(), 800)
})

const cardsBrands = [
  { id: 1, icon: banimid },
  { id: 2, icon: evano },
  { id: 3, icon: taghcheh },
  { id: 4, icon: signal },
  { id: 5, icon: okala },
  { id: 6, icon: khanoomi },
  { id: 7, icon: fidibo },
]
</script>

<style scoped>
/* 🌈 Background Motion */
@keyframes gradient-flow {
  0%, 100% {
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
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -40px) scale(1.1); }
  66% { transform: translate(-40px, 30px) scale(0.9); }
}
.animate-blob {
  animation: blob 12s infinite ease-in-out;
  opacity: 0.4;
}
.animation-delay-2000 { animation-delay: 2s; }

/* 🔹 Smooth Zoom Animation */
.swiper-slide div {
  transform-origin: center;
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.swiper-slide:hover div { transform: scale(1.25); }

/* ✨ Fade Effect */
.swiper-slide img {
  transition: opacity 0.4s ease;
}
.swiper-slide:hover img { opacity: 1; }
</style>