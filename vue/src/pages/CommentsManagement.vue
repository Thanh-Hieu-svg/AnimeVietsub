<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/common/Pagination.vue'
import CommentStats from '@/components/admin/Comments/CommentStats.vue'
import CommentFilters from '@/components/admin/Comments/CommentFilters.vue'
import CommentCard from '@/components/admin/Comments/CommentCard.vue'

// Sample data
const allComments = ref([
  {
    id: 1,
    user: 'Nguyễn Văn A',
    avatar: 'https://i.pravatar.cc/150?img=1',
    anime: 'Spy x Family Season 3',
    content: 'Anime này hay quá! Anya quá dễ thương 😍',
    createdAt: '2024-01-15 14:30',
    status: 'approved',
    likes: 45,
    replies: 3
  },
  {
    id: 2,
    user: 'Trần Thị B',
    avatar: 'https://i.pravatar.cc/150?img=2',
    anime: 'Jujutsu Kaisen Season 2',
    content: 'Arc Shibuya quá đỉnh, animation MAPPA quá chất!',
    createdAt: '2024-01-15 13:20',
    status: 'pending',
    likes: 23,
    replies: 1
  },
  {
    id: 3,
    user: 'Lê Văn C',
    avatar: 'https://i.pravatar.cc/150?img=3',
    anime: 'Attack on Titan Final Season',
    content: 'Spoiler: Ending khá thất vọng...',
    createdAt: '2024-01-15 12:10',
    status: 'reported',
    likes: 12,
    replies: 0
  },
  {
    id: 4,
    user: 'Phạm Thị D',
    avatar: 'https://i.pravatar.cc/150?img=4',
    anime: 'Demon Slayer Season 4',
    content: 'Phần này có vẻ chậm hơn mong đợi',
    createdAt: '2024-01-15 11:45',
    status: 'approved',
    likes: 8,
    replies: 2
  },
  {
    id: 5,
    user: 'Hoàng Văn E',
    avatar: 'https://i.pravatar.cc/150?img=5',
    anime: 'One Piece',
    content: 'Luffy gear 5 quá bá đạo!!! 🔥🔥🔥',
    createdAt: '2024-01-15 10:30',
    status: 'approved',
    likes: 156,
    replies: 12
  },
  {
    id: 6,
    user: 'Võ Thị F',
    avatar: 'https://i.pravatar.cc/150?img=6',
    anime: 'Frieren: Beyond Journey\'s End',
    content: 'Anime của năm! OST quá tuyệt vời',
    createdAt: '2024-01-15 09:15',
    status: 'approved',
    likes: 89,
    replies: 7
  },
  {
    id: 7,
    user: 'Đỗ Văn G',
    avatar: 'https://i.pravatar.cc/150?img=7',
    anime: 'Blue Lock Season 2',
    content: 'Hype quá! Không thể chờ đợi tập tiếp theo',
    createdAt: '2024-01-15 08:45',
    status: 'pending',
    likes: 34,
    replies: 2
  },
  {
    id: 8,
    user: 'Bùi Thị H',
    avatar: 'https://i.pravatar.cc/150?img=8',
    anime: 'Mushoku Tensei Season 2',
    content: 'Animation đỉnh cao! Studio nào làm vậy?',
    createdAt: '2024-01-15 07:30',
    status: 'approved',
    likes: 67,
    replies: 5
  },
  {
    id: 9,
    user: 'Lý Văn I',
    avatar: 'https://i.pravatar.cc/150?img=9',
    anime: 'Classroom of the Elite Season 3',
    content: 'Link spam website xxx',
    createdAt: '2024-01-15 06:20',
    status: 'reported',
    likes: 0,
    replies: 0
  },
  {
    id: 10,
    user: 'Trương Thị K',
    avatar: 'https://i.pravatar.cc/150?img=10',
    anime: 'Tokyo Revengers Season 3',
    content: 'Takemichi vẫn yếu như thường 😂',
    createdAt: '2024-01-15 05:15',
    status: 'approved',
    likes: 28,
    replies: 4
  },
  {
    id: 11,
    user: 'Phan Văn L',
    avatar: 'https://i.pravatar.cc/150?img=11',
    anime: 'Vinland Saga Season 2',
    content: 'Masterpiece! Thorfinn đã trưởng thành rất nhiều',
    createdAt: '2024-01-15 04:00',
    status: 'approved',
    likes: 112,
    replies: 9
  },
  {
    id: 12,
    user: 'Mai Thị M',
    avatar: 'https://i.pravatar.cc/150?img=12',
    anime: 'Hell\'s Paradise',
    content: 'Gore nhiều quá, không dành cho người yếu tim',
    createdAt: '2024-01-15 03:30',
    status: 'pending',
    likes: 19,
    replies: 1
  }
])

const searchQuery = ref('')
const filterStatus = ref('all')
const currentPage = ref(1)
const itemsPerPage = 10

const filteredComments = computed(() => {
  let result = allComments.value

  if (searchQuery.value) {
    result = result.filter(c => 
      c.user.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.anime.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      c.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (filterStatus.value !== 'all') {
    result = result.filter(c => c.status === filterStatus.value)
  }

  return result
})

const totalPages = computed(() => {
  return Math.ceil(filteredComments.value.length / itemsPerPage)
})

const paginatedComments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredComments.value.slice(start, end)
})

const stats = computed(() => ({
  total: allComments.value.length,
  approved: allComments.value.filter(c => c.status === 'approved').length,
  pending: allComments.value.filter(c => c.status === 'pending').length,
  reported: allComments.value.filter(c => c.status === 'reported').length
}))

const approveComment = (id) => {
  const comment = allComments.value.find(c => c.id === id)
  if (comment) comment.status = 'approved'
}

const deleteComment = (id) => {
  if (confirm('Bạn có chắc muốn xóa bình luận này?')) {
    allComments.value = allComments.value.filter(c => c.id !== id)
  }
}

const handlePageChange = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen bg-[#0f1416] p-6">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="mb-8 animate-fade-in">
        <h1 class="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center animate-pulse-slow">
            <font-awesome-icon :icon="['fas', 'comments']" class="text-[#b8e62e]" />
          </div>
          Quản Lý Bình Luận
        </h1>
        <p class="text-gray-400">Quản lý và kiểm duyệt bình luận từ người dùng</p>
      </div>

      <!-- Stats Cards -->
      <CommentStats :stats="stats" />

      <!-- Filters -->
      <CommentFilters
        v-model:search-query="searchQuery"
        v-model:filter-status="filterStatus"
      />

      <!-- Comments List -->
      <div class="space-y-4 mb-6">
        <CommentCard
          v-for="(comment, index) in paginatedComments"
          :key="comment.id"
          :comment="comment"
          @approve="approveComment"
          @delete="deleteComment"
          class="animate-slide-in-left"
          :style="{ animationDelay: `${index * 0.05}s` }"
        />

        <!-- Empty State -->
        <div
          v-if="paginatedComments.length === 0"
          class="bg-[#1a1a1a] border border-gray-800 rounded-xl p-12 text-center animate-fade-in"
        >
          <font-awesome-icon 
            :icon="['fas', 'comment-slash']" 
            class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
          />
          <p class="text-gray-400 text-lg">Không tìm thấy bình luận nào</p>
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
  </div>
</template>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
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

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}
</style>