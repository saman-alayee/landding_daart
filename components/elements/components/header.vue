<template>
  <header
    class="fixed top-1 left-1/2 transform -translate-x-1/2 lg:w-1/2 w-full md:w-1/2 rounded-2xl backdrop-blur-md border-black/10 text-black z-50"
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="px-6 py-3 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')">
        <img class="w-1/3" src="/assets/image/logo.png" alt="logo" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden w-full md:flex space-x-6 font-sm items-center">
        <NuxtLink :to="localePath('/#home')">{{ $t('header.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/#services')">{{ $t('header.services') }}</NuxtLink>
        <NuxtLink :to="localePath('/#faq')">{{ $t('header.faq') }}</NuxtLink>
        <NuxtLink :to="localePath('/#contact')">{{ $t('header.contact') }}</NuxtLink>

        <button @click="switchLocale"
          class="ml-4 px-3 py-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium transition">
          {{ $i18n.locale === 'en' ? 'العربية' : 'English' }}
        </button>
      </nav>



      <!-- Mobile Menu Button -->
      <button @click="toggleMenu"
        class="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-black/5 hover:bg-black/10 transition"
        :aria-label="$t('menu')">
        <img src="/assets/image/menu-02.svg" alt="menu" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="menuOpen"
        class="md:hidden flex flex-col items-center bg-white/80 backdrop-blur-md border-t border-black/10 text-black py-3 space-y-3 rounded-b-2xl">
        <NuxtLink :to="localePath('/#home')" @click="closeMenu">{{ $t('header.home') }}</NuxtLink>
        <NuxtLink :to="localePath('/#faq')" @click="closeMenu">{{ $t('header.faq') }}</NuxtLink>
        <NuxtLink :to="localePath('/#services')" @click="closeMenu">{{ $t('header.services') }}</NuxtLink>
        <NuxtLink :to="localePath('/#contact')" @click="closeMenu">{{ $t('header.contact') }}</NuxtLink>

        <!-- Language Switch for Mobile -->
        <button @click="switchLocale"
          class="mt-2 px-4 py-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-700 text-sm font-medium transition">
          {{ $i18n.locale === 'en' ? 'العربية' : 'English' }}
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

// Mobile menu toggle
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)
const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  menuOpen.value = false // close mobile menu if open
}

// Switch language
const switchLocale = async () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  await setLocale(newLocale)

  // Navigate to same page in new locale
  const path = localePath(route.path, newLocale)
  if (path) navigateTo(path)

  closeMenu() // Close mobile menu
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
