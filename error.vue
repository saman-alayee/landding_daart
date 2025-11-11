<template>
  <div class="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
    <div
      class="relative w-full max-w-[560px] text-center sm:text-left sm:pl-40 leading-tight"
    >
      <!-- SVG Icon Bubble -->
      <div
        class="absolute left-0 top-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]"
      >
        <div
          class="absolute w-full h-full scale-[2.4] rounded-full bg-[#f2f5f8] z-[-1]"
        ></div>
        <div class="relative w-full h-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-24 h-24 sm:w-32 sm:h-32 text-gray-600"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708m5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708M8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
            />
          </svg>
        </div>
      </div>

      <!-- 404 Title -->
      <h1
        class="text-[48px] sm:text-[60px] md:text-[75px] font-bold text-[#151723] uppercase font-nunito mb-2"
      >
        404
      </h1>

      <!-- Error Message -->
      <h2
        class="text-[18px] sm:text-[21px] md:text-[25px] font-normal text-[#151723] uppercase font-nunito"
      >
        Oops! Page Not Found
      </h2>

      <!-- Description -->
      <p
        class="text-[14px] sm:text-[15px] md:text-[16px] text-[#999fa5] font-nunito mt-4 leading-relaxed max-w-[90%] mx-auto sm:mx-0"
      >
        We're sorry, but the page you are looking for doesn't exist, has been
        removed, had its name changed, or is temporarily unavailable.
      </p>

      <!-- Button -->
      <div class="mt-6 flex justify-center sm:justify-normal sm:mt-8">
        <BaseButton @click="navigateTo(`/`)"
          >Back to Dashboard</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "~/components/elements/button/index.vue";

useHead({
  title: "Page Not Found",
});
</script>