<template>
  <header class="fixed top-1 left-1/2 transform -translate-x-1/2 lg:w-2/3 w-full md:w-1/2 rounded-2xl backdrop-blur-md border-black/10 text-black z-50
        dark:border-white/10 dark:text-white"
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="px-6 py-3 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')">
        <img class="w-1/3" src="/assets/image/logo.png" alt="logo" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden w-full mt-2 md:flex justify-between font-base items-center space-x-6">
        <NuxtLink :to="localePath('/#home')" class="hover:underline">
          {{ $t('header.home') }}
        </NuxtLink>

        <NuxtLink :to="localePath('/#services')" class="hover:underline">
          {{ $t('header.services') }}
        </NuxtLink>

        <NuxtLink :to="localePath('/#contact')" class="hover:underline">
          {{ $t('header.contact') }}
        </NuxtLink>

        <!-- Get Started Button -->
        <NuxtLink :to="localePath('/#contact')"
          class="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 hover:text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
          @click="closeMenu">
          {{ $t('header.getStarted') || 'Get Started' }}
        </NuxtLink>

        <!-- Language Switch -->
        <button @click="switchLocale"
          class="px-3 py-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium transition dark:bg-blue-900/30 dark:text-blue-300"
          :aria-pressed="locale === 'ar'">
          {{ $i18n.locale === 'en' ? 'العربية' : 'English' }}
        </button>

        <!-- Theme Toggle -->
        <IconButton hoverBackgroundColor="" @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="ml-2 w-9 h-9 rounded-md flex items-center justify-center bg-black/5 hover:bg-black/10 transition dark:bg-white/5 dark:hover:bg-white/10">
          <template v-if="isDark">
            <!-- Sun icon (light) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="none"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </template>
          <template v-else>
            <!-- Moon icon (dark) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24"
              fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </template>
        </IconButton>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="flex items-center gap-2 md:hidden">
        <!-- mobile theme toggle -->
        <button @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="w-9 h-9 rounded-md flex items-center justify-center bg-black/5 hover:bg-black/10 transition dark:bg-white/5 dark:hover:bg-white/10">
          <template v-if="isDark">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="none"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          </template>
          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24"
              fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </template>
        </button>

        <button @click="toggleMenu"
          class="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-black/5 hover:bg-black/10 transition"
          :aria-label="$t('menu')">
          <img src="/assets/image/menu-02.svg" alt="menu" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="menuOpen"
        class="md:hidden flex flex-col items-center bg-white/80 backdrop-blur-md border-t border-black/10 text-black py-3 space-y-3 rounded-b-2xl dark:bg-slate-900/70 dark:text-white dark:border-white/10">
        <NuxtLink :to="localePath('/#home')" @click="closeMenu">
          {{ $t('header.home') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/#services')" @click="closeMenu">
          {{ $t('header.services') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/#contact')" @click="closeMenu">
          {{ $t('header.contact') }}
        </NuxtLink>

        <!-- Get Started Button for Mobile -->
        <NuxtLink :to="localePath('/contact')"
          class="mt-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 transition-all duration-300"
          @click="closeMenu">
          {{ $t('header.getStarted') || 'Get Started' }}
        </NuxtLink>

        <!-- Language Switch for Mobile -->
        <button @click="switchLocale"
          class="mt-2 px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium transition dark:bg-blue-900/30 dark:text-blue-300">
          {{ $i18n.locale === 'en' ? 'العربية' : 'English' }}
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import IconButton from '../button/iconButton.vue'

const menuOpen = ref(false)
const isDark = ref(false)
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

// Mobile menu toggle
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)

// Switch language
const switchLocale = async () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  await setLocale(newLocale)

  // Navigate to same page in new locale (if your localePath supports it)
  const path = localePath(route.path, newLocale)
  if (path) navigateTo(path)

  closeMenu()
}

// Theme handling (dark mode)
const applyTheme = (dark: boolean) => {
  const el = document.documentElement
  if (dark) {
    el.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    el.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

onMounted(() => {
  // init theme from localStorage or system preference
  const stored = localStorage.getItem('theme')
  if (stored === 'dark') {
    isDark.value = true
    applyTheme(true)
  } else if (stored === 'light') {
    isDark.value = false
    applyTheme(false)
  } else {
    // follow system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    applyTheme(prefersDark)
  }
})

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.24s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Gentle glow animation for Get Started button (optional) */
@keyframes glow {
  0% {
    box-shadow: 0 0 6px rgba(99, 102, 241, 0.22), 0 0 12px rgba(59, 130, 246, 0.12);
  }

  50% {
    box-shadow: 0 0 18px rgba(99, 102, 241, 0.3), 0 0 36px rgba(59, 130, 246, 0.18);
  }

  100% {
    box-shadow: 0 0 6px rgba(99, 102, 241, 0.22), 0 0 12px rgba(59, 130, 246, 0.12);
  }
}

.animate-glow {
  animation: glow 3s ease-in-out infinite;
}
</style>
