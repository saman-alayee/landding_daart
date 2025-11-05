<template>
    <!-- 🌟 Info Section 1 -->


    <!-- 🌟 Info Section 2 -->
    <section class="mt-20 flex flex-col lg:flex-row items-center justify-between gap-8 px-6 relative overflow-hidden"
        :class="$i18n.locale === 'ar' ? 'lg:flex-row-reverse' : ''" data-aos="fade-up" data-aos-duration="1200">
        <div
            class="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-indigo-50 opacity-70 -z-10 animate-pulse-slow">
        </div>

        <!-- Text Content -->
        <div class="lg:w-6/12 text-center lg:text-right" data-aos="fade-left" data-aos-delay="200"
            data-aos-duration="1200">
            <h2
                class="text-3xl lg:text-4xl font-semibold text-gray-900 text-center leading-snug transition-all duration-500 hover:text-indigo-700">
                {{ $t('info2.title') }}
            </h2>
            <p class="mt-4 text-gray-600 text-center text-base leading-relaxed transition-all duration-700 hover:text-gray-800"
                data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200">
                {{ $t('info2.desc') }}
            </p>
        </div>

        <!-- Image -->
        <div class="lg:w-6/12 w-full flex justify-center"
            :class="$i18n.locale === 'ar' ? 'lg:text-right' : 'lg:text-left'" data-aos="fade-right" data-aos-delay="600"
            data-aos-duration="1200">
            <img src="/assets/image/Google logo.png" :alt="$t('info2.imageAlt')"
                class="w-full max-w-md lg:max-w-none object-contain transform hover:scale-110 hover:rotate-2 transition-all duration-700 ease-out" />
        </div>
    </section>
</template>



<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t: $t } = useI18n()
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



</script>
<style scoped>
/* 💥 Gentle Pulse Animation */
@keyframes pulse-slow {
    0%, 100% {
        opacity: 0.7;
    }
    50% {
        opacity: 0.9;
    }
}

.animate-pulse-slow {
    animation: pulse-slow 6s ease-in-out infinite;
}
</style>