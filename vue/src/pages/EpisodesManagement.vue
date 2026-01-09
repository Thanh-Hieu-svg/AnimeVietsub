<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Pagination from '@/components/common/Pagination.vue'
import EpisodeStats from '@/components/admin/episodes/EpisodeStats.vue'
import EpisodeFilters from '@/components/admin/episodes/EpisodeFilters.vue'
import EpisodeCard from '@/components/admin/episodes/EpisodeCard.vue'
import EpisodeModal from '@/components/admin/episodes/EpisodeModal.vue'

const route = useRoute()
const animeId = route.params.id

// Sample anime info
const anime = ref({
  id: 1,
  title: 'Spy x Family Season 3',
  thumbnail: 'https://via.placeholder.com/300x400?text=Spy+x+Family',
  totalEpisodes: 25,
  status: 'ongoing'
})

// Episodes data
const episodes = ref([
  {
    id: 1,
    episodeNumber: 1,
    title: 'Operation Strix',
    thumbnail: 'https://via.placeholder.com/300x170?text=Episode+1',
    duration: '24:30',
    views: 125000,
    uploadDate: '2024-01-01',
    status: 'published',
    servers: ['Server 1', 'Server 2', 'Server 3']
  },
  {
    id: 2,
    episodeNumber: 2,
    title: 'Secure a Wife',
    thumbnail: 'https://via.placeholder.com/300x170?text=Episode+2',
    duration: '24:15',
    views: 118000,
    uploadDate: '2024-01-08',
    status: 'published',
    servers: ['Server 1', 'Server 2']
  },
  {
    id: 3,
    episodeNumber: 3,
    title: 'Prepare for the Interview',
    thumbnail: 'https://via.placeholder.com/300x170?text=Episode+3',
    duration: '24:45',
    views: 112000,
    uploadDate: '2024-01-15',
    status: 'published',
    servers: ['Server 1', 'Server 2', 'Server 3']
  },
  {
    id: 4,
    episodeNumber: 4,
    title: 'The Prestigious School Interview',
    thumbnail: 'https://via.placeholder.com/300x170?text=Episode+4',
    duration: '24:20',
    views: 105000,
    uploadDate: '2024-01-22',
    status: 'published',
    servers: ['Server 1']
  },
  {
    id: 5,
    episodeNumber: 5,
    title: 'Will They Pass or Fail?',
    thumbnail: 'https://via.placeholder.com/300x170?text=Episode+5',
    duration: '24:30',
    views: 98000,
    uploadDate: '2024-01-29',
    status: 'draft',
    servers: []
  }
])

// Filters
const searchQuery = ref('')
const selectedStatus = ref('all')
const sortBy = ref('episode')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

// Modal
const showModal = ref(false)
const editingEpisode = ref(null)
const formData = ref({
  episodeNumber: 1,
  title: '',
  thumbnail: '',
  duration: '',
  status: 'draft'
})

// Filtered episodes
const filteredEpisodes = computed(() => {
  let filtered = episodes.value

  if (searchQuery.value) {
    filtered = filtered.filter(e => 
      e.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      e.episodeNumber.toString().includes(searchQuery.value)
    )
  }

  if (selectedStatus.value !== 'all') {
    filtered = filtered.filter(e => e.status === selectedStatus.value)
  }

  // Sort
  if (sortBy.value === 'episode') {
    filtered = [...filtered].sort((a, b) => a.episodeNumber - b.episodeNumber)
  } else if (sortBy.value === 'views') {
    filtered = [...filtered].sort((a, b) => b.views - a.views)
  } else if (sortBy.value === 'date') {
    filtered = [...filtered].sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate))
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredEpisodes.value.length / itemsPerPage))

const paginatedEpisodes = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredEpisodes.value.slice(start, end)
})

// Stats
const stats = computed(() => ({
  total: episodes.value.length,
  published: episodes.value.filter(e => e.status === 'published').length,
  draft: episodes.value.filter(e => e.status === 'draft').length,
  totalViews: episodes.value.reduce((sum, e) => sum + e.views, 0)
}))

// Actions
const selectedEpisodes = ref([])

const openCreateModal = () => {
  editingEpisode.value = null
  formData.value = {
    episodeNumber: episodes.value.length + 1,
    title: '',
    thumbnail: '',
    duration: '',
    status: 'draft'
  }
  showModal.value = true
}

const openEditModal = (episode) => {
  editingEpisode.value = episode
  formData.value = { ...episode }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingEpisode.value = null
}

const saveEpisode = () => {
  if (editingEpisode.value) {
    const index = episodes.value.findIndex(e => e.id === editingEpisode.value.id)
    if (index !== -1) {
      episodes.value[index] = {
        ...episodes.value[index],
        ...formData.value
      }
    }
  } else {
    const newEpisode = {
      id: episodes.value.length + 1,
      ...formData.value,
      views: 0,
      uploadDate: new Date().toISOString().split('T')[0],
      servers: []
    }
    episodes.value.push(newEpisode)
  }
  closeModal()
}

