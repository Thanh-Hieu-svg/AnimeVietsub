<script setup>
const props = defineProps({
  anime: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:selected', 'view-episodes', 'edit', 'delete'])

const getStatusBadge = (status) => {
  const badges = {
    ongoing: 'bg-green-500/20 text-green-400 border border-green-500/30',
    completed: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
  }
  return badges[status] || badges.ongoing
}

const getStatusText = (status) => {
  const texts = {
    ongoing: 'Đang phát',
    completed: 'Hoàn thành'
  }
  return texts[status] || status
}
</script>

<template>
  <div class="group bg-[#2a2a2a]/50 rounded-xl overflow-hidden border border-gray-800 hover:border-[#b8e62e]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#b8e62e]/10 hover:-translate-y-1 animate-scale-in">
    <!-- Thumbnail -->
    <div class="relative aspect-[2/3] overflow-hidden">
      <img 
        :src="anime.thumbnail" 
        :alt="anime.title" 
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      
      <!-- Checkbox -->
      <div class="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <input 
          :checked="isSelected" 
          @change="emit('update:selected', { animeId: anime.id, checked: $event.target.checked })" 
          type="checkbox" 
          class="w-4 h-4 rounded border-gray-700 bg-black/50 text-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 cursor-pointer transition-all hover:scale-110" 
        />
      </div>

      <!-- Status Badge -->
      <div class="absolute top-2 right-2">
        <span :class="[getStatusBadge(anime.status), 'px-2 py-0.5 rounded text-xs font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105']">
          {{ getStatusText(anime.status) }}
        </span>
      </div>

      <!-- Play Overlay -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
        <div class="w-12 h-12 rounded-full bg-[#b8e62e]/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
          <font-awesome-icon icon="play" class="text-black text-xl ml-1" />
        </div>
      </div>

      <!-- Stats at bottom -->
      <div class="absolute bottom-0 left-0 right-0 p-2 space-y-1">
        <div class="flex items-center justify-between text-xs">
          <span class="bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-yellow-400 font-bold flex items-center gap-1 hover:scale-105 transition-transform cursor-pointer">
            <font-awesome-icon icon="star" class="text-[10px]" />
            {{ anime.rating }}
          </span>
          <span class="bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-gray-300 font-bold flex items-center gap-1 hover:scale-105 transition-transform cursor-pointer">
            <font-awesome-icon icon="eye" class="text-[10px]" />
            {{ anime.views }}
          </span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="p-3 space-y-2">
      <h3 class="text-white font-bold text-sm line-clamp-2 group-hover:text-[#b8e62e] transition-colors min-h-[2.5rem]">
        {{ anime.title }}
      </h3>
      
      <div class="flex items-center justify-between text-xs text-gray-400">
        <span class="flex items-center gap-1 hover:text-white transition-colors">
          <font-awesome-icon icon="play-circle" class="text-[10px]" />
          {{ anime.totalEpisodes }} tập
        </span>
        <span class="hover:text-white transition-colors">{{ anime.year }}</span>
      </div>

      <div class="flex flex-wrap gap-1">
        <span 
          v-for="genre in anime.genres.slice(0, 2)" 
          :key="genre" 
          class="px-1.5 py-0.5 bg-[#b8e62e]/10 text-[#b8e62e] rounded text-[10px] font-semibold hover:bg-[#b8e62e]/20 transition-colors cursor-pointer"
        >
          {{ genre }}
        </span>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-1 pt-2 border-t border-gray-800">
        <button 
          @click="emit('view-episodes')" 
          class="flex-1 bg-[#b8e62e]/10 hover:bg-[#b8e62e]/20 text-[#b8e62e] px-2 py-1.5 rounded-lg font-semibold text-xs transition-all flex items-center justify-center gap-1 hover:scale-105 hover:shadow-lg hover:shadow-[#b8e62e]/50"
          title="Xem tập phim"
        >
          <font-awesome-icon icon="play-circle" class="text-xs" />
          <span>Tập</span>
        </button>
        <button 
          @click="emit('edit')" 
          class="p-1.5 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all group/btn" 
          title="Chỉnh sửa"
        >
          <font-awesome-icon icon="edit" class="text-xs group-hover/btn:scale-110 transition-transform" />
        </button>
        <button 
          @click="emit('delete')" 
          class="p-1.5 hover:bg-red-500/20 rounded-lg text-red-400 transition-all group/btn" 
          title="Xóa"
        >
          <font-awesome-icon icon="trash" class="text-xs group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}
</style>