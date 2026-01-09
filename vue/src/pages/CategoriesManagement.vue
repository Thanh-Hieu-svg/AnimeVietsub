<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/common/Pagination.vue'

// Sample data
const allCategories = ref([
  {
    id: 1,
    name: 'Action',
    slug: 'action',
    description: 'Anime hành động với các trận chiến gay cấn',
    animeCount: 156,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'Romance',
    slug: 'romance',
    description: 'Anime tình cảm lãng mạn',
    animeCount: 89,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-14'
  },
  {
    id: 3,
    name: 'Comedy',
    slug: 'comedy',
    description: 'Anime hài hước vui nhộn',
    animeCount: 112,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-13'
  },
  {
    id: 4,
    name: 'Drama',
    slug: 'drama',
    description: 'Anime kịch tính với cốt truyện sâu sắc',
    animeCount: 78,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-12'
  },
  {
    id: 5,
    name: 'Fantasy',
    slug: 'fantasy',
    description: 'Anime giả tưởng với phép thuật và thế giới huyền bí',
    animeCount: 134,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-11'
  },
  {
    id: 6,
    name: 'Sci-Fi',
    slug: 'sci-fi',
    description: 'Anime khoa học viễn tưởng',
    animeCount: 67,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-10'
  },
  {
    id: 7,
    name: 'Horror',
    slug: 'horror',
    description: 'Anime kinh dị đáng sợ',
    animeCount: 45,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-09'
  },
  {
    id: 8,
    name: 'Sports',
    slug: 'sports',
    description: 'Anime thể thao',
    animeCount: 52,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-08'
  },
  {
    id: 9,
    name: 'Slice of Life',
    slug: 'slice-of-life',
    description: 'Anime về cuộc sống thường ngày',
    animeCount: 98,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-07'
  },
  {
    id: 10,
    name: 'Supernatural',
    slug: 'supernatural',
    description: 'Anime siêu nhiên với yếu tố thần bí',
    animeCount: 87,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-06'
  },
  {
    id: 11,
    name: 'Psychological',
    slug: 'psychological',
    description: 'Anime tâm lý hấp dẫn',
    animeCount: 34,
    status: 'inactive',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-05'
  },
  {
    id: 12,
    name: 'Mystery',
    slug: 'mystery',
    description: 'Anime bí ẩn ly kỳ',
    animeCount: 56,
    status: 'active',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-04'
  }
])

const searchQuery = ref('')
const filterStatus = ref('all')
const currentPage = ref(1)
const itemsPerPage = 10
const showModal = ref(false)
const editingCategory = ref(null)

const formData = ref({
  name: '',
  slug: '',
  description: '',
  status: 'active'
})

const filteredCategories = computed(() => {
  let result = allCategories.value

  if (searchQuery.value) {
    result = result.filter(c => 
      c.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.slug.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (filterStatus.value !== 'all') {
    result = result.filter(c => c.status === filterStatus.value)
  }

  return result
})

const totalPages = computed(() => {
  return Math.ceil(filteredCategories.value.length / itemsPerPage)
})

const paginatedCategories = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredCategories.value.slice(start, end)
})

const stats = computed(() => ({
  total: allCategories.value.length,
  active: allCategories.value.filter(c => c.status === 'active').length,
  inactive: allCategories.value.filter(c => c.status === 'inactive').length,
  totalAnimes: allCategories.value.reduce((sum, c) => sum + c.animeCount, 0)
}))

const openCreateModal = () => {
  editingCategory.value = null
  formData.value = {
    name: '',
    slug: '',
    description: '',
    status: 'active'
  }
  showModal.value = true
}

const openEditModal = (category) => {
  editingCategory.value = category
  formData.value = { ...category }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingCategory.value = null
}

const saveCategory = () => {
  if (editingCategory.value) {
    // Update existing
    const index = allCategories.value.findIndex(c => c.id === editingCategory.value.id)
    if (index !== -1) {
      allCategories.value[index] = {
        ...allCategories.value[index],
        ...formData.value,
        updatedAt: new Date().toISOString().split('T')[0]
      }
    }
  } else {
    // Create new
    const newCategory = {
      id: allCategories.value.length + 1,
      ...formData.value,
      animeCount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    }
    allCategories.value.unshift(newCategory)
  }
  closeModal()
}

const deleteCategory = (id) => {
  if (confirm('Bạn có chắc muốn xóa thể loại này?')) {
    allCategories.value = allCategories.value.filter(c => c.id !== id)
  }
}

