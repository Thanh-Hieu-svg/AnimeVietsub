<script setup>
defineProps({
  genres: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/10 transition-all duration-300 hover:border-[#b8e62e]/30">
    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2 group hover:text-[#b8e62e] transition-colors">
      <font-awesome-icon icon="list" class="text-[#b8e62e] group-hover:scale-110 transition-transform" />
      Top thể loại phổ biến
    </h2>
    <div class="space-y-4">
      <div 
        v-for="(genre, index) in genres" 
        :key="index"
        class="group/item animate-slide-in-left"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-semibold text-gray-300 group-hover/item:text-[#b8e62e] transition-colors">
            {{ genre.name }}
          </span>
          <span class="text-sm font-bold text-[#b8e62e] group-hover/item:scale-110 transition-transform">{{ genre.count }} anime</span>
        </div>
        <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div 
            class="bg-gradient-to-r from-[#b8e62e] to-[#a0d020] h-full rounded-full transition-all duration-500 group-hover/item:scale-105 animate-progress"
            :style="{ width: genre.percent + '%', animationDelay: `${index * 0.1}s` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes progress {
  from {
    width: 0%;
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-progress {
  animation: progress 1s ease-out forwards;
}
</style>