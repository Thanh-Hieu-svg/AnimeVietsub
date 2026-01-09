<script setup>
const props = defineProps({
  settings: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:settings'])

const updateField = (field, value) => {
  emit('update:settings', { ...props.settings, [field]: value })
}
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in">
    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <font-awesome-icon icon="cog" class="text-[#b8e62e]" />
      Cài đặt chung
    </h2>
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Tên website</label>
          <input
            :value="settings.siteName"
            @input="e => updateField('siteName', e.target.value)"
            type="text"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Email liên hệ</label>
          <input
            :value="settings.contactEmail"
            @input="e => updateField('contactEmail', e.target.value)"
            type="email"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-400 mb-2">Mô tả website</label>
        <textarea
          :value="settings.siteDescription"
          @input="e => updateField('siteDescription', e.target.value)"
          rows="3"
          class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 resize-none focus:shadow-lg focus:shadow-[#b8e62e]/20"
        ></textarea>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-400 mb-2">Keywords</label>
        <input
          :value="settings.siteKeywords"
          @input="e => updateField('siteKeywords', e.target.value)"
          type="text"
          class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          placeholder="anime, vietsub, xem anime..."
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Facebook</label>
          <input
            :value="settings.facebook"
            @input="e => updateField('facebook', e.target.value)"
            type="url"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Twitter</label>
          <input
            :value="settings.twitter"
            @input="e => updateField('twitter', e.target.value)"
            type="url"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Discord</label>
          <input
            :value="settings.discord"
            @input="e => updateField('discord', e.target.value)"
            type="url"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
      </div>

      <div class="border-t border-gray-800 pt-4 space-y-3">
        <div class="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all">
          <div>
            <p class="text-white font-semibold">Chế độ bảo trì</p>
            <p class="text-sm text-gray-400">Tắt website để bảo trì</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input 
              :checked="settings.maintenanceMode" 
              @change="e => updateField('maintenanceMode', e.target.checked)"
              type="checkbox" 
              class="sr-only peer"
            >
            <div class="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#b8e62e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#b8e62e]"></div>
          </label>
        </div>

        <div class="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all">
          <div>
            <p class="text-white font-semibold">Cho phép đăng ký</p>
            <p class="text-sm text-gray-400">Người dùng có thể đăng ký tài khoản</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input 
              :checked="settings.allowRegistration"
              @change="e => updateField('allowRegistration', e.target.checked)"
              type="checkbox" 
              class="sr-only peer"
            >
            <div class="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#b8e62e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#b8e62e]"></div>
          </label>
        </div>

        <div class="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all">
          <div>
            <p class="text-white font-semibold">Xác thực email</p>
            <p class="text-sm text-gray-400">Yêu cầu xác thực email khi đăng ký</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input 
              :checked="settings.requireEmailVerification"
              @change="e => updateField('requireEmailVerification', e.target.checked)"
              type="checkbox" 
              class="sr-only peer"
            >
            <div class="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#b8e62e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#b8e62e]"></div>
          </label>
        </div>
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

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}
</style>