<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-32 pb-20 px-6 lg:px-12">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute w-[500px] h-[500px] rounded-full blur-3xl top-20 -left-48 bg-blue-200/20 dark:bg-blue-500/10 animate-pulse-slow"></div>
        <div class="absolute w-[600px] h-[600px] rounded-full blur-3xl bottom-20 -right-48 bg-cyan-200/20 dark:bg-cyan-500/10 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
          <span class="text-2xl">📬</span>
          <span class="text-sm font-medium text-blue-700 dark:text-blue-300">Contact Us</span>
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 dark:from-blue-400 dark:via-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
          Let's Start a Conversation
        </h1>
        
        <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Whether you have a question, a project in mind, or just want to say hello, we'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-12 px-6 lg:px-12 relative">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="info in contactInfo" :key="info.title" class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-1">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-3xl">{{ info.icon }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ info.title }}</h3>
              <p v-if="info.content" class="text-gray-600 dark:text-gray-300">{{ info.content }}</p>
              <a v-if="info.link" :href="info.link" class="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 mt-2">
                {{ info.linkText }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Contact Form Section -->
    <section id="contact" class="py-12 px-6 lg:px-12 relative">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Left Side - Contact Form -->
          <div>
            <div class="relative">
              <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-sm">
                <span class="text-sm font-medium text-blue-700 dark:text-blue-300">Send us a message</span>
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Get in <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
              </h2>
              <p class="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form @submit.prevent="submitLead" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name <span class="text-red-500">*</span>
                  </label>
                  <InputBase 
                    :placeholder="$t('leadForm.fields.name.placeholder')" 
                    v-model="leadForm.name" 
                    requireText="*" 
                    maxLength="50" 
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address <span class="text-red-500">*</span>
                  </label>
                  <InputBase 
                    :placeholder="$t('leadForm.fields.email.placeholder')" 
                    type="email" 
                    v-model="leadForm.email" 
                    requireText="*" 
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number <span class="text-red-500">*</span>
                  </label>
                  <InputBase 
                    :placeholder="$t('leadForm.fields.phone.placeholder')" 
                    v-model="leadForm.phone" 
                    maxLength="20" 
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <InputBase 
                    :placeholder="$t('leadForm.fields.company.placeholder')" 
                    v-model="leadForm.company" 
                    maxLength="100" 
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message <span class="text-red-500">*</span>
                </label>
                <InputBase 
                  maxLength="500" 
                  :placeholder="$t('leadForm.fields.description.placeholder')" 
                  type="textarea" 
                  v-model="leadForm.description" 
                  requireText="*" 
                />
              </div>

              <div class="flex justify-start">
                <BaseButton
                  :loading="loading"
                  @click="submitLead"
                  size="lg"
                  class="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 text-white border-none hover:shadow-lg hover:shadow-blue-300/40 dark:hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                >
                  <span class="relative z-10 flex items-center gap-2">
                    Send Message
                    <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </BaseButton>
              </div>

              <p
                v-if="formMessage"
                class="text-center font-semibold mt-4 p-3 rounded-lg"
                :class="formMessage.includes('Thank') ? 'text-green-600 bg-green-50 dark:bg-green-900/20' : 'text-red-600 bg-red-50 dark:bg-red-900/20'"
              >
                {{ formMessage }}
              </p>
            </form>
          </div>

          <!-- Right Side - Map & Additional Info -->
          <div class="space-y-8">
            <!-- Map -->
            <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div class="h-64 bg-gray-200 dark:bg-slate-700 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb0e3e1%3A0xb2e2b8f5d1b5f8d!2sNew%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  loading="lazy"
                  class="w-full h-full"
                ></iframe>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 flex items-center justify-center">
                  <span class="text-2xl">⏰</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">Office Hours</h3>
              </div>
              <div class="space-y-2 text-gray-600 dark:text-gray-300">
                <div class="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span class="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Saturday:</span>
                  <span class="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Sunday:</span>
                  <span class="font-semibold text-blue-600 dark:text-blue-400">Closed</span>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 flex items-center justify-center">
                  <span class="text-2xl">🌐</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">Follow Us</h3>
              </div>
              <div class="flex gap-4">
                <a href="#" class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1877F2] to-[#0A5B9E] text-white hover:scale-105 transition-transform duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a href="#" class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1DA1F2] to-[#0D8BD0] text-white hover:scale-105 transition-transform duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06 1.91 1.23 4.18 1.95 6.61 1.95 7.93 0 12.27-6.57 12.27-12.27 0-.19 0-.38-.01-.56.84-.6 1.56-1.36 2.14-2.22z"/>
                  </svg>
                  <span>Twitter</span>
                </a>
                <a href="#" class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white hover:scale-105 transition-transform duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 4.584.013 6.15.354 1.48.321 2.786.988 3.938 2.14a8.5 8.5 0 0 1 2.14 3.938c.341 1.566.354 2.946.354 6.15s-.013 4.584-.354 6.15a8.5 8.5 0 0 1-2.14 3.938 8.5 8.5 0 0 1-3.938 2.14c-1.566.341-2.946.354-6.15.354s-4.584-.013-6.15-.354a8.5 8.5 0 0 1-3.938-2.14 8.5 8.5 0 0 1-2.14-3.938c-.341-1.566-.354-2.946-.354-6.15s.013-4.584.354-6.15a8.5 8.5 0 0 1 2.14-3.938A8.5 8.5 0 0 1 5.85.517c1.566-.341 2.946-.354 6.15-.354zM12 0C8.741 0 7.332.015 5.703.364 4.07.714 2.742 1.451 1.591 2.602.44 3.753-.297 5.081-.647 6.714-.996 8.343-1.011 9.752-1.011 13s.015 4.657.364 6.286c.35 1.633 1.087 2.961 2.238 4.112 1.151 1.151 2.479 1.888 4.112 2.238 1.629.349 3.038.364 6.297.364s4.657-.015 6.286-.364c1.633-.35 2.961-1.087 4.112-2.238 1.151-1.151 1.888-2.479 2.238-4.112.349-1.629.364-3.038.364-6.286s-.015-4.657-.364-6.286c-.35-1.633-1.087-2.961-2.238-4.112-1.151-1.151-2.479-1.888-4.112-2.238C16.668.015 15.259 0 12 0z"/>
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <!-- FAQ Link -->
            <div class="relative bg-gradient-to-r from-blue-100/50 to-cyan-100/50 dark:from-blue-900/30 dark:to-cyan-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white">Have questions?</h3>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-1">Check out our FAQ page</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-6 lg:px-12 relative">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Find quick answers to common questions
          </p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="group">
            <div class="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer" @click="toggleFaq(index)">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ faq.question }}</h3>
                <svg class="w-5 h-5 text-gray-500 transition-transform duration-300" :class="{ 'rotate-180': openFaqs.includes(index) }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <div class="overflow-hidden transition-all duration-300" :class="openFaqs.includes(index) ? 'max-h-40 mt-4' : 'max-h-0'">
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/elements/button/index.vue'
import { ref, reactive, onMounted } from 'vue'
import InputBase from '~/components/elements/baseInput/input.vue'
import { useI18n } from 'vue-i18n'
import { useCrmStore } from '~/stores/createLeads'

