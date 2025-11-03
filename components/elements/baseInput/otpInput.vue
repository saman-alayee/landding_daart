<template>
  <div class="">
    <div class="otp-container" dir="ltr">
      <input v-for="(digit, index) in otpArray" :key="index" v-model="otpArray[index]" @input="onInput(index)"
        @keydown.backspace="onBackspace(index)" type="text" maxlength="1"
        :class="['otp-input', { 'input-error': error }]" />
    </div> <span v-if="error" class="error-message flex justify-center">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  length: {
    type: Number,
    default: 6, // Default OTP length of 6 characters
  },
  error: String,
});

const emit = defineEmits(['otpCompleted']);

// Array to hold OTP characters
const otpArray = ref(Array(props.length).fill(''));

// Function to handle input and move to next field
const onInput = (index: number) => {
  // Only allow numbers and move to the next field if a digit is entered
  if (/^\d$/.test(otpArray.value[index])) {
    if (index < props.length - 1) {
      focusNext(index);
    }
    checkOtpCompleted();
  } else {
    otpArray.value[index] = ''; // Clear if non-numeric value
  }
};

// Function to handle backspace and move to previous field
const onBackspace = (index: number) => {
  if (!otpArray.value[index] && index > 0) {
    focusPrevious(index);
  }
};

// Focus the next input field
const focusNext = (index: number) => {
  const nextInput = document.querySelectorAll('.otp-input')[index + 1] as HTMLInputElement;
  nextInput?.focus();
};

// Focus the previous input field
const focusPrevious = (index: number) => {
  const prevInput = document.querySelectorAll('.otp-input')[index - 1] as HTMLInputElement;
  prevInput?.focus();
};

// Check if OTP input is complete and emit the event
const checkOtpCompleted = () => {
  if (otpArray.value.every((digit) => digit !== '')) {
    emit('otpCompleted', otpArray.value.join(''));
  }
};
</script>

<style scoped>
.otp-container {
  display: flex;
  gap: 8px;
  justify-content: center;
  direction: ltr;
}

.otp-input {
  width: 64px;
  height: 64px;
  text-align: center;
  font-size: 1.25rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  outline: none;
  color: var(--color-base-black);
  transition: border-color 0.2s ease-in-out;
}

.otp-input:focus {
  border-radius: 8px;
  box-shadow: 0 0 0 4px #aacfee, 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border: solid 1px #5596cd;
  background-color: #fff;
  outline: none;
}

.otp-input:focus {
  border-color: #007bff;
}

input:focus {
  border-radius: 8px;
  box-shadow: 0 0 0 4px #aacfee, 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border: solid 1px #5596cd;
  background-color: #fff;
  outline: none;
}
</style>
