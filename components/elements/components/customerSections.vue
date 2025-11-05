<template>
  <!-- 🌟 Customer Slider -->
  <div class="flex flex-col justify-center mt-12" data-aos="fade-up">
    <h5
      class="flex items-center justify-center gap-4 text-center text-gray-500 font-base mb-8 text-lg tracking-wide"
    >
      <span class="h-px w-16 sm:w-24 bg-gray-300"></span>
      {{ $t('home.customersTitle') }}
      <span class="h-px w-16 sm:w-24 bg-gray-300"></span>
    </h5>

    <div data-aos="zoom-in-up" data-aos-delay="200">
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
            class="relative flex items-center justify-center rounded-xl p-4 transition-all duration-500 hover:scale-125 hover:z-10"
          >
            <img
              class="h-8 sm:h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-500"
              :src="item.icon"
              alt="Logo"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
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
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t: $t } = useI18n()
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';




onMounted(async () => {
    await nextTick()
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    })
    setTimeout(() => {
        AOS.refresh()
    }, 800)
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
/* 🔹 Smooth Zoom Animation for Swiper Logos */
.swiper-slide div {
  transform-origin: center;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.swiper-slide:hover div {
  transform: scale(1.25);
}

/* ✨ Subtle Fade Effect for Images */
.swiper-slide img {
  transition: opacity 0.4s ease;
}

.swiper-slide:hover img {
  opacity: 1;
}
</style>