const deleteEpisode = (id) => {
  if (confirm('Bạn có chắc muốn xóa tập phim này?')) {
    episodes.value = episodes.value.filter(e => e.id !== id)
  }
}

const toggleStatus = (id) => {
  const episode = episodes.value.find(e => e.id === id)
  if (episode) {
    episode.status = episode.status === 'published' ? 'draft' : 'published'
  }
}

const handleSelectAll = (event) => {
  if (event.target.checked) {
    selectedEpisodes.value = paginatedEpisodes.value.map(e => e.id)
  } else {
    selectedEpisodes.value = []
  }
}

const handleUpdateSelected = ({ episodeId, checked }) => {
  if (checked) {
    selectedEpisodes.value.push(episodeId)
  } else {
    selectedEpisodes.value = selectedEpisodes.value.filter(id => id !== episodeId)
  }
}

const handleBulkAction = (action) => {
  if (selectedEpisodes.value.length === 0) {
    alert('Vui lòng chọn ít nhất 1 tập')
    return
  }

  const actionText = { publish: 'xuất bản', draft: 'chuyển về nháp', delete: 'xóa' }
  
  if (confirm(`Bạn có chắc muốn ${actionText[action]} ${selectedEpisodes.value.length} tập?`)) {
    if (action === 'delete') {
      episodes.value = episodes.value.filter(e => !selectedEpisodes.value.includes(e.id))
    } else {
      episodes.value.forEach(e => {
        if (selectedEpisodes.value.includes(e.id)) {
          e.status = action === 'publish' ? 'published' : 'draft'
        }
      })
    }
    selectedEpisodes.value = []
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
    <div class="flex flex-col gap-4 animate-fade-in">
      <!-- Back Button -->
      <router-link 
        to="/admin/anime" 
        class="inline-flex items-center gap-2 text-gray-400 hover:text-[#b8e62e] transition-colors group w-fit"
      >
        <font-awesome-icon icon="arrow-left" class="transition-transform duration-300 group-hover:-translate-x-1" />
        <span>Quay lại danh sách anime</span>
      </router-link>

      <!-- Anime Info -->
      <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl">
        <div class="flex flex-col md:flex-row gap-6">
          <img 
            :src="anime.thumbnail" 
            :alt="anime.title"
            class="w-32 h-44 rounded-lg object-cover ring-2 ring-gray-800 hover:ring-[#b8e62e]/50 transition-all duration-300 hover:scale-105"
          />
          <div class="flex-1">
            <h1 class="text-3xl font-black text-white mb-2">{{ anime.title }}</h1>
            <div class="flex flex-wrap gap-3 text-sm text-gray-400">
              <span class="flex items-center gap-2">
                <font-awesome-icon icon="play-circle" class="text-[#b8e62e]" />
                {{ anime.totalEpisodes }} tập
              </span>
              <span class="flex items-center gap-2">
                <font-awesome-icon icon="circle" class="text-green-400 text-xs" />
                {{ anime.status === 'ongoing' ? 'Đang phát' : 'Hoàn thành' }}
              </span>
            </div>
          </div>
          <button 
            @click="openCreateModal"
            class="bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/50 group h-fit"
          >
            <font-awesome-icon icon="plus-circle" class="transition-transform duration-300 group-hover:rotate-90" />
            <span>Thêm Tập</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <EpisodeStats :stats="stats" />

    <!-- Filters -->
    <EpisodeFilters
      v-model:search-query="searchQuery"
      v-model:selected-status="selectedStatus"
      v-model:sort-by="sortBy"
      :selected-episodes-count="selectedEpisodes.length"
      @bulk-action="handleBulkAction"
    />

    <!-- Episodes Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <EpisodeCard
        v-for="(episode, index) in paginatedEpisodes"
        :key="episode.id"
        :episode="episode"
        :is-selected="selectedEpisodes.includes(episode.id)"
        @update:selected="handleUpdateSelected"
        @toggle-status="toggleStatus(episode.id)"
        @edit="openEditModal(episode)"
        @delete="deleteEpisode(episode.id)"
        class="animate-scale-in"
        :style="{ animationDelay: `${index * 0.05}s` }"
      />
    </div>

    <!-- Empty State -->
    <div v-if="paginatedEpisodes.length === 0" class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-12 text-center">
      <font-awesome-icon 
        icon="film" 
        class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
      />
      <p class="text-gray-400 text-lg">Chưa có tập phim nào</p>
    </div>

    <!-- Pagination -->
    <Pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="handlePageChange"
    />

    <!-- Modal -->
    <EpisodeModal
      :show="showModal"
      :episode="editingEpisode"
      v-model:form-data="formData"
      @close="closeModal"
      @save="saveEpisode"
    />

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

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}
</style>