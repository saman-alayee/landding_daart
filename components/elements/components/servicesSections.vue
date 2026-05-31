<template>
  <!-- Services Section - Modern Redesign with 4 Cards in One Line -->
  <section id="services" class="relative overflow-hidden py-20 md:py-24">
   

    <div class="relative z-10  mx-auto px-6">


      <!-- Services Grid - 4 Cards in One Line with Last One Larger -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <!-- First 3 Cards (Normal Size) -->
        <div
          v-for="(card, index) in cards.slice(0, 3)"
          :key="index"
          class="service-card group"
        >
          <div class="relative ">
            <!-- Card Glow Effect -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <!-- Card Content -->
            <div class="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              
              <!-- Icon Container -->
              <div class="relative z-10 mb-5">
                <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-400/20 dark:to-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg">
                  <img
                    :src="card.icon"
                    :alt="card.type"
                    class="w-7 h-7 object-contain dark:brightness-100 transition-all duration-500"
                  />
                </div>
              </div>
              
              <!-- Title -->
              <h3 class="relative z-10 text-lg md:text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {{ $t(`cards.${index}.title`) }}
              </h3>
              
              <!-- Description -->
              <p class="relative z-10 text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {{ $t(`cards.${index}.desc`).substring(0, 160) }}{{ $t(`cards.${index}.desc`).length > 160 ? '...' : '' }}
              </p>
              
              <!-- Learn More Link -->
              <div class="relative z-10 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-xs group-hover:gap-3 transition-all duration-300 cursor-pointer" @click="handleCardAction(index)">
                <span>Learn More</span>
                <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- 4th Card - Larger (Spans across but in same row) -->
        <div class="service-card-featured lg:col-span-2 group">
          <div class="relative ">
            <!-- Featured Card Glow -->
            <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <!-- Featured Card Content - Larger -->
            <div class="relative  bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800/80 dark:to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              
              <!-- Featured Badge -->
              <div class="absolute top-3 right-3">
                <div class="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                  Featured
                </div>
              </div>
              
              <!-- Icon Container - Larger -->
              <div class="mb-4">
                <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 dark:from-blue-400/25 dark:to-cyan-400/25 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <img
                    :src="cards[3].icon"
                    :alt="cards[3].type"
                    class="w-9 h-9 object-contain dark:brightness-100 transition-all duration-500"
                  />
                </div>
              </div>
              
              <!-- Title - Larger -->
              <h3 class="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {{ $t(`cards.3.title`) }}
              </h3>
              
              <!-- Description -->
              <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                {{ $t(`cards.3.desc`).substring(0, 200) }}{{ $t(`cards.3.desc`).length > 200 ? '...' : '' }}
              </p>
         
              <!-- Learn More Button -->
              <div class="relative z-10">
                <button 
                  @click="handleCardAction(3)"
                  class="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white font-medium text-xs hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Learn More</span>
                  <svg class="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  </section>
</template>

<script setup lang="ts">
import rocket from '~/assets/image/rocket-01.svg'
import chart from '~/assets/image/chart-breakout-circle.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import Monitor from '~/assets/image/globe-02-1.svg'
import Users from '~/assets/image/users-02.svg'

const { t: $t } = useI18n()

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
  { icon: Monitor, type: 'google-ads' },
  { icon: rocket, type: 'banner-ads' },
  { icon: chart, type: 'in-app-ads' },
  { icon: Users, type: 'social-ads' },
]

const handleCardAction = (index: number) => {
  const card = cards[index]
  console.log('Card clicked:', card.type)
}
</script>

<style scoped>
/* Floating Animations */
@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

@keyframes particle-float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  25% { opacity: 0.5; }
  50% {
    transform: translateY(-30px) translateX(15px);
    opacity: 0.8;
  }
  75% { opacity: 0.3; }
}
.animate-particle-float {
  animation: particle-float 6s ease-in-out infinite;
}

/* Dark Mode Specific Animations */
@keyframes gradient-flow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-flow {
  background-size: 200% 200%;
  animation: gradient-flow 16s ease infinite;
}

@keyframes aurora-sweep {
  0% { transform: translateX(-20%) rotate(0deg); opacity: 0.3; }
  50% { transform: translateX(20%) rotate(2deg); opacity: 0.5; }
  100% { transform: translateX(-20%) rotate(0deg); opacity: 0.3; }
}
.animate-aurora-sweep {
  animation: aurora-sweep 14s ease-in-out infinite;
}

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

/* Service Card Styles */
.service-card {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.service-card-featured {
  animation: fade-in-up 0.6s ease-out 0.3s forwards;
  opacity: 0;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation delays */
.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }

/* Icon styling for light/dark mode */
img {
  filter: brightness(0) saturate(100%) invert(33%) sepia(8%) saturate(862%) hue-rotate(174deg) brightness(91%) contrast(87%);
  transition: filter 0.3s ease;
}

.dark img {
  filter: brightness(0) invert(1);
}

.group:hover img {
  filter: none;
}

/* Card content transitions */
.service-card .relative,
.service-card-featured .relative {
  transition: all 0.3s ease;
}

/* Hover effects */
.service-card:hover .relative,
.service-card-featured:hover .relative {
  transform: translateY(-2px);
}

/* Featured card specific - larger size */
.service-card-featured .relative {
  min-height: auto;
}

/* Responsive */
@media (max-width: 1024px) {
  .service-card-featured .relative {
    min-height: auto;
  }
}

@media (max-width: 768px) {
  .service-card,
  .service-card-featured {
    animation: none;
    opacity: 1;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-card-featured,
  .animate-float-slow,
  .animate-pulse-slow,
  .animate-particle-float,
  .animate-gradient-flow,
  .animate-aurora-sweep,
  .animate-blob {
    animation: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>