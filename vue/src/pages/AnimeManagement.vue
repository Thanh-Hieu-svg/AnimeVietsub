<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/common/Pagination.vue'
import AnimeStatsCards from '@/components/admin/anime/AnimeStatsCards.vue'
import AnimeFilters from '@/components/admin/anime/AnimeFilters.vue'
import AnimeGrid from '@/components/admin/anime/AnimeGrid.vue'
import ImageAnime from '@/assets/images/animevsub.jpg'

const animes = ref([
  { id: 1, title: 'One Piece', thumbnail: ImageAnime, totalEpisodes: 1090, status: 'ongoing', rating: 9.5, views: '2.5M', genres: ['Action', 'Adventure'], year: 1999, addedDate: '2024-01-15' },
  { id: 2, title: 'Jujutsu Kaisen', thumbnail: ImageAnime, totalEpisodes: 47, status: 'ongoing', rating: 9.2, views: '1.8M', genres: ['Action', 'Supernatural'], year: 2020, addedDate: '2024-01-14' },
  { id: 3, title: 'Attack on Titan', thumbnail: ImageAnime, totalEpisodes: 87, status: 'completed', rating: 9.8, views: '3.2M', genres: ['Action', 'Drama'], year: 2013, addedDate: '2024-01-13' },
  { id: 4, title: 'Demon Slayer', thumbnail: ImageAnime, totalEpisodes: 63, status: 'ongoing', rating: 9.0, views: '2.1M', genres: ['Action', 'Fantasy'], year: 2019, addedDate: '2024-01-12' },
  { id: 5, title: 'My Hero Academia', thumbnail: ImageAnime, totalEpisodes: 138, status: 'ongoing', rating: 8.8, views: '1.5M', genres: ['Action', 'School'], year: 2016, addedDate: '2024-01-11' },
  { id: 6, title: 'Bleach', thumbnail: ImageAnime, totalEpisodes: 366, status: 'completed', rating: 8.5, views: '1.9M', genres: ['Action', 'Supernatural'], year: 2004, addedDate: '2024-01-10' },
  { id: 7, title: 'Naruto Shippuden', thumbnail: ImageAnime, totalEpisodes: 500, status: 'completed', rating: 9.1, views: '2.8M', genres: ['Action', 'Adventure'], year: 2007, addedDate: '2024-01-09' },
  { id: 8, title: 'Spy x Family', thumbnail: ImageAnime, totalEpisodes: 25, status: 'ongoing', rating: 8.7, views: '1.2M', genres: ['Comedy', 'Action'], year: 2022, addedDate: '2024-01-08' },
  { id: 9, title: 'Frieren', thumbnail: ImageAnime, totalEpisodes: 28, status: 'ongoing', rating: 9.3, views: '1.6M', genres: ['Adventure', 'Fantasy'], year: 2023, addedDate: '2024-01-07' },
  { id: 10, title: 'Tokyo Revengers', thumbnail: ImageAnime, totalEpisodes: 50, status: 'completed', rating: 8.3, views: '980K', genres: ['Action', 'Drama'], year: 2021, addedDate: '2024-01-06' },
  { id: 11, title: 'Chainsaw Man', thumbnail: ImageAnime, totalEpisodes: 12, status: 'completed', rating: 8.8, views: '1.4M', genres: ['Action', 'Supernatural'], year: 2022, addedDate: '2024-01-05' },
  { id: 12, title: 'Mob Psycho 100', thumbnail: ImageAnime, totalEpisodes: 37, status: 'completed', rating: 8.9, views: '1.1M', genres: ['Action', 'Comedy'], year: 2016, addedDate: '2024-01-04' },
  { id: 13, title: 'Hunter x Hunter', thumbnail: ImageAnime, totalEpisodes: 148, status: 'completed', rating: 9.1, views: '2.2M', genres: ['Adventure', 'Fantasy'], year: 2011, addedDate: '2024-01-03' },
  { id: 14, title: 'Vinland Saga', thumbnail: ImageAnime, totalEpisodes: 48, status: 'completed', rating: 8.9, views: '1.3M', genres: ['Action', 'Drama'], year: 2019, addedDate: '2024-01-02' },
  { id: 15, title: 'Blue Lock', thumbnail: ImageAnime, totalEpisodes: 24, status: 'completed', rating: 8.5, views: '1.0M', genres: ['Sports', 'Drama'], year: 2022, addedDate: '2024-01-01' },
  { id: 16, title: 'Dr. Stone', thumbnail: ImageAnime, totalEpisodes: 58, status: 'ongoing', rating: 8.4, views: '950K', genres: ['Adventure', 'Comedy'], year: 2019, addedDate: '2023-12-30' },
  { id: 17, title: 'The Eminence in Shadow', thumbnail: ImageAnime, totalEpisodes: 20, status: 'ongoing', rating: 8.3, views: '890K', genres: ['Action', 'Comedy'], year: 2022, addedDate: '2023-12-29' },
  { id: 18, title: 'Mushoku Tensei', thumbnail: ImageAnime, totalEpisodes: 23, status: 'ongoing', rating: 8.7, views: '1.2M', genres: ['Adventure', 'Fantasy'], year: 2021, addedDate: '2023-12-28' },
  { id: 19, title: 'Overlord', thumbnail: ImageAnime, totalEpisodes: 52, status: 'completed', rating: 8.0, views: '1.1M', genres: ['Action', 'Fantasy'], year: 2015, addedDate: '2023-12-27' },
  { id: 20, title: 'Re:Zero', thumbnail: ImageAnime, totalEpisodes: 50, status: 'ongoing', rating: 8.6, views: '1.5M', genres: ['Drama', 'Fantasy'], year: 2016, addedDate: '2023-12-26' },
  { id: 21, title: 'Konosuba', thumbnail: ImageAnime, totalEpisodes: 20, status: 'completed', rating: 8.2, views: '1.0M', genres: ['Comedy', 'Fantasy'], year: 2016, addedDate: '2023-12-25' },
  { id: 22, title: 'Steins;Gate', thumbnail: ImageAnime, totalEpisodes: 24, status: 'completed', rating: 9.1, views: '1.8M', genres: ['Sci-Fi', 'Drama'], year: 2011, addedDate: '2023-12-24' },
  { id: 23, title: 'Death Note', thumbnail: ImageAnime, totalEpisodes: 37, status: 'completed', rating: 9.0, views: '2.5M', genres: ['Mystery', 'Supernatural'], year: 2006, addedDate: '2023-12-23' },
  { id: 24, title: 'Code Geass', thumbnail: ImageAnime, totalEpisodes: 50, status: 'completed', rating: 8.8, views: '2.0M', genres: ['Action', 'Drama'], year: 2006, addedDate: '2023-12-22' },
  { id: 25, title: 'Fullmetal Alchemist', thumbnail: ImageAnime, totalEpisodes: 64, status: 'completed', rating: 9.2, views: '2.3M', genres: ['Action', 'Adventure'], year: 2009, addedDate: '2023-12-21' },
  { id: 26, title: 'Sword Art Online', thumbnail: ImageAnime, totalEpisodes: 96, status: 'ongoing', rating: 7.6, views: '2.1M', genres: ['Action', 'Fantasy'], year: 2012, addedDate: '2023-12-20' },
  { id: 27, title: 'Tokyo Ghoul', thumbnail: ImageAnime, totalEpisodes: 48, status: 'completed', rating: 8.0, views: '1.8M', genres: ['Action', 'Supernatural'], year: 2014, addedDate: '2023-12-19' },
  { id: 28, title: 'Parasyte', thumbnail: ImageAnime, totalEpisodes: 24, status: 'completed', rating: 8.4, views: '1.4M', genres: ['Action', 'Horror'], year: 2014, addedDate: '2023-12-18' },
  { id: 29, title: 'Made in Abyss', thumbnail: ImageAnime, totalEpisodes: 25, status: 'ongoing', rating: 8.8, views: '980K', genres: ['Adventure', 'Fantasy'], year: 2017, addedDate: '2023-12-17' },
  { id: 30, title: 'Violet Evergarden', thumbnail: ImageAnime, totalEpisodes: 13, status: 'completed', rating: 8.7, views: '1.2M', genres: ['Drama', 'Fantasy'], year: 2018, addedDate: '2023-12-16' }
])

