<script setup>
import { Doughnut } from 'vue-chartjs'

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
      <font-awesome-icon icon="mobile-alt" class="text-[#b8e62e] group-hover:scale-110 transition-transform" />
      Thiết bị truy cập
    </h2>
    <div class="h-64">
      <Doughnut :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>