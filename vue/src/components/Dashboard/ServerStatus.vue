<script setup>
defineProps({
  servers: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-xl shadow-xl border border-gray-800/50">
    <div class="p-6 border-b border-gray-800/50">
      <h2 class="text-xl font-black text-white">Server Status</h2>
    </div>
    <div class="p-6 space-y-4">
      <div
        v-for="server in servers"
        :key="server.name"
        class="p-4 rounded-xl border border-gray-800/50 hover:border-[#b8e62e]/30 transition-all duration-300 bg-black/20"
      >
        <div class="flex items-center justify-between mb-3">
          <p class="font-bold text-white text-sm">{{ server.name }}</p>
          <span 
            :class="[
              server.status === 'online' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
              server.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
              'bg-red-500/20 text-red-400 border border-red-500/30',
              'px-2 py-1 rounded-full text-xs font-bold uppercase'
            ]"
          >
            {{ server.status }}
          </span>
        </div>
        <div class="space-y-1 text-xs text-gray-400">
          <div class="flex justify-between">
            <span>Uptime:</span>
            <span class="font-semibold text-gray-300">{{ server.uptime }}</span>
          </div>
          <div class="flex justify-between">
            <span>Response:</span>
            <span class="font-semibold text-gray-300">{{ server.responseTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>