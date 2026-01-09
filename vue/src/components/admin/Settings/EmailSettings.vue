<script setup>
const props = defineProps({
  settings: Object
})

const emit = defineEmits(['update:settings', 'test-email'])

const updateField = (field, value) => {
  emit('update:settings', { ...props.settings, [field]: value })
}
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-white flex items-center gap-2">
        <font-awesome-icon icon="envelope" class="text-[#b8e62e]" />
        Cài đặt Email
      </h2>
      <button
        @click="emit('test-email')"
        class="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
      >
        <font-awesome-icon icon="paper-plane" />
        Gửi email test
      </button>
    </div>
    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">SMTP Host</label>
          <input
            :value="settings.smtpHost"
            @input="e => updateField('smtpHost', e.target.value)"
            type="text"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">SMTP Port</label>
          <input
            :value="settings.smtpPort"
            @input="e => updateField('smtpPort', parseInt(e.target.value))"
            type="number"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">SMTP Username</label>
          <input
            :value="settings.smtpUser"
            @input="e => updateField('smtpUser', e.target.value)"
            type="text"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">SMTP Password</label>
          <input
            :value="settings.smtpPassword"
            @input="e => updateField('smtpPassword', e.target.value)"
            type="password"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Sender Email</label>
          <input
            :value="settings.senderEmail"
            @input="e => updateField('senderEmail', e.target.value)"
            type="email"
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Sender Name</label>
          <input
            :value="settings.senderName"
            @input="e => updateField('senderName', e.target.value)"
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