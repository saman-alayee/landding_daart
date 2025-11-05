export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: 'https://ir.daartads.com/api/v1',
      recaptchaSiteKey: '6LfG_eAqAAAAAGHmDqR3a2EBdU1zoLmB7rN4jWG0',
    }
  },

  css: [
    '~/assets/css/main.css',
  ],

  build: {
    transpile: ['vue-toastification']
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
i18n: {
    lazy: true,
    langDir: '../locales', // ✅ must be relative to project root (not ../)
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr', name: 'English' },
      { code: 'ar', iso: 'ar-AR', file: 'ar.json', dir: 'rtl', name: 'العربية' }
    ]
  },
  
  plugins: ['~/plugins/toast.ts'],
})