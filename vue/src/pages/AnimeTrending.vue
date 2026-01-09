<script setup>
import { ref, computed } from 'vue'
import AnimeList from '@/components/cards/AnimeList.vue'
import Pagination from '@/components/common/Pagination.vue'
import ImageAnimeVsub from '@/assets/images/animevsub.jpg'

// Filters
const selectedGenre = ref('all')
const selectedYear = ref('all')
const sortBy = ref('views')
const timeRange = ref('week') // week, month, year, all-time

// Genres
const genres = [
  'all', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 
  'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports'
]

// Years
const years = ['all', '2024', '2023', '2022', '2021', '2020']

// Time ranges
const timeRanges = [
  { value: 'week', label: 'Tuần này' },
  { value: 'month', label: 'Tháng này' },
  { value: 'year', label: 'Năm nay' },
  { value: 'all-time', label: 'Mọi thời đại' }
]

// All anime data (generate 60+ trending items)
const allAnimes = ref([
  {
    id: 1,
    title: "Frieren: Beyond Journey's End",
    thumbnail: ImageAnimeVsub,
    rating: 9.8,
    status: "completed",
    season: "Season 1",
    genre: "Fantasy",
    year: 2024,
    views: 3250000,
    trending: 1
  },
  {
    id: 2,
    title: "Spy x Family Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 9.6,
    status: "airing",
    season: "Season 3",
    genre: "Action",
    year: 2024,
    views: 2980000,
    trending: 2
  },
  {
    id: 3,
    title: "Solo Leveling",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Season 1",
    genre: "Action",
    year: 2024,
    views: 2850000,
    trending: 3
  },
  {
    id: 4,
    title: "Jujutsu Kaisen Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "completed",
    season: "Season 2",
    genre: "Action",
    year: 2024,
    views: 2700000,
    trending: 4
  },
  {
    id: 5,
    title: "Demon Slayer: Hashira Training",
    thumbnail: ImageAnimeVsub,
    rating: 9.6,
    status: "airing",
    season: "Season 4",
    genre: "Action",
    year: 2024,
    views: 2650000,
    trending: 5
  },
  {
    id: 6,
    title: "One Piece: Egghead Arc",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Egghead Arc",
    genre: "Adventure",
    year: 2024,
    views: 2500000,
    trending: 6
  },
  {
    id: 7,
    title: "Bleach: Thousand-Year Blood War P3",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "airing",
    season: "Part 3",
    genre: "Action",
    year: 2024,
    views: 2350000,
    trending: 7
  },
  {
    id: 8,
    title: "My Hero Academia Season 7",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 7",
    genre: "Action",
    year: 2024,
    views: 2200000,
    trending: 8
  },
  {
    id: 9,
    title: "Mushoku Tensei Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.1,
    status: "completed",
    season: "Season 2",
    genre: "Fantasy",
    year: 2023,
    views: 2100000,
    trending: 9
  },
  {
    id: 10,
    title: "Chainsaw Man",
    thumbnail: ImageAnimeVsub,
    rating: 8.8,
    status: "completed",
    season: "Season 1",
    genre: "Action",
    year: 2023,
    views: 2050000,
    trending: 10
  },
  {
    id: 11,
    title: "Oshi no Ko",
    thumbnail: ImageAnimeVsub,
    rating: 9.0,
    status: "completed",
    season: "Season 1",
    genre: "Drama",
    year: 2023,
    views: 1950000,
    trending: 11
  },
  {
    id: 12,
    title: "Vinland Saga Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.3,
    status: "completed",
    season: "Season 2",
    genre: "Adventure",
    year: 2023,
    views: 1850000,
    trending: 12
  },
  {
    id: 13,
    title: "The Apothecary Diaries",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 1",
    genre: "Mystery",
    year: 2024,
    views: 1750000,
    trending: 13
  },
  {
    id: 14,
    title: "Blue Lock Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 8.5,
    status: "airing",
    season: "Season 2",
    genre: "Sports",
    year: 2024,
    views: 1650000,
    trending: 14
  },
  {
    id: 15,
    title: "Kaiju No. 8",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 1",
    genre: "Action",
    year: 2024,
    views: 1550000,
    trending: 15
  },
  {
    id: 16,
    title: "Wind Breaker",
    thumbnail: ImageAnimeVsub,
    rating: 8.7,
    status: "airing",
    season: "Season 1",
    genre: "Action",
    year: 2024,
    views: 1450000,
    trending: 16
  },
  {
    id: 17,
    title: "That Time I Got Reincarnated S3",
    thumbnail: ImageAnimeVsub,
    rating: 9.0,
    status: "airing",
    season: "Season 3",
    genre: "Fantasy",
    year: 2024,
    views: 1350000,
    trending: 17
  },
  {
    id: 18,
    title: "Tower of God Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 8.5,
    status: "airing",
    season: "Season 2",
    genre: "Adventure",
    year: 2024,
    views: 1250000,
    trending: 18
  },
  {
    id: 19,
    title: "Konosuba Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 8.8,
    status: "airing",
    season: "Season 3",
    genre: "Comedy",
    year: 2024,
    views: 1150000,
    trending: 19
  },
  {
    id: 20,
    title: "Re:Zero Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 9.2,
    status: "airing",
    season: "Season 3",
    genre: "Fantasy",
    year: 2024,
    views: 1050000,
    trending: 20
  },
  {
    id: 21,
    title: "Hell's Paradise",
    thumbnail: ImageAnimeVsub,
    rating: 8.6,
    status: "completed",
    season: "Season 1",
    genre: "Action",
    year: 2023,
    views: 950000,
    trending: 21
  },
  {
    id: 22,
    title: "Undead Unluck",
    thumbnail: ImageAnimeVsub,
    rating: 8.4,
    status: "airing",
    season: "Season 1",
    genre: "Action",
    year: 2024,
    views: 850000,
    trending: 22
  },
  {
    id: 23,
    title: "Classroom of the Elite S3",
    thumbnail: ImageAnimeVsub,
    rating: 8.7,
    status: "airing",
    season: "Season 3",
    genre: "Drama",
    year: 2024,
    views: 750000,
    trending: 23
  },
  {
    id: 24,
    title: "Overlord Season 4",
    thumbnail: ImageAnimeVsub,
    rating: 8.6,
    status: "completed",
    season: "Season 4",
    genre: "Fantasy",
    year: 2023,
    views: 650000,
    trending: 24
  },
  // Add 36 more items to reach 60 total
  ...Array.from({ length: 36 }, (_, i) => ({
    id: 25 + i,
    title: `Trending Anime ${25 + i}`,
    thumbnail: ImageAnimeVsub,
    rating: parseFloat((Math.random() * 2 + 7).toFixed(1)),
    status: i % 2 === 0 ? 'airing' : 'completed',
    season: `Season ${Math.floor(Math.random() * 3) + 1}`,
    genre: genres[Math.floor(Math.random() * (genres.length - 1)) + 1],
    year: 2024 - Math.floor(Math.random() * 3),
    views: 600000 - (i * 10000),
    trending: 25 + i
  }))
])

