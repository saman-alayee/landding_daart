<template>
    <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" class="flex flex-col justify-center px-0 lg:px-12">
        <!-- Hero Section -->
        <section id="home">
            <div class="hero-section mt-20 px-8">
                <h1 class="font-medium mx-auto text-center text-3xl lg:text-5xl leading-snug" data-aos="fade-up"
                    data-aos-duration="1000">
                    {{ $t('hero.title.part1') }} <br />
                    {{ $t('hero.title.part2') }}<span class="purple-gradient-text">{{ $t('hero.title.highlight')
                        }}</span>.
                </h1>

                <h5 class="hero-subhead pt-0 mb-4 my-md-4 mx-auto text-center text-gray-600 max-w-2xl"
                    data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    {{ $t('hero.subtitle') }}
                </h5>

                <div class="flex justify-center" data-aos="zoom-in" data-aos-delay="400">
                    <BaseButton type="submit" size="lg">{{ $t('hero.button') }}</BaseButton>
                </div>
            </div>
        </section>
        <!-- Info Section 1 -->
        <section class="mt-20 flex flex-col lg:flex-row items-center justify-between gap-8 px-6"
            :class="$i18n.locale === 'ar' ? 'lg:flex-row-reverse' : ''" data-aos="fade-up" data-aos-duration="1000">
            <div class="lg:w-6/12 w-full flex justify-center"
                :class="$i18n.locale === 'ar' ? 'lg:text-right' : 'lg:text-left'" data-aos="fade-right"
                data-aos-delay="100">
                <img src="/assets/image/daart-banner.webp" :alt="$t('info1.imageAlt')"
                    class="w-full max-w-md lg:max-w-none object-contain transform hover:scale-105 transition-transform duration-700" />
            </div>

            <div class="lg:w-6/12 text-center lg:text-right" data-aos="fade-left" data-aos-delay="300">
                <h2 class="text-3xl lg:text-4xl text-center font-semibold text-gray-900 leading-snug">
                    {{ $t('info1.title') }}
                </h2>
                <p class="mt-4 text-gray-600 text-center text-base leading-relaxed">
                    {{ $t('info1.desc') }}
                </p>
            </div>
        </section>

        <!-- Info Section 2 -->
        <section class="mt-20 flex flex-col lg:flex-row items-center justify-between gap-8 px-12"
            :class="$i18n.locale === 'ar' ? 'lg:flex-row-reverse' : ''" data-aos="fade-up" data-aos-duration="1000">
            <div class="lg:w-6/12 text-center lg:text-right"
                :class="$i18n.locale === 'ar' ? 'lg:text-right' : 'lg:text-left'" data-aos="fade-right"
                data-aos-delay="200">
                <h2 class="text-3xl lg:text-4xl text-center font-bold text-gray-900 leading-snug">
                    {{ $t('info2.title') }}
                </h2>
                <p class="mt-4 text-center text-gray-600 text-base leading-relaxed">
                    {{ $t('info2.desc') }}
                </p>
            </div>

            <div class="lg:w-6/12 w-full flex justify-center" data-aos="fade-left" data-aos-delay="300">
                <img src="/assets/image/home-1e2.png" :alt="$t('info2.imageAlt')"
                    class="w-full max-w-md lg:max-w-none object-contain transform hover:scale-105 transition-transform duration-700" />
            </div>
        </section>

        <!-- 🌟 3 Card Boxes Section -->
        <section id="services">
            <div class="mt-20" data-aos="fade-up" data-aos-duration="1000">
                <h5 class=" text-gray-600 text-center mb-6 py-0 px-8 lg:px-32 mb-12">
                    {{ $t('cardsSection.subtitle') }}
                </h5>
            </div>

            <h1 class="text-center" data-aos="fade-up" data-aos-delay="150">
                {{ $t('cardsSection.title') }}
            </h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-0 px-8 lg:px-24 mb-12"
                data-aos="fade-up" data-aos-delay="200" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">

                <!-- Card -->
                <div :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'" v-for="(card, i) in cards" :key="i"
                    class="group relative p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">

                    <!-- Background Glow -->
                    <div
                        class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-blue-400/20 to-blue-500/20 blur-3xl animate-float">
                    </div>

                    <!-- Card Content -->
                    <div class="relative z-10 flex flex-col">

                        <!-- Icon -->
                        <div
                            class="w-12 h-12 mb-5 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 transform group-hover:scale-110">
                            <img :src="card.icon" :alt="$t(`cards.${i}.title`)" class="w-6 h-6" />
                        </div>

                        <!-- Title -->
                        <h3 :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
                            class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-all duration-300">
                            {{ $t(`cards.${i}.title`) }}
                        </h3>

                        <!-- Description -->
                        <p :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
                            class="text-gray-700 text-sm leading-relaxed">
                            {{ $t(`cards.${i}.desc`) }}
                        </p>
                    </div>
                </div>
            </div>
        </section>



        <!-- 🌟 Customers Slider -->
        <div class="flex flex-col justify-center" data-aos="fade-up">
            <h5 class="text-center">{{ $t('home.customersTitle') }}</h5>
            <div data-aos="zoom-in-up" data-aos-delay="200">
                <swiper :slides-per-view="6" :space-between="8" :loop="true"
                    :autoplay="{ delay: 1000, disableOnInteraction: false }" :pagination="{ clickable: true }"
                    :breakpoints="{
                        320: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 10 },
                        768: { slidesPerView: 4, spaceBetween: 15 },
                        1024: { slidesPerView: 6, spaceBetween: 20 }
                    }">
                    <swiper-slide class="SwiperSlide" v-for="item in cardsBrands" :key="'logo-' + item.id">
                        <div class="relative rounded-lg mb-8 w-1/4 max-w-md">
                            <img class="h-32 object-contain rounded-md" :src="item.icon" alt="Logo" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <!-- ✨ FAQ Section -->
        <section id="faq">
            <div class="mt-20 px-6 lg:px-32" :class="$i18n.locale === 'ar' ? 'text-right' : 'text-left'"
                data-aos="fade-up" data-aos-delay="index * 150">
                <h2 class="text-3xl font-bold text-center mb-10">
                    {{ $t('home.faqTitle') }}
                    <span class="purple-gradient-text">{{ $t('home.faqHighlight') }}</span>
                </h2>

                <div v-for="(faq, index) in faqs" :key="index"
                    class="relative mb-4 overflow-hidden rounded-2xl border border-transparent bg-white/60 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
                    :class="{ 'ring-2 ring-blue-400/40': faq.open }">
                    <button :class="$i18n.locale === 'ar' ? 'items-end text-right' : 'items-start text-left'"
                        class="w-full flex justify-between items-center px-6 py-5 focus:outline-none"
                        @click="toggleAccordion(index)">
                        <div class="flex items-center gap-3">
                            <div
                                class=" rounded-xl flex items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-500 text-white group-hover:scale-105 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <span
                                class="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300">
                                {{ $t(`home.faqs.${index}.question`) }}
                            </span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 transform transition-transform duration-500 text-gray-500 group-hover:text-blue-600"
                            :class="{ 'rotate-180': faq.open }" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <transition name="accordion">
                        <div v-if="faq.open"
                            class="px-6 pb-6 mt-4 text-gray-700 leading-relaxed border-t border-gray-200/60 bg-gradient-to-r from-blue-50/30 to-purple-50/30">
                            <p class="mt-2 text-base">
                                {{ $t(`home.faqs.${index}.answer`) }}
                            </p>
                        </div>
                    </transition>
                </div>
            </div>
        </section>

        <!-- 📊 Statistics Section -->
        <section class="relative py-20 mt-20 bg-gradient-to-r from-blue-50 via-white to-purple-50" data-aos="fade-up"
            data-aos-duration="1000" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
            <div class="max-w-6xl mx-auto px-6 text-center">
                <!-- Section Title -->
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-10" data-aos="fade-up" data-aos-delay="100">
                    {{ $t('stats.title') }}
                    <span class="purple-gradient-text">{{ $t('stats.highlight') }}</span>
                </h2>

                <!-- Stats Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" data-aos="zoom-in-up"
                    data-aos-delay="200">
                    <div v-for="(stat, i) in stats" :key="i"
                        class="flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform">

                        <!-- Icon -->
                        <div
                            class="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 text-white mb-4 shadow-lg transform transition-transform duration-500 hover:scale-110 animate-bounce-slow">
                            <component :is="stat.icon" class="w-6 h-6" />
                        </div>

                        <!-- Stat Value -->
                        <h3 class="text-4xl font-extrabold text-gray-900 mb-1 animate-fade-up">
                            {{ stat.value }}
                        </h3>

                        <!-- Stat Label -->
                        <p class="text-gray-600 text-sm font-medium animate-fade-up-delay">
                            {{ $t(`stats.items.${i}.label`) }}
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <!-- user comments -->
        <div class="py-10 bg-white" data-aos="fade-up" data-aos-duration="1000"
            :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
            <div class="max-w-6xl mx-auto px-6 text-center">
                <!-- Section Title -->
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12" data-aos="fade-up">
                    {{ $t('testimonialsSection.title') }}
                    <span class="purple-gradient-text">{{ $t('testimonialsSection.highlight') }}</span>
                </h2>

                <!-- Swiper -->
                <Swiper :slides-per-view="2" :space-between="30" :loop="true" :autoplay="{ delay: 3000 }"
                    :pagination="{ clickable: true }" :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 2, spaceBetween: 30 }
                    }" class="testimonial-swiper">
                    <!-- Loop Testimonials -->
                    <SwiperSlide v-for="(testimonial, i) in testimonials" :key="'testimonial-' + i"
                        class="relative p-8 sm:p-10 m-4 sm:m-6 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                        <!-- Quote Icon -->
                        <div
                            class="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="white" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12h.01M15 12h.01M7 8h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                            </svg>
                        </div>

                        <!-- Quote -->
                        <p class="text-gray-700 text-sm italic mb-2 sm:mb-4 leading-relaxed flex-1">
                            “{{ $t(`testimonialsSection.items.${i}.quote`) }}”
                        </p>

                        <!-- Author Info -->
                        <div class="flex items-center gap-4 mt-auto">
                            <img :src="$t(`testimonialsSection.items.${i}.image`)"
                                :alt="$t(`testimonialsSection.items.${i}.name`)"
                                class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md ring-2 ring-purple-200" />
                            <div class="text-left">
                                <h4 class="font-semibold text-gray-900 text-sm sm:text-lg">
                                    {{ $t(`testimonialsSection.items.${i}.name`) }}
                                </h4>
                                <p class="text-xs sm:text-sm text-gray-500">
                                    {{ $t(`testimonialsSection.items.${i}.position`) }}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <!-- ✨ Lead Generation Form Section -->
        <section id="contact">
            <div class="relative py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
                data-aos="fade-up" data-aos-duration="1200" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
                <!-- Gradient glow background -->
                <div
                    class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1),transparent_40%)]">
                </div>

                <div class="relative max-w-5xl mx-auto px-6 text-center">
                    <!-- 🌟 Title -->
                    <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        {{ $t('leadForm.title') }}
                        <span class="purple-gradient-text">{{ $t('leadForm.highlight') }}</span>
                    </h2>

                    <!-- 📝 Subtitle -->
                    <p class="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
                        {{ $t('leadForm.subtitle') }}
                    </p>

                    <!-- 📩 Lead Form -->
                    <form @submit.prevent="submitLead"
                        class="relative bg-white/60 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-10 space-y-8"
                        data-aos="zoom-in" data-aos-delay="200">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Full Name -->
                            <InputBase :label="$t('leadForm.fields.name.label')"
                                :placeholder="$t('leadForm.fields.name.placeholder')" v-model="leadForm.name"
                                requireText="*" maxLength="50" :helpText="$t('leadForm.fields.name.help')" />

                            <!-- Last Name -->
                            <InputBase :label="$t('leadForm.fields.lastname.label')"
                                :placeholder="$t('leadForm.fields.lastname.placeholder')" v-model="leadForm.lastname"
                                requireText="*" maxLength="50" :helpText="$t('leadForm.fields.lastname.help')" />

                            <!-- Company -->
                            <InputBase :label="$t('leadForm.fields.company.label')"
                                :placeholder="$t('leadForm.fields.company.placeholder')" v-model="leadForm.company"
                                maxLength="100" />

                            <!-- Phone -->
                            <InputBase :label="$t('leadForm.fields.phone.label')"
                                :placeholder="$t('leadForm.fields.phone.placeholder')" v-model="leadForm.phone"
                                maxLength="20" />

                            <!-- Email spans full width -->
                            <InputBase class="md:col-span-2" :label="$t('leadForm.fields.email.label')"
                                :placeholder="$t('leadForm.fields.email.placeholder')" type="email"
                                v-model="leadForm.email" requireText="*" :helpText="$t('leadForm.fields.email.help')" />
                        </div>




                        <!-- Submit Button -->
                        <div class="flex justify-center">

                            <BaseButton :loading="loading" @click="submitLead" size="lg">{{ $t('leadForm.submit') }}
                            </BaseButton>

                        </div>

                        <!-- Form Response -->
                        <p v-if="formMessage" class="text-center font-semibold mt-4"
                            :class="formMessage.includes('Thank') ? 'text-green-600' : 'text-red-500'">
                            {{ formMessage }}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>


