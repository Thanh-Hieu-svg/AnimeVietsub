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
      <font-awesome-icon icon="play-circle" class="text-[#b8e62e]" />
      Cài đặt Player
    </h2>
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Chất lượng mặc định</label>
          <select
            :value="settings.defaultQuality"
            @change="e => updateField('defaultQuality', e.target.value)"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 cursor-pointer focus:shadow-lg focus:shadow-[#b8e62e]/20"
          >
            <option value="360p">360p</option>
            <option value="480p">480p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Skip Intro (giây)</label>
          <input
            :value="settings.skipIntroTime"
            @input="e => updateField('skipIntroTime', parseInt(e.target.value))"
            type="number"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Skip Outro (giây)</label>
          <input
            :value="settings.skipOutroTime"
            @input="e => updateField('skipOutroTime', parseInt(e.target.value))"
            type="number"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
      </div>

      <div class="border-t border-gray-800 pt-4 space-y-3">
        <div class="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all">
          <div>
            <p class="text-white font-semibold">Tự động phát</p>
            <p class="text-sm text-gray-400">Tự động phát khi load trang</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input 
              :checked="settings.autoplay"
              @change="e => updateField('autoplay', e.target.checked)"
              type="checkbox" 
              class="sr-only peer"
            >
            <div class="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#b8e62e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#b8e62e]"></div>
          </label>
        </div>

        <div class="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all">
          <div>
            <p class="text-white font-semibold">Phụ đề</p>
            <p class="text-sm text-gray-400">Bật phụ đề mặc định</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input 
              :checked="settings.enableSubtitles"
              @change="e => updateField('enableSubtitles', e.target.checked)"
              type="checkbox" 
              class="sr-only peer"
            >
            <div class="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#b8e62e]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#b8e62e]"></div>
          </label>
        </div>

        <div class="flex items-center justify-between p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all">
          <div>
            <p class="text-white font-semibold">Nút Skip Intro</p>
            <p class="text-sm text-gray-400">Hiện nút bỏ qua phần mở đầu</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input 
              :checked="settings.skipIntroEnabled"
              @change="e => updateField('skipIntroEnabled', e.target.checked)"
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