// Filtered animes
const filteredAnimes = computed(() => {
  let filtered = allAnimes.value

  if (selectedGenre.value !== 'all') {
    filtered = filtered.filter(anime => anime.genre === selectedGenre.value)
  }

  if (selectedYear.value !== 'all') {
    filtered = filtered.filter(anime => anime.year === parseInt(selectedYear.value))
  }

  // Sort
  if (sortBy.value === 'views') {
    filtered = [...filtered].sort((a, b) => b.views - a.views)
  } else if (sortBy.value === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  } else if (sortBy.value === 'trending') {
    filtered = [...filtered].sort((a, b) => a.trending - b.trending)
  }

  return filtered
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = 30

const totalPages = computed(() => Math.ceil(filteredAnimes.value.length / itemsPerPage))

const paginatedAnimes = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredAnimes.value.slice(start, end)
})

const handlePageChange = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const resetPage = () => {
  currentPage.value = 1
}

// Format views
const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'M'
  } else if (views >= 1000) {
    return (views / 1000).toFixed(0) + 'K'
  }
  return views.toString()
}
</script>

<template>
  <div class="py-6 space-y-6">
    <!-- Page Header -->
    <div class="animate-fade-in">
      <h1 class="text-3xl font-black text-white flex items-center gap-3 mb-2">
        <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center">
          <font-awesome-icon icon="fire" class="text-[#b8e62e]" />
        </div>
        Anime Đang Thịnh Hành
      </h1>
      <p class="text-gray-400">
        <span class="text-[#b8e62e] font-bold">{{ filteredAnimes.length }}</span> anime đang được yêu thích nhất
      </p>
    </div>

    <!-- Stats Bar -->
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in" style="animation-delay: 0.05s">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div class="flex items-center gap-6">
          <div class="text-center">
            <p class="text-2xl font-black text-[#b8e62e]">{{ formatViews(filteredAnimes[0]?.views || 0) }}</p>
            <p class="text-xs text-gray-400 mt-1">Lượt xem #1</p>
          </div>
          <div class="w-px h-12 bg-gray-800"></div>
          <div class="text-center">
            <p class="text-2xl font-black text-yellow-400">{{ filteredAnimes[0]?.rating || 'N/A' }}</p>
            <p class="text-xs text-gray-400 mt-1">Rating cao nhất</p>
          </div>
          <div class="w-px h-12 bg-gray-800"></div>
          <div class="text-center">
            <p class="text-2xl font-black text-green-400">{{ filteredAnimes.filter(a => a.status === 'airing').length }}</p>
            <p class="text-xs text-gray-400 mt-1">Đang chiếu</p>
          </div>
        </div>

        <!-- Time Range Tabs -->
        <div class="flex gap-2">
          <button
            v-for="range in timeRanges"
            :key="range.value"
            @click="timeRange = range.value"
            class="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            :class="timeRange === range.value 
              ? 'bg-[#b8e62e] text-black shadow-lg shadow-[#b8e62e]/30' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'"
          >
            {{ range.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in" style="animation-delay: 0.1s">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Genre Filter -->
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Thể loại</label>
          <select
            v-model="selectedGenre"
            @change="resetPage"
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
          >
            <option v-for="genre in genres" :key="genre" :value="genre">
              {{ genre === 'all' ? 'Tất cả thể loại' : genre }}
            </option>
          </select>
        </div>

        <!-- Year Filter -->
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Năm</label>
          <select
            v-model="selectedYear"
            @change="resetPage"
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
          >
            <option v-for="year in years" :key="year" :value="year">
              {{ year === 'all' ? 'Tất cả năm' : year }}
            </option>
          </select>
        </div>

        <!-- Sort -->
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Sắp xếp</label>
          <select
            v-model="sortBy"
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
          >
            <option value="views">Lượt xem</option>
            <option value="rating">Điểm cao</option>
            <option value="trending">Thịnh hành</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Anime Grid -->
    <div class="animate-fade-in" style="animation-delay: 0.2s">
      <AnimeList :animes="paginatedAnimes" />
    </div>

    <!-- Empty State -->
    <div v-if="filteredAnimes.length === 0" class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-12 text-center animate-fade-in">
      <font-awesome-icon 
        icon="fire" 
        class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
      />
      <p class="text-gray-400 text-lg mb-4">Không tìm thấy anime thịnh hành nào</p>
      <button
        @click="selectedGenre = 'all'; selectedYear = 'all'; resetPage()"
        class="bg-[#b8e62e] hover:bg-[#a0d020] text-black px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
      >
        Đặt lại bộ lọc
      </button>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="animate-fade-in" style="animation-delay: 0.3s">
      <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}
</style>