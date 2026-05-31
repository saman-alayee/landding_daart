<template>
  <!-- 📊 Statistics Section - Clean & Simple -->
  <section class="relative py-4 md:py-6 overflow-hidden">
    <!-- Clean Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"></div>
    
    <!-- Subtle Pattern -->
    <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <!-- Simple Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4">
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></span>
          <span class="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Our Achievements</span>
        </div>
        
        <!-- Title -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-3">
          Our Impact in
          <span class="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Numbers
          </span>
        </h2>
        
        <!-- Simple Divider -->
        <div class="flex justify-center gap-1 mt-4">
          <div class="w-8 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
          <div class="w-2 h-0.5 bg-blue-300 dark:bg-blue-600 rounded-full"></div>
        </div>
      </div>

      <!-- Statistics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
            
            <!-- Icon -->
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <component :is="stat.icon" class="w-6 h-6" />
            </div>
            
            <!-- Number -->
            <div class="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-1">
              <span class="counter-value" :data-target="stat.value">{{ stat.displayValue || stat.value }}</span>
            </div>
            
            <!-- Label -->
            <p class="text-slate-500 dark:text-slate-400 text-sm">
              {{ stat.label }}
            </p>
            
            <!-- Simple Hover Line -->
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
          </div>
        </div>
      </div>
      
      <!-- Simple Trust Message -->
      <div class="text-center mt-12 pt-6 border-t border-slate-100 dark:border-slate-800">
        <p class="text-xs text-slate-400 dark:text-slate-500">
          Trusted by 500+ businesses worldwide
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'aos/dist/aos.css'
import { TrendingUp, Users, Globe2, Sparkles } from 'lucide-vue-next'
import AOS from 'aos'
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick()
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  })
  setTimeout(() => {
    AOS.refresh()
    initCounters()
  }, 500)
})

const initCounters = () => {
  const counters = document.querySelectorAll('.counter-value')
  counters.forEach(counter => {
    const target = counter.getAttribute('data-target')
    if (target) {
      const numericValue = parseInt(target.replace(/[^0-9]/g, ''))
      if (!isNaN(numericValue)) {
        let current = 0
        const increment = numericValue / 60
        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            counter.textContent = target
            clearInterval(timer)
          } else {
            counter.textContent = Math.floor(current) + (target.includes('+') ? '+' : '') + (target.includes('%') ? '%' : '')
          }
        }, 30)
      }
    }
  })
}

const stats = [
  { 
    icon: Users, 
    value: '10K+', 
    displayValue: '0',
    label: 'Active Users'
  },
  { 
    icon: Globe2, 
    value: '25+', 
    displayValue: '0',
    label: 'Countries Reached'
  },
  { 
    icon: TrendingUp, 
    value: '95%', 
    displayValue: '0%',
    label: 'Success Rate'
  },
  { 
    icon: Sparkles, 
    value: '120M+', 
    displayValue: '0',
    label: 'Ad Views'
  },
]
</script>

<style scoped>
/* Counter animation */
.counter-value {
  display: inline-block;
}

/* Smooth hover transitions */
.group {
  transition: all 0.3s ease;
}

/* Responsive */
@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.75rem;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .counter-value,
  .group:hover .inline-flex,
  .group .absolute {
    animation: none;
    transform: none;
    transition: none;
  }
}
</style>