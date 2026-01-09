<script setup>
import { ref, computed } from 'vue'
import AnimeList from '@/components/cards/AnimeList.vue'
import Pagination from '@/components/common/Pagination.vue'
import ImageAnimeVsub from '@/assets/images/animevsub.jpg'

// Filters
const selectedGenre = ref('all')
const selectedStatus = ref('all')
const selectedYear = ref('all')
const sortBy = ref('latest')

// Genres
const genres = [
  'all', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 
  'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports'
]

// Years
const years = ['all', '2024', '2023', '2022', '2021', '2020']

// All anime data (generate 60+ items)
const allAnimes = ref([
  {
    id: 1,
    title: "Spy x Family Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 9.6,
    status: "completed",
    season: "Season 3",
    genre: "Action",
    year: 2024,
    updateDate: "2024-01-20"
  },
  {
    id: 2,
    title: "Jujutsu Kaisen Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.2,
    status: "airing",
    season: "Season 2",
    genre: "Action",
    year: 2024,
    updateDate: "2024-01-19"
  },
  {
    id: 3,
    title: "Frieren: Beyond Journey's End",
    thumbnail: ImageAnimeVsub,
    rating: 9.7,
    status: "completed",
    season: "Season 1",
    genre: "Fantasy",
    year: 2024,
    updateDate: "2024-01-18"
  },
  {
    id: 4,
    title: "Solo Leveling",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Season 1",
    genre: "Action",
    year: 2024,
    updateDate: "2024-01-17"
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
    updateDate: "2024-01-16"
  },
  {
    id: 6,
    title: "Blue Lock Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 8.5,
    status: "airing",
    season: "Season 2",
    genre: "Sports",
    year: 2024,
    updateDate: "2024-01-15"
  },
  {
    id: 7,
    title: "Chainsaw Man",
    thumbnail: ImageAnimeVsub,
    rating: 8.8,
    status: "completed",
    season: "Season 1",
    genre: "Action",
    year: 2023,
    updateDate: "2024-01-14"
  },
  {
    id: 8,
    title: "Mushoku Tensei Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.1,
    status: "completed",
    season: "Season 2",
    genre: "Fantasy",
    year: 2023,
    updateDate: "2024-01-13"
  },
  {
    id: 9,
    title: "The Apothecary Diaries",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 1",
    genre: "Mystery",
    year: 2024,
    updateDate: "2024-01-12"
  },
  {
    id: 10,
    title: "Classroom of the Elite S3",
    thumbnail: ImageAnimeVsub,
    rating: 8.7,
    status: "airing",
    season: "Season 3",
    genre: "Drama",
    year: 2024,
    updateDate: "2024-01-11"
  },
  {
    id: 11,
    title: "Vinland Saga Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.3,
    status: "completed",
    season: "Season 2",
    genre: "Adventure",
    year: 2023,
    updateDate: "2024-01-10"
  },
  {
    id: 12,
    title: "Hell's Paradise",
    thumbnail: ImageAnimeVsub,
    rating: 8.6,
    status: "completed",
    season: "Season 1",
    genre: "Action",
    year: 2023,
    updateDate: "2024-01-09"
  },
  {
    id: 13,
    title: "Oshi no Ko",
    thumbnail: ImageAnimeVsub,
    rating: 9.0,
    status: "completed",
    season: "Season 1",
    genre: "Drama",
    year: 2023,
    updateDate: "2024-01-08"
  },
  {
    id: 14,
    title: "Undead Unluck",
    thumbnail: ImageAnimeVsub,
    rating: 8.4,
    status: "airing",
    season: "Season 1",
    genre: "Action",
    year: 2024,
    updateDate: "2024-01-07"
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
    updateDate: "2024-01-06"
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
    updateDate: "2024-01-05"
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
    updateDate: "2024-01-04"
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
    updateDate: "2024-01-03"
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
    updateDate: "2024-01-02"
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
    updateDate: "2024-01-01"
  },
  {
    id: 21,
    title: "Overlord Season 4",
    thumbnail: ImageAnimeVsub,
    rating: 8.6,
    status: "completed",
    season: "Season 4",
    genre: "Fantasy",
    year: 2023,
    updateDate: "2023-12-31"
  },
  {
    id: 22,
    title: "Bleach: Thousand-Year Blood War P3",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "airing",
    season: "Part 3",
    genre: "Action",
    year: 2024,
    updateDate: "2023-12-30"
  },
  {
    id: 23,
    title: "My Hero Academia Season 7",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 7",
    genre: "Action",
    year: 2024,
    updateDate: "2023-12-29"
  },
  {
    id: 24,
    title: "One Piece: Egghead Arc",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Egghead Arc",
    genre: "Adventure",
    year: 2024,
    updateDate: "2023-12-28"
  },
  // Add 36 more items to reach 60 total
  ...Array.from({ length: 36 }, (_, i) => ({
    id: 25 + i,
    title: `Anime Title ${25 + i}`,
    thumbnail: ImageAnimeVsub,
    rating: (Math.random() * 2 + 7).toFixed(1),
    status: i % 2 === 0 ? 'airing' : 'completed',
    season: `Season ${Math.floor(Math.random() * 3) + 1}`,
    genre: genres[Math.floor(Math.random() * (genres.length - 1)) + 1],
    year: 2024 - Math.floor(Math.random() * 3),
    updateDate: `2023-12-${27 - i}`
  }))
])

// Filtered animes
const filteredAnimes = computed(() => {
  let filtered = allAnimes.value

  if (selectedGenre.value !== 'all') {
    filtered = filtered.filter(anime => anime.genre === selectedGenre.value)
  }

  if (selectedStatus.value !== 'all') {
    filtered = filtered.filter(anime => anime.status === selectedStatus.value)
  }

  if (selectedYear.value !== 'all') {
    filtered = filtered.filter(anime => anime.year === parseInt(selectedYear.value))
  }

  if (sortBy.value === 'latest') {
    filtered = [...filtered].sort((a, b) => new Date(b.updateDate) - new Date(a.updateDate))
  } else if (sortBy.value === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  } else if (sortBy.value === 'name') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title))
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
</script>

<template>
  <div class="py-6 space-y-6">
    <!-- Page Header -->
    <div class="animate-fade-in">
      <h1 class="text-3xl font-black text-white flex items-center gap-3 mb-2">
        <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center">
          <font-awesome-icon icon="clock" class="text-[#b8e62e]" />
        </div>
        Anime Mới Cập Nhật
      </h1>
      <p class="text-gray-400">
        Tổng cộng <span class="text-[#b8e62e] font-bold">{{ filteredAnimes.length }}</span> anime được cập nhật mới nhất
      </p>
    </div>

    <!-- Filters -->
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in" style="animation-delay: 0.1s">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        <!-- Status Filter -->
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2">Trạng thái</label>
          <select
            v-model="selectedStatus"
            @change="resetPage"
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="airing">Đang chiếu</option>
            <option value="completed">Hoàn thành</option>
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
            <option value="latest">Mới cập nhật</option>
            <option value="rating">Điểm cao</option>
            <option value="name">Tên A-Z</option>
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
        icon="inbox" 
        class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
      />
      <p class="text-gray-400 text-lg mb-4">Không tìm thấy anime nào</p>
      <button
        @click="selectedGenre = 'all'; selectedStatus = 'all'; selectedYear = 'all'; resetPage()"
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