const toggleStatus = (id) => {
  const category = allCategories.value.find(c => c.id === id)
  if (category) {
    category.status = category.status === 'active' ? 'inactive' : 'active'
    category.updatedAt = new Date().toISOString().split('T')[0]
  }
}

const handlePageChange = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
</script>

<template>
  <div class="min-h-screen bg-[#0f1416] p-6">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fade-in">
        <div>
          <h1 class="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center animate-pulse-slow">
              <font-awesome-icon :icon="['fas', 'list']" class="text-[#b8e62e]" />
            </div>
            Quản Lý Thể Loại
          </h1>
          <p class="text-gray-400">Quản lý các thể loại anime</p>
        </div>
        <button
          @click="openCreateModal"
          class="flex items-center gap-2 bg-[#b8e62e] hover:bg-[#a0d020] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#b8e62e]/50 active:scale-95 group"
        >
          <font-awesome-icon 
            :icon="['fas', 'plus']" 
            class="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" 
          />
          Thêm Thể Loại
        </button>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div 
          class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 animate-fade-in group cursor-pointer"
          style="animation-delay: 0.1s"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400 text-sm mb-1">Tổng thể loại</p>
              <p class="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{{ stats.total }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <font-awesome-icon :icon="['fas', 'list']" class="text-blue-400 text-xl" />
            </div>
          </div>
        </div>

        <div 
          class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 animate-fade-in group cursor-pointer"
          style="animation-delay: 0.2s"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400 text-sm mb-1">Đang hoạt động</p>
              <p class="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform">{{ stats.active }}</p>
            </div>
            <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <font-awesome-icon :icon="['fas', 'check-circle']" class="text-green-400 text-xl" />
            </div>
          </div>
        </div>

        <div 
          class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 animate-fade-in group cursor-pointer"
          style="animation-delay: 0.3s"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400 text-sm mb-1">Không hoạt động</p>
              <p class="text-3xl font-bold text-red-400 group-hover:scale-110 transition-transform">{{ stats.inactive }}</p>
            </div>
            <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <font-awesome-icon :icon="['fas', 'ban']" class="text-red-400 text-xl" />
            </div>
          </div>
        </div>

        <div 
          class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 animate-fade-in group cursor-pointer"
          style="animation-delay: 0.4s"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-400 text-sm mb-1">Tổng anime</p>
              <p class="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform">{{ stats.totalAnimes }}</p>
            </div>
            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <font-awesome-icon :icon="['fas', 'film']" class="text-purple-400 text-xl" />
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 mb-6 hover:border-[#b8e62e]/30 transition-all duration-300 animate-fade-in" style="animation-delay: 0.5s">
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Search -->
          <div class="flex-1">
            <div class="relative group">
              <font-awesome-icon 
                :icon="['fas', 'search']" 
                class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#b8e62e] transition-colors" 
              />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Tìm kiếm theo tên, mô tả..."
                class="w-full bg-[#0f1416] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              />
            </div>
          </div>

          <!-- Status Filter -->
          <div class="md:w-64">
            <select
              v-model="filterStatus"
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 cursor-pointer hover:border-[#b8e62e]/50 focus:shadow-lg focus:shadow-[#b8e62e]/20"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Đang hoạt động</option>
              <option value="inactive">Không hoạt động</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Categories Table -->
      <div class="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden mb-6 animate-fade-in" style="animation-delay: 0.6s">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-[#0f1416] border-b border-gray-800">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">ID</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Tên</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Slug</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Số Anime</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Trạng thái</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Cập nhật</th>
                <th class="px-6 py-4 text-right text-sm font-semibold text-gray-400">Thao tác</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-800">
              <tr
                v-for="(category, index) in paginatedCategories"
                :key="category.id"
                class="hover:bg-[#0f1416] transition-all duration-300 group animate-slide-in-left"
                :style="{ animationDelay: `${index * 0.05}s` }"
              >
                <td class="px-6 py-4 text-sm text-gray-400 group-hover:text-white transition-colors">{{ category.id }}</td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-white font-semibold group-hover:text-[#b8e62e] transition-colors">{{ category.name }}</p>
                    <p class="text-sm text-gray-400 line-clamp-1">{{ category.description }}</p>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-400">{{ category.slug }}</td>
                <td class="px-6 py-4">
                  <span class="text-[#b8e62e] font-semibold group-hover:scale-110 inline-block transition-transform">{{ category.animeCount }}</span>
                </td>
                <td class="px-6 py-4">
                  <button
                    @click="toggleStatus(category.id)"
                    class="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
                    :class="category.status === 'active' 
                      ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:shadow-lg hover:shadow-green-500/50' 
                      : 'bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:shadow-lg hover:shadow-red-500/50'"
                  >
                    <font-awesome-icon 
                      :icon="['fas', category.status === 'active' ? 'check-circle' : 'ban']" 
                      class="w-3 h-3" 
                    />
                    {{ category.status === 'active' ? 'Hoạt động' : 'Không hoạt động' }}
                  </button>
                </td>
                <td class="px-6 py-4 text-sm text-gray-400">{{ category.updatedAt }}</td>
                <td class="px-6 py-4">
                  <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      @click="openEditModal(category)"
                      class="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                      title="Chỉnh sửa"
                    >
                      <font-awesome-icon :icon="['fas', 'edit']" class="w-4 h-4" />
                    </button>
                    <button
                      @click="deleteCategory(category.id)"
                      class="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
                      title="Xóa"
                    >
                      <font-awesome-icon :icon="['fas', 'trash']" class="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Empty State -->
        <div
          v-if="paginatedCategories.length === 0"
          class="p-12 text-center animate-fade-in"
        >
          <font-awesome-icon 
            :icon="['fas', 'inbox']" 
            class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
          />
          <p class="text-gray-400 text-lg">Không tìm thấy thể loại nào</p>
        </div>
      </div>

      <!-- Pagination -->
      <Pagination
        v-if="totalPages > 1"
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />

    </div>

    <!-- Modal Create/Edit -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      @click.self="closeModal"
    >
      <div class="bg-[#1a1a1a] border border-gray-800 rounded-xl max-w-2xl w-full p-6 animate-scale-in shadow-2xl shadow-[#b8e62e]/10">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-white flex items-center gap-3">
            <div class="w-8 h-8 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center">
              <font-awesome-icon 
                :icon="['fas', editingCategory ? 'edit' : 'plus']" 
                class="text-[#b8e62e]" 
              />
            </div>
            {{ editingCategory ? 'Chỉnh Sửa Thể Loại' : 'Thêm Thể Loại Mới' }}
          </h2>
          <button
            @click="closeModal"
            class="p-2 hover:bg-[#2a2a2a] rounded-lg transition-all duration-300 group hover:scale-110"
          >
            <font-awesome-icon 
              :icon="['fas', 'times']" 
              class="text-gray-400 w-5 h-5 group-hover:text-red-400 group-hover:rotate-90 transition-all duration-300" 
            />
          </button>
        </div>

        <form @submit.prevent="saveCategory" class="space-y-4">
          <div class="animate-slide-in-left" style="animation-delay: 0.1s">
            <label class="block text-sm font-semibold text-gray-400 mb-2">Tên thể loại *</label>
            <input
              v-model="formData.name"
              @input="generateSlug"
              type="text"
              required
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              placeholder="Nhập tên thể loại..."
            />
          </div>

          <div class="animate-slide-in-left" style="animation-delay: 0.2s">
            <label class="block text-sm font-semibold text-gray-400 mb-2">Slug *</label>
            <input
              v-model="formData.slug"
              type="text"
              required
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              placeholder="slug-tu-dong-tao"
            />
          </div>

          <div class="animate-slide-in-left" style="animation-delay: 0.3s">
            <label class="block text-sm font-semibold text-gray-400 mb-2">Mô tả</label>
            <textarea
              v-model="formData.description"
              rows="3"
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 resize-none focus:shadow-lg focus:shadow-[#b8e62e]/20"
              placeholder="Nhập mô tả thể loại..."
            ></textarea>
          </div>

          <div class="animate-slide-in-left" style="animation-delay: 0.4s">
            <label class="block text-sm font-semibold text-gray-400 mb-2">Trạng thái</label>
            <select
              v-model="formData.status"
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 cursor-pointer focus:shadow-lg focus:shadow-[#b8e62e]/20"
            >
              <option value="active">Hoạt động</option>
              <option value="inactive">Không hoạt động</option>
            </select>
          </div>

          <div class="flex items-center gap-3 pt-4 animate-slide-in-left" style="animation-delay: 0.5s">
            <button
              type="submit"
              class="flex-1 bg-[#b8e62e] hover:bg-[#a0d020] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#b8e62e]/50 active:scale-95"
            >
              {{ editingCategory ? 'Cập Nhật' : 'Tạo Mới' }}
            </button>
            <button
              type="button"
              @click="closeModal"
              class="flex-1 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #b8e62e;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a0d020;
}

/* Animations */
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
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