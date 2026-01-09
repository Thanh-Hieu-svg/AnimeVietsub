<script setup>
defineProps({
  animeList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-xl shadow-xl border border-gray-800/50">
    <div class="p-6 border-b border-gray-800/50 flex items-center justify-between">
      <h2 class="text-xl font-black text-white">Top Anime</h2>
      <button class="text-[#b8e62e] text-sm font-semibold hover:underline">Xem thêm</button>
    </div>
    <div class="p-6 space-y-3">
      <div
        v-for="(anime, index) in animeList"
        :key="anime.id"
        class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
      >
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-[#b8e62e] to-[#a0d020] flex items-center justify-center text-black font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {{ index + 1 }}
        </div>
        <img :src="anime.thumbnail" alt="Thumbnail" class="w-12 h-16 rounded object-cover border border-gray-800 group-hover:border-[#b8e62e] transition-all duration-300" />
        <div class="flex-1 min-w-0">
          <p class="font-bold text-white truncate">{{ anime.title }}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs text-gray-400">{{ anime.views }}</span>
            <span class="text-xs text-gray-600">•</span>
            <span class="text-xs text-yellow-500 font-semibold flex items-center gap-1">
              <font-awesome-icon icon="star" />
              {{ anime.rating }}
            </span>
          </div>
        </div>
        <font-awesome-icon 
          :icon="anime.trend === 'up' ? 'arrow-up' : anime.trend === 'down' ? 'arrow-down' : 'minus'"
          :class="[
            anime.trend === 'up' ? 'text-[#b8e62e]' : anime.trend === 'down' ? 'text-red-400' : 'text-gray-500',
            'text-sm'
          ]"
        />
      </div>
    </div>
  </div>
</template>