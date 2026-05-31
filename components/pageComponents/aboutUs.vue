<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
    
    <!-- Hero Section with Enhanced Effects -->
    <section class="relative overflow-hidden pt-32 pb-20 px-6 lg:px-12">
      <!-- Enhanced Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute w-[500px] h-[500px] rounded-full blur-3xl top-20 -left-48 bg-indigo-200/20 dark:bg-indigo-500/10 animate-pulse-slow"></div>
        <div class="absolute w-[600px] h-[600px] rounded-full blur-3xl bottom-20 -right-48 bg-purple-200/20 dark:bg-purple-500/10 animate-pulse-slow animation-delay-2000"></div>
        <div class="absolute w-[400px] h-[400px] rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200/10 dark:bg-blue-500/5 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <!-- Floating Particles -->
      <div v-for="n in 20" :key="'hero-particle-' + n" class="absolute w-1 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 dark:from-indigo-500 dark:to-purple-500 animate-float-particle"
        :style="{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
          opacity: 0.3 + Math.random() * 0.5
        }">
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-800/50 hover:scale-105 transition-transform duration-300 cursor-default">
          <span class="text-2xl animate-bounce-light">🌟</span>
          <span class="text-sm font-medium text-indigo-700 dark:text-indigo-300">About Us</span>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient-x">
          Crafting Digital Excellence
        </h1>
        
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          We're a team of passionate creators, innovators, and problem-solvers dedicated to transforming ideas into exceptional digital experiences.
        </p>
        
   
      </div>
    </section>

    <!-- Mission & Vision Section with Flip Cards -->
    <section class="py-20 px-6 lg:px-12 relative">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Mission Card with 3D Effect -->
          <div class="group perspective-1000">
            <div class="relative transform-style-3d transition-all duration-500 hover:rotate-y-5">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2">
                <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
                </p>
                <div class="mt-4 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          <!-- Vision Card with 3D Effect -->
          <div class="group perspective-1000">
            <div class="relative transform-style-3d transition-all duration-500 hover:rotate-y-5">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2">
                <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become a global leader in digital innovation, recognized for our commitment to quality, creativity, and client success in shaping the future of technology.
                </p>
                <div class="mt-4 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section with Counter Animation -->
    <section class="py-20 px-6 lg:px-12 relative">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center group cursor-default">
            <div class="relative inline-block">
              <div class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-all duration-300">
                <span ref="counterRefs">{{ animatedStats[stat.label] || stat.value }}</span>
              </div>
              <div class="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            <div class="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider mt-2">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>



    <!-- Values Section with Staggered Animation -->
    <section class="py-20 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Core <span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Values</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(value, index) in values" :key="value.title" class="group relative" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-2 cursor-default animate-fade-in-up">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                <span class="text-3xl">{{ value.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ value.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ value.description }}</p>
              <div class="mt-3 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-12 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section class="py-20 px-6 lg:px-12 relative">
      <div class="max-w-4xl mx-auto text-center">
        <div class="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden group">
          <!-- Animated Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
            <div class="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          </div>
          
          <!-- Floating particles in CTA -->
          <div v-for="n in 10" :key="'cta-particle-' + n" class="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
            :style="{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }">
          </div>
          
          <div class="relative z-10">
            <div class="text-5xl mb-4 animate-bounce-light">🚀</div>
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life. We're here to help you succeed.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/#contact">
                <button class="group/btn px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  <span class="relative z-10">Get in Touch</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
              </NuxtLink>
              <NuxtLink to="/#projects">
                <button class="group/btn px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  <span class="relative z-10">View Our Work</span>
                  <div class="absolute inset-0 bg-white/10 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Stats data
const stats = ref([
  { value: '500+', label: 'Projects Completed' },
  { value: '100+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Members' },
  { value: '10+', label: 'Years Experience' }
])

const animatedStats = ref<Record<string, string>>({})

// Team members data
const team = ref([
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in digital innovation',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    bio: 'Award-winning designer passionate about user experience',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Tech Lead',
    bio: 'Full-stack expert specializing in scalable solutions',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
  },
  {
    name: 'David Kim',
    role: 'Product Manager',
    bio: 'Strategic thinker bridging business and technology',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  }
])

// Values data
const values = ref([
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and delivering on our promises.'
  },
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for perfection in every project, no matter how big or small.'
  },
  {
    icon: '💚',
    title: 'Collaboration',
    description: 'We believe the best results come from working together with our clients.'
  },
  {
    icon: '📈',
    title: 'Growth',
    description: 'We invest in continuous learning and improvement for ourselves and our clients.'
  },
  {
    icon: '🌍',
    title: 'Sustainability',
    description: 'We create solutions that are built to last and positively impact the world.'
  }
])

function scrollToNext() {
  const nextSection = document.querySelector('#mission-vision')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Intersection Observer for animations
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Animate elements on scroll
  const animateElements = document.querySelectorAll('.group')
  
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )
  
  animateElements.forEach((el) => observer?.observe(el))

  // Animate stats counters
  const statElements = document.querySelectorAll('.group .text-4xl')
  statElements.forEach((el, index) => {
    const target = stats.value[index]?.value.replace('+', '')
    if (target) {
      let current = 0
      const increment = Math.ceil(parseInt(target) / 50)
      const timer = setInterval(() => {
        current += increment
        if (current >= parseInt(target)) {
          current = parseInt(target)
          clearInterval(timer)
        }
        if (el) {
          el.textContent = current + '+'
        }
      }, 30)
    }
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

@keyframes bounce-light {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-bounce-light {
  animation: bounce-light 2s ease-in-out infinite;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

@keyframes scroll {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0; }
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
}

@keyframes float-particle {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
}

.animate-float-particle {
  animation: float-particle 4s ease-in-out infinite;
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

/* 3D Transform Effects */
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.hover\:rotate-y-5:hover {
  transform: rotateY(5deg);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .group {
    opacity: 1 !important;
    transform: none !important;
  }
  
  .perspective-1000 {
    perspective: none;
  }
  
  .hover\:rotate-y-5:hover {
    transform: none;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>