const { t: $t } = useI18n()
const crmStore = useCrmStore()

interface LeadForm {
    name: string
    email: string
    company?: string
    phone?: string
    description?: string
}

const leadForm = reactive<LeadForm>({
    name: '',
    email: '',
    company: '',
    phone: '',
    description: ''
})

const formMessage = ref("")
const loading = ref(false)
const openFaqs = ref<number[]>([])

const contactInfo = ref([
  {
    icon: '📍',
    title: 'Visit Us',
    content: '123 Business Avenue, Suite 100, New York, NY 10001'
  },
  {
    icon: '📧',
    title: 'Email Us',
    content: 'hello@company.com',
    link: 'mailto:hello@company.com',
    linkText: 'Send email'
  },
  {
    icon: '📞',
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
    linkText: 'Call now'
  }
])

const faqs = ref([
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We typically respond within 24 hours during business days. For urgent matters, please give us a call directly.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer a free 30-minute consultation to discuss your project needs and how we can help.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. We provide detailed estimates during our initial consultation.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! We work with clients from around the world and have experience with global projects.'
  }
])

const toggleFaq = (index: number) => {
  const position = openFaqs.value.indexOf(index)
  if (position === -1) {
    openFaqs.value.push(index)
  } else {
    openFaqs.value.splice(position, 1)
  }
}

