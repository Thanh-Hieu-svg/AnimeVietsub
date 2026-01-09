<script setup>
import { computed } from 'vue'
import AnimeCard from '@/components/cards/AnimeCard.vue'
import Pagination from '@/components/common/Pagination.vue'

const props = defineProps({
  animeList: {
    type: Array,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['page-change'])

const itemsPerPage = 8

const displayedAnime = computed(() => {
  const start = (props.currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  return props.animeList.slice(start, end)
})
</script>

<template>
  <div class="space-y-6 anime-grid-section">
    <!-- Header với thông tin phân trang -->
    <div class="flex items-center justify-between flex-wrap gap-4">
      <h3 class="text-xl font-black text-white">Anime đang xem</h3>
      <span class="text-sm text-gray-400 bg-[#2a2a2a]/50 px-4 py-2 rounded-lg border border-gray-700/50">
        Hiển thị {{ ((currentPage - 1) * itemsPerPage) + 1 }}-{{ Math.min(currentPage * itemsPerPage, animeList.length) }} 
        trong <span class="text-[#b8e62e] font-bold">{{ animeList.length }}</span> anime
      </span>
    </div>

    <!-- Anime Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
      <div v-for="(anime, index) in displayedAnime" :key="anime.id" class="anime-card-wrapper" :style="{ animationDelay: `${index * 0.1}s` }">
        <AnimeCard :anime="anime" />
      </div>
    </div>

    <!-- Pagination -->
    <div class="pt-6 border-t border-gray-800">
      <Pagination 
        :current-page="currentPage" 
        :total-pages="totalPages" 
        @page-change="emit('page-change', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anime-card-wrapper {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}
</style>