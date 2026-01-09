<script setup>
import { ref, computed } from 'vue'
import { Line, Bar, Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

import AnalyticsStats from '@/components/admin/analytics/AnalyticsStats.vue'
import ViewsChart from '@/components/admin/analytics/ViewsChart.vue'
import DeviceChart from '@/components/admin/analytics/DeviceChart.vue'
import TopAnimeChart from '@/components/admin/analytics/TopAnimeChart.vue'
import TopGenres from '@/components/admin/analytics/TopGenres.vue'
import RecentActivities from '@/components/admin/analytics/RecentActivities.vue'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

// Date range
const selectedRange = ref('7days')
const dateRanges = [
  { value: '7days', label: '7 ngày qua' },
  { value: '30days', label: '30 ngày qua' },
  { value: '3months', label: '3 tháng qua' },
  { value: '1year', label: '1 năm qua' }
]

// Stats data
const stats = computed(() => ({
  totalViews: 2450000,
  totalUsers: 125000,
  newUsers: 15000,
  activeUsers: 45000,
  avgSessionTime: '12:45',
  bounceRate: '32%',
  totalComments: 8500,
  totalAnime: 450
}))

// Views chart data
const viewsChartData = ref({
  labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  datasets: [
    {
      label: 'Lượt xem',
      data: [45000, 52000, 48000, 62000, 58000, 75000, 68000],
      borderColor: '#b8e62e',
      backgroundColor: 'rgba(184, 230, 46, 0.1)',
      fill: true,
      tension: 0.4
    }
  ]
})

const viewsChartOptions = {
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
      displayColors: false
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.05)'
      },
      ticks: {
        color: '#9ca3af'
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.05)'
      },
      ticks: {
        color: '#9ca3af',
        callback: function(value) {
          return (value / 1000) + 'K'
        }
      }
    }
  }
}

// Top anime data
const topAnimeChartData = ref({
  labels: ['Spy x Family', 'Jujutsu Kaisen', 'Frieren', 'Blue Lock', 'Solo Leveling'],
  datasets: [
    {
      label: 'Lượt xem',
      data: [125000, 110000, 98000, 85000, 72000],
      backgroundColor: [
        '#3b82f6',
        '#10b981',
        '#8b5cf6',
        '#f59e0b',
        '#ef4444'
      ]
    }
  ]
})

const topAnimeChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
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
      padding: 12
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.05)'
      },
      ticks: {
        color: '#9ca3af',
        callback: function(value) {
          return (value / 1000) + 'K'
        }
      }
    },
    y: {
      grid: {
        display: false
      },
      ticks: {
        color: '#9ca3af'
      }
    }
  }
}

// Device distribution
const deviceChartData = ref({
  labels: ['Mobile', 'Desktop', 'Tablet'],
  datasets: [
    {
      data: [55, 35, 10],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
      borderWidth: 0
    }
  ]
})

const deviceChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#9ca3af',
        padding: 20,
        font: {
          size: 12
        }
      }
    },
    tooltip: {
      backgroundColor: '#1a1a1a',
      titleColor: '#ffffff',
      bodyColor: '#b8e62e',
      borderColor: '#b8e62e',
      borderWidth: 1,
      padding: 12,
      callbacks: {
        label: function(context) {
          return context.label + ': ' + context.parsed + '%'
        }
      }
    }
  }
}

// Top genres
const topGenres = ref([
  { name: 'Action', count: 340, percent: 75 },
  { name: 'Romance', count: 310, percent: 68 },
  { name: 'Fantasy', count: 298, percent: 66 },
  { name: 'Comedy', count: 250, percent: 55 },
  { name: 'Drama', count: 162, percent: 36 }
])

// Recent activities
const recentActivities = ref([
  { 
    type: 'view', 
    user: 'User #12345', 
    action: 'đã xem', 
    target: 'Spy x Family - Tập 12',
    time: '2 phút trước',
    icon: 'play'
  },
  { 
    type: 'comment', 
    user: 'Nguyễn Văn A', 
    action: 'đã bình luận', 
    target: 'Jujutsu Kaisen Season 2',
    time: '5 phút trước',
    icon: 'comment'
  },
  { 
    type: 'register', 
    user: 'Trần Thị B', 
    action: 'đã đăng ký tài khoản',
    target: '',
    time: '10 phút trước',
    icon: 'user-plus'
  },
  { 
    type: 'view', 
    user: 'User #54321', 
    action: 'đã xem', 
    target: 'Frieren - Tập 8',
    time: '15 phút trước',
    icon: 'play'
  },
  { 
    type: 'comment', 
    user: 'Lê Văn C', 
    action: 'đã bình luận', 
    target: 'Blue Lock Season 2',
    time: '20 phút trước',
    icon: 'comment'
  }
])

const getActivityColor = (type) => {
  const colors = {
    view: 'text-blue-400',
    comment: 'text-green-400',
    register: 'text-purple-400'
  }
  return colors[type] || 'text-gray-400'
}

const getActivityBg = (type) => {
  const bgs = {
    view: 'bg-blue-500/20',
    comment: 'bg-green-500/20',
    register: 'bg-purple-500/20'
  }
  return bgs[type] || 'bg-gray-500/20'
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 animate-fade-in">
      <div>
        <h1 class="text-3xl font-black text-white flex items-center gap-3">
          <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center animate-pulse-slow">
            <font-awesome-icon icon="chart-line" class="text-[#b8e62e]" />
          </div>
          Thống Kê & Phân Tích
        </h1>
        <p class="text-gray-400 mt-1">Theo dõi hiệu suất và xu hướng người dùng</p>
      </div>

      <select 
        v-model="selectedRange"
        class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 hover:scale-105 transition-all"
      >
        <option v-for="range in dateRanges" :key="range.value" :value="range.value">
          {{ range.label }}
        </option>
      </select>
    </div>

    <!-- Stats -->
    <AnalyticsStats :stats="stats" />

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ViewsChart :chart-data="viewsChartData" :chart-options="viewsChartOptions" />
      <DeviceChart :chart-data="deviceChartData" :chart-options="deviceChartOptions" />
    </div>

    <!-- Top Anime & Genres -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TopAnimeChart :chart-data="topAnimeChartData" :chart-options="topAnimeChartOptions" />
      <TopGenres :genres="topGenres" />
    </div>

    <!-- Recent Activities -->
    <RecentActivities :activities="recentActivities" />
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

@keyframes pulseSlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}
</style>