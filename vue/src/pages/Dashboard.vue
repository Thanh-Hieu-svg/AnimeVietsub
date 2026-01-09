<script setup>
import { ref } from 'vue'
import StatsCard from '@/components/dashboard/StatsCard.vue'
import RecentActivities from '@/components/dashboard/RecentActivities.vue'
import ServerStatus from '@/components/dashboard/ServerStatus.vue'
import RecentUsers from '@/components/dashboard/RecentUsers.vue'
import TopAnime from '@/components/dashboard/TopAnime.vue'
import ChartCard from '@/components/dashboard/ChartCard.vue'

// Stats Cards
const stats = ref([
  { title: 'Total Users', value: '12,345', icon: 'users', color: 'bg-blue-500', change: '+12%', trend: 'up' },
  { title: 'Total Anime', value: '1,234', icon: 'film', color: 'bg-purple-500', change: '+8%', trend: 'up' },
  { title: 'Total Views', value: '1.2M', icon: 'eye', color: 'bg-green-500', change: '+24%', trend: 'up' },
  { title: 'Comments', value: '45,678', icon: 'comments', color: 'bg-orange-500', change: '-5%', trend: 'down' }
])

// Recent Users
const recentUsers = ref([
  { id: 1, name: 'Nguyễn Văn A', email: 'user1@example.com', avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=b8e62e&color=000', joined: '2024-01-15', status: 'active' },
  { id: 2, name: 'Trần Thị B', email: 'user2@example.com', avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+B&background=10b981&color=fff', joined: '2024-01-14', status: 'active' },
  { id: 3, name: 'Lê Văn C', email: 'user3@example.com', avatar: 'https://ui-avatars.com/api/?name=Le+Van+C&background=f59e0b&color=fff', joined: '2024-01-13', status: 'inactive' },
  { id: 4, name: 'Phạm Thị D', email: 'user4@example.com', avatar: 'https://ui-avatars.com/api/?name=Pham+Thi+D&background=ef4444&color=fff', joined: '2024-01-12', status: 'active' },
  { id: 5, name: 'Hoàng Văn E', email: 'user5@example.com', avatar: 'https://ui-avatars.com/api/?name=Hoang+Van+E&background=8b5cf6&color=fff', joined: '2024-01-11', status: 'active' }
])

// Top Anime
const topAnime = ref([
  { id: 1, title: 'One Piece', views: '2.5M', rating: 9.5, thumbnail: 'https://via.placeholder.com/80x120?text=OP', trend: 'up' },
  { id: 2, title: 'Jujutsu Kaisen', views: '1.8M', rating: 9.2, thumbnail: 'https://via.placeholder.com/80x120?text=JJK', trend: 'up' },
  { id: 3, title: 'Attack on Titan', views: '1.5M', rating: 9.8, thumbnail: 'https://via.placeholder.com/80x120?text=AOT', trend: 'down' },
  { id: 4, title: 'Demon Slayer', views: '1.2M', rating: 9.0, thumbnail: 'https://via.placeholder.com/80x120?text=DS', trend: 'up' },
  { id: 5, title: 'My Hero Academia', views: '950K', rating: 8.8, thumbnail: 'https://via.placeholder.com/80x120?text=MHA', trend: 'same' }
])

// Recent Activities
const activities = ref([
  { id: 1, user: 'Admin', action: 'uploaded new anime', target: 'Frieren Episode 17', time: '5 mins ago', icon: 'upload', color: 'text-[#b8e62e]' },
  { id: 2, user: 'Moderator', action: 'deleted comment', target: 'Spam content', time: '15 mins ago', icon: 'trash', color: 'text-red-400' },
  { id: 3, user: 'Admin', action: 'banned user', target: 'user123', time: '1 hour ago', icon: 'user-slash', color: 'text-orange-400' },
  { id: 4, user: 'System', action: 'backup completed', target: 'Database', time: '2 hours ago', icon: 'database', color: 'text-green-400' },
  { id: 5, user: 'Admin', action: 'updated settings', target: 'Site Configuration', time: '3 hours ago', icon: 'cog', color: 'text-purple-400' }
])

// Server Status
const serverStatus = ref([
  { name: 'API Server', status: 'online', uptime: '99.9%', responseTime: '45ms' },
  { name: 'Database', status: 'online', uptime: '99.8%', responseTime: '12ms' },
  { name: 'CDN', status: 'online', uptime: '100%', responseTime: '8ms' },
  { name: 'Backup Server', status: 'warning', uptime: '95.2%', responseTime: '150ms' }
])

// Quick Actions
const quickActions = [
  { name: 'Add Anime', icon: 'plus-circle', color: 'bg-gradient-to-r from-[#b8e62e] to-[#a0d020]', route: '/admin/anime/create' },
  { name: 'Manage Users', icon: 'users-cog', color: 'bg-gradient-to-r from-purple-500 to-purple-600', route: '/admin/users' },
  { name: 'View Reports', icon: 'chart-bar', color: 'bg-gradient-to-r from-blue-500 to-blue-600', route: '/admin/reports' },
  { name: 'Settings', icon: 'cog', color: 'bg-gradient-to-r from-orange-500 to-orange-600', route: '/admin/settings' }
]
</script>

<template>
  <div class="space-y-6">
    <!-- Page Title & Quick Actions -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
      <div>
        <h1 class="text-3xl font-black text-white">Dashboard</h1>
        <p class="text-gray-400 mt-1">Tổng quan hệ thống AnimeVib Admin Panel</p>
      </div>

      <!-- Quick Actions -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="action in quickActions"
          :key="action.name"
          @click="$router.push(action.route)"
          :class="[action.color, 'text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2 shadow-xl']"
        >
          <font-awesome-icon :icon="action.icon" />
          <span class="hidden sm:inline">{{ action.name }}</span>
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        v-for="stat in stats"
        :key="stat.title"
        v-bind="stat"
      />
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <RecentActivities :activities="activities" />
      <ServerStatus :servers="serverStatus" />
    </div>

    <!-- Bottom Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <RecentUsers :users="recentUsers" />
      <TopAnime :anime-list="topAnime" />
    </div>

    <!-- Chart Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Line Chart -->
      <ChartCard 
        title="Lượt xem theo tháng" 
        type="line"
        :options="['2024', '2023']"
      />
      
      <!-- Bar Chart -->
      <ChartCard 
        title="Người dùng mới" 
        type="bar"
        :options="['30 ngày', '7 ngày']"
      />
    </div>

  </div>
</template>