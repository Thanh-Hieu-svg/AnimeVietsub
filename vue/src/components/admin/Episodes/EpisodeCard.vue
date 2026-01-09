<script setup>
const props = defineProps({
  episode: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:selected', 'toggle-status', 'edit', 'delete'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#2a2a2a]/50 to-[#1a1a1a]/50 rounded-xl overflow-hidden border border-gray-800 hover:border-[#b8e62e]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#b8e62e]/10 hover:-translate-y-1 group">
    <!-- Thumbnail -->
    <div class="relative aspect-video overflow-hidden">
      <img 
        :src="episode.thumbnail" 
        :alt="episode.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      
      <!-- Checkbox -->
      <div class="absolute top-2 left-2">
        <input 
          :checked="isSelected"
          @change="emit('update:selected', { episodeId: episode.id, checked: $event.target.checked })"
          type="checkbox" 
          class="w-4 h-4 rounded border-gray-700 bg-black/50 text-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 cursor-pointer transition-all hover:scale-110" 
        />
      </div>

      <!-- Episode Number -->
      <div class="absolute top-2 right-2">
        <span class="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white font-bold text-sm">
          Tập {{ episode.episodeNumber }}
        </span>
      </div>

      <!-- Duration -->
      <div class="absolute bottom-2 left-2">
        <span class="bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-white text-xs font-semibold flex items-center gap-1">
          <font-awesome-icon icon="clock" class="text-[10px]" />
          {{ episode.duration }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-4 space-y-3">
      <h3 class="text-white font-bold text-sm line-clamp-2 group-hover:text-[#b8e62e] transition-colors min-h-[2.5rem]">
        {{ episode.title }}
      </h3>

      <div class="flex items-center justify-between text-xs text-gray-400">
        <span class="flex items-center gap-1 hover:text-white transition-colors">
          <font-awesome-icon icon="eye" class="text-[10px]" />
          {{ (episode.views / 1000).toFixed(1) }}K
        </span>
        <span class="hover:text-white transition-colors">{{ episode.uploadDate }}</span>
      </div>

      <div class="flex items-center gap-1">
        <span 
          v-for="server in episode.servers.slice(0, 3)" 
          :key="server"
          class="px-2 py-0.5 bg-[#b8e62e]/10 text-[#b8e62e] rounded text-[10px] font-semibold hover:bg-[#b8e62e]/20 transition-colors cursor-pointer"
        >
          {{ server }}
        </span>
        <span v-if="episode.servers.length > 3" class="text-[10px] text-gray-500">
          +{{ episode.servers.length - 3 }}
        </span>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2 pt-2 border-t border-gray-800">
        <button
          @click="emit('toggle-status')"
          class="flex-1 text-xs font-bold py-1.5 rounded-lg transition-all hover:scale-105"
          :class="episode.status === 'published' 
            ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:shadow-lg hover:shadow-green-500/50' 
            : 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/50'"
        >
          {{ episode.status === 'published' ? 'Đã xuất bản' : 'Bản nháp' }}
        </button>
        <button 
          @click="emit('edit')"
          class="p-1.5 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all group/btn" 
          title="Chỉnh sửa"
        >
          <font-awesome-icon icon="edit" class="text-xs group-hover/btn:rotate-12 transition-transform" />
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