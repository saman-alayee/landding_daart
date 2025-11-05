<template>
    <section id="home"
        class="relative overflow-hidden min-h-[95vh] flex flex-col justify-center items-center text-center px-6 lg:px-12">
        <!-- 🌫️ Layered Animated Gradient Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-50 to-white animate-gradient-flow">
        </div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(180,200,255,0.2),transparent_60%)]">
        </div>

        <!-- 🌌 Moving Aurora Mist Waves -->
        <div class="absolute inset-0 overflow-hidden">
            <div
                class="absolute w-[150%] h-[200%] bg-gradient-to-r from-indigo-200/40 via-blue-100/40 to-purple-200/40 blur-3xl animate-aurora-sweep">
            </div>
        </div>

        <!-- 🫧 Floating Blobs -->
        <div class="absolute w-[38rem] h-[38rem] bg-indigo-200/25 rounded-full blur-3xl top-0 left-0 animate-blob">
        </div>
        <div
            class="absolute w-[30rem] h-[30rem] bg-blue-200/25 rounded-full blur-3xl bottom-0 right-0 animate-blob animation-delay-2000">
        </div>
        <div
            class="absolute w-[26rem] h-[26rem] bg-purple-200/25 rounded-full blur-3xl top-1/3 left-1/4 animate-blob animation-delay-4000">
        </div>

        <!-- 🔵 Rotating Glow Rings -->
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-indigo-200/30 rounded-full animate-spin-slow">
        </div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-200/25 rounded-full animate-spin-reverse">
        </div>

        <!-- 🌠 Multi-Layer Floating Particles -->
        <div v-for="n in 10" :key="'particle-' + n"
            class="absolute w-2 h-2 bg-gradient-to-r from-indigo-300 to-blue-200 rounded-full animate-particle" :style="{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${n * 0.6}s`,
                animationDuration: `${5 + Math.random() * 3}s`,
            }"></div>

        <div v-for="n in 10" :key="'particle-slow-' + n"
            class="absolute w-3 h-3 bg-gradient-to-r from-purple-300 to-indigo-200 rounded-full animate-particle-slow blur-sm"
            :style="{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${n * 1.2}s`,
            }"></div>

        <!-- 🌟 Main Content -->
        <div class="relative z-10 max-w-4xl" data-aos="zoom-in" data-aos-duration="1000">
            <h1
                class="font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-gray-800 tracking-tight drop-shadow-sm">
                {{ $t('hero.title.part1') }} <br />
                {{ $t('hero.title.part2') }}
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 animate-text-glow">
                    {{ $t('hero.title.highlight') }}
                </span>.
            </h1>

            <h5 class="text-gray-600 max-w-2xl mx-auto mb-10 text-lg lg:text-xl leading-relaxed" data-aos="fade-up"
                data-aos-delay="200">
                {{ $t('hero.subtitle') }}
            </h5>

            <div class="flex justify-center relative group" data-aos="zoom-in" data-aos-delay="400">
                <div
                    class="absolute w-40 h-40 bg-indigo-300/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 animate-pulse-wave">
                </div>

                <NuxtLink :to="localePath('/#contact')">
                    <BaseButton type="submit" size="lg"
                        class="glass-button bg-gradient-to-r from-indigo-400/90 via-blue-400/90 to-purple-400/90 text-white shadow-lg hover:shadow-indigo-300/40 transition-transform duration-300 hover:scale-110 backdrop-blur-lg border border-white/30 relative overflow-hidden">
                        <span class="relative z-10">{{ $t('hero.button') }}</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-white/10 to-indigo-200/10 opacity-0 group-hover:opacity-100 animate-glow-sweep">
                        </div>
                    </BaseButton>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import BaseButton from '~/components/elements/button/index.vue'

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


const localePath = useLocalePath()

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
/* 🌈 Soft Gradient Motion */
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

/* 🌌 Aurora Sweep */
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

/* 🫧 Blob Motion */
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

/* 🔵 Rotating Rings */
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

/* 💫 Text Glow */
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

/* 🌠 Particles */
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

/* 🌊 Button Glow Sweep */
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

/* 💥 Pulse Wave */
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

/* 🪞 Glass Button */
.glass-button {
    padding: 1rem 2.8rem;
    border-radius: 1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
}
</style>
