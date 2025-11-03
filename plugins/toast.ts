// plugins/toast.ts
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: 'top-center',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    icon: true,
    rtl: true
  });
});
