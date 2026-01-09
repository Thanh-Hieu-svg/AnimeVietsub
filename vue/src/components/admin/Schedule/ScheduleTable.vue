<script setup>
defineProps({
  schedules: Array,
  dayNames: Object
})

const emit = defineEmits(['toggle-publish', 'edit', 'delete'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl overflow-hidden shadow-xl">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-black/30 border-b border-gray-800">
          <tr>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Anime</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Tập</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Ngày chiếu</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Giờ chiếu</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Thứ</th>
            <th class="px-6 py-4 text-center text-sm font-semibold text-gray-400">Trạng thái</th>
            <th class="px-6 py-4 text-center text-sm font-semibold text-gray-400">Thao tác</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800">
          <tr 
            v-for="(schedule, index) in schedules" 
            :key="schedule.id"
            class="hover:bg-white/5 transition-all duration-300 group animate-slide-in-left"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <img 
                  :src="schedule.anime.thumbnail" 
                  :alt="schedule.anime.title"
                  class="w-12 h-16 rounded object-cover ring-2 ring-gray-800 group-hover:ring-[#b8e62e]/30 transition-all duration-300"
                />
                <div>
                  <p class="font-bold text-white group-hover:text-[#b8e62e] transition-colors">{{ schedule.anime.title }}</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-4">
              <span class="text-[#b8e62e] font-bold text-lg group-hover:scale-110 inline-block transition-transform">Tập {{ schedule.episode }}</span>
            </td>
            <td class="px-6 py-4 text-sm text-gray-400 group-hover:text-white transition-colors">{{ schedule.airDate }}</td>
            <td class="px-6 py-4 text-sm text-gray-400 group-hover:text-white transition-colors">{{ schedule.airTime }}</td>
            <td class="px-6 py-4 text-sm text-gray-400 group-hover:text-white transition-colors">{{ dayNames[schedule.dayOfWeek] }}</td>
            <td class="px-6 py-4 text-center">
              <button
                @click="emit('toggle-publish', schedule.id)"
                class="px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105"
                :class="schedule.isPublished 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 hover:shadow-lg hover:shadow-green-500/50' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 hover:bg-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/50'"
              >
                {{ schedule.isPublished ? 'Đã xuất bản' : 'Chờ xuất bản' }}
              </button>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button 
                  @click="emit('edit', schedule)"
                  class="p-2 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all group/btn hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  title="Chỉnh sửa"
                >
                  <font-awesome-icon icon="edit" class="group-hover/btn:rotate-12 transition-transform" />
                </button>
                <button 
                  @click="emit('delete', schedule.id)"
                  class="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-all group/btn hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
                  title="Xóa"
                >
                  <font-awesome-icon icon="trash" class="group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty State -->
    <div v-if="schedules.length === 0" class="p-12 text-center">
      <font-awesome-icon 
        icon="calendar-times" 
        class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
      />
      <p class="text-gray-400 text-lg">Không tìm thấy lịch chiếu nào</p>
    </div>
  </div>
</template>

<style scoped>
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

@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}
</style>