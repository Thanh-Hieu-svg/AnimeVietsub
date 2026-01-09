<script setup>
const props = defineProps({
  tag: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle-status', 'edit', 'delete'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#2a2a2a]/50 to-[#1a1a1a]/50 rounded-xl p-6 border border-gray-800 hover:border-[#b8e62e]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#b8e62e]/10 hover:-translate-y-1 group">
    <!-- Color Badge -->
    <div class="flex items-start justify-between mb-4">
      <div 
        class="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
        :style="{ backgroundColor: tag.color }"
      >
        <font-awesome-icon icon="tag" class="text-white text-xl" />
      </div>
      <button
        @click="emit('toggle-status')"
        class="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105"
        :class="tag.status === 'active' 
          ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 hover:shadow-lg hover:shadow-green-500/50' 
          : 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 hover:shadow-lg hover:shadow-red-500/50'"
      >
        {{ tag.status === 'active' ? 'Hoạt động' : 'Ẩn' }}
      </button>
    </div>

    <!-- Content -->
    <h3 class="text-white font-bold text-lg mb-2 group-hover:text-[#b8e62e] transition-colors">
      {{ tag.name }}
    </h3>
    <p class="text-sm text-gray-400 mb-3 line-clamp-2">{{ tag.description }}</p>
    <p class="text-xs text-gray-500 mb-4">Slug: {{ tag.slug }}</p>

    <!-- Stats -->
    <div class="flex items-center gap-2 mb-4">
      <span class="flex items-center gap-1 text-[#b8e62e] text-sm font-bold group-hover:scale-110 transition-transform">
        <font-awesome-icon icon="film" class="text-xs" />
        {{ tag.animeCount }} anime
      </span>
    </div>

    <!-- Actions -->
    <div class="flex items-center gap-2 pt-4 border-t border-gray-800">
      <button 
        @click="emit('edit')"
        class="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
      >
        <font-awesome-icon icon="edit" class="text-xs" />
        Sửa
      </button>
      <button 
        @click="emit('delete')"
        class="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
      >
        <font-awesome-icon icon="trash" class="text-xs" />
        Xóa
      </button>
    </div>
  </div>
</template>