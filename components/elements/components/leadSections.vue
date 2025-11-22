<template>
    <section id="contact">
        <div
            class="relative py-24 overflow-hidden min-h-screen contact-section"
            :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"
        >
            <!-- 🌫️ Dark Mode Gradient Background (added without removing light mode) -->
            <div
                class="absolute inset-0 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-neutral-900 animate-gradient-flow-dark"
            ></div>
            <div
                class="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(30,41,59,0.25),transparent_60%)]"
            ></div>

            <!-- 🌌 Dark Mode Aurora Mist Waves (added without removing light mode) -->
            <div class="absolute inset-0 overflow-hidden">
                <div
                    class="absolute w-[150%] h-[200%] dark:bg-gradient-to-r dark:from-indigo-900/30 dark:via-blue-900/30 dark:to-purple-900/30 blur-3xl animate-aurora-sweep-dark"
                ></div>
            </div>

            <!-- 🫧 Dark Mode Floating Blobs (added without removing light mode) -->
            <div
                class="absolute w-[30rem] h-[30rem] rounded-full blur-3xl top-0 left-0 animate-blob-dark dark:bg-indigo-900/30 hidden dark:block"
            ></div>
            <div
                class="absolute w-[24rem] h-[24rem] rounded-full blur-3xl bottom-0 right-0 animate-blob-dark animation-delay-2000 dark:bg-sky-900/28 hidden dark:block"
            ></div>

            <!-- ✨ Dark Mode Floating Particles (added without removing light mode) -->
            <div
                v-for="n in 12"
                :key="'contact-dark-particle-' + n"
                class="absolute w-2 h-2 rounded-full animate-particle-dark hidden dark:block bg-gradient-to-r from-blue-600 to-indigo-500"
                :style="{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${n * 0.5}s`,
                    animationDuration: `${5 + Math.random() * 4}s`,
                }"
            ></div>

            <!-- 🎨 Your Original Light Mode Background Layers (KEPT AS IS) -->
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:hidden animate-gradient-flow"></div>
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(180,200,255,0.25),transparent_60%)] dark:hidden"></div>

            <!-- 🌈 Your Original Light Mode Aurora -->
            <div class="absolute inset-0 overflow-hidden dark:hidden">
                <div class="absolute w-[150%] h-[200%] bg-gradient-to-r from-indigo-200/40 via-blue-100/40 to-purple-200/40 blur-3xl animate-aurora-sweep"></div>
            </div>

            <!-- 🫧 Your Original Light Mode Floating Blobs (KEPT AS IS) -->
            <div class="absolute w-[35rem] h-[35rem] bg-indigo-200/20 rounded-full blur-3xl top-0 left-0 animate-blob dark:hidden"></div>
            <div class="absolute w-[30rem] h-[30rem] bg-blue-200/20 rounded-full blur-3xl bottom-0 right-0 animate-blob animation-delay-2000 dark:hidden"></div>
            <div class="absolute w-[25rem] h-[25rem] bg-purple-200/20 rounded-full blur-3xl top-1/3 right-1/3 animate-blob animation-delay-4000 dark:hidden"></div>

            <!-- ✨ Your Original Light Mode Particles (KEPT AS IS) -->
            <div
                v-for="n in 12"
                :key="'particle-' + n"
                class="absolute w-2 h-2 bg-gradient-to-r from-blue-300 to-purple-200 rounded-full animate-particle blur-sm dark:hidden"
                :style="{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${n * 0.8}s`,
                    animationDuration: `${5 + Math.random() * 4}s`
                }"
            ></div>

            <!-- 💫 Your Original Glowing Ring (KEPT AS IS) -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-blue-200/30 rounded-full animate-spin-slow blur-sm dark:hidden"></div>

            <div class="relative max-w-5xl mx-auto px-6 text-center z-10">
                <h2
                    class="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 leading-tight drop-shadow-sm aos-animate aos-fade-up aos-delay-100"
                >
                    {{ $t('leadForm.title') }}
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 dark:from-indigo-300 dark:via-blue-300 dark:to-purple-300 animate-text-glow"
                    >
                        {{ $t('leadForm.highlight') }}
                    </span>
                </h2>

                <p
                    class="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg aos-animate aos-fade-up aos-delay-200"
                >
                    {{ $t('leadForm.subtitle') }}
                </p>

                <form
                    @submit.prevent="submitLead"
                    class="relative bg-white/70 dark:bg-white/10 backdrop-blur-2xl border border-white/40 dark:border-white/20 shadow-2xl rounded-3xl p-10 space-y-8 hover:shadow-blue-300/40 dark:hover:shadow-indigo-500/20 transition-all duration-700 animate-float aos-animate aos-zoom-in aos-delay-300"
                >
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputBase :label="$t('leadForm.fields.name.label')" :placeholder="$t('leadForm.fields.name.placeholder')" v-model="leadForm.name" requireText="*" maxLength="50" />
                        <InputBase :label="$t('leadForm.fields.company.label')" :placeholder="$t('leadForm.fields.company.placeholder')" v-model="leadForm.company" maxLength="100" />
                        <InputBase :label="$t('leadForm.fields.phone.label')" :placeholder="$t('leadForm.fields.phone.placeholder')" v-model="leadForm.phone" maxLength="20" />
                        <InputBase  :label="$t('leadForm.fields.email.label')" :placeholder="$t('leadForm.fields.email.placeholder')" type="email" v-model="leadForm.email" requireText="*" />
                        <InputBase class="md:col-span-2"  maxLength="500"  :label="$t('leadForm.fields.description.label')" :placeholder="$t('leadForm.fields.description.placeholder')" type="textarea" v-model="leadForm.description" requireText="*" />

                    </div>

                    <div class="flex justify-center">
                        <BaseButton
                            :loading="loading"
                            @click="submitLead"
                            size="lg"
                            class="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 dark:from-indigo-500 dark:via-blue-500 dark:to-purple-500 text-white border-none hover:shadow-lg hover:shadow-indigo-300/40 dark:hover:shadow-indigo-500/30 transition-transform duration-300 transform hover:scale-110 backdrop-blur-lg relative overflow-hidden"
                        >
                            <span class="relative z-10">{{ $t('leadForm.submit') }}</span>
                            <div class="absolute inset-0 bg-gradient-to-r from-white/10 to-indigo-200/10 dark:to-indigo-400/10 opacity-0 hover:opacity-100 animate-glow-sweep"></div>
                        </BaseButton>
                    </div>

                    <p
                        v-if="formMessage"
                        class="text-center font-semibold mt-4"
                        :class="formMessage.includes('Thank') ? 'text-green-600' : 'text-red-500'"
                    >
                        {{ formMessage }}
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/elements/button/index.vue'
import { ref, reactive, onMounted } from 'vue'
import InputBase from '~/components/elements/baseInput/input.vue'
import { useI18n } from 'vue-i18n'
import { useCrmStore } from '~/stores/createLeads'
const { t: $t } = useI18n()
const crmStore = useCrmStore()

