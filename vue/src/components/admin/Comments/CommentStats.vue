<script setup>
defineProps({
  stats: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 animate-fade-in group cursor-pointer"
      style="animation-delay: 0.1s"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-400 text-sm mb-1">Tổng số</p>
          <p class="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{{ stats.total }}</p>
        </div>
        <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <font-awesome-icon :icon="['fas', 'comments']" class="text-blue-400 text-xl" />
        </div>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 animate-fade-in group cursor-pointer"
      style="animation-delay: 0.2s"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-400 text-sm mb-1">Đã duyệt</p>
          <p class="text-3xl font-bold text-green-400 group-hover:scale-110 transition-transform">{{ stats.approved }}</p>
        </div>
        <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <font-awesome-icon :icon="['fas', 'check-circle']" class="text-green-400 text-xl" />
        </div>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 animate-fade-in group cursor-pointer"
      style="animation-delay: 0.3s"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-400 text-sm mb-1">Chờ duyệt</p>
          <p class="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">{{ stats.pending }}</p>
        </div>
        <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <font-awesome-icon :icon="['fas', 'clock']" class="text-yellow-400 text-xl" />
        </div>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 animate-fade-in group cursor-pointer"
      style="animation-delay: 0.4s"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-400 text-sm mb-1">Bị báo cáo</p>
          <p class="text-3xl font-bold text-red-400 group-hover:scale-110 transition-transform">{{ stats.reported }}</p>
        </div>
        <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <font-awesome-icon :icon="['fas', 'flag']" class="text-red-400 text-xl" />
        </div>
      </div>
    </div>
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

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}
</style>