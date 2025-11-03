<template>
  <div class="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
    <div class="relative w-full max-w-[560px] text-center sm:text-right sm:pr-40 leading-tight">
      <!-- Emoji Bubble -->
      <div
        class="absolute right-0 top-0 w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] bg-cover bg-no-repeat"
        style="background-image: url('/assets/image/emoji.png')"
      >
        <div class="absolute w-full h-full scale-[2.4] rounded-full bg-[#f2f5f8] z-[-1]"></div>
      </div>

      <!-- 404 Title -->
      <h1 class="text-[48px] sm:text-[60px] md:text-[75px] font-bold text-[#151723] uppercase font-nunito mb-2">
        ۴۰۴
      </h1>

      <!-- Error Message -->
      <h2 class="text-[18px] sm:text-[21px] md:text-[25px] font-normal text-[#151723] uppercase font-nunito">
        اوه! صفحه مورد نظر پیدا نشد
      </h2>

      <!-- Description -->
      <p class="text-[14px] sm:text-[15px] md:text-[16px] text-[#999fa5] font-nunito mt-4 leading-relaxed max-w-[90%] mx-auto sm:mx-0">
        متأسفیم، اما صفحه‌ای که به دنبال آن هستید وجود ندارد، حذف شده، نام آن تغییر کرده یا موقتاً در دسترس نیست.
      </p>

      <!-- Button -->
      <div class="mt-6 flex justify-center sm:justify-normal sm:mt-8">
  <BaseButton @click="navigateTo(`/dashboard`)">بازگشت به داشبورد</BaseButton>
</div>

    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/elements/button/index.vue'

useHead({
  title: 'صفحه یافت نشد.',
})
</script>