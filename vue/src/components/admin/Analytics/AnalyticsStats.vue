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
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-fade-in overflow-hidden relative"
      style="animation-delay: 0.1s"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <div class="relative">
        <div class="flex items-center justify-between mb-3">
          <p class="text-gray-500 text-sm font-semibold">Tổng lượt xem</p>
          <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <font-awesome-icon icon="eye" class="text-blue-400" />
          </div>
        </div>
        <h3 class="text-3xl font-black text-white group-hover:text-blue-400 transition-colors">
          {{ (stats.totalViews / 1000000).toFixed(2) }}M
        </h3>
        <p class="text-xs text-green-400 mt-2 flex items-center gap-1 group-hover:scale-105 transition-transform">
          <font-awesome-icon icon="arrow-up" class="text-[10px] animate-bounce-slow" />
          +12.5% so với tuần trước
        </p>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-fade-in overflow-hidden relative"
      style="animation-delay: 0.2s"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <div class="relative">
        <div class="flex items-center justify-between mb-3">
          <p class="text-gray-500 text-sm font-semibold">Người dùng hoạt động</p>
          <div class="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <font-awesome-icon icon="users" class="text-green-400" />
          </div>
        </div>
        <h3 class="text-3xl font-black text-white group-hover:text-green-400 transition-colors">
          {{ (stats.activeUsers / 1000).toFixed(1) }}K
        </h3>
        <p class="text-xs text-green-400 mt-2 flex items-center gap-1 group-hover:scale-105 transition-transform">
          <font-awesome-icon icon="arrow-up" class="text-[10px] animate-bounce-slow" />
          +8.3% so với tuần trước
        </p>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-fade-in overflow-hidden relative"
      style="animation-delay: 0.3s"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <div class="relative">
        <div class="flex items-center justify-between mb-3">
          <p class="text-gray-500 text-sm font-semibold">Thời gian trung bình</p>
          <div class="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <font-awesome-icon icon="clock" class="text-purple-400" />
          </div>
        </div>
        <h3 class="text-3xl font-black text-white group-hover:text-purple-400 transition-colors">
          {{ stats.avgSessionTime }}
        </h3>
        <p class="text-xs text-green-400 mt-2 flex items-center gap-1 group-hover:scale-105 transition-transform">
          <font-awesome-icon icon="arrow-up" class="text-[10px] animate-bounce-slow" />
          +2.1 phút so với tuần trước
        </p>
      </div>
    </div>

    <div 
      class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-fade-in overflow-hidden relative"
      style="animation-delay: 0.4s"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <div class="relative">
        <div class="flex items-center justify-between mb-3">
          <p class="text-gray-500 text-sm font-semibold">Tỷ lệ thoát</p>
          <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <font-awesome-icon icon="sign-out-alt" class="text-orange-400" />
          </div>
        </div>
        <h3 class="text-3xl font-black text-white group-hover:text-orange-400 transition-colors">
          {{ stats.bounceRate }}
        </h3>
        <p class="text-xs text-red-400 mt-2 flex items-center gap-1 group-hover:scale-105 transition-transform">
          <font-awesome-icon icon="arrow-down" class="text-[10px] animate-bounce-slow" />
          -3.2% so với tuần trước
        </p>
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

@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}
</style>