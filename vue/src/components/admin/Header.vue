<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuth } from '@/composables/useAuth'

defineEmits(['toggle-sidebar'])

const { logout, user, isAdmin, avatarLetter } = useAuth()

const searchQuery = ref('')
const showNotifications = ref(false)
const showProfile = ref(false)

const notifications = [
  { id: 1, text: 'New user registered', time: '5 mins ago', unread: true, icon: 'user-plus', color: 'blue' },
  { id: 2, text: 'New anime uploaded', time: '1 hour ago', unread: true, icon: 'film', color: 'green' },
  { id: 3, text: 'Server maintenance', time: '3 hours ago', unread: false, icon: 'server', color: 'yellow' }
]

// ✅ Avatar gradient động
const avatarStyle = computed(() => {
  const gradients = [
    'from-purple-500 to-pink-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-yellow-500 to-orange-500',
    'from-indigo-500 to-purple-500',
    'from-pink-500 to-rose-500',
    'from-teal-500 to-green-500'
  ]
  
  const charCode = user.value?.username?.charCodeAt(0) || 0
  const gradientIndex = charCode % gradients.length
  
  return gradients[gradientIndex]
})

// ✅ Xử lý logout
const handleLogout = () => {
  showProfile.value = false
  logout()
}

// ✅ Đóng dropdown khi click outside
const closeDropdowns = (event) => {
  if (!event.target.closest('.profile-dropdown')) {
    showProfile.value = false
  }
  if (!event.target.closest('.notifications-dropdown')) {
    showNotifications.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdowns)
})
</script>

