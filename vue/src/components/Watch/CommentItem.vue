<script setup>
import { ref } from 'vue'

defineProps({
  comment: Object
})

const isLiked = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

<template>
  <div class="flex gap-3 animate-fade-in">
    <img
      :src="comment.avatar"
      class="w-10 h-10 rounded-full ring-2 ring-gray-700 hover:ring-[#b8e62e]/50 transition-all duration-300"
      :alt="comment.user"
    />

    <div class="flex-1 bg-[#2a2a2a] rounded-xl p-4 space-y-2 hover:bg-[#333333] transition-colors duration-300">
      <div class="flex items-center justify-between">
        <p class="text-sm font-bold text-[#b8e62e]">
          {{ comment.user }}
        </p>
        <span class="text-xs text-gray-500 flex items-center gap-1">
          <font-awesome-icon icon="clock" class="text-[10px]" />
          {{ comment.time }}
        </span>
      </div>

      <p class="text-sm text-gray-300 leading-relaxed">
        {{ comment.content }}
      </p>

      <div class="flex items-center gap-4 text-xs text-gray-400 pt-2 border-t border-gray-700/50">
        <button 
          @click="toggleLike"
          :class="isLiked ? 'text-red-500' : 'hover:text-red-400'"
          class="flex items-center gap-1 transition-colors duration-200"
        >
          <font-awesome-icon :icon="isLiked ? 'heart' : ['far', 'heart']" />
          <span>{{ comment.likes + (isLiked ? 1 : 0) }}</span>
        </button>
        
        <button class="hover:text-[#b8e62e] transition-colors duration-200 flex items-center gap-1">
          <font-awesome-icon icon="reply" />
          <span>Trả lời</span>
        </button>
        
        <button class="hover:text-red-400 transition-colors duration-200 flex items-center gap-1">
          <font-awesome-icon icon="flag" />
          <span>Báo cáo</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
</style>