const submitLead = async (): Promise<void> => {
    loading.value = true
    formMessage.value = ''

    if (!leadForm.name || !leadForm.description || !leadForm.email || !leadForm.phone) {
        formMessage.value = $t('leadForm.missingFields')
        loading.value = false
        return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(leadForm.email)) {
        formMessage.value = $t('leadForm.errorMessageEmail')
        loading.value = false
        return
    }

    try {
        await crmStore.sendLead(leadForm)
        formMessage.value = $t('leadForm.successMessage')
        // Reset form
        leadForm.name = ''
        leadForm.email = ''
        leadForm.company = ''
        leadForm.phone = ''
        leadForm.description = ''
    } catch (err: any) {
        formMessage.value = $t('leadForm.errorMessage')
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    initScrollAnimations()
})

const initScrollAnimations = () => {
    if (typeof window !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate')
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        })

        document.querySelectorAll('.aos-fade-up, .aos-zoom-in').forEach(el => {
            observer.observe(el)
        })
    }
}
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Original styles from your component */
@keyframes gradient-flow-dark {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}
.animate-gradient-flow-dark {
    background-size: 200% 200%;
    animation: gradient-flow-dark 16s ease infinite;
}

@keyframes aurora-sweep-dark {
    0% { transform: translateX(-20%) rotate(0deg); opacity: 0.3; }
    50% { transform: translateX(20%) rotate(2deg); opacity: 0.5; }
    100% { transform: translateX(-20%) rotate(0deg); opacity: 0.3; }
}
.animate-aurora-sweep-dark {
    animation: aurora-sweep-dark 14s ease-in-out infinite;
}

@keyframes blob-dark {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(50px, -40px) scale(1.1); }
    66% { transform: translate(-40px, 30px) scale(0.9); }
}
.animate-blob-dark {
    animation: blob-dark 12s infinite ease-in-out;
    opacity: 0.4;
}

@keyframes particle-dark {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
    50% { transform: translateY(-25px) scale(1.2); opacity: 0.9; }
}
.animate-particle-dark {
    animation: particle-dark 7s ease-in-out infinite;
}

@keyframes gradient-flow {
  0%,100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-flow { background-size: 200% 200%; animation: gradient-flow 16s ease infinite; }

@keyframes aurora-sweep {
  0%,100% { transform: translateX(-20%) rotate(0deg); opacity: 0.3; }
  50% { transform: translateX(20%) rotate(2deg); opacity: 0.5; }
}
.animate-aurora-sweep { animation: aurora-sweep 14s ease-in-out infinite; }

@keyframes blob {
  0%,100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(50px,-40px) scale(1.1); }
  66% { transform: translate(-40px,30px) scale(0.9); }
}
.animate-blob { animation: blob 12s infinite ease-in-out; opacity: 0.4; }

.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }

@keyframes spin-slow {
  0% { transform: translate(-50%,-50%) rotate(0deg); }
  100% { transform: translate(-50%,-50%) rotate(360deg); }
}
.animate-spin-slow { animation: spin-slow 28s linear infinite; }

@keyframes text-glow {
  0%,100% { filter: drop-shadow(0 0 8px rgba(180,200,255,0.4)); }
  50% { filter: drop-shadow(0 0 18px rgba(167,139,250,0.6)); }
}
.animate-text-glow { animation: text-glow 3.5s ease-in-out infinite; }

@keyframes particle {
  0%,100% { transform: translateY(0) scale(1); opacity: 0.5; }
  50% { transform: translateY(-25px) scale(1.2); opacity: 0.9; }
}
.animate-particle { animation: particle 6s ease-in-out infinite; }

@keyframes glow-sweep {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 0.4; }
  100% { transform: translateX(100%); opacity: 0; }
}
.animate-glow-sweep { animation: glow-sweep 2.4s linear infinite; }

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }

.aos-fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.aos-zoom-in {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.8s ease-out;
}

.aos-animate {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.aos-delay-100 { transition-delay: 100ms; }
.aos-delay-200 { transition-delay: 200ms; }
.aos-delay-300 { transition-delay: 300ms; }
.aos-delay-400 { transition-delay: 400ms; }
.aos-delay-500 { transition-delay: 500ms; }

.contact-section {
    opacity: 0;
    transform: translateY(20px);
    animation: section-fade-up 1s ease-out 0.2s forwards;
}

@keyframes section-fade-up {
    to { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
    .aos-fade-up, .aos-zoom-in, .contact-section {
        animation: none;
        transition: none;
        opacity: 1;
        transform: none;
    }
    .aos-animate { opacity: 1; transform: none; }
}
</style>