<script setup>
import { ref } from 'vue'

defineProps({
  totalEpisodes: {
    type: Number,
    default: 13
  }
})

const currentEpisode = ref(1)
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-2xl p-4 md:p-6 space-y-4 border border-gray-800/50 hover:border-[#b8e62e]/30 transition-all duration-300">
    
    <!-- Header -->
    <div class="flex items-center justify-between pb-3 border-b border-gray-800">
      <h2 class="text-lg md:text-xl font-bold text-white flex items-center gap-2">
        <font-awesome-icon icon="film" class="text-[#b8e62e]" />
        <span>Danh Sách Tập</span>
      </h2>
      <span class="text-xs md:text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
        {{ totalEpisodes }} tập
      </span>
    </div>

    <!-- Episode Grid -->
    <div class="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-15 gap-2">
      <button
        v-for="ep in totalEpisodes"
        :key="ep"
        @click="currentEpisode = ep"
        class="relative group aspect-square rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
        :class="ep === currentEpisode 
          ? 'bg-[#b8e62e] text-black shadow-lg shadow-[#b8e62e]/50 ring-2 ring-[#b8e62e]/50' 
          : 'bg-[#1e293b] hover:bg-[#2d3748] text-white hover:text-[#b8e62e] hover:ring-2 hover:ring-[#b8e62e]/30'"
      >
        <!-- Episode Number -->
        <span 
          class="absolute inset-0 flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-200"
          :class="ep === currentEpisode ? '' : 'group-hover:opacity-0'"
        >
          {{ ep }}
        </span>
        
        <!-- Play Icon on Hover (replace number) -->
        <div 
          v-if="ep !== currentEpisode" 
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
        >
          <font-awesome-icon icon="play" class="text-sm md:text-base" />
        </div>

        <!-- Glow effect on hover -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#b8e62e]/10 to-transparent rounded-lg"></div>
      </button>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1536px) {
  .xl\:grid-cols-15 {
    grid-template-columns: repeat(15, minmax(0, 1fr));
  }
}
</style>