<template>
  <div class="relative w-full py-16 md:py-24">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20"></div>
    
    <!-- Animated Grid Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

    <!-- Floating Orbs -->
    <div class="absolute top-20 left-10 w-80 h-80 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float-slow animation-delay-2000 pointer-events-none"></div>

    <div class="relative z-10 mx-auto px-32">
      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-900/50 dark:to-purple-900/50 backdrop-blur-md border border-blue-200/50 dark:border-blue-800/50 shadow-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-blue-500 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-400"></span>
          </span>
          <span class="text-sm font-medium text-blue-700 dark:text-blue-300">Our Premium Services</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Powerful Digital 
          </span>
          <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Advertising Solutions
          </span>
        </h2>
        
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
        
        <p class="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
          Drive measurable growth with our comprehensive suite of advertising and marketing automation platforms
        </p>
      </div>

      <!-- Tabs Container -->
      <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        <!-- Tab Navigation -->
        <div class="w-full lg:w-80 flex-shrink-0">
          <div class="sticky top-24">
            <div class="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50 dark:border-gray-700/50">
              <div class="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                <button
                  v-for="tab in tabs"
                  :key="tab.id"
                  @click="activeTab = tab.id"
                  :class="[
                    'group w-full px-4 py-3 rounded-xl transition-all duration-300 text-right flex items-center justify-between flex-shrink-0 lg:flex-shrink',
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-l-4 border-blue-500 dark:border-blue-400 shadow-md'
                      : 'hover:bg-gray-50 dark:hover:bg-slate-700/50'
                  ]"
                >
                  <div class="flex items-center gap-3">
                    <!-- Icon - Fixed size -->
                    <div
                      :class="[
                        'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
                        activeTab === tab.id
                          ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 group-hover:scale-110'
                      ]"
                    >
                      <img :src="tab.icon" class="w-6 h-6 object-contain" :alt="tab.title" />
                    </div>
                    
                    <!-- Title -->
                    <div class="text-right">
                      <p
                        :class="[
                          'font-semibold text-sm',
                          activeTab === tab.id
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300'
                        ]"
                      >
                        {{ tab.title }}
                      </p>
                      <p class="text-xs text-gray-400 dark:text-gray-500 hidden lg:block">
                        {{ tab.subtitle }}
                      </p>
                    </div>
                  </div>
                  
                  <!-- Active Indicator -->
                  <div
                    v-if="activeTab === tab.id"
                    class="w-1.5 h-6 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500"
                  ></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="flex-1">
          <Transition name="fade" mode="out-in">
            <div
              v-if="currentTab"
              :key="activeTab"
              class="bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            >
              <div class="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                
                <!-- Content Left - Text Section (Right aligned for RTL) -->
                <div class="flex-1 text-right">
                  <!-- Badge -->
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-4">
                    <span class="text-xs font-medium text-blue-600 dark:text-blue-400">{{ currentTab.badge }}</span>
                  </div>
                  
                  <!-- Title -->
                  <h3 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {{ currentTab.content.title }}
                  </h3>
                  
                  <!-- Description -->
                  <p class="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    {{ currentTab.content.description }}
                  </p>
                  
                  <!-- Features List - Right aligned -->
                  <div class="space-y-3 mb-6">
                    <div
                      v-for="(feature, idx) in currentTab.content.features"
                      :key="idx"
                      class="flex items-center gap-3 group cursor-default justify-end"
                    >
                      <span class="text-gray-700 dark:text-gray-300 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {{ feature }}
                      </span>
                      <div class="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                    </div>
                  </div>
                  
                  <!-- CTA Button -->
                  <button class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                    <span>Learn More</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
                
                <!-- Content Right - Image (Fixed size container) -->
                <div class="flex-1 w-full max-w-md mx-auto lg:mx-0">
                  <div class="relative group">
                    <!-- Glow Effect -->
                    <div class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    <!-- Image Container - Fixed height and width -->
                    <div class="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-800 p-6 flex items-center justify-center min-h-[280px]">
                      <img
                        :src="currentTab.content.image"
                        :alt="currentTab.title"
                        class="w-full max-w-[280px] h-auto max-h-[220px] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </Transition>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Import all icons as image paths (keep these small - 24x24 or 32x32)
