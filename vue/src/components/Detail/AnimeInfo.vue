<script setup>
defineProps({
  info: {
    type: Object,
    default: () => ({
      status: 'Hoàn thành',
      episodes: '13/13',
      quality: 'HD',
      rating: 'PG-13',
      language: 'VietSub',
      genres: 'Anime bộ, Shounen, Comedy, Action',
      director: 'Imai Yukiko',
      studio: 'Wit Studio, CloverWorks',
      season: 'Mùa Thu - 2025'
    })
  }
})

const getBadgeClass = (type) => {
  const classes = {
    success: 'bg-green-500/20 text-green-400 border border-green-500/30',
    primary: 'bg-[#b8e62e]/20 text-[#b8e62e] border border-[#b8e62e]/30',
    danger: 'bg-red-500/20 text-red-400 border border-red-500/30'
  }
  return classes[type] || ''
}
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-2xl p-6 space-y-4 border border-gray-800/50 hover:border-[#b8e62e]/30 transition-all duration-300 shadow-xl">
    <!-- Header -->
    <div class="flex items-center gap-2 pb-4 border-b border-gray-800">
      <font-awesome-icon icon="info-circle" class="text-[#b8e62e] text-xl" />
      <h3 class="text-lg font-bold text-white">Thông Tin Chi Tiết</h3>
    </div>

    <!-- Info Rows -->
    <div class="space-y-3">
      <!-- Trạng thái -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Trạng thái
        </span>
        <span :class="getBadgeClass('success')" class="px-3 py-1 rounded-lg text-sm font-bold transition-all hover:scale-105">
          {{ info.status }}
        </span>
      </div>

      <!-- Thời lượng -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Thời lượng
        </span>
        <span class="text-white text-sm font-semibold group-hover:text-[#b8e62e] transition-colors">
          {{ info.episodes }}
        </span>
      </div>

      <!-- Chất lượng -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Chất lượng
        </span>
        <span :class="getBadgeClass('primary')" class="px-3 py-1 rounded-lg text-sm font-bold transition-all hover:scale-105">
          {{ info.quality }}
        </span>
      </div>

      <!-- Rating -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Rating
        </span>
        <span :class="getBadgeClass('danger')" class="px-3 py-1 rounded-lg text-sm font-bold transition-all hover:scale-105">
          {{ info.rating }}
        </span>
      </div>

      <!-- Ngôn ngữ -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Ngôn ngữ
        </span>
        <span class="text-white text-sm font-semibold group-hover:text-[#b8e62e] transition-colors">
          {{ info.language }}
        </span>
      </div>

      <!-- Thể loại -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Thể loại
        </span>
        <span class="text-white text-sm font-semibold group-hover:text-[#b8e62e] transition-colors text-right">
          {{ info.genres }}
        </span>
      </div>

      <!-- Đạo diễn -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Đạo diễn
        </span>
        <span class="text-white text-sm font-semibold group-hover:text-[#b8e62e] transition-colors">
          {{ info.director }}
        </span>
      </div>

      <!-- Studio -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Studio
        </span>
        <span class="text-white text-sm font-semibold group-hover:text-[#b8e62e] transition-colors">
          {{ info.studio }}
        </span>
      </div>

      <!-- Season -->
      <div class="flex items-center justify-between py-2 hover:bg-[#2a2a2a]/50 rounded-lg px-3 transition-colors group">
        <span class="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
          Season
        </span>
        <span class="text-white text-sm font-semibold group-hover:text-[#b8e62e] transition-colors">
          {{ info.season }}
        </span>
      </div>
    </div>
  </div>
</template>