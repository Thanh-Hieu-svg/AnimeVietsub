<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  maxVisiblePages: {
    type: Number,
    default: 7
  }
})

const emit = defineEmits(['page-change'])

const visiblePages = computed(() => {
  const pages = []
  const total = props.totalPages
  const current = props.currentPage
  const max = props.maxVisiblePages

  if (total <= max) {
    // Show all pages if total is less than max
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Always show first page
    pages.push(1)

    let start = Math.max(2, current - 1)
    let end = Math.min(total - 1, current + 1)

    // Show dots after first page
    if (start > 2) {
      pages.push('...')
      start = current - 1
    }

    // Show middle pages
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    // Show dots before last page
    if (end < total - 1) {
      pages.push('...')
    }

    // Always show last page
    pages.push(total)
  }

  return pages
})

const goToPage = (page) => {
  if (page === '...' || page === props.currentPage) return
  if (page < 1 || page > props.totalPages) return
  emit('page-change', page)
}

const previousPage = () => {
  if (props.currentPage > 1) {
    emit('page-change', props.currentPage - 1)
  }
}

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('page-change', props.currentPage + 1)
  }
}
</script>

<template>
  <div class="flex items-center justify-center gap-2 animate-fade-in-up">
    <!-- Previous Button -->
    <button
      @click="previousPage"
      :disabled="currentPage === 1"
      class="pagination-btn"
      :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-lg hover:shadow-[#b8e62e]/30'"
    >
      <font-awesome-icon icon="chevron-left" class="text-sm" />
    </button>

    <!-- Page Numbers -->
    <div class="flex items-center gap-2">
      <button
        v-for="(page, index) in visiblePages"
        :key="index"
        @click="goToPage(page)"
        :disabled="page === '...'"
        class="pagination-number"
        :class="{
          'active': page === currentPage,
          'dots': page === '...',
          'hover:scale-110 hover:shadow-lg hover:shadow-[#b8e62e]/30': page !== '...' && page !== currentPage
        }"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next Button -->
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="pagination-btn"
      :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-lg hover:shadow-[#b8e62e]/30'"
    >
      <font-awesome-icon icon="chevron-right" class="text-sm" />
    </button>

    <!-- Page Info -->
    <div class="hidden sm:flex items-center gap-2 ml-4 text-sm text-gray-400">
      <span>Trang</span>
      <span class="font-bold text-[#b8e62e]">{{ currentPage }}</span>
      <span>/</span>
      <span class="font-bold text-white">{{ totalPages }}</span>
    </div>
  </div>
</template>

<style scoped>
/* Pagination Button */
.pagination-btn {
  @apply w-10 h-10 flex items-center justify-center bg-[#2a2a2a] text-white rounded-xl border border-gray-700 transition-all duration-300 font-bold;
}

.pagination-btn:not(:disabled):hover {
  @apply bg-[#3a3a3a] border-[#b8e62e];
  transform: scale(1.1);
}

.pagination-btn:disabled {
  @apply cursor-not-allowed;
}

/* Pagination Number */
.pagination-number {
  @apply w-10 h-10 flex items-center justify-center bg-[#2a2a2a] text-white rounded-xl border border-gray-700 transition-all duration-300 font-bold text-sm;
  animation: slideUp 0.4s ease-out forwards;
  opacity: 0;
}

.pagination-number:not(.dots):not(.active):hover {
  @apply bg-[#3a3a3a] border-[#b8e62e] text-[#b8e62e];
  transform: scale(1.1);
}

.pagination-number.active {
  @apply bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black border-[#b8e62e] shadow-xl shadow-[#b8e62e]/50;
  transform: scale(1.15);
}

.pagination-number.dots {
  @apply cursor-default border-transparent;
}

.pagination-number.dots:hover {
  @apply bg-[#2a2a2a] border-transparent;
  transform: none;
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>