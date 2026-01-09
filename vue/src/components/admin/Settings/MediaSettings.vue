<script setup>
const props = defineProps({
  settings: Object
})

const emit = defineEmits(['update:settings'])

const updateField = (field, value) => {
  emit('update:settings', { ...props.settings, [field]: value })
}
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in">
    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
      <font-awesome-icon icon="image" class="text-[#b8e62e]" />
      Cài đặt Media
    </h2>
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Kích thước upload tối đa (MB)</label>
          <input
            :value="settings.maxUploadSize"
            @input="e => updateField('maxUploadSize', parseInt(e.target.value))"
            type="number"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Chất lượng ảnh (%)</label>
          <input
            :value="settings.imageQuality"
            @input="e => updateField('imageQuality', parseInt(e.target.value))"
            type="number"
            min="1"
            max="100"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-400 mb-2">CDN URL</label>
        <input
          :value="settings.cdnUrl"
          @input="e => updateField('cdnUrl', e.target.value)"
          type="url"
          class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          placeholder="https://cdn.example.com"
        />
      </div>

      <div class="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all">
        <div>
          <p class="text-white font-semibold">Bật CDN</p>
          <p class="text-sm text-gray-400">Sử dụng CDN để tăng tốc</p>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input 
            :checked="settings.enableCDN"
            @change="e => updateField('enableCDN', e.target.checked)"
            type="checkbox" 
            class="sr-only peer"
          >
          <div class="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#b8e62e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#b8e62e]"></div>
        </label>
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