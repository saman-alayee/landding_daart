<template>
  <footer class="py-12" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24">

      <!-- Logo -->
      <div class="mt-8">
        <img src="/assets/image/daartLogo.png" :alt="$t('footer.logoAlt')" class="w-auto" />
      </div>

      <!-- Contact Info -->
      <div :class="$i18n.locale === 'ar' ? 'text-center md:text-right' : 'text-center md:text-left'">
        <h3 class="font-base text-dark mb-4">{{ $t('footer.contact.title') }}</h3>
        <p class="text-sm mb-2">{{ $t('footer.contact.address') }}</p>
        <p class="mb-1">
          <a :href="`tel:${$t('footer.contact.phone')}`" class="hover:text-blue-600 transition">
            {{ $t('footer.contact.phone') }}
          </a>
        </p>
        <p>
          <a :href="`mailto:${$t('footer.contact.email')}`" class="hover:text-blue-600 transition">
            {{ $t('footer.contact.email') }}
          </a>
        </p>
      </div>

      <!-- Social Media -->
      <div :class="$i18n.locale === 'ar' ? 'text-center md:text-right' : 'text-center md:text-left'">
        <h3 class="font-base mb-4">{{ $t('footer.social.title') }}</h3>
        <div class="flex justify-center md:justify-start gap-4">
          <a :href="$t('footer.social.linkedin')" target="_blank" class="hover:text-blue-700 transition">
            <Linkedin class="w-6 h-6" />
          </a>
          <a :href="$t('footer.social.instagram')" target="_blank" class="hover:text-pink-500 transition">
            <Instagram class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-12 border-t border-blue-200 pt-6 text-center text-gray-700 text-sm h-4">
      {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Linkedin, Instagram } from "lucide-vue-next";
</script>

<style scoped>
footer {
  background: linear-gradient(#ececf8, #e1e1f7);
}
</style>
