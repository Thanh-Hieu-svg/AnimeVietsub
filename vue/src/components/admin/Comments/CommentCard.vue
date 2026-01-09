<script setup>
const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['approve', 'delete'])

const getStatusColor = (status) => {
  const colors = {
    approved: 'bg-green-500/20 text-green-400 border-green-500/30',
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    reported: 'bg-red-500/20 text-red-400 border-red-500/30'
  }
  return colors[status] || 'bg-gray-500/20 text-gray-400'
}

const getStatusLabel = (status) => {
  const labels = {
    approved: 'Đã duyệt',
    pending: 'Chờ duyệt',
    reported: 'Bị báo cáo'
  }
  return labels[status] || status
}
</script>

<template>
  <div class="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-[#b8e62e]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#b8e62e]/5">
    <div class="flex gap-4">
      <!-- Avatar -->
      <img
        :src="comment.avatar"
        :alt="comment.user"
        class="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-800 group-hover:ring-[#b8e62e]/30 transition-all duration-300"
      />

      <!-- Content -->
      <div class="flex-1 min-w-0">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 class="text-white font-semibold group-hover:text-[#b8e62e] transition-colors">{{ comment.user }}</h3>
            <p class="text-sm text-gray-400">
              Trên: <span class="text-[#b8e62e]">{{ comment.anime }}</span>
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span
              class="text-xs px-3 py-1 rounded-full border transition-all duration-300 hover:scale-105"
              :class="getStatusColor(comment.status)"
            >
              {{ getStatusLabel(comment.status) }}
            </span>
          </div>
        </div>

        <!-- Comment Text -->
        <p class="text-gray-300 mb-3 leading-relaxed">{{ comment.content }}</p>

        <!-- Footer -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4 text-sm text-gray-400">
            <span class="flex items-center gap-1 hover:text-white transition-colors">
              <font-awesome-icon :icon="['fas', 'clock']" class="w-3 h-3" />
              {{ comment.createdAt }}
            </span>
            <span class="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
              <font-awesome-icon :icon="['fas', 'heart']" class="w-3 h-3 text-red-400" />
              {{ comment.likes }}
            </span>
            <span class="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
              <font-awesome-icon :icon="['fas', 'reply']" class="w-3 h-3" />
              {{ comment.replies }}
            </span>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              v-if="comment.status !== 'approved'"
              @click="emit('approve', comment.id)"
              class="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
            >
              <font-awesome-icon :icon="['fas', 'check-circle']" class="w-4 h-4" />
              Duyệt
            </button>
            <button
              @click="emit('delete', comment.id)"
              class="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
            >
              <font-awesome-icon :icon="['fas', 'trash']" class="w-4 h-4" />
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>