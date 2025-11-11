<template>
    <div 
        :class="[
   'group relative p-8 bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl shadow-lg transition-transform duration-300 ease-out transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl animate-float will-change-transform',            customClass
        ]" 
        :data-aos="animationType" 
        :data-aos-delay="animationDelay"
        :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
    >
        <!-- Glow Background -->
        <div
            v-if="showGlow"
            class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-3xl animate-glow"
        ></div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-start h-full">
            <!-- Icon -->
            <div
                v-if="icon"
                class="w-12 h-12 mb-5 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-125 animate-pulse-slow"
            >
                <img :src="icon" :alt="title" class="w-6 h-6" />
            </div>

            <!-- Custom Icon Slot -->
            <div
                v-else-if="$slots.icon"
                class="w-12 h-12 mb-5 rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-125 animate-pulse-slow"
            >
                <slot name="icon"></slot>
            </div>

            <!-- Title -->
            <h3 
                :class="[
                    $i18n.locale === 'ar' ? 'text-right' : 'text-left',
                    'text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-all duration-300'
                ]"
            >
                {{ title }}
            </h3>

            <!-- Description -->
            <p 
                :class="[
                    $i18n.locale === 'ar' ? 'text-right' : 'text-left',
                    'text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-grow'
                ]"
            >
                {{ description }}
            </p>

            <!-- Custom Content Slot -->
            <div v-if="$slots.default" class="w-full mt-4">
                <slot></slot>
            </div>

            <!-- Action Button -->
            <button
                v-if="showAction"
                @click="$emit('action')"
                class="mt-6 px-6 py-2 bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
                {{ actionText }}
            </button>

            <!-- Custom Footer Slot -->
            <div v-if="$slots.footer" class="w-full mt-4">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t: $t } = useI18n()

interface Props {
    title: string
    description: string
    icon?: string
    showGlow?: boolean
    showAction?: boolean
    actionText?: string
    animationType?: string
    animationDelay?: number
    customClass?: string
}

withDefaults(defineProps<Props>(), {
    showGlow: true,
    showAction: false,
    actionText: 'Learn More',
    animationType: 'fade-up',
    animationDelay: 150,
    customClass: ''
})

defineEmits<{
    action: []
}>()
</script>

<style scoped>
/* 💫 Floating Animation */
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

/* ✨ Glow Animation */
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

/* 🔵 Pulse Animation */
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
}.group:hover .animate-float {
  animation-play-state: paused;
}
</style>