<script setup lang="ts">
import BaseButton from '~/components/elements/button/index.vue'
import rocket from '~/assets/image/rocket-01.svg'
import chart from '~/assets/image/chart-breakout-circle.svg'
import magic from '~/assets/image/magic-wand-02.svg'
import banimid from '~/assets/image/banimid-2.png'
import evano from '~/assets/image/evano-1.png'
import taghcheh from '~/assets/image/taghcheh-1.png'
import signal from '~/assets/image/signal.png'
import okala from '~/assets/image/okala-1.png'
import khanoomi from '~/assets/image/khanoomi-1.png'
import fidibo from '~/assets/image/fidibo-1.png'
import { ref } from 'vue'
import InputBase from '~/components/elements/baseInput/input.vue'
import { TrendingUp, Users, Globe2, Sparkles } from 'lucide-vue-next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCrmStore } from '~/stores/createLeads'

const { t: $t } = useI18n()
const crmStore = useCrmStore()

// Define types for form and API response
interface LeadForm {
    name: string
    lastname: string
    email: string
    company?: string
    phone?: string
    message?: string
    city?: string
}

const leadForm = reactive<LeadForm>({
    name: '',
    lastname: '',
    email: '',
    company: '',
    phone: '',
})

const formMessage = ref("")
const loading = ref(false);


