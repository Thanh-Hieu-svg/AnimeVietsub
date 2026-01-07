<script setup>
import { ref } from "vue"

const tabs = [
  { name: "Thông tin phim", icon: "info-circle" },
  { name: "Nhân vật", icon: "users" },
  { name: "Trailer", icon: "play-circle" },
  { name: "Hình ảnh", icon: "image" }  
]

const activeTab = ref("Thông tin phim")
</script>

<template>
  <div class="bg-[#1a1a1a] rounded-xl p-2 overflow-x-auto">
    <div class="flex gap-2 min-w-max">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        class="flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap"
        :class="tab.name === activeTab
          ? 'bg-[#b8e62e] text-black shadow-lg shadow-[#b8e62e]/30'
          : 'text-gray-400 hover:text-white hover:bg-[#2a2a2a]'"
        @click="activeTab = tab.name"
      >
        <font-awesome-icon :icon="tab.icon" />
        <span>{{ tab.name }}</span>
      </button>
    </div>
  </div>
</template>