// Filters
const searchQuery = ref('')
const selectedStatus = ref('all')
const selectedGenre = ref('all')
const sortBy = ref('newest')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 24

// Genre list
const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Romance', 'Supernatural', 'School']

// Filtered animes
const filteredAnimes = computed(() => {
  let filtered = animes.value

  if (searchQuery.value) {
    filtered = filtered.filter(anime => 
      anime.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (selectedStatus.value !== 'all') {
    filtered = filtered.filter(anime => anime.status === selectedStatus.value)
  }

  if (selectedGenre.value !== 'all') {
    filtered = filtered.filter(anime => anime.genres.includes(selectedGenre.value))
  }

  if (sortBy.value === 'newest') {
    filtered = [...filtered].reverse()
  } else if (sortBy.value === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  } else if (sortBy.value === 'views') {
    filtered = [...filtered].sort((a, b) => {
      const aViews = parseFloat(a.views.replace(/[MK]/g, match => match === 'M' ? '000000' : '000'))
      const bViews = parseFloat(b.views.replace(/[MK]/g, match => match === 'M' ? '000000' : '000'))
      return bViews - aViews
    })
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredAnimes.value.length / itemsPerPage))

const paginatedAnimes = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredAnimes.value.slice(start, end)
})

// Stats
const stats = computed(() => ({
  total: animes.value.length,
  ongoing: animes.value.filter(a => a.status === 'ongoing').length,
  completed: animes.value.filter(a => a.status === 'completed').length,
  totalViews: animes.value.reduce((sum, a) => {
    const views = parseFloat(a.views.replace(/[MK]/g, match => match === 'M' ? '000000' : '000'))
    return sum + views
  }, 0)
}))

// Actions
const selectedAnimes = ref([])

const handleUpdateSelected = ({ animeId, checked }) => {
  if (checked) {
    selectedAnimes.value.push(animeId)
  } else {
    selectedAnimes.value = selectedAnimes.value.filter(id => id !== animeId)
  }
}

const editAnime = (anime) => {
  alert(`Chỉnh sửa: ${anime.title}`)
}

const deleteAnime = (animeId) => {
  if (confirm('Bạn có chắc muốn xóa anime này?')) {
    animes.value = animes.value.filter(a => a.id !== animeId)
  }
}

const viewEpisodes = (anime) => {
  alert(`Xem tập phim của: ${anime.title}`)
}

const bulkAction = (action) => {
  if (selectedAnimes.value.length === 0) {
    alert('Vui lòng chọn ít nhất 1 anime')
    return
  }

  const actionText = {
    delete: 'xóa',
    featured: 'đánh dấu nổi bật',
    hidden: 'ẩn'
  }

  if (confirm(`Bạn có chắc muốn ${actionText[action]} ${selectedAnimes.value.length} anime?`)) {
    if (action === 'delete') {
      animes.value = animes.value.filter(a => !selectedAnimes.value.includes(a.id))
      selectedAnimes.value = []
    }
  }
}

const handlePageChange = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 animate-fade-in">
      <div>
        <h1 class="text-3xl font-black text-white flex items-center gap-3">
          <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center animate-pulse-slow">
            <font-awesome-icon icon="film" class="text-[#b8e62e]" />
          </div>
          Quản lý Anime
        </h1>
        <p class="text-gray-400 mt-1">Quản lý {{ animes.length }} anime trong hệ thống</p>
      </div>

      <button class="bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/50 group">
        <font-awesome-icon icon="plus-circle" class="transition-transform duration-300 group-hover:rotate-90" />
        <span>Thêm Anime</span>
      </button>
    </div>

    <!-- Stats Cards -->
    <AnimeStatsCards :stats="stats" />

    <!-- Filters & Actions -->
    <AnimeFilters
      v-model:search-query="searchQuery"
      v-model:selected-status="selectedStatus"
      v-model:selected-genre="selectedGenre"
      v-model:sort-by="sortBy"
      :genres="genres"
      :selected-animes-count="selectedAnimes.length"
      @bulk-action="bulkAction"
    />

    <!-- Anime Grid -->
    <AnimeGrid
      :animes="paginatedAnimes"
      :selected-animes="selectedAnimes"
      @update:selected-animes="handleUpdateSelected"
      @view-episodes="viewEpisodes"
      @edit="editAnime"
      @delete="deleteAnime"
    />

    <!-- Pagination -->
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">
          Hiển thị {{ ((currentPage - 1) * itemsPerPage) + 1 }}-{{ Math.min(currentPage * itemsPerPage, filteredAnimes.length) }} 
          trong tổng số {{ filteredAnimes.length }} anime
        </p>
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="handlePageChange"
        />
      </div>
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

@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}
</style>