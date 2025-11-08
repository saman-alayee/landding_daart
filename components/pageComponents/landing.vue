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
import CustomerSections from '../elements/components/customerSections.vue'

</script>
