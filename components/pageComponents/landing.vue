<template>
    <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'" class="flex flex-col justify-center ">

        <div>
            <HomeSections />
        </div>


  
    <!-- 📊 Statistics Section -->
        <div>
            <StatisticsSections/>
        </div>

        <!-- 🌟 Info Section 1 -->
        <div>
            <InfoSections />
        </div>

        <div>
            <SliderSections/>
        </div>

        <!-- ✨ Elegant Accordion Section -->
        <div class="mt-20 px-6 lg:px-32" data-aos="fade-up" data-aos-delay="index * 150">
            <h2 class="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                Frequently Asked
                <span class="purple-gradient-text">Questions</span>
            </h2>

            <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="relative mb-4 overflow-hidden rounded-2xl
                border border-gray-200/50 dark:border-white/10
                bg-white/60 dark:bg-white/5
                backdrop-blur-md
                transition-all duration-500
                hover:shadow-xl dark:hover:shadow-blue-500/10
                hover:-translate-y-1 group"
                :class="{ 'ring-2 ring-blue-400/40': faq.open }"
            >
                <button
                    class="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                    @click="toggleAccordion(index)"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-xl flex items-center justify-center
                            bg-gradient-to-tr from-blue-500 to-purple-500
                            text-white group-hover:scale-105
                            transition-transform duration-500"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                            </svg>
                        </div>

                        <span
                            class="text-lg font-semibold
                            text-gray-900 dark:text-gray-100
                            group-hover:text-transparent
                            group-hover:bg-clip-text
                            group-hover:bg-gradient-to-r
                            from-blue-600 to-purple-600
                            dark:from-blue-400 dark:to-purple-400
                            transition-all duration-300"
                        >
                            {{ faq.question }}
                        </span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 transform transition-transform duration-500
                        text-gray-500 dark:text-gray-400
                        group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        :class="{ 'rotate-180': faq.open }"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>

                <transition name="accordion">
                    <div
                        v-if="faq.open"
                        class="px-6 pb-6 mt-4
                        text-gray-700 dark:text-gray-300
                        leading-relaxed
                        border-t border-gray-200/60 dark:border-white/10
                        bg-gradient-to-r
                        from-blue-50/30 to-purple-50/30
                        dark:from-blue-900/10 dark:to-purple-900/10"
                    >
                        <p class="mt-2 text-base dark:text-gray-300">
                            {{ faq.answer }}
                        </p>
                    </div>
                </transition>
            </div>
        </div>


    

   <!-- 💬 User comments -->
        <div>
            <CommentSections/>
        </div>

       
        <!-- ✨ Lead Generation Form Section -->
        <div>
            <LeadSections />
        </div>
    </div>
</template>


<script setup lang="ts">
import 'aos/dist/aos.css'

import LeadSections from '../elements/components/leadSections.vue'
import HomeSections from '../elements/components/homeSections.vue'
import InfoSections from '../elements/components/infoSections.vue'
import { TrendingUp, Users, Globe2, Sparkles } from 'lucide-vue-next'
import StatisticsSections from '../elements/components/statisticsSections.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import CommentSections from '../elements/components/commentSections.vue'
import SliderSections from '../elements/components/sliderSections.vue'


const faqs = ref([
{
    question: 'How does Daart Ads use AI to improve campaigns?',
    answer: 'Daart Ads uses advanced AI technology to continuously analyze campaign performance in real time. It automatically evaluates metrics such as clicks, conversions, audience behavior, and engagement patterns. Based on this data, the system intelligently adjusts bidding strategies, audience targeting, and ad creatives to maximize performance. Instead of relying on manual optimization, the AI learns from campaign data over time and helps ensure your ads achieve better results while reducing wasted ad spend.',
    open: false,
},
{
    question: 'Can I use Daart Ads if I have no experience?',
    answer: 'Absolutely! Daart Ads is designed with simplicity in mind so anyone can start creating effective advertising campaigns. Whether you are a small business owner, entrepreneur, content creator, or complete beginner, the platform guides you through each step of the process. Smart recommendations, automation features, and an intuitive dashboard help eliminate the complexity of digital marketing, allowing you to launch campaigns confidently without prior advertising knowledge.',
    open: false,
},
{
    question: 'Which platforms can I advertise on?',
    answer: 'With Daart Ads, you can manage and launch campaigns across multiple advertising platforms from one centralized dashboard. Supported channels include Google Ads, Meta platforms such as Facebook and Instagram, TikTok, and additional advertising networks. This unified approach saves time, simplifies campaign management, and allows you to reach audiences across different channels without switching between multiple tools and interfaces.',
    open: false,
},
{
    question: 'Is there a free trial available?',
    answer: 'Yes! Daart Ads offers a free plan so users can explore the platform and experience its features before committing to a paid subscription. You can test campaign creation tools, explore automation capabilities, and understand how AI optimization works in real-world scenarios. This allows you to evaluate the platform and determine whether it fits your advertising goals before upgrading to advanced plans.',
    open: false,
},
])



const toggleAccordion = (index: number) => {
    faqs.value[index].open = !faqs.value[index].open
}
</script>
