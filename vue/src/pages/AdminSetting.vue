<script setup>
import { ref } from 'vue'
import GeneralSettings from '@/components/admin/settings/GeneralSettings.vue'
import SeoSettings from '@/components/admin/settings/SeoSettings.vue'
import SecuritySettings from '@/components/admin/settings/SecuritySettings.vue'
import EmailSettings from '@/components/admin/settings/EmailSettings.vue'
import MediaSettings from '@/components/admin/settings/MediaSettings.vue'
import PlayerSettings from '@/components/admin/settings/PlayerSettings.vue'

// Settings data
const generalSettings = ref({
  siteName: 'AnimeVsub',
  siteDescription: 'Xem anime vietsub HD miễn phí',
  siteKeywords: 'anime, vietsub, xem anime, anime online',
  contactEmail: 'contact@animevsub.com',
  supportEmail: 'support@animevsub.com',
  facebook: 'https://facebook.com/animevsub',
  twitter: 'https://twitter.com/animevsub',
  discord: 'https://discord.gg/animevsub',
  maintenanceMode: false,
  allowRegistration: true,
  requireEmailVerification: true
})

const seoSettings = ref({
  metaTitle: 'AnimeVsub - Xem Anime Vietsub HD',
  metaDescription: 'Website xem anime vietsub chất lượng cao, cập nhật nhanh nhất',
  ogImage: '',
  googleAnalyticsId: 'GA-XXXXXXXXX',
  googleSearchConsole: '',
  facebookPixel: ''
})

const securitySettings = ref({
  enableCaptcha: true,
  captchaSiteKey: '',
  captchaSecretKey: '',
  maxLoginAttempts: 5,
  lockoutDuration: 15,
  sessionTimeout: 30,
  enableTwoFactor: false
})

const emailSettings = ref({
  provider: 'smtp',
  smtpHost: 'smtp.gmail.com',
  smtpPort: 587,
  smtpUser: '',
  smtpPassword: '',
  senderEmail: 'noreply@animevsub.com',
  senderName: 'AnimeVsub'
})

const mediaSettings = ref({
  maxUploadSize: 10,
  allowedImageTypes: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  allowedVideoTypes: ['mp4', 'webm'],
  imageQuality: 80,
  enableCDN: false,
  cdnUrl: ''
})

const playerSettings = ref({
  autoplay: false,
  defaultQuality: '720p',
  enableSubtitles: true,
  skipIntroEnabled: true,
  skipIntroTime: 90,
  skipOutroTime: 90
})

// Active tab
const activeTab = ref('general')

const tabs = [
  { id: 'general', name: 'Cài đặt chung', icon: 'cog' },
  { id: 'seo', name: 'SEO', icon: 'search' },
  { id: 'security', name: 'Bảo mật', icon: 'shield-alt' },
  { id: 'email', name: 'Email', icon: 'envelope' },
  { id: 'media', name: 'Media', icon: 'image' },
  { id: 'player', name: 'Player', icon: 'play-circle' }
]

// Actions
const saveSettings = () => {
  alert('Đã lưu cài đặt thành công!')
}

const resetSettings = () => {
  if (confirm('Bạn có chắc muốn khôi phục cài đặt mặc định?')) {
    alert('Đã khôi phục cài đặt mặc định!')
  }
}

const testEmail = () => {
  alert('Đang gửi email test...')
}
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 animate-fade-in">
      <div>
        <h1 class="text-3xl font-black text-white flex items-center gap-3">
          <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center animate-pulse-slow">
            <font-awesome-icon icon="cog" class="text-[#b8e62e]" />
          </div>
          Cài Đặt Hệ Thống
        </h1>
        <p class="text-gray-400 mt-1">Quản lý cấu hình và tùy chọn hệ thống</p>
      </div>

      <div class="flex items-center gap-3">
        <button 
          @click="resetSettings"
          class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:border-[#b8e62e]/50 hover:scale-105 transition-all flex items-center gap-2 shadow-xl"
        >
          <font-awesome-icon icon="undo" />
          <span>Khôi phục</span>
        </button>
        <button 
          @click="saveSettings"
          class="bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/50 group"
        >
          <font-awesome-icon icon="save" class="transition-transform duration-300 group-hover:rotate-12" />
          <span>Lưu thay đổi</span>
        </button>
      </div>
    </div>

    <!-- Tabs & Content -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Sidebar Tabs -->
      <div class="lg:col-span-1">
        <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-4 shadow-xl sticky top-6">
          <div class="space-y-2">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300"
              :class="activeTab === tab.id 
                ? 'bg-[#b8e62e]/20 text-[#b8e62e] border border-[#b8e62e]/30 shadow-lg shadow-[#b8e62e]/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'"
            >
              <font-awesome-icon :icon="tab.icon" class="w-5 h-5" />
              <span class="font-semibold">{{ tab.name }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="lg:col-span-3">
        <GeneralSettings v-show="activeTab === 'general'" v-model:settings="generalSettings" />
        <SeoSettings v-show="activeTab === 'seo'" v-model:settings="seoSettings" />
        <SecuritySettings v-show="activeTab === 'security'" v-model:settings="securitySettings" />
        <EmailSettings v-show="activeTab === 'email'" v-model:settings="emailSettings" @test-email="testEmail" />
        <MediaSettings v-show="activeTab === 'media'" v-model:settings="mediaSettings" />
        <PlayerSettings v-show="activeTab === 'player'" v-model:settings="playerSettings" />
      </div>
    </div>

  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}
</style>