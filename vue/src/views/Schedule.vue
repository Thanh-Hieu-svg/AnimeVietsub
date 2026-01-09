<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/common/Pagination.vue'
import ImageAnimeVsub from '@/assets/images/animevsub.jpg'

// Dữ liệu mẫu lịch chiếu anime
const scheduleData = ref([
  { id: 1, day: 'Thứ 2', animes: [
    { id: 101, title: 'One Piece', episode: 'Tập 1091', time: '20:00', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 102, title: 'Jujutsu Kaisen', episode: 'Tập 9', time: '21:30', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 103, title: 'Frieren', episode: 'Tập 17', time: '23:00', thumbnail: ImageAnimeVsub, status: 'airing' }
  ]},
  { id: 2, day: 'Thứ 3', animes: [
    { id: 201, title: 'Spy x Family S3', episode: 'Tập 5', time: '19:00', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 202, title: 'Blue Lock S2', episode: 'Tập 8', time: '22:00', thumbnail: ImageAnimeVsub, status: 'airing' }
  ]},
  { id: 3, day: 'Thứ 4', animes: [
    { id: 301, title: 'Attack on Titan', episode: 'Tập 90', time: '20:30', thumbnail: ImageAnimeVsub, status: 'completed' },
    { id: 302, title: 'Demon Slayer S4', episode: 'Tập 12', time: '21:00', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 303, title: 'My Hero Academia S7', episode: 'Tập 15', time: '23:30', thumbnail: ImageAnimeVsub, status: 'airing' }
  ]},
  { id: 4, day: 'Thứ 5', animes: [
    { id: 401, title: 'Bleach TYBW', episode: 'Tập 27', time: '19:30', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 402, title: 'Chainsaw Man', episode: 'Tập 13', time: '22:30', thumbnail: ImageAnimeVsub, status: 'airing' }
  ]},
  { id: 5, day: 'Thứ 6', animes: [
    { id: 501, title: 'Tokyo Revengers', episode: 'Tập 51', time: '20:00', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 502, title: 'Dr. Stone S3', episode: 'Tập 16', time: '21:00', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 503, title: 'Vinland Saga S3', episode: 'Tập 8', time: '23:00', thumbnail: ImageAnimeVsub, status: 'airing' }
  ]},
  { id: 6, day: 'Thứ 7', animes: [
    { id: 601, title: 'Mushoku Tensei S2', episode: 'Tập 24', time: '19:00', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 602, title: 'Re:Zero S3', episode: 'Tập 11', time: '22:00', thumbnail: ImageAnimeVsub, status: 'airing' }
  ]},
  { id: 7, day: 'Chủ nhật', animes: [
    { id: 701, title: 'Overlord V', episode: 'Tập 6', time: '20:00', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 702, title: 'Konosuba S3', episode: 'Tập 9', time: '21:30', thumbnail: ImageAnimeVsub, status: 'airing' },
    { id: 703, title: 'Hunter x Hunter', episode: 'Tập 149', time: '23:30', thumbnail: ImageAnimeVsub, status: 'completed' }
  ]}
])

// Pagination
const currentPage = ref(1)
const itemsPerPage = 3
const totalPages = computed(() => Math.ceil(scheduleData.value.length / itemsPerPage))

const paginatedSchedule = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return scheduleData.value.slice(start, end)
})

const handlePageChange = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const getStatusBadge = (status) => {
  return status === 'airing' 
    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
    : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
}
</script>

<template>
  <div class="min-h-screen bg-[#0f1416] pt-24 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      
      <!-- Header -->
      <div class="text-center space-y-4 animate-fade-in-up">
        <h1 class="text-4xl sm:text-5xl font-black text-white">
          <font-awesome-icon icon="calendar-alt" class="text-[#b8e62e] mr-3" />
          Lịch Chiếu Anime
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Cập nhật lịch chiếu anime mới nhất theo từng ngày trong tuần 📺
        </p>
      </div>

      <!-- Schedule Grid -->
      <div class="space-y-6 animate-fade-in-up" style="animation-delay: 0.2s">
        <div
          v-for="(day, index) in paginatedSchedule"
          :key="day.id"
          class="bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#0f1416] rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50 animate-slide-in-left"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Day Header -->
          <div class="bg-gradient-to-r from-[#b8e62e] to-[#a0d020] px-6 py-4">
            <h2 class="text-2xl font-black text-black flex items-center gap-3">
              <font-awesome-icon icon="calendar-day" />
              {{ day.day }}
            </h2>
          </div>

          <!-- Anime List -->
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="anime in day.animes"
                :key="anime.id"
                class="group bg-[#2a2a2a] rounded-xl overflow-hidden border border-gray-700 hover:border-[#b8e62e] transition-all duration-300 hover:shadow-xl hover:shadow-[#b8e62e]/20 hover:-translate-y-1 cursor-pointer"
              >
                <div class="flex gap-4 p-4">
                  <!-- Thumbnail -->
                  <div class="relative flex-shrink-0">
                    <img
                      :src="anime.thumbnail"
                      :alt="anime.title"
                      class="w-24 h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div class="absolute top-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-[#b8e62e]">
                      {{ anime.time }}
                    </div>
                  </div>

                  <!-- Info -->
                  <div class="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 class="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#b8e62e] transition-colors">
                        {{ anime.title }}
                      </h3>
                      <p class="text-gray-400 text-sm mb-2">
                        {{ anime.episode }}
                      </p>
                    </div>

                    <div class="flex items-center gap-2">
                      <span
                        :class="getStatusBadge(anime.status)"
                        class="px-3 py-1 rounded-full text-xs font-bold"
                      >
                        {{ anime.status === 'airing' ? 'ĐANG CHIẾU' : 'HOÀN TẤT' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center pt-8">
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="handlePageChange"
        />
      </div>

      <!-- Note -->
      <div class="bg-gradient-to-r from-[#b8e62e]/10 to-transparent border border-[#b8e62e]/30 rounded-xl p-6 animate-fade-in-up" style="animation-delay: 0.4s">
        <div class="flex items-start gap-4">
          <font-awesome-icon icon="info-circle" class="text-[#b8e62e] text-2xl flex-shrink-0 mt-1" />
          <div class="space-y-2">
            <p class="text-white font-bold text-lg">Lưu ý quan trọng:</p>
            <ul class="text-gray-300 text-sm space-y-1 list-disc list-inside">
              <li>Lịch chiếu có thể thay đổi tùy theo studio phát hành</li>
              <li>Thời gian hiển thị theo múi giờ Việt Nam (GMT+7)</li>
              <li>Click vào anime để xem chi tiết và đặt nhắc nhở</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
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

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out forwards;
  opacity: 0;
}
</style>