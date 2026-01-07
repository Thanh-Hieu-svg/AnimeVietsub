<script setup>
defineProps({
  rating: {
    type: Number,
    default: 9.6
  },
  totalEpisodes: {
    type: Number,
    default: 13
  },
  year: {
    type: Number,
    default: 2025
  },
  views: {
    type: Number,
    default: 0
  }
})

const formatViews = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    
    <!-- Rating -->
    <div class="bg-gradient-to-br from-[#b8e62e]/20 to-[#b8e62e]/5 border border-[#b8e62e]/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
      <div class="flex items-center justify-center gap-1 text-[#b8e62e] text-2xl font-bold mb-1">
        <font-awesome-icon icon="star" class="text-lg" />
        <span>{{ rating }}</span>
      </div>
      <p class="text-xs text-gray-400 font-semibold">Đánh giá</p>
    </div>

    <!-- Episodes -->
    <div class="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
      <div class="flex items-center justify-center gap-1 text-blue-400 text-2xl font-bold mb-1">
        <font-awesome-icon icon="film" class="text-lg" />
        <span>{{ totalEpisodes }}</span>
      </div>
      <p class="text-xs text-gray-400 font-semibold">Tập phim</p>
    </div>

    <!-- Year -->
    <div class="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
      <div class="flex items-center justify-center gap-1 text-purple-400 text-2xl font-bold mb-1">
        <font-awesome-icon icon="calendar" class="text-lg" />
        <span>{{ year }}</span>
      </div>
      <p class="text-xs text-gray-400 font-semibold">Năm phát hành</p>
    </div>

    <!-- Views -->
    <div class="bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300">
      <div class="flex items-center justify-center gap-1 text-red-400 text-2xl font-bold mb-1">
        <font-awesome-icon icon="eye" class="text-lg" />
        <span>{{ formatViews(views) }}</span>
      </div>
      <p class="text-xs text-gray-400 font-semibold">Lượt xem</p>
    </div>

  </div>
</template>