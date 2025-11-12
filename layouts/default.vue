<template>
  <div
    class="relative min-h-screen transition-colors duration-700"
    :class="isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900 text-slate-100' : 'bg-[#fafafc] '"
  >
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-1 w-full pt-24 relative z-10">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/elements/components/header.vue'
import Footer from '~/components/elements/components/footer.vue'
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')

  // sync with global theme changes
  const observer = new MutationObserver(() => {
    isDark.value = document.documentElement.classList.contains('dark')
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
</script>

<style scoped>



</style>
