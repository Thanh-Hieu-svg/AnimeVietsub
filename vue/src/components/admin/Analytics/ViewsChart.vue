<script setup>
import { Line } from 'vue-chartjs'

defineProps({
  chartData: {
    type: Object,
    required: true
  },
  chartOptions: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="lg:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/10 transition-all duration-300 hover:border-[#b8e62e]/30 group">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-white flex items-center gap-2 group-hover:text-[#b8e62e] transition-colors">
        <font-awesome-icon icon="chart-line" class="text-[#b8e62e] group-hover:scale-110 transition-transform" />
        Biểu đồ lượt xem
      </h2>
      <div class="flex items-center gap-2 text-xs text-gray-400">
        <div class="w-2 h-2 rounded-full bg-[#b8e62e] animate-pulse-slow"></div>
        Live data
      </div>
    </div>
    <div class="h-80">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<style scoped>
@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}
</style>