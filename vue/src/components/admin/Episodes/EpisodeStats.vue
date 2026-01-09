<script setup>
defineProps({
  stats: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-fade-in"
      style="animation-delay: 0.1s"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm font-semibold">Tổng số tập</p>
          <h3 class="text-3xl font-black text-white mt-2 group-hover:text-blue-400 transition-colors">{{ stats.total }}</h3>
        </div>
        <div class="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <font-awesome-icon icon="film" class="text-white text-2xl" />
        </div>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-fade-in"
      style="animation-delay: 0.2s"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm font-semibold">Đã xuất bản</p>
          <h3 class="text-3xl font-black text-green-400 mt-2 group-hover:scale-110 transition-transform">{{ stats.published }}</h3>
        </div>
        <div class="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <font-awesome-icon icon="check-circle" class="text-white text-2xl" />
        </div>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-fade-in"
      style="animation-delay: 0.3s"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm font-semibold">Bản nháp</p>
          <h3 class="text-3xl font-black text-yellow-400 mt-2 group-hover:scale-110 transition-transform">{{ stats.draft }}</h3>
        </div>
        <div class="w-14 h-14 rounded-xl bg-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <font-awesome-icon icon="edit" class="text-white text-2xl" />
        </div>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-fade-in"
      style="animation-delay: 0.4s"
    >
      <div class="flex items-center justify-between">
        <div>
          <p class="text-gray-500 text-sm font-semibold">Tổng lượt xem</p>
          <h3 class="text-3xl font-black text-[#b8e62e] mt-2 group-hover:scale-110 transition-transform">{{ (stats.totalViews / 1000).toFixed(1) }}K</h3>
        </div>
        <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-[#b8e62e] to-[#a0d020] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
          <font-awesome-icon icon="eye" class="text-black text-2xl" />
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