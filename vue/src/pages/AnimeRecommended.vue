<script setup>
import { ref, computed } from 'vue'
import AnimeList from '@/components/cards/AnimeList.vue'
import Pagination from '@/components/common/Pagination.vue'
import ImageAnimeVsub from '@/assets/images/animevsub.jpg'

// Filters
const selectedGenre = ref('all')
const selectedYear = ref('all')
const sortBy = ref('editor')
const minRating = ref('7.0')

// Genres
const genres = [
  'all', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 
  'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports'
]

// Years
const years = ['all', '2024', '2023', '2022', '2021', '2020', '2019', '2018']

// Rating options
const ratings = ['5.0', '6.0', '7.0', '8.0', '9.0']

// All recommended anime data (60 items)
const allAnimes = ref([
  {
    id: 1,
    title: "Steins;Gate",
    thumbnail: ImageAnimeVsub,
    rating: 9.8,
    status: "completed",
    season: "Season 1",
    genre: "Sci-Fi",
    year: 2011,
    editorScore: 10,
    recommended: true,
    reason: "Masterpiece về du hành thời gian với cốt truyện xuất sắc"
  },
  {
    id: 2,
    title: "Fullmetal Alchemist: Brotherhood",
    thumbnail: ImageAnimeVsub,
    rating: 9.9,
    status: "completed",
    season: "Season 1",
    genre: "Action",
    year: 2009,
    editorScore: 10,
    recommended: true,
    reason: "Anime kinh điển với thông điệp sâu sắc"
  },
  {
    id: 3,
    title: "Hunter x Hunter (2011)",
    thumbnail: ImageAnimeVsub,
    rating: 9.7,
    status: "completed",
    season: "Season 1",
    genre: "Adventure",
    year: 2011,
    editorScore: 10,
    recommended: true,
    reason: "Shonen xuất sắc với hệ thống sức mạnh độc đáo"
  },
  {
    id: 4,
    title: "Attack on Titan",
    thumbnail: ImageAnimeVsub,
    rating: 9.6,
    status: "completed",
    season: "Final Season",
    genre: "Action",
    year: 2023,
    editorScore: 10,
    recommended: true,
    reason: "Câu chuyện kịch tính với twist bất ngờ"
  },
  {
    id: 5,
    title: "Demon Slayer: Kimetsu no Yaiba",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Season 4",
    genre: "Action",
    year: 2024,
    editorScore: 9.5,
    recommended: true,
    reason: "Animation đỉnh cao với đạo diễn Ufotable"
  },
  {
    id: 6,
    title: "Frieren: Beyond Journey's End",
    thumbnail: ImageAnimeVsub,
    rating: 9.8,
    status: "completed",
    season: "Season 1",
    genre: "Fantasy",
    year: 2024,
    editorScore: 10,
    recommended: true,
    reason: "Anime của năm 2024 với cảm xúc sâu lắng"
  },
  {
    id: 7,
    title: "Vinland Saga",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "completed",
    season: "Season 2",
    genre: "Adventure",
    year: 2023,
    editorScore: 9.8,
    recommended: true,
    reason: "Hành trình trưởng thành đầy cảm động"
  },
  {
    id: 8,
    title: "Mob Psycho 100",
    thumbnail: ImageAnimeVsub,
    rating: 9.3,
    status: "completed",
    season: "Season 3",
    genre: "Action",
    year: 2022,
    editorScore: 9.5,
    recommended: true,
    reason: "Animation độc đáo với thông điệp ý nghĩa"
  },
  {
    id: 9,
    title: "Made in Abyss",
    thumbnail: ImageAnimeVsub,
    rating: 9.2,
    status: "completed",
    season: "Season 2",
    genre: "Adventure",
    year: 2022,
    editorScore: 9.7,
    recommended: true,
    reason: "World-building tuyệt vời với cốt truyện đen tối"
  },
  {
    id: 10,
    title: "Spy x Family",
    thumbnail: ImageAnimeVsub,
    rating: 9.6,
    status: "airing",
    season: "Season 3",
    genre: "Comedy",
    year: 2024,
    editorScore: 9.3,
    recommended: true,
    reason: "Wholesome family comedy cực kỳ dễ thương"
  },
  {
    id: 11,
    title: "Jujutsu Kaisen",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "completed",
    season: "Season 2",
    genre: "Action",
    year: 2023,
    editorScore: 9.5,
    recommended: true,
    reason: "Shonen hiện đại với chiến đấu mãn nhãn"
  },
  {
    id: 12,
    title: "Violet Evergarden",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "completed",
    season: "Season 1",
    genre: "Drama",
    year: 2018,
    editorScore: 9.8,
    recommended: true,
    reason: "Tác phẩm nghệ thuật của Kyoto Animation"
  },
  {
    id: 13,
    title: "Oshi no Ko",
    thumbnail: ImageAnimeVsub,
    rating: 9.1,
    status: "completed",
    season: "Season 1",
    genre: "Drama",
    year: 2023,
    editorScore: 9.2,
    recommended: true,
    reason: "Góc khuất ngành công nghiệp giải trí"
  },
  {
    id: 14,
    title: "Mushoku Tensei",
    thumbnail: ImageAnimeVsub,
    rating: 9.2,
    status: "completed",
    season: "Season 2",
    genre: "Fantasy",
    year: 2023,
    editorScore: 9.4,
    recommended: true,
    reason: "Isekai xuất sắc với character development"
  },
  {
    id: 15,
    title: "Re:Zero",
    thumbnail: ImageAnimeVsub,
    rating: 9.3,
    status: "airing",
    season: "Season 3",
    genre: "Fantasy",
    year: 2024,
    editorScore: 9.6,
    recommended: true,
    reason: "Dark fantasy với cơ chế time loop độc đáo"
  },
  {
    id: 16,
    title: "One Piece",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Egghead Arc",
    genre: "Adventure",
    year: 2024,
    editorScore: 9.8,
    recommended: true,
    reason: "Anime huyền thoại với hơn 1000 tập"
  },
  {
    id: 17,
    title: "Chainsaw Man",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "completed",
    season: "Season 1",
    genre: "Action",
    year: 2022,
    editorScore: 9.0,
    recommended: true,
    reason: "Shonen không theo lối mòn với gore cao"
  },
  {
    id: 18,
    title: "Bleach: Thousand-Year Blood War",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "airing",
    season: "Part 3",
    genre: "Action",
    year: 2024,
    editorScore: 9.5,
    recommended: true,
    reason: "Sự trở lại hoành tráng của huyền thoại"
  },
  {
    id: 19,
    title: "Solo Leveling",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Season 1",
    genre: "Action",
    year: 2024,
    editorScore: 9.3,
    recommended: true,
    reason: "Manhwa adaptation xuất sắc với action đỉnh cao"
  },
  {
    id: 20,
    title: "The Apothecary Diaries",
    thumbnail: ImageAnimeVsub,
    rating: 9.0,
    status: "airing",
    season: "Season 1",
    genre: "Mystery",
    year: 2024,
    editorScore: 9.2,
    recommended: true,
    reason: "Mystery trong cung đình với nữ chính thông minh"
  },
  {
    id: 21,
    title: "Bocchi the Rock!",
    thumbnail: ImageAnimeVsub,
    rating: 9.1,
    status: "completed",
    season: "Season 1",
    genre: "Comedy",
    year: 2022,
    editorScore: 9.0,
    recommended: true,
    reason: "Slice of life về âm nhạc cực kỳ wholesome"
  },
  {
    id: 22,
    title: "Odd Taxi",
    thumbnail: ImageAnimeVsub,
    rating: 9.3,
    status: "completed",
    season: "Season 1",
    genre: "Mystery",
    year: 2021,
    editorScore: 9.7,
    recommended: true,
    reason: "Hidden gem với plot twist xuất sắc"
  },
  {
    id: 23,
    title: "86 Eighty-Six",
    thumbnail: ImageAnimeVsub,
    rating: 9.0,
    status: "completed",
    season: "Season 1",
    genre: "Sci-Fi",
    year: 2021,
    editorScore: 9.4,
    recommended: true,
    reason: "Mecha anime với thông điệp nhân văn sâu sắc"
  },
  {
    id: 24,
    title: "Kaguya-sama: Love is War",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "completed",
    season: "Season 3",
    genre: "Romance",
    year: 2022,
    editorScore: 9.1,
    recommended: true,
    reason: "Rom-com thông minh với chemistry cực đỉnh"
  },
  // Generate 36 more items
  ...Array.from({ length: 36 }, (_, i) => ({
    id: 25 + i,
    title: `Recommended Anime ${25 + i}`,
    thumbnail: ImageAnimeVsub,
    rating: parseFloat((Math.random() * 2 + 7.5).toFixed(1)),
    status: i % 2 === 0 ? 'airing' : 'completed',
    season: `Season ${Math.floor(Math.random() * 3) + 1}`,
    genre: genres[Math.floor(Math.random() * (genres.length - 1)) + 1],
    year: 2024 - Math.floor(Math.random() * 6),
    editorScore: parseFloat((Math.random() * 2 + 8).toFixed(1)),
    recommended: true,
    reason: "Được biên tập viên đề xuất"
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

  filtered = filtered.filter(anime => anime.rating >= parseFloat(minRating.value))

  if (sortBy.value === 'editor') {
    filtered = [...filtered].sort((a, b) => b.editorScore - a.editorScore)
  } else if (sortBy.value === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  } else if (sortBy.value === 'year') {
    filtered = [...filtered].sort((a, b) => b.year - a.year)
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
        <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center animate-pulse-slow">
          <font-awesome-icon icon="award" class="text-[#b8e62e]" />
        </div>
        Anime Được Đề Xuất
      </h1>
      <p class="text-gray-400">
        <span class="text-[#b8e62e] font-bold">{{ filteredAnimes.length }}</span> anime được biên tập viên lựa chọn kỹ lưỡng
      </p>
    </div>

    <!-- Featured Banner -->
    <div class="bg-gradient-to-r from-[#b8e62e]/20 via-[#a0d020]/10 to-transparent border border-[#b8e62e]/30 rounded-xl p-6 shadow-xl animate-fade-in backdrop-blur-sm" style="animation-delay: 0.05s">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 bg-gradient-to-br from-[#b8e62e] to-[#a0d020] rounded-xl flex items-center justify-center shadow-xl">
          <font-awesome-icon icon="trophy" class="text-black text-3xl" />
        </div>
        <div>
          <h2 class="text-xl font-black text-white mb-1 flex items-center gap-2">
            <font-awesome-icon icon="star" class="text-yellow-400 text-base animate-pulse-slow" />
            Bộ sưu tập được tuyển chọn
          </h2>
          <p class="text-sm text-gray-300">Những bộ anime xuất sắc nhất được đội ngũ biên tập viên đánh giá cao và đề xuất cho bạn</p>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in" style="animation-delay: 0.1s">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Genre Filter -->
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
            <font-awesome-icon icon="folder" class="text-[#b8e62e]" />
            Thể loại
          </label>
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
          <label class="block text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
            <font-awesome-icon icon="calendar" class="text-[#b8e62e]" />
            Năm
          </label>
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

        <!-- Min Rating Filter -->
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
            <font-awesome-icon icon="star" class="text-yellow-400" />
            Điểm tối thiểu
          </label>
          <select
            v-model="minRating"
            @change="resetPage"
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
          >
            <option v-for="rating in ratings" :key="rating" :value="rating">
              {{ rating }}+ ⭐
            </option>
          </select>
        </div>

        <!-- Sort -->
        <div>
          <label class="block text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
            <font-awesome-icon icon="arrow-down" class="text-[#b8e62e]" />
            Sắp xếp
          </label>
          <select
            v-model="sortBy"
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
          >
            <option value="editor">Điểm biên tập viên</option>
            <option value="rating">Điểm đánh giá</option>
            <option value="year">Năm phát hành</option>
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
        icon="award" 
        class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
      />
      <p class="text-gray-400 text-lg mb-4">Không tìm thấy anime đề xuất nào</p>
      <button
        @click="selectedGenre = 'all'; selectedYear = 'all'; minRating = '7.0'; resetPage()"
        class="bg-[#b8e62e] hover:bg-[#a0d020] text-black px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
      >
        <font-awesome-icon icon="undo" />
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

@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 2s ease-in-out infinite;
}
</style>