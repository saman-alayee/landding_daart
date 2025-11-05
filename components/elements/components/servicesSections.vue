<template>
    <!-- Services Section -->
    <section id="services" class="relative overflow-hidden">
        <!-- Decorative background -->
        <div class="absolute inset-0 bg-gradient-to-b from-blue-50/10 to-purple-100/10 animate-gradient"></div>

        <div class="mt-20" data-aos="fade-up" data-aos-duration="1000">
            <h5 class="text-gray-600 text-center mb-6 py-0 px-8 lg:px-32 mb-12">
                {{ $t('cardsSection.subtitle') }}
            </h5>
        </div>

        <h1 class="text-center" data-aos="fade-up" data-aos-delay="150">
            {{ $t('cardsSection.title') }}
        </h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 py-0 px-8 lg:px-24 mb-12 relative"
            :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
            <!-- Cards -->
            <div v-for="(card, i) in cards" :key="i" :class="[
                'group relative p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg transition-all duration-700 ease-out transform hover:-translate-y-4 hover:scale-[1.05] hover:shadow-2xl animate-float',
                i % 4 === 1 ? '-translate-y-10' :
                    i % 4 === 2 ? 'translate-y-10' :
                        i % 4 === 3 ? '-translate-y-10' : ''
            ]" :data-aos="i % 2 === 0 ? 'fade-up-right' : 'fade-up-left'" :data-aos-delay="i * 150">
                <!-- Glow Background -->
                <div
                    class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-3xl animate-glow">
                </div>

                <!-- Content -->
                <div class="relative z-10 flex flex-col items-start">
                    <!-- Icon -->
                    <div
                        class="w-12 h-12 mb-5 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-125 animate-pulse-slow">
                        <img :src="card.icon" :alt="$t(`cards.${i}.title`)" class="w-6 h-6" />
                    </div>

                    <!-- Title -->
                    <h3 :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
                        class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-all duration-300">
                        {{ $t(`cards.${i}.title`) }}
                    </h3>

                    <!-- Description -->
                    <p :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
                        class="text-gray-700 text-sm leading-relaxed">
                        {{ $t(`cards.${i}.desc`) }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import rocket from '~/assets/image/rocket-01.svg'
import chart from '~/assets/image/chart-breakout-circle.svg'
import magic from '~/assets/image/magic-wand-02.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Monitor from '~/assets/image/globe-02-1.svg'
import Search from '~/assets/image/search-refraction.svg'
import Users from '~/assets/image/users-02.svg'
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
const cards = [
    { icon: Monitor },      // Google Ads
    { icon: rocket },       // Banner Ads
    { icon: chart },        // In-App Ads
    { icon: magic },        // Push Notification Ads
    { icon: Search },       // Bing Ads
    { icon: Users },        // Social Media Ads
]
</script>
<style scoped>
/* 🌈 Smooth Gradient Flow */
@keyframes gradient-flow {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient-flow 15s ease infinite;
}

/* 💫 Soft Floating Motion */
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-6px);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* ✨ Gentle Glow Animation */
@keyframes glow {

    0%,
    100% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.6;
    }
}

.animate-glow {
    animation: glow 4s ease-in-out infinite;
}

/* 🔵 Subtle Pulse Effect */
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
</style>
