<template>
  <footer
    class="relative overflow-hidden py-16 text-gray-700 transition-all duration-500"
    :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <!-- 🌈 Animated Gradient Background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 animate-gradient-flow"
    ></div>

    <!-- 💫 Floating Glows -->
    <div class="absolute w-64 h-64 bg-blue-300/20 rounded-full blur-3xl top-0 left-0 animate-blob"></div>
    <div
      class="absolute w-80 h-80 bg-purple-300/25 rounded-full blur-3xl bottom-0 right-0 animate-blob animation-delay-2000"
    ></div>

    <!-- 🌀 Animated Shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute w-8 h-8 bg-blue-400/30 rounded-full top-1/3 left-8 animate-float-slow"></div>
      <div
        class="absolute w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-indigo-300/40 bottom-1/4 right-12 animate-float-medium rotate-6"
      ></div>
      <div class="absolute w-5 h-5 bg-purple-400/30 top-1/4 right-1/3 rotate-12 animate-float-fast"></div>

      <svg
        class="absolute opacity-30 w-48 bottom-12 left-1/4 animate-wave-slow"
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10 Q25 0, 50 10 T100 10 T150 10 T200 10"
          stroke="#7DD3FC"
          stroke-width="2"
          fill="transparent"
        />
      </svg>
    </div>

    <!-- 🌟 Footer Content -->
    <div
      class="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 z-10"
      :class="{'text-right': $i18n.locale === 'ar', 'text-left': $i18n.locale !== 'ar'}"
    >
      <!-- 🪩 Logo Section -->
      <div
        class="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
        :class="{'md:items-end md:text-right': $i18n.locale === 'ar'}"
        data-aos="fade-right"
      >
        <img
          src="/assets/image/daartLogo.png"
          :alt="$t('footer.logoAlt')"
          class="w-36 md:w-44 transition-transform duration-500 hover:scale-110 hover:drop-shadow-lg"
        />
      </div>

      <!-- 📍 Contact Info -->
      <div data-aos="fade-up" data-aos-delay="200">
        <h3
          class="font-semibold text-lg text-gray-800 mb-4 border-b-2 border-blue-400 inline-block pb-1"
        >
          {{ $t('footer.contact.title') }}
        </h3>
        <p class="text-sm mb-2 opacity-80">{{ $t('footer.contact.address') }}</p>
        <p class="mb-1">
          <a
            :href="`tel:${$t('footer.contact.phone')}`"
            class="hover:text-blue-600 transition-all duration-300 inline-block"
          >
            {{ $t('footer.contact.phone') }}
          </a>
        </p>
        <p>
          <a
            :href="`mailto:${$t('footer.contact.email')}`"
            class="hover:text-blue-600 transition-all duration-300 inline-block"
          >
            {{ $t('footer.contact.email') }}
          </a>
        </p>
      </div>

      <!-- 🌐 Social Links -->
      <div
        data-aos="fade-left"
        data-aos-delay="400"
        :class="{'md:text-right': $i18n.locale === 'ar', 'md:text-left': $i18n.locale !== 'ar'}"
      >
        <h3 
          class="font-semibold text-lg text-gray-800 mb-4 border-b-2 border-blue-400 inline-block pb-1"
        >
          {{ $t('footer.social.title') }}
        </h3>
        <div
          class="flex gap-5 mt-2"
          :class="{'justify-end': $i18n.locale === 'ar', 'justify-start': $i18n.locale !== 'ar'}"
        >
          <a
            :href="$t('footer.social.linkedin')"
            target="_blank"
            class="group relative"
          >
            <div
              class="absolute inset-0 bg-blue-300/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <Linkedin
              class="w-7 h-7 text-gray-600 group-hover:text-blue-600 transition-transform duration-500 group-hover:scale-125"
            />
          </a>

          <a
            :href="$t('footer.social.instagram')"
            target="_blank"
            class="group relative"
          >
            <div
              class="absolute inset-0 bg-purple-300/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>
            <Instagram
              class="w-7 h-7 text-gray-600 group-hover:text-pink-500 transition-transform duration-500 group-hover:scale-125"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- 🌠 Bottom Line -->
    <div
      class="relative mt-16 pt-6 border-t border-blue-200 text-center text-gray-500 text-sm z-10"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <p class="opacity-80">
        © {{ new Date().getFullYear() }}
        <span class="text-blue-600 font-medium">Daart Agency</span> — {{ $t('footer.rights') || 'All rights reserved.' }}
      </p>
    </div>
  </footer>
</template>


<script setup lang="ts">
import { Linkedin, Instagram } from "lucide-vue-next";
</script>

<style scoped>
/* 🌈 Gradient Animation */
@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animate-gradient-flow {
  background-size: 200% 200%;
  animation: gradient-flow 8s ease infinite;
}

/* 💫 Blob Animation */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -40px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 12s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

/* 🌀 Floating Shapes Animation */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
}
@keyframes float-medium {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(-10deg);
  }
}
@keyframes float-fast {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(15deg);
  }
}
.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}
.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}
.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

/* 🌊 Wave Animation */
@keyframes wave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50px);
  }
}
.animate-wave-slow {
  animation: wave 8s ease-in-out infinite alternate;
}
</style>
