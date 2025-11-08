<template>
    <!-- Services Section -->
    <section id="services" class="relative overflow-hidden min-h-screen py-16">
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

        <!-- ✨ Floating Particles -->
        <div
            v-for="n in 12"
            :key="'service-particle-' + n"
            class="absolute w-2 h-2 rounded-full animate-particle hidden dark:block bg-gradient-to-r from-blue-600 to-indigo-500"
            :style="{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${n * 0.3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
            }"
        ></div>

        <div class="relative z-10">
            <div class="mt-20" data-aos="fade-up" data-aos-duration="1000">
                <h5 class="text-gray-600 dark:text-gray-300 text-center mb-6 py-0 px-8 lg:px-32 mb-12">
                    {{ $t('cardsSection.subtitle') }}
                </h5>
            </div>

            <h1 class="text-center text-gray-900 dark:text-gray-100" data-aos="fade-up" data-aos-delay="150">
                {{ $t('cardsSection.title') }}
            </h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 py-0 px-8 lg:px-24 mb-12 relative"
                :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
                <!-- Cards -->
                <div v-for="(card, i) in cards" :key="i" :class="[
                    'group relative p-8 bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl shadow-lg transition-all duration-700 ease-out transform hover:-translate-y-4 hover:scale-[1.05] hover:shadow-2xl animate-float',
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
                            class="w-12 h-12 mb-5 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-125 animate-pulse-slow">
                            <img :src="card.icon" :alt="$t(`cards.${i}.title`)" class="w-6 h-6" />
                        </div>

                        <!-- Title -->
                        <h3 :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
                            class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-all duration-300">
                            {{ $t(`cards.${i}.title`) }}
                        </h3>

                        <!-- Description -->
                        <p :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
                            class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {{ $t(`cards.${i}.desc`) }}
                        </p>
                    </div>
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
import { onMounted, nextTick } from 'vue'
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
/* 🌈 Background Motion - SAME AS CUSTOMER SECTION */
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

/* 🌌 Aurora Wave - SAME AS CUSTOMER SECTION */
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

/* 🫧 Floating Blobs - SAME AS CUSTOMER SECTION */
@keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(50px, -40px) scale(1.1); }
    66% { transform: translate(-40px, 30px) scale(0.9); }
}
.animate-blob {
    animation: blob 12s infinite ease-in-out;
    opacity: 0.4;
}
.animation-delay-2000 { 
    animation-delay: 2s; 
}

/* ✨ Floating Particles - SAME AS INFO SECTION */
@keyframes particle {
    0%, 100% {
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

/* 💫 Your Existing Animations - KEPT */
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-6px);
    }
}
.animate-float {
    animation: float 6s ease-in-out infinite;
}

@keyframes glow {
    0%, 100% {
        opacity: 0.2;
    }
    50% {
        opacity: 0.6;
    }
}
.animate-glow {
    animation: glow 4s ease-in-out infinite;
}

@keyframes pulse-slow {
    0%, 100% {
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