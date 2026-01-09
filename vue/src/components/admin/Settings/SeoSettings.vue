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
      <font-awesome-icon icon="search" class="text-[#b8e62e]" />
      Cài đặt SEO
    </h2>
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-semibold text-gray-400 mb-2">Meta Title</label>
        <input
          :value="settings.metaTitle"
          @input="e => updateField('metaTitle', e.target.value)"
          type="text"
          class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
        />
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-400 mb-2">Meta Description</label>
        <textarea
          :value="settings.metaDescription"
          @input="e => updateField('metaDescription', e.target.value)"
          rows="3"
          class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 resize-none focus:shadow-lg focus:shadow-[#b8e62e]/20"
        ></textarea>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-400 mb-2">OG Image URL</label>
        <input
          :value="settings.ogImage"
          @input="e => updateField('ogImage', e.target.value)"
          type="url"
          class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          placeholder="https://..."
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Google Analytics ID</label>
          <input
            :value="settings.googleAnalyticsId"
            @input="e => updateField('googleAnalyticsId', e.target.value)"
            type="text"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
            placeholder="GA-XXXXXXXXX"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Facebook Pixel ID</label>
          <input
            :value="settings.facebookPixel"
            @input="e => updateField('facebookPixel', e.target.value)"
            type="text"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
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