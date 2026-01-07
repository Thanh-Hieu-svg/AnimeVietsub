<script setup>
import { ref } from 'vue'
import AnimeCarousel from '../cards/AnimeCarousel.vue'
import defaultImage from '@/assets/images/animevsub.jpg'

// Fake data for related anime
const relatedAnimes = ref([
  {
    id: 1,
    title: "Spy x Family Season 2",
    thumbnail: defaultImage,
    rating: 9.5,
    season: "TV Series • 2024",
    status: "completed"
  },
  {
    id: 2,
    title: "Kaguya-sama: Love Is War",
    thumbnail: defaultImage,
    rating: 9.2,
    season: "TV Series • 2023",
    status: "completed"
  },
  {
    id: 3,
    title: "My Hero Academia Season 7",
    thumbnail: defaultImage,
    rating: 8.8,
    season: "TV Series • 2024",
    status: "ongoing"
  },
  {
    id: 4,
    title: "Jujutsu Kaisen Season 2",
    thumbnail: defaultImage,
    rating: 9.4,
    season: "TV Series • 2023",
    status: "completed"
  },
  {
    id: 5,
    title: "Demon Slayer: Hashira Training Arc",
    thumbnail: defaultImage,
    rating: 9.6,
    season: "TV Series • 2024",
    status: "ongoing"
  },
  {
    id: 6,
    title: "Attack on Titan: Final Season",
    thumbnail: defaultImage,
    rating: 9.8,
    season: "TV Series • 2023",
    status: "completed"
  },
  {
    id: 7,
    title: "Chainsaw Man",
    thumbnail: defaultImage,
    rating: 9.1,
    season: "TV Series • 2022",
    status: "completed"
  },
  {
    id: 8,
    title: "Frieren: Beyond Journey's End",
    thumbnail: defaultImage,
    rating: 9.7,
    season: "TV Series • 2023",
    status: "completed"
  },
])
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-2xl p-6 space-y-6 border border-gray-800/50 hover:border-[#b8e62e]/30 transition-all duration-300 shadow-xl">
    
    <!-- Header -->
    <div class="flex items-center justify-between pb-4 border-b border-gray-800">
      <h2 class="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
        <font-awesome-icon icon="fire" class="text-[#b8e62e]" />
        <span>Anime Liên Quan</span>
      </h2>
      <a 
        href="#" 
        class="text-sm text-[#b8e62e] hover:text-[#a0d020] font-semibold transition-colors duration-300 flex items-center gap-1 group"
      >
        <span>Xem tất cả</span>
        <font-awesome-icon icon="arrow-right" class="text-xs transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>

    <!-- Carousel -->
    <AnimeCarousel :animes="relatedAnimes" />
  </div>
</template>