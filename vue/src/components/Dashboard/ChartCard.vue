<script setup>
import { Line, Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const props = defineProps({
  title: String,
  type: {
    type: String,
    default: 'line'
  },
  options: {
    type: Array,
    default: () => ['2024', '2023']
  }
})

const viewsData = {
  labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
  datasets: [
    {
      label: 'Lượt xem',
      data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 38000, 40000, 42000],
      borderColor: '#b8e62e',
      backgroundColor: 'rgba(184, 230, 46, 0.1)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#b8e62e',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6
    }
  ]
}

const usersData = {
  labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
  datasets: [
    {
      label: 'Người dùng mới',
      data: [500, 800, 700, 1200, 900, 1500, 1300, 1800, 1600, 2000, 2200, 2500],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(184, 230, 46, 0.8)'
      ],
      borderColor: [
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#3b82f6',
        '#b8e62e'
      ],
      borderWidth: 2,
      borderRadius: 6,
      hoverBackgroundColor: 'rgba(184, 230, 46, 0.8)'
    }
  ]
}

const chartData = props.type === 'line' ? viewsData : usersData

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#1a1a1a',
      titleColor: '#ffffff',
      bodyColor: '#b8e62e',
      borderColor: '#b8e62e',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      callbacks: {
        label(context) {
          return (context.parsed.y / 1000).toFixed(1) + 'K views'
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#9ca3af',
        font: {
          size: 11
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#9ca3af',
        font: {
          size: 11
        },
        callback(value) {
          return value / 1000 + 'K'
        }
      }
    }
  },
  interaction: {
    intersect: false,
    mode: 'index'
  }
}

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#1a1a1a',
      titleColor: '#ffffff',
      bodyColor: '#b8e62e',
      borderColor: '#b8e62e',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      callbacks: {
        label(context) {
          return context.parsed.y.toLocaleString() + ' users'
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#9ca3af',
        font: {
          size: 11
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: '#9ca3af',
        font: {
          size: 11
        },
        callback(value) {
          return value / 1000 + 'K'
        }
      }
    }
  }
}

const chartOptions = props.type === 'line' ? lineChartOptions : barChartOptions
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-xl shadow-xl border border-gray-800/50 p-6 hover:border-[#b8e62e]/30 transition-all duration-300">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-black text-white">{{ title }}</h2>
      <select
        class="text-sm bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#b8e62e] cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
    </div>
    <div class="h-64">
      <Line v-if="type === 'line'" :data="chartData" :options="chartOptions" />
      <Bar v-else :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