// Define types for form and API response
interface LeadForm {
    name: string
    email: string
    company?: string
    phone?: string
    message?: string
    city?: string
    description?:string
}

const leadForm = reactive<LeadForm>({
    name: '',
    email: '',
    company: '',
    phone: '',
    description:''
})

const formMessage = ref("")
const loading = ref(false);

const submitLead = async (): Promise<void> => {
    loading.value = true
    formMessage.value = ''

    // ✅ 1. Required fields check
    if (!leadForm.name || !leadForm.company || !leadForm.description || !leadForm.email || !leadForm.phone) {
        formMessage.value = $t('leadForm.missingFields') // e.g., "Please fill in all required fields."
        loading.value = false
        return
    }

    // ✅ 2. Email validation (must include @ and valid domain)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(leadForm.email)) {
        formMessage.value = $t('leadForm.errorMessageEmail') // e.g., "Please enter a valid email address."
        loading.value = false
        return
    }

    try {
        await crmStore.sendLead(leadForm)
        formMessage.value = $t('leadForm.successMessage') // "Thank you! Your message has been sent successfully."
    } catch (err: any) {
        formMessage.value = $t('leadForm.errorMessage') // "Oops! Something went wrong. Please try again."
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    // Initialize scroll animations
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

        // Observe all elements with AOS classes
        document.querySelectorAll('.aos-fade-up, .aos-zoom-in').forEach(el => {
            observer.observe(el)
        })
    }
}
</script>

<style scoped>
/* 🌈 Dark Mode Background Motion - SAME AS CUSTOMER SECTION (ADDED) */
@keyframes gradient-flow-dark {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}
.animate-gradient-flow-dark {
    background-size: 200% 200%;
    animation: gradient-flow-dark 16s ease infinite;
}

/* 🌌 Dark Mode Aurora Wave - SAME AS CUSTOMER SECTION (ADDED) */
@keyframes aurora-sweep-dark {
    0% {
        transform: translateX(-20%) rotate(0deg);
        opacity: 0.3;
    }
    50% {
        transform: translateX(20%) rotate(2deg);
        opacity: 0.5;
    }
    100% {
        transform: translateX(-20%) rotate(0deg);
        opacity: 0.3;
    }
}
.animate-aurora-sweep-dark {
    animation: aurora-sweep-dark 14s ease-in-out infinite;
}

/* 🫧 Dark Mode Floating Blobs - SAME AS CUSTOMER SECTION (ADDED) */
@keyframes blob-dark {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(50px, -40px) scale(1.1); }
    66% { transform: translate(-40px, 30px) scale(0.9); }
}
.animate-blob-dark {
    animation: blob-dark 12s infinite ease-in-out;
    opacity: 0.4;
}

/* ✨ Dark Mode Floating Particles - SAME AS OTHER SECTIONS (ADDED) */
@keyframes particle-dark {
    0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.5;
    }
    50% {
        transform: translateY(-25px) scale(1.2);
        opacity: 0.9;
    }
}
.animate-particle-dark {
    animation: particle-dark 7s ease-in-out infinite;
}

/* 🎨 Your Original Light Mode Animations (KEPT AS IS) */
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

/* AOS Replacement Animations */
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

/* Animation Delays */
.aos-delay-100 {
    transition-delay: 100ms;
}

.aos-delay-200 {
    transition-delay: 200ms;
}

.aos-delay-300 {
    transition-delay: 300ms;
}

.aos-delay-400 {
    transition-delay: 400ms;
}

.aos-delay-500 {
    transition-delay: 500ms;
}

/* Section animation */
.contact-section {
    opacity: 0;
    transform: translateY(20px);
    animation: section-fade-up 1s ease-out 0.2s forwards;
}

@keyframes section-fade-up {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    .aos-fade-up,
    .aos-zoom-in,
    .contact-section {
        animation: none;
        transition: none;
        opacity: 1;
        transform: none;
    }
    
    .aos-animate {
        opacity: 1;
        transform: none;
    }
}
</style>