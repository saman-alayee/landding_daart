<template>
    <div>
           <!-- 💬 User comments -->
        <div
            class="py-10 bg-white dark:bg-gray-950 transition-colors duration-700"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div class="max-w-6xl mx-auto px-6 text-center">

                <h2
                    class="text-3xl lg:text-4xl font-bold
                    text-gray-900 dark:text-white
                    mb-12"
                    data-aos="fade-up"
                >
                    What Our
                    <span class="purple-gradient-text">
                        Customers Say
                    </span>
                </h2>

                <Swiper
                    :slides-per-view="2"
                    :space-between="30"
                    :loop="true"
                    :autoplay="{ delay: 3000 }"
                    :pagination="{ clickable: true }"
                    :breakpoints="{
                        320: { slidesPerView: 1, spaceBetween: 15 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 2, spaceBetween: 30 }
                    }"
                    class="testimonial-swiper"
                >
                    <SwiperSlide
                        v-for="(testimonial, i) in testimonials"
                        :key="'testimonial-' + i"
                        class="relative p-8 sm:p-10 m-4 sm:m-6
                        bg-white/80 dark:bg-white/5
                        backdrop-blur-xl
                        border border-gray-100 dark:border-white/10
                        rounded-3xl
                        shadow-lg dark:shadow-blue-500/5
                        hover:shadow-2xl
                        transition-all duration-500
                        flex flex-col h-full"
                    >
                        <!-- Quote Icon -->
                        <div
                            class="absolute -top-6 left-6 w-12 h-12 rounded-full
                            bg-gradient-to-tr from-blue-500 to-purple-500
                            flex items-center justify-center shadow-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="white"
                                class="w-6 h-6"
                            >
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12h.01M15 12h.01M7 8h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2z"/>
                            </svg>
                        </div>

                        <p class="text-gray-700 dark:text-gray-300 text-sm italic mb-2 sm:mb-4 leading-relaxed flex-1">
                            “{{ testimonial.quote }}”
                        </p>

                        <div class="flex items-center gap-4 mt-auto">
                            <img
                                :src="testimonial.image"
                                :alt="testimonial.name"
                                class="w-12 h-12 sm:w-14 sm:h-14
                                rounded-full object-cover shadow-md
                                ring-2 ring-purple-200
                                dark:ring-purple-500/40"
                            />

                            <div class="text-left">
                                <h4 class="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg">
                                    {{ testimonial.name }}
                                </h4>

                                <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    {{ testimonial.position }}
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'


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

</script>