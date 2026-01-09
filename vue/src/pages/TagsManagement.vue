<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/common/Pagination.vue'
import TagStats from '@/components/admin/tags/TagStats.vue'
import TagFilters from '@/components/admin/tags/TagFilters.vue'
import TagCard from '@/components/admin/tags/TagCard.vue'
import TagModal from '@/components/admin/tags/TagModal.vue'

// Tags data
const allTags = ref([
  {
    id: 1,
    name: 'Isekai',
    slug: 'isekai',
    description: 'Thể loại chuyển sinh sang thế giới khác',
    animeCount: 234,
    color: '#3b82f6',
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'School Life',
    slug: 'school-life',
    description: 'Cuộc sống học đường',
    animeCount: 189,
    color: '#10b981',
    status: 'active',
    createdAt: '2024-01-02',
    updatedAt: '2024-01-14'
  },
  {
    id: 3,
    name: 'Magic',
    slug: 'magic',
    description: 'Phép thuật và yếu tố huyền bí',
    animeCount: 312,
    color: '#8b5cf6',
    status: 'active',
    createdAt: '2024-01-03',
    updatedAt: '2024-01-13'
  },
  {
    id: 4,
    name: 'Harem',
    slug: 'harem',
    description: 'Một nam/nữ chính với nhiều tình địch',
    animeCount: 156,
    color: '#ec4899',
    status: 'active',
    createdAt: '2024-01-04',
    updatedAt: '2024-01-12'
  },
  {
    id: 5,
    name: 'Mecha',
    slug: 'mecha',
    description: 'Robot khổng lồ',
    animeCount: 98,
    color: '#f59e0b',
    status: 'active',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-11'
  },
  {
    id: 6,
    name: 'Historical',
    slug: 'historical',
    description: 'Bối cảnh lịch sử',
    animeCount: 67,
    color: '#ef4444',
    status: 'inactive',
    createdAt: '2024-01-06',
    updatedAt: '2024-01-10'
  },
  {
    id: 7,
    name: 'Game',
    slug: 'game',
    description: 'Liên quan đến trò chơi, game thủ',
    animeCount: 145,
    color: '#14b8a6',
    status: 'active',
    createdAt: '2024-01-07',
    updatedAt: '2024-01-09'
  },
  {
    id: 8,
    name: 'Martial Arts',
    slug: 'martial-arts',
    description: 'Võ thuật, kung fu',
    animeCount: 123,
    color: '#f97316',
    status: 'active',
    createdAt: '2024-01-08',
    updatedAt: '2024-01-08'
  },
  {
    id: 9,
    name: 'Vampire',
    slug: 'vampire',
    description: 'Ma cà rồng',
    animeCount: 45,
    color: '#dc2626',
    status: 'inactive',
    createdAt: '2024-01-09',
    updatedAt: '2024-01-07'
  },
  {
    id: 10,
    name: 'Military',
    slug: 'military',
    description: 'Quân đội, chiến tranh',
    animeCount: 78,
    color: '#059669',
    status: 'active',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-06'
  },

  // ===== thêm 18 tag =====
  {
    id: 11,
    name: 'Romance',
    slug: 'romance',
    description: 'Tình cảm, lãng mạn',
    animeCount: 210,
    color: '#fb7185',
    status: 'active',
    createdAt: '2024-01-11',
    updatedAt: '2024-01-15'
  },
  {
    id: 12,
    name: 'Action',
    slug: 'action',
    description: 'Hành động, đánh nhau',
    animeCount: 340,
    color: '#ef4444',
    status: 'active',
    createdAt: '2024-01-12',
    updatedAt: '2024-01-14'
  },
  {
    id: 13,
    name: 'Adventure',
    slug: 'adventure',
    description: 'Phiêu lưu, khám phá',
    animeCount: 275,
    color: '#22c55e',
    status: 'active',
    createdAt: '2024-01-13',
    updatedAt: '2024-01-14'
  },
  {
    id: 14,
    name: 'Fantasy',
    slug: 'fantasy',
    description: 'Thế giới giả tưởng',
    animeCount: 298,
    color: '#a855f7',
    status: 'active',
    createdAt: '2024-01-14',
    updatedAt: '2024-01-15'
  },
  {
    id: 15,
    name: 'Drama',
    slug: 'drama',
    description: 'Cảm xúc, bi kịch',
    animeCount: 162,
    color: '#6366f1',
    status: 'active',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15'
  },
  {
    id: 16,
    name: 'Comedy',
    slug: 'comedy',
    description: 'Hài hước, giải trí',
    animeCount: 250,
    color: '#fde047',
    status: 'active',
    createdAt: '2024-01-16',
    updatedAt: '2024-01-16'
  },
  {
    id: 17,
    name: 'Horror',
    slug: 'horror',
    description: 'Kinh dị, ám ảnh',
    animeCount: 58,
    color: '#111827',
    status: 'inactive',
    createdAt: '2024-01-17',
    updatedAt: '2024-01-16'
  },
  {
    id: 18,
    name: 'Psychological',
    slug: 'psychological',
    description: 'Tâm lý, hack não',
    animeCount: 84,
    color: '#334155',
    status: 'active',
    createdAt: '2024-01-18',
    updatedAt: '2024-01-17'
  },
  {
    id: 19,
    name: 'Sci-Fi',
    slug: 'sci-fi',
    description: 'Khoa học viễn tưởng',
    animeCount: 132,
    color: '#0ea5e9',
    status: 'active',
    createdAt: '2024-01-19',
    updatedAt: '2024-01-18'
  },
  {
    id: 20,
    name: 'Super Power',
    slug: 'super-power',
    description: 'Năng lực siêu nhiên',
    animeCount: 167,
    color: '#f43f5e',
    status: 'active',
    createdAt: '2024-01-20',
    updatedAt: '2024-01-18'
  },
  {
    id: 21,
    name: 'Detective',
    slug: 'detective',
    description: 'Trinh thám, phá án',
    animeCount: 52,
    color: '#64748b',
    status: 'active',
    createdAt: '2024-01-21',
    updatedAt: '2024-01-19'
  },
  {
    id: 22,
    name: 'Slice of Life',
    slug: 'slice-of-life',
    description: 'Đời thường, nhẹ nhàng',
    animeCount: 144,
    color: '#84cc16',
    status: 'active',
    createdAt: '2024-01-22',
    updatedAt: '2024-01-20'
  },
  {
    id: 23,
    name: 'Music',
    slug: 'music',
    description: 'Âm nhạc, idol',
    animeCount: 61,
    color: '#ec4899',
    status: 'active',
    createdAt: '2024-01-23',
    updatedAt: '2024-01-21'
  },
  {
    id: 24,
    name: 'Sports',
    slug: 'sports',
    description: 'Thể thao, thi đấu',
    animeCount: 90,
    color: '#22d3ee',
    status: 'active',
    createdAt: '2024-01-24',
    updatedAt: '2024-01-22'
  },
  {
    id: 25,
    name: 'Demons',
    slug: 'demons',
    description: 'Ác quỷ, thế lực bóng tối',
    animeCount: 118,
    color: '#7c2d12',
    status: 'active',
    createdAt: '2024-01-25',
    updatedAt: '2024-01-23'
  },
  {
    id: 26,
    name: 'Samurai',
    slug: 'samurai',
    description: 'Võ sĩ đạo, kiếm thuật',
    animeCount: 39,
    color: '#991b1b',
    status: 'inactive',
    createdAt: '2024-01-26',
    updatedAt: '2024-01-24'
  },
  {
    id: 27,
    name: 'Space',
    slug: 'space',
    description: 'Vũ trụ, ngoài không gian',
    animeCount: 44,
    color: '#1e293b',
    status: 'active',
    createdAt: '2024-01-27',
    updatedAt: '2024-01-25'
  },
  {
    id: 28,
    name: 'Post-Apocalyptic',
    slug: 'post-apocalyptic',
    description: 'Thế giới hậu tận thế',
    animeCount: 33,
    color: '#44403c',
    status: 'inactive',
    createdAt: '2024-01-28',
    updatedAt: '2024-01-26'
  }
])


