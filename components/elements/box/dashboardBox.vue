<template>
  <div class="campaign-box">
    <div class="flex gap-2 items-center">
      <!-- Use the prop for the image -->
           <!-- Outer circle -->
    <div class="outer-circle rounded-full p-2">
      <!-- Inner circle -->
      <div class="inside-circle rounded-full p-2">
        <!-- Icon -->
        <img
          :src="iconSrc"
          :alt="iconAlt"
          class="w-6 h-6 object-contain"
        />
      </div>
    </div>
      <h5 class="font-semibold mt-4 text-xs md:text-sm lg:text-base whitespace-nowrap truncate">
        {{ title }}
      </h5>
    </div>
    <div class="flex mt-8 mb-2 mr-2 justify-between gap-6">
      <p class="text-slate-800 text-xs md:text-sm lg:text-base whitespace-nowrap truncate">
        <b>{{ stat }}</b> {{ statLabel }}
      </p>
      <nuxt-link
        class="text-red-wallet text-xs md:text-sm lg:text-base whitespace-nowrap truncate"
        :to="link"
      >
        {{ linkText }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import dashboardIcon from '~/assets/image/dashboard_icon.png';

const props = defineProps({
  iconSrc: {
    type: String,
    default: dashboardIcon, // ✅ imported image
  },
  iconAlt: {
    type: String,
    default: 'dashboard icon',
  },
  title: {
    type: String,
    default: 'عنوان کمپین',
  },
  stat: {
    type: Number,
    default: 0,
  },
  statLabel: {
    type: String,
    default: 'کمپین',
  },
  link: {
    type: String,
    default: '/',
  },
  linkText: {
    type: String,
    default: 'مشاهده جزئیات',
  },
});
</script>
<style scoped>
.outer-circle {

    background-color: var(--color-secondary-50);
}
.inside-circle {

    background-color: var(--color-secondary-25);
}

</style>
