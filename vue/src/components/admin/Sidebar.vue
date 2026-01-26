<script setup>
import { useAuthStore } from '@/stores/auth.store'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
import { useAuth } from '../../Composables/useAuth'
import { computed } from 'vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: true
  }
})

defineEmits(['toggle'])

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const toast = useToast()
const { logout } = useAuth()

const menuItems = [
  {
    section: 'TỔNG QUAN',
    items: [
      { name: 'Bảng điều khiển', icon: 'chart-line', route: '/admin' },
      { name: 'Phân tích', icon: 'chart-bar', route: '/admin/analytics' }
    ]
  },
  {
    section: 'QUẢN LÝ',
    items: [
      { name: 'Người dùng', icon: 'users', route: '/admin/users' },
      { name: 'Anime', icon: 'film', route: '/admin/anime' },
      { name: 'Tập phim', icon: 'play-circle', route: '/admin/episodes' },
      { name: 'Bình luận', icon: 'comments', route: '/admin/comments' }
    ]
  },
  {
    section: 'NỘI DUNG',
    items: [
      { name: 'Thể loại', icon: 'folder', route: '/admin/categories' },
      { name: 'Tags', icon: 'tags', route: '/admin/tags' },
      { name: 'Lịch chiếu', icon: 'calendar', route: '/admin/schedule' }
    ]
  },
  {
    section: 'CÀI ĐẶT',
    items: [
      { name: 'Cài đặt trang', icon: 'cog', route: '/admin/settings' },
      { name: 'Hồ sơ', icon: 'user', route: '/admin/profile' }
    ]
  }
]

// ✅ Check if route is active
const isRouteActive = (itemRoute) => {
  // Exact match for dashboard
  if (itemRoute === '/admin' && route.path === '/admin') {
    return true
  }
  // Starts with for other routes
  if (itemRoute !== '/admin' && route.path.startsWith(itemRoute)) {
    return true
  }
  return false
}

// ✅ Xử lý logout
const handleLogout = () => logout()
</script>

<template>
  <aside 
    :class="[
      'bg-gradient-to-br from-[#0f1416] to-[#1a1a1a] h-screen fixed left-0 top-0 z-40 transition-all duration-300 shadow-2xl border-r border-gray-800/50',
      isOpen ? 'w-64' : 'w-20'
    ]"
  >
    <!-- Logo -->
    <div class="h-16 flex items-center justify-center border-b border-gray-800/50 bg-black/20">
      <h2 
        :class="[
          'font-black transition-all duration-300 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] bg-clip-text text-transparent',
          isOpen ? 'text-2xl' : 'text-xl'
        ]"
      >
        {{ isOpen ? 'AnimeVietsub' : 'AV' }}
      </h2>
    </div>

    <!-- Navigation -->
    <nav class="py-4 overflow-y-auto h-[calc(100vh-8rem)]">
      <div v-for="menu in menuItems" :key="menu.section" class="mb-6">
        <!-- Section Title -->
        <p 
          v-if="isOpen"
          class="px-6 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 animate-fade-in"
        >
          {{ menu.section }}
        </p>
        <div v-else class="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-4 mb-2"></div>

        <!-- Menu Items -->
        <div class="space-y-1 px-3">
          <router-link
            v-for="item in menu.items"
            :key="item.route"
            :to="item.route"
            :class="[
              'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden',
              isRouteActive(item.route)
                ? 'bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black shadow-xl shadow-[#b8e62e]/30'
                : 'text-gray-400 hover:text-white'
            ]"
          >
            <!-- Hover Background (chỉ show khi không active) -->
            <div 
              v-if="!isRouteActive(item.route)"
              class="absolute inset-0 bg-gradient-to-r from-[#b8e62e]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"
            ></div>
            
            <!-- Icon -->
            <font-awesome-icon 
              :icon="item.icon" 
              :class="[
                'text-lg transition-all duration-300 relative z-10',
                isRouteActive(item.route)
                  ? 'text-black'
                  : 'group-hover:scale-110 group-hover:text-[#b8e62e]'
              ]"
            />
            
            <!-- Text -->
            <span 
              v-if="isOpen"
              :class="[
                'font-semibold text-sm transition-all duration-300 relative z-10',
                isRouteActive(item.route) ? 'text-black' : ''
              ]"
            >
              {{ item.name }}
            </span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- ✅ Logout Button -->
    <div class="absolute bottom-4 left-0 right-0 px-3 border-t border-gray-800/50 pt-4">
      <button
        @click="handleLogout"
        class="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 group relative overflow-hidden"
        :title="isOpen ? '' : 'Đăng xuất'"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <font-awesome-icon icon="sign-out-alt" class="text-lg group-hover:scale-110 transition-transform duration-300 relative z-10" />
        <span v-if="isOpen" class="font-semibold text-sm relative z-10">Đăng xuất</span>
      </button>
    </div>
  </aside>

  <!-- Sidebar Overlay (Mobile) -->
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
      @click="$emit('toggle')"
    ></div>
  </transition>
</template>

<style scoped>
/* Custom scrollbar */
nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: rgba(184, 230, 46, 0.3);
  border-radius: 4px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: rgba(184, 230, 46, 0.5);
}

/* ✅ Remove default active classes */
.router-link-active,
.router-link-exact-active {
  /* Không apply styles mặc định */
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>