const submitLead = async (): Promise<void> => {
    loading.value = true
    formMessage.value = ''

    try {
        await crmStore.sendLead(leadForm)

    } catch (err: any) {
        formMessage.value = `Error: ${err.message || 'Unknown error'}`
    } finally {
        loading.value = false
    }
}

onMounted(async () => {
    await nextTick()
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    })
    setTimeout(() => {
        AOS.refresh()
    }, 800)
})
const stats = ref([
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: Globe2, value: '25+', label: 'Countries Reached' },
    { icon: TrendingUp, value: '95%', label: 'Campaign Success Rate' },
    { icon: Sparkles, value: '120M+', label: 'Ad Views Delivered' },
])

const cardsBrands = [
    { id: 1, icon: banimid },
    { id: 2, icon: evano },
    { id: 3, icon: taghcheh },
    { id: 4, icon: signal },
    { id: 5, icon: okala },
    { id: 6, icon: khanoomi },
    { id: 7, icon: fidibo },
]


const faqs = ref([
    {
        open: false,
    },
    {
        open: false,
    },
    {
        open: false,
    },
    {
        open: false,
    },
])

const toggleAccordion = (index: number) => {
    faqs.value[index].open = !faqs.value[index].open
}

const cards = [
    { icon: rocket },
    { icon: chart },
    { icon: magic },
]
const testimonials = [
    {
        image: "https://daartagency.com/wp-content/uploads/2021/06/snapp-food.png",
    },
    {
        image: "https://daartagency.com/wp-content/uploads/2025/02/اسنپ-مارکت.webp",
    },
    {

        image: "https://daartagency.com/wp-content/uploads/2021/06/Hamrah-Card.png",
    },
    {
        image: "https://daartagency.com/wp-content/uploads/2021/06/Snapp.png",
    }
];


</script>