// Filters
const searchQuery = ref('')
const selectedStatus = ref('all')
const sortBy = ref('newest')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 20

// Modal
const showModal = ref(false)
const editingTag = ref(null)
const formData = ref({
  name: '',
  slug: '',
  description: '',
  color: '#3b82f6',
  status: 'active'
})

// Filtered tags
const filteredTags = computed(() => {
  let filtered = allTags.value

  if (searchQuery.value) {
    filtered = filtered.filter(t => 
      t.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      t.slug.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (selectedStatus.value !== 'all') {
    filtered = filtered.filter(t => t.status === selectedStatus.value)
  }

  if (sortBy.value === 'newest') {
    filtered = [...filtered].reverse()
  } else if (sortBy.value === 'popular') {
    filtered = [...filtered].sort((a, b) => b.animeCount - a.animeCount)
  } else if (sortBy.value === 'name') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name))
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredTags.value.length / itemsPerPage))

const paginatedTags = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredTags.value.slice(start, end)
})

// Stats
const stats = computed(() => ({
  total: allTags.value.length,
  active: allTags.value.filter(t => t.status === 'active').length,
  inactive: allTags.value.filter(t => t.status === 'inactive').length,
  totalAnimes: allTags.value.reduce((sum, t) => sum + t.animeCount, 0)
}))

