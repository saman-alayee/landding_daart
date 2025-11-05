<template>
  <div class="relative min-h-screen bg-[#fafafc] flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-1 w-full mt-24">
      <NuxtPage />
    </main>

    <Footer/>
  </div>
</template>

<script setup>
import Footer from '~/components/elements/components/footer.vue';
import Header from '~/components/elements/components/header.vue'
</script>

<style scoped>
/* No extra fixed heights – let content flow naturally */
</style>
