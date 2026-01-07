<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-2xl p-4 md:p-6 border border-gray-800/50 hover:border-[#b8e62e]/30 transition-all duration-300 shadow-xl">
    
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
      <!-- Header -->
      <div class="flex items-center gap-2">
        <font-awesome-icon icon="server" class="text-[#b8e62e] text-lg" />
        <h3 class="text-lg font-bold text-white">Chọn Server:</h3>
      </div>

      <!-- Server Buttons (Horizontal) -->
      <div class="flex flex-wrap gap-3">
        <button
          v-for="server in servers"
          :key="server"
          @click="current = server"
          :class="current === server
            ? 'bg-[#b8e62e] text-black shadow-lg shadow-[#b8e62e]/30 scale-105'
            : 'bg-[#1e293b] text-white hover:bg-[#2d3748] hover:text-[#b8e62e] border border-gray-700/50 hover:border-[#b8e62e]/50'"
          class="px-6 py-2.5 rounded-lg font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          {{ server }}
        </button>
      </div>

      <!-- Info Banner (Compact) -->
      <div class="flex items-center gap-2 text-xs text-gray-400 md:border-l md:border-gray-700 md:pl-4">
        <font-awesome-icon icon="link" class="text-red-400" />
        <span>Lưu: <b class="text-[#b8e62e]">bit.ly/animevietsubtv</b></span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
const servers = ["Server DU", "Server HDX (ADS)"]
const current = ref("Server DU")
</script>