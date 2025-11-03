<template>
  <div
    :class="[
      'chat-box max-w-[75%] p-4 rounded-2xl shadow-sm border relative transition',
      isCurrentUser ? 'ml-auto rounded' : 'mr-auto rounded-bl-sm'
    ]"
    :style="{ backgroundColor: isCurrentUser ? userBg : adminBg, color: isCurrentUser ? userTextColor : adminTextColor }"
  >
    <!-- Header: Avatar + Name + Timestamp -->
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center gap-2">
        <div
          class="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold"
          :style="{ backgroundColor: isCurrentUser ? userAvatarBg : adminAvatarBg, color: 'white' }"
        >
          {{ senderName?.charAt(0) }}
        </div>
        <h4
          class="text-sm md:text-base font-semibold"
          :style="{ color: isCurrentUser ? userTextColor : adminTextColor }"
        >
          {{ senderName }}
        </h4>
      </div>
      <span class="text-[11px] text-gray-500">{{ timestamp }}</span>
    </div>

    <!-- Message Body -->
    <p class="text-sm md:text-base leading-relaxed break-words">{{ message }}</p>

    <!-- Attached File -->
    <div v-if="file" class="mt-2">
      <img
        class="rounded-lg border w-32 h-32 md:w-40 md:h-40 object-cover hover:scale-105 transition-transform"
        :src="file"
        alt="Attached Image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Cookies from "js-cookie";

const props = defineProps({
  senderName: String,
  message: String,
  timestamp: String,
  file: String,
  userBg: { type: String, default: '#f9fafb' },       // Telegram-style user background
  adminBg: { type: String, default: '#ffffff' },      // Admin background
  userAvatarBg: { type: String, default: 'var(--color-primary-700)' }, // User avatar bg
  adminAvatarBg: { type: String, default: '#4f46e5' }, // Admin avatar bg
  userTextColor: { type: String, default: '#303030' },
  adminTextColor: { type: String, default: '#303030' },
});

const currentUser = decodeURIComponent(Cookies.get("fullname") || "");
const isCurrentUser = computed(() => props.senderName === currentUser);
</script>