import googleIcon from '~/assets/image/Google_Ads_icon.svg.png'
import facebookIcon from '~/assets/image/facebook-ads.png'
import instagramIcon from '~/assets/image/social_ads.png'
import webengageIcon from '~/assets/image/webengage.webp'

// Import content images
import googleImage from '~/assets/image/google_ads_logo.webp'
import facebookImage from '~/assets/image/facebook-ads.png'
import socialImage from '~/assets/image/social_ads_logo.png'
import automationImage from '~/assets/image/web_engage.webp'


const activeTab = ref('google')

const tabs = [
  {
    id: 'google',
    title: 'Google Ads',
    subtitle: 'Search & Display',
    icon: googleIcon,
    badge: 'Search Engine Marketing',
    content: {
      title: 'Google Ads - Reach Customers at the Right Moment',
      description: 'Connect with potential customers across Google Search, Display Network, and YouTube with precision targeting and measurable results.',
      image: googleImage,
      features: [
        'Search Ads - Appear at the top of Google search results',
        'Display Ads - Visual advertising across millions of websites',
        'YouTube Ads - Video advertising on the world\'s largest video platform',
        'Remarketing - Re-engage users who have visited your website',
        'Performance tracking with detailed analytics and reporting'
      ]
    }
  },
  {
    id: 'facebook',
    title: 'Facebook Ads',
    subtitle: 'Social Media Marketing',
    icon: facebookIcon,
    badge: 'Social Media Advertising',
    content: {
      title: 'Facebook Ads - Target with Precision',
      description: 'Leverage Facebook\'s powerful targeting capabilities to reach your ideal customers across Facebook, Instagram, and Messenger.',
      image: facebookImage,
      features: [
        'Feed Ads - Native ads that blend seamlessly with content',
        'Story Ads - Full-screen vertical ads for immersive experience',
        'Reels Ads - Short-form video ads for maximum engagement',
        'Custom Audiences - Target based on interests, behaviors, and demographics',
        'Retargeting - Reach users who have interacted with your brand'
      ]
    }
  },
  {
    id: 'social',
    title: 'Social Media Ads',
    subtitle: 'Multi-Platform',
    icon: instagramIcon,
    badge: 'Social Media Management',
    content: {
      title: 'Social Media Ads - Multi-Platform Excellence',
      description: 'Run cohesive advertising campaigns across LinkedIn, Twitter, Pinterest, and TikTok to maximize your brand\'s reach and engagement.',
      image: socialImage,
      features: [
        'LinkedIn Ads - B2B targeting for professional audiences',
        'TikTok Ads - Short-form video content for viral reach',
        'Twitter Ads - Real-time engagement with trending topics',
        'Pinterest Ads - Visual discovery for product inspiration',
        'Cross-platform analytics and unified reporting'
      ]
    }
  },
  {
    id: 'automation',
    title: 'Marketing Automation',
    subtitle: 'WebEngage Powered',
    icon: webengageIcon,
    badge: 'Marketing Automation',
    content: {
      title: 'Marketing Automation - Personalized Customer Journeys',
      description: 'WebEngage-powered omnichannel automation platform to create personalized experiences across email, push notifications, SMS, and web channels.',
      image: automationImage,
      features: [
        'Email Marketing - Automated personalized email campaigns',
        'Push Notifications - Real-time engagement on web and mobile',
        'SMS Campaigns - Direct text message marketing',
        'Web Push - Browser-based notifications',
        'Customer Journey Builder - Visual workflow automation',
        'Segmentation & Personalization - Target based on user behavior'
      ]
    }
  }
]

const currentTab = computed(() => {
  return tabs.find(tab => tab.id === activeTab.value)
})
</script>

<style scoped>
/* Floating Animations */
@keyframes float-slow {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

/* Mobile Scrollbar */
@media (max-width: 1023px) {
  .overflow-x-auto {
    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
  }
  
  .overflow-x-auto::-webkit-scrollbar {
    height: 3px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-track {
    background: #e2e8f0;
    border-radius: 10px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 10px;
  }
  
  .dark .overflow-x-auto::-webkit-scrollbar-track {
    background: #1e293b;
  }
  
  .dark .overflow-x-auto::-webkit-scrollbar-thumb {
    background: #475569;
  }
}
</style>