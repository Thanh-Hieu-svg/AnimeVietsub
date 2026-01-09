<script setup>
import { Bar } from 'vue-chartjs'

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
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/10 transition-all duration-300 hover:border-[#b8e62e]/30 group">
    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2 group-hover:text-[#b8e62e] transition-colors">
      <font-awesome-icon icon="trophy" class="text-[#b8e62e] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
      Top 5 Anime xem nhiều nhất
    </h2>
    <div class="h-80">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>