// Actions
const openCreateModal = () => {
  editingTag.value = null
  formData.value = {
    name: '',
    slug: '',
    description: '',
    color: '#3b82f6',
    status: 'active'
  }
  showModal.value = true
}

const openEditModal = (tag) => {
  editingTag.value = tag
  formData.value = { ...tag }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingTag.value = null
}

const saveTag = () => {
  if (editingTag.value) {
    const index = allTags.value.findIndex(t => t.id === editingTag.value.id)
    if (index !== -1) {
      allTags.value[index] = {
        ...allTags.value[index],
        ...formData.value,
        updatedAt: new Date().toISOString().split('T')[0]
      }
    }
  } else {
    const newTag = {
      id: allTags.value.length + 1,
      ...formData.value,
      animeCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    }
    allTags.value.unshift(newTag)
  }
  closeModal()
}

const deleteTag = (id) => {
  if (confirm('Bạn có chắc muốn xóa tag này?')) {
    allTags.value = allTags.value.filter(t => t.id !== id)
  }
}

const toggleStatus = (id) => {
  const tag = allTags.value.find(t => t.id === id)
  if (tag) {
    tag.status = tag.status === 'active' ? 'inactive' : 'active'
    tag.updatedAt = new Date().toISOString().split('T')[0]
  }
}

const generateSlug = () => {
  if (formData.value.name) {
    formData.value.slug = formData.value.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
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
            <font-awesome-icon icon="tags" class="text-[#b8e62e]" />
          </div>
          Quản lý Tags
        </h1>
        <p class="text-gray-400 mt-1">Quản lý {{ allTags.length }} tags trong hệ thống</p>
      </div>

      <button 
        @click="openCreateModal"
        class="bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/50 group"
      >
        <font-awesome-icon icon="plus-circle" class="transition-transform duration-300 group-hover:rotate-90" />
        <span>Thêm Tag</span>
      </button>
    </div>

    <!-- Stats Cards -->
    <TagStats :stats="stats" />

    <!-- Filters -->
    <TagFilters
      v-model:search-query="searchQuery"
      v-model:selected-status="selectedStatus"
      v-model:sort-by="sortBy"
    />

    <!-- Tags Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <TagCard
        v-for="(tag, index) in paginatedTags"
        :key="tag.id"
        :tag="tag"
        @toggle-status="toggleStatus(tag.id)"
        @edit="openEditModal(tag)"
        @delete="deleteTag(tag.id)"
        class="animate-scale-in"
        :style="{ animationDelay: `${index * 0.05}s` }"
      />
    </div>

    <!-- Empty State -->
    <div v-if="paginatedTags.length === 0" class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-12 text-center">
      <font-awesome-icon 
        icon="tags" 
        class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
      />
      <p class="text-gray-400 text-lg">Không tìm thấy tag nào</p>
    </div>

    <!-- Pagination -->
    <Pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="handlePageChange"
    />

    <!-- Modal -->
    <TagModal
      :show="showModal"
      :tag="editingTag"
      v-model:form-data="formData"
      @close="closeModal"
      @save="saveTag"
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

@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
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

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}
</style>