<template>
  <header class="bg-gradient-to-r from-[#0f1416] to-[#1a1a1a] border-b border-gray-800/50 h-16 flex items-center justify-between px-6 sticky top-0 z-30 shadow-xl">
    <!-- Left: Toggle & Search -->
    <div class="flex items-center gap-4 flex-1">
      <!-- Sidebar Toggle -->
      <button
        @click="$emit('toggle-sidebar')"
        class="p-2 hover:bg-[#b8e62e]/10 rounded-lg transition-all duration-300 group"
      >
        <font-awesome-icon icon="bars" class="text-gray-400 group-hover:text-[#b8e62e] text-xl transition-colors duration-300" />
      </button>

      <!-- Search Bar -->
      <div class="hidden md:flex items-center bg-black/30 border border-gray-800 rounded-xl px-4 py-2 max-w-md w-full group hover:border-[#b8e62e]/50 transition-all duration-300">
        <font-awesome-icon icon="search" class="text-gray-500 group-hover:text-[#b8e62e] mr-3 transition-colors duration-300" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Tìm kiếm anime, users..."
          class="bg-transparent border-none outline-none text-gray-300 flex-1 placeholder-gray-500 text-sm"
        />
      </div>
    </div>

    <!-- Right: Actions -->
    <div class="flex items-center gap-3">
      <!-- Search Mobile -->
      <button class="md:hidden p-2 hover:bg-[#b8e62e]/10 rounded-lg transition-all duration-300 group">
        <font-awesome-icon icon="search" class="text-gray-400 group-hover:text-[#b8e62e] transition-colors duration-300" />
      </button>

      <!-- Notifications -->
      <div class="relative notifications-dropdown">
        <button
          @click.stop="showNotifications = !showNotifications"
          class="relative p-2 hover:bg-[#b8e62e]/10 rounded-lg transition-all duration-300 group"
        >
          <font-awesome-icon icon="bell" class="text-gray-400 group-hover:text-[#b8e62e] text-xl transition-colors duration-300" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-[#b8e62e] rounded-full animate-pulse"></span>
        </button>

        <!-- Notifications Dropdown -->
        <transition name="dropdown">
          <div
            v-if="showNotifications"
            class="absolute right-0 mt-3 w-80 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden z-50"
          >
            <div class="px-4 py-3 border-b border-gray-800/50">
              <h3 class="font-bold text-white flex items-center justify-between">
                <span>Thông báo</span>
                <span class="text-xs text-gray-500 font-normal">3 mới</span>
              </h3>
            </div>
            <div class="max-h-96 overflow-y-auto">
              <a
                v-for="notif in notifications"
                :key="notif.id"
                href="#"
                class="relative flex items-start gap-3 px-4 py-3 hover:bg-[#b8e62e]/10 transition-all duration-300 group"
                :class="notif.unread && 'bg-[#b8e62e]/5'"
              >
                <!-- Icon with colored background -->
                <div 
                  :class="[
                    'w-10 h-10 rounded-lg flex items-center justify-center shrink-0',
                    notif.color === 'blue' && 'bg-blue-500/10 text-blue-500',
                    notif.color === 'green' && 'bg-green-500/10 text-green-500',
                    notif.color === 'yellow' && 'bg-yellow-500/10 text-yellow-500'
                  ]"
                >
                  <font-awesome-icon :icon="notif.icon" class="text-base" />
                </div>
                
                <!-- Unread indicator -->
                <div v-if="notif.unread" class="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#b8e62e]"></div>
                
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{{ notif.text }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ notif.time }}</p>
                </div>
              </a>
            </div>
            <div class="px-4 py-3 border-t border-gray-800/50">
              <a href="#" class="text-sm text-[#b8e62e] font-semibold hover:text-[#a0d020] transition-colors duration-300">
                Xem tất cả →
              </a>
            </div>
          </div>
        </transition>
      </div>

      <!-- Profile -->
      <div class="relative profile-dropdown">
        <button
          @click.stop="showProfile = !showProfile"
          class="group flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#b8e62e]/10 rounded-xl transition-all duration-300"
        >
          <!-- Avatar với gradient động -->
          <div class="relative">
            <div 
              :class="[
                'w-9 h-9 rounded-full bg-gradient-to-br',
                avatarStyle,
                'text-white font-black text-base flex items-center justify-center',
                'transition-all duration-500',
                'group-hover:scale-110 group-hover:rotate-12',
                'shadow-lg shadow-black/50',
                'ring-2 ring-gray-700 group-hover:ring-[#b8e62e]',
                'relative overflow-hidden'
              ]"
            >
              <!-- Shimmer Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <!-- Letter -->
              <span class="relative z-10 drop-shadow-lg">{{ avatarLetter }}</span>
            </div>
            
            <!-- Hover Glow -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-[#b8e62e] to-[#a0d020] opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 pointer-events-none"></div>
          </div>
          
          <!-- User Info -->
          <div class="hidden md:block text-left">
            <p class="text-sm font-bold text-white leading-tight group-hover:text-[#b8e62e] transition-colors duration-300">{{ user?.username }}</p>
            <p class="text-xs text-gray-500 leading-tight">{{ user?.email }}</p>
          </div>
          
          <font-awesome-icon 
            icon="chevron-down" 
            class="hidden md:block text-gray-500 group-hover:text-[#b8e62e] text-xs transition-all duration-300"
            :class="{ 'rotate-180': showProfile }"
          />
        </button>

        <!-- Profile Dropdown -->
        <transition name="dropdown">
          <div
            v-if="showProfile"
            class="absolute right-0 mt-3 w-72 bg-gradient-to-br from-[#2a2a2a] via-[#1f1f1f] to-[#1a1a1a] backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden z-50"
          >
            <!-- Animated Background Pattern -->
            <div class="absolute inset-0 opacity-5">
              <div class="absolute inset-0 animate-pulse" style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 20px 20px;"></div>
            </div>

            <!-- User Info Header -->
            <div class="relative px-4 py-4 bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] border-b border-gray-700/50">
              <div class="relative flex items-center gap-3">
                <!-- Avatar Large -->
                <div class="relative">
                  <div 
                    :class="[
                      'w-14 h-14 rounded-full bg-gradient-to-br',
                      avatarStyle,
                      'text-white font-black text-xl flex items-center justify-center',
                      'ring-4 ring-gray-700/50 shadow-xl',
                      'relative animate-pulse-slow'
                    ]"
                  >
                    <span class="drop-shadow-lg">{{ avatarLetter }}</span>
                  </div>
                  <!-- Rotating Ring -->
                  <div class="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30 animate-spin-slow"></div>
                </div>
                
                <div class="flex-1 min-w-0">
                  <p class="text-white font-bold text-base truncate">{{ user?.username }}</p>
                  <p class="text-gray-400 text-xs truncate">{{ user?.email }}</p>
                  
                  <!-- Admin Badge -->
                  <span 
                    v-if="isAdmin"
                    class="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black text-xs font-bold rounded-full mt-1.5 shadow-lg animate-pulse-slow"
                  >
                    <font-awesome-icon icon="shield-alt" class="text-xs animate-bounce-slow" />
                    ADMIN
                  </span>
                </div>
              </div>
            </div>

            <!-- Menu Items -->
            <div class="py-2">
              <router-link 
                to="/admin/profile" 
                @click="showProfile = false"
                class="group flex items-center gap-3 px-4 py-2.5 hover:bg-[#b8e62e]/10 transition-all duration-300 relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-[#b8e62e]/0 via-[#b8e62e]/5 to-[#b8e62e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div class="relative w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-800/50 group-hover:from-[#b8e62e]/20 group-hover:to-[#b8e62e]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <font-awesome-icon icon="user" class="text-gray-400 group-hover:text-[#b8e62e] text-sm transition-colors duration-300" />
                </div>
                <div class="relative flex-1">
                  <p class="text-sm text-gray-300 group-hover:text-white font-medium transition-colors duration-300">Hồ sơ</p>
                  <p class="text-xs text-gray-500 group-hover:text-gray-400">Xem thông tin cá nhân</p>
                </div>
                <font-awesome-icon icon="chevron-right" class="relative text-xs text-gray-600 group-hover:text-[#b8e62e] group-hover:translate-x-1 transition-all duration-300" />
              </router-link>

              <router-link 
                to="/admin/settings" 
                @click="showProfile = false"
                class="group flex items-center gap-3 px-4 py-2.5 hover:bg-[#b8e62e]/10 transition-all duration-300 relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-[#b8e62e]/0 via-[#b8e62e]/5 to-[#b8e62e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div class="relative w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-800/50 group-hover:from-blue-500/20 group-hover:to-cyan-500/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <font-awesome-icon icon="cog" class="text-gray-400 group-hover:text-blue-500 text-sm transition-colors duration-300" />
                </div>
                <div class="relative flex-1">
                  <p class="text-sm text-gray-300 group-hover:text-white font-medium transition-colors duration-300">Cài đặt</p>
                  <p class="text-xs text-gray-500 group-hover:text-gray-400">Cấu hình hệ thống</p>
                </div>
                <font-awesome-icon icon="chevron-right" class="relative text-xs text-gray-600 group-hover:text-[#b8e62e] group-hover:translate-x-1 transition-all duration-300" />
              </router-link>
            </div>

            <!-- Logout Section -->
            <div class="border-t border-gray-700/50 pt-2 pb-2">
              <button 
                @click="handleLogout"
                class="group flex items-center gap-3 px-4 py-2.5 hover:bg-red-500/10 transition-all duration-300 text-red-400 hover:text-red-300 w-full relative overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div class="relative w-8 h-8 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <font-awesome-icon icon="sign-out-alt" class="text-sm" />
                </div>
                <div class="relative flex-1 text-left">
                  <p class="text-sm font-semibold">Đăng xuất</p>
                  <p class="text-xs text-red-400/70 group-hover:text-red-300/70">Thoát khỏi tài khoản</p>
                </div>
                <font-awesome-icon icon="arrow-right" class="relative text-xs group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Dropdown Animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

/* Custom Animations */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>