<template>
    <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" class="flex flex-col justify-center ">

        <div>
            <HomeSections />
        </div>

  

        <!-- 🌟 Info Section 1 -->
        <div>
            <InfoSections />
        </div>

        <!-- services Sections -->
        <div>
            <ServicesSections />
        </div>

                <!-- ✨ Elegant Accordion Section -->
        <div class="mt-20 px-6 lg:px-32" data-aos="fade-up" data-aos-delay="index * 150">
            <h2 class="text-3xl font-bold text-center mb-10">
                Frequently Asked <span class="purple-gradient-text">Questions</span>
            </h2>

            <div v-for="(faq, index) in faqs" :key="index"
                class="relative mb-4 overflow-hidden rounded-2xl border border-transparent bg-white/60 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
                :class="{ 'ring-2 ring-blue-400/40': faq.open }">
                <button class="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                    @click="toggleAccordion(index)">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-tr from-blue-500 to-purple-500 text-white group-hover:scale-105 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <span
                            class="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300">
                            {{ faq.question }}
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
                            {{ faq.answer }}
                        </p>
                    </div>
                </transition>
            </div>
        </div>


        <!-- 📊 Statistics Section -->
        <div class="relative mt-32 py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50" data-aos="fade-up"
            data-aos-duration="1000">
            <div class="max-w-6xl mx-auto px-6 text-center">
                <!-- Section Title -->
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-10" data-aos="fade-up" data-aos-delay="100">
                    Our <span class="purple-gradient-text">Impact in Numbers</span>
                </h2>

                <!-- Stats Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8" data-aos="zoom-in-up"
                    data-aos-delay="200">
                    <div v-for="(stat, i) in stats" :key="i"
                        class="flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform">
                        <!-- Icon with subtle hover animation -->
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
                            {{ stat.label }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- user comments -->
        <div class="py-10 bg-white" data-aos="fade-up" data-aos-duration="1000">
            <div class="max-w-6xl mx-auto px-6 text-center">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-12" data-aos="fade-up">
                    What Our <span class="purple-gradient-text">Customers Say</span>
                </h2>

                <Swiper :slides-per-view="2" :space-between="30" :loop="true" :autoplay="{ delay: 3000 }"
                    :pagination="{ clickable: true }" :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 2, spaceBetween: 30 }
                    }" class="testimonial-swiper">
                    <SwiperSlide v-for="(testimonial, i) in testimonials" :key="'testimonial-' + i"
                        class="relative p-8 sm:p-10 m-4 sm:m-6 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                        <!-- ⭐ Quote Icon -->
                        <div
                            class="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="white" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12h.01M15 12h.01M7 8h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                            </svg>
                        </div>

                        <!-- ✍️ Testimonial Quote -->
                        <p class="text-gray-700 text-sm italic mb-2 sm:mb-4 leading-relaxed flex-1">
                            “{{ testimonial.quote }}”
                        </p>

                        <!-- 👤 Customer Info -->
                        <div class="flex items-center gap-4 mt-auto">
                            <img :src="testimonial.image" :alt="testimonial.name"
                                class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md ring-2 ring-purple-200" />
                            <div class="text-left">
                                <h4 class="font-semibold text-gray-900 text-sm sm:text-lg">{{ testimonial.name }}</h4>
                                <p class="text-xs sm:text-sm text-gray-500">{{ testimonial.position }}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

       
        <!-- ✨ Lead Generation Form Section -->
        <div>
            <LeadSections />
        </div>
    </div>
</template>


<script setup lang="ts">
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css';
import 'swiper/css/pagination';
import LeadSections from '../elements/components/leadSections.vue'
import HomeSections from '../elements/components/homeSections.vue'
import InfoSections from '../elements/components/infoSections.vue'
import ServicesSections from '../elements/components/servicesSections.vue'
import CustomerSections from '../elements/components/customerSections.vue';
import { TrendingUp, Users, Globe2, Sparkles } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const faqs = ref([
    {
        question: 'How does Daart Ads use AI to improve campaigns?',
        answer: 'Daart Ads analyzes your ad performance in real time and automatically adjusts bids, targeting, and creatives for the best results.',
        open: false,
    },
    {
        question: 'Can I use Daart Ads if I have no experience?',
        answer: 'Absolutely! Daart Ads is designed for everyone — even if you have no background in marketing or advertising.',
        open: false,
    },
    {
        question: 'Which platforms can I advertise on?',
        answer: 'You can launch ads across Google, Meta, Instagram, TikTok, and more — all from one dashboard.',
        open: false,
    },
    {
        question: 'Is there a free trial available?',
        answer: 'Yes! We offer a free plan so you can explore Daart Ads before committing to a subscription.',
        open: false,
    },
])


const testimonials = [
    {
        name: "Mohammad Mousavi",
        position: "Digital Marketing Manager",
        image: "https://daartagency.com/wp-content/uploads/2021/06/snapp-food.png",
        quote: "Collaboration with Daart Digital Marketing Company has been full of new and pleasant experiences. The team actively participates in all campaigns, providing full support, follow-up, and interaction. They optimize campaigns and advertising by continuously analyzing data in the best possible way."
    },
    {
        name: "Mehrad Mahrooqi",
        position: "Digital Marketing Manager",
        image: "https://daartagency.com/wp-content/uploads/2025/02/اسنپ-مارکت.webp",
        quote: "Daart Digital Marketing Agency has been with us for a long time and has always offered suitable solutions based on our needs. After interacting with their experts, their prominent role in improving our marketing metrics is clearly visible."
    },
    {
        name: "Alireza Houshmand",
        position: "Business Development Manager",
        image: "https://daartagency.com/wp-content/uploads/2021/06/Hamrah-Card.png",
        quote: "Our collaboration with Hamrah Card and Daart Digital Advertising Agency has lasted three years. This continued cooperation is due to Daart's professional behavior and excellent support, making them one of the best digital marketing agencies."
    },
    {
        name: "Dana Enayati",
        position: "Digital Marketing Manager",
        image: "https://daartagency.com/wp-content/uploads/2021/06/Snapp.png",
        quote: "Our collaboration with Daart Internet Marketing Agency has lasted over four years. The Daart team works tirelessly to solve client problems and has a strong understanding of business needs and key performance indicators."
    }
];

const stats = ref([
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: Globe2, value: '25+', label: 'Countries Reached' },
    { icon: TrendingUp, value: '95%', label: 'Campaign Success Rate' },
    { icon: Sparkles, value: '120M+', label: 'Ad Views Delivered' },
])


const toggleAccordion = (index: number) => {
    faqs.value[index].open = !faqs.value[index].open
}
</script>
