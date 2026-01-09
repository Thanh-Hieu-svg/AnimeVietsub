<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/common/Pagination.vue'
import ScheduleStats from '@/components/admin/schedule/ScheduleStats.vue'
import ScheduleFilters from '@/components/admin/schedule/ScheduleFilters.vue'
import ScheduleTable from '@/components/admin/schedule/ScheduleTable.vue'
import ScheduleModal from '@/components/admin/schedule/ScheduleModal.vue'
import ImageDemo from '@/assets/images/animevsub.jpg'
// Schedule data
const schedules = ref([
  {
    id: 1,
    anime: {
      id: 1,
      title: 'Spy x Family Season 3',
      thumbnail: ImageDemo,
      status: 'ongoing'
    },
    episode: 12,
    airDate: '2024-01-20',
    airTime: '23:00',
    dayOfWeek: 'Saturday',
    isPublished: true
  },
  {
    id: 2,
    anime: {
      id: 2,
      title: 'Jujutsu Kaisen Season 2',
      thumbnail: ImageDemo,
      status: 'ongoing'
    },
    episode: 8,
    airDate: '2024-01-19',
    airTime: '22:00',
    dayOfWeek: 'Friday',
    isPublished: true
  },
  {
    id: 3,
    anime: {
      id: 3,
      title: 'Frieren: Beyond Journey\'s End',
      thumbnail: ImageDemo,
      status: 'ongoing'
    },
    episode: 15,
    airDate: '2024-01-21',
    airTime: '22:30',
    dayOfWeek: 'Sunday',
    isPublished: false
  },
  {
    id: 4,
    anime: {
      id: 4,
      title: 'Blue Lock Season 2',
      thumbnail: ImageDemo,
      status: 'ongoing'
    },
    episode: 5,
    airDate: '2024-01-18',
    airTime: '21:00',
    dayOfWeek: 'Thursday',
    isPublished: true
  },
  {
    id: 5,
    anime: {
      id: 5,
      title: 'Solo Leveling',
      thumbnail: ImageDemo,
      status: 'ongoing'
    },
    episode: 3,
    airDate: '2024-01-20',
    airTime: '20:30',
    dayOfWeek: 'Saturday',
    isPublished: false
  },
  {
    id: 6,
    anime: {
      id: 6,
      title: 'Demon Slayer: Hashira Training Arc',
      thumbnail: ImageDemo,
      status: 'ongoing'
    },
    episode: 7,
    airDate: '2024-01-21',
    airTime: '23:30',
    dayOfWeek: 'Sunday',
    isPublished: true
  }
])

// Filters
const searchQuery = ref('')
const selectedDay = ref('all')
const selectedStatus = ref('all')
const sortBy = ref('date')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

// Modal
const showModal = ref(false)
const editingSchedule = ref(null)
const formData = ref({
  animeId: '',
  episode: 1,
  airDate: '',
  airTime: '',
  dayOfWeek: '',
  isPublished: true
})

// Filtered schedules
const filteredSchedules = computed(() => {
  let filtered = schedules.value

  if (searchQuery.value) {
    filtered = filtered.filter(s => 
      s.anime.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (selectedDay.value !== 'all') {
    filtered = filtered.filter(s => s.dayOfWeek === selectedDay.value)
  }

  if (selectedStatus.value !== 'all') {
    filtered = filtered.filter(s => 
      selectedStatus.value === 'published' ? s.isPublished : !s.isPublished
    )
  }

  // Sort
  if (sortBy.value === 'date') {
    filtered = [...filtered].sort((a, b) => new Date(a.airDate) - new Date(b.airDate))
  } else if (sortBy.value === 'episode') {
    filtered = [...filtered].sort((a, b) => a.episode - b.episode)
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredSchedules.value.length / itemsPerPage))

const paginatedSchedules = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredSchedules.value.slice(start, end)
})

// Stats
const stats = computed(() => ({
  total: schedules.value.length,
  published: schedules.value.filter(s => s.isPublished).length,
  pending: schedules.value.filter(s => !s.isPublished).length,
  today: schedules.value.filter(s => s.airDate === new Date().toISOString().split('T')[0]).length
}))

// Days of week
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const dayNames = {
  Monday: 'Thứ 2',
  Tuesday: 'Thứ 3',
  Wednesday: 'Thứ 4',
  Thursday: 'Thứ 5',
  Friday: 'Thứ 6',
  Saturday: 'Thứ 7',
  Sunday: 'Chủ nhật'
}

// Actions
const openCreateModal = () => {
  editingSchedule.value = null
  formData.value = {
    animeId: '',
    episode: 1,
    airDate: '',
    airTime: '',
    dayOfWeek: '',
    isPublished: true
  }
  showModal.value = true
}

const openEditModal = (schedule) => {
  editingSchedule.value = schedule
  formData.value = {
    animeId: schedule.anime.id,
    episode: schedule.episode,
    airDate: schedule.airDate,
    airTime: schedule.airTime,
    dayOfWeek: schedule.dayOfWeek,
    isPublished: schedule.isPublished
  }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingSchedule.value = null
}

const saveSchedule = () => {
  if (editingSchedule.value) {
    // Update
    const index = schedules.value.findIndex(s => s.id === editingSchedule.value.id)
    if (index !== -1) {
      schedules.value[index] = {
        ...schedules.value[index],
        ...formData.value
      }
    }
  } else {
    // Create new
    const newSchedule = {
      id: schedules.value.length + 1,
      anime: {
        id: formData.value.animeId,
        title: 'New Anime',
        thumbnail: 'https://via.placeholder.com/150x200',
        status: 'ongoing'
      },
      ...formData.value
    }
    schedules.value.push(newSchedule)
  }
  closeModal()
}

const deleteSchedule = (id) => {
  if (confirm('Bạn có chắc muốn xóa lịch chiếu này?')) {
    schedules.value = schedules.value.filter(s => s.id !== id)
  }
}

const togglePublish = (id) => {
  const schedule = schedules.value.find(s => s.id === id)
  if (schedule) {
    schedule.isPublished = !schedule.isPublished
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
            <font-awesome-icon icon="calendar-alt" class="text-[#b8e62e]" />
          </div>
          Quản lý Lịch Chiếu
        </h1>
        <p class="text-gray-400 mt-1">Quản lý {{ schedules.length }} lịch chiếu anime</p>
      </div>

      <button 
        @click="openCreateModal"
        class="bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/50 group"
      >
        <font-awesome-icon icon="plus-circle" class="transition-transform duration-300 group-hover:rotate-90" />
        <span>Thêm Lịch Chiếu</span>
      </button>
    </div>

    <!-- Stats Cards -->
    <ScheduleStats :stats="stats" />

    <!-- Filters -->
    <ScheduleFilters
      v-model:search-query="searchQuery"
      v-model:selected-day="selectedDay"
      v-model:selected-status="selectedStatus"
      v-model:sort-by="sortBy"
      :days-of-week="daysOfWeek"
      :day-names="dayNames"
    />

    <!-- Schedules Table -->
    <ScheduleTable
      :schedules="paginatedSchedules"
      :day-names="dayNames"
      @toggle-publish="togglePublish"
      @edit="openEditModal"
      @delete="deleteSchedule"
    />

    <!-- Pagination -->
    <Pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="handlePageChange"
    />

    <!-- Modal -->
    <ScheduleModal
      :show="showModal"
      :schedule="editingSchedule"
      v-model:form-data="formData"
      :days-of-week="daysOfWeek"
      :day-names="dayNames"
      @close="closeModal"
      @save="saveSchedule"
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