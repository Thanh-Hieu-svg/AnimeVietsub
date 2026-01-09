<script setup>
import AnimeCard from './AnimeCard.vue'

defineProps({
  animes: {
    type: Array,
    required: true
  },
  selectedAnimes: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:selectedAnimes', 'view-episodes', 'edit', 'delete'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl shadow-xl overflow-hidden p-6">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <AnimeCard
        v-for="anime in animes"
        :key="anime.id"
        :anime="anime"
        :is-selected="selectedAnimes.includes(anime.id)"
        @update:selected="emit('update:selectedAnimes', $event)"
        @view-episodes="emit('view-episodes', anime)"
        @edit="emit('edit', anime)"
        @delete="emit('delete', anime.id)"
      />
    </div>

    <!-- Empty State -->
    <div v-if="animes.length === 0" class="text-center py-12">
      <font-awesome-icon icon="film" class="text-gray-700 text-6xl mb-4" />
      <p class="text-gray-400 text-lg">Không tìm thấy anime nào</p>
    </div>
  </div>
</template>