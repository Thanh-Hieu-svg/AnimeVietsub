<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRoute } from 'vue-router'

const { logout, isAuthenticated, isAdmin, user, avatarLetter, restoreSession } = useAuth()
const route = useRoute()

const isMobileMenuOpen = ref(false)
const openDesktopDropdown = ref(null)
const openMobileDropdown = ref(null)
const isUserDropdownOpen = ref(false)

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

// ✅ Check if route is active
const isRouteActive = (path) => {
  return route.path === path
}

onMounted(() => {
  restoreSession()
  document.addEventListener('click', handleClickOutside)
})

const handleLogout = () => {
  isUserDropdownOpen.value = false
  logout()
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleDesktopDropdown = (dropdown) => {
  openDesktopDropdown.value = openDesktopDropdown.value === dropdown ? null : dropdown
}

const toggleMobileDropdown = (dropdown) => {
  openMobileDropdown.value = openMobileDropdown.value === dropdown ? null : dropdown
}

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.user-dropdown-container')) {
    isUserDropdownOpen.value = false
  }
  if (!event.target.closest('.desktop-dropdown')) {
    openDesktopDropdown.value = null
  }
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-gray-800/50">
    <nav class="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <!-- Logo -->
        <router-link 
          to="/" 
          class="flex items-center space-x-2 group shrink-0"
        >
          <img 
            src="@/assets/images/logo.png"
            alt="Logo" 
            class="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
          />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          <!-- ✅ Trang Chủ -->
          <router-link 
            to="/" 
            :class="[
              'relative font-semibold text-sm tracking-wide transition-all duration-300 group px-2 py-1',
              isRouteActive('/') 
                ? 'text-[#b8e62e]' 
                : 'text-gray-300 hover:text-[#b8e62e]'
            ]"
          >
            TRANG CHỦ
            <span 
              :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] transition-all duration-300',
                isRouteActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
              ]"
            ></span>
          </router-link>
          
          <!-- ✅ Thể Loại Dropdown -->
          <div class="relative desktop-dropdown">
            <button 
              @click="toggleDesktopDropdown('genre')" 
              class="relative text-gray-300 hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-1.5 group px-2 py-1"
            >
              THỂ LOẠI
              <font-awesome-icon 
                :icon="openDesktopDropdown === 'genre' ? 'chevron-up' : 'chevron-down'" 
                class="text-xs transition-all duration-300"
                :class="{ 'rotate-180': openDesktopDropdown === 'genre' }"
              />
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] group-hover:w-full transition-all duration-300"></span>
            </button>
            <transition name="dropdown">
              <div 
                v-if="openDesktopDropdown === 'genre'" 
                class="absolute left-0 mt-3 w-56 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 py-2 z-50 overflow-hidden"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-[#b8e62e]/5 via-transparent to-transparent opacity-50"></div>
                <a href="#" class="relative flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] hover:pl-5 transition-all duration-300 group">
                  <div class="w-8 h-8 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 flex items-center justify-center transition-all duration-300 shrink-0">
                    <font-awesome-icon icon="fire" class="text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span class="font-medium">Hành Động</span>
                </a>
                <a href="#" class="relative flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] hover:pl-5 transition-all duration-300 group">
                  <div class="w-8 h-8 rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20 flex items-center justify-center transition-all duration-300 shrink-0">
                    <font-awesome-icon icon="heart" class="text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span class="font-medium">Tình Cảm</span>
                </a>
                <a href="#" class="relative flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] hover:pl-5 transition-all duration-300 group">
                  <div class="w-8 h-8 rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 flex items-center justify-center transition-all duration-300 shrink-0">
                    <font-awesome-icon icon="star" class="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span class="font-medium">Hài</span>
                </a>
                <a href="#" class="relative flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] hover:pl-5 transition-all duration-300 group">
                  <div class="w-8 h-8 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 flex items-center justify-center transition-all duration-300 shrink-0">
                    <font-awesome-icon icon="trophy" class="text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span class="font-medium">Thể Thao</span>
                </a>
              </div>
            </transition>
          </div>

          <!-- ✅ Mùa Phim Dropdown -->
          <div class="relative desktop-dropdown">
            <button 
              @click="toggleDesktopDropdown('season')" 
              class="relative text-gray-300 hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-1.5 group px-2 py-1"
            >
              MÙA PHIM
              <font-awesome-icon 
                :icon="openDesktopDropdown === 'season' ? 'chevron-up' : 'chevron-down'" 
                class="text-xs transition-all duration-300"
                :class="{ 'rotate-180': openDesktopDropdown === 'season' }"
              />
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] group-hover:w-full transition-all duration-300"></span>
            </button>
            <transition name="dropdown">
              <div 
                v-if="openDesktopDropdown === 'season'" 
                class="absolute left-0 mt-3 w-56 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 py-2 z-50"
              >
                <a href="#" class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] hover:pl-5 transition-all duration-300 group">
                  <span class="text-2xl shrink-0">❄️</span>
                  <span class="font-medium">Mùa Đông</span>
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] hover:pl-5 transition-all duration-300 group">
                  <span class="text-2xl shrink-0">🌸</span>
                  <span class="font-medium">Mùa Xuân</span>
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] hover:pl-5 transition-all duration-300 group">
                  <span class="text-2xl shrink-0">☀️</span>
                  <span class="font-medium">Mùa Hè</span>
                </a>
                <a href="#" class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] hover:pl-5 transition-all duration-300 group">
                  <span class="text-2xl shrink-0">🍂</span>
                  <span class="font-medium">Mùa Thu</span>
                </a>
              </div>
            </transition>
          </div>

          <!-- ✅ Thư Viện -->
          <router-link 
            to="/thu-vien" 
            :class="[
              'relative font-semibold text-sm tracking-wide transition-all duration-300 group px-2 py-1',
              isRouteActive('/thu-vien') 
                ? 'text-[#b8e62e]' 
                : 'text-gray-300 hover:text-[#b8e62e]'
            ]"
          >
            THƯ VIỆN
            <span 
              :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] transition-all duration-300',
                isRouteActive('/thu-vien') ? 'w-full' : 'w-0 group-hover:w-full'
              ]"
            ></span>
          </router-link>
          
          <!-- ✅ Lịch Chiếu -->
          <router-link 
            to="/lich-chieu" 
            :class="[
              'relative font-semibold text-sm tracking-wide transition-all duration-300 group px-2 py-1',
              isRouteActive('/lich-chieu') 
                ? 'text-[#b8e62e]' 
                : 'text-gray-300 hover:text-[#b8e62e]'
            ]"
          >
            LỊCH CHIẾU
            <span 
              :class="[
                'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] transition-all duration-300',
                isRouteActive('/lich-chieu') ? 'w-full' : 'w-0 group-hover:w-full'
              ]"
            ></span>
          </router-link>
        </div>

        <!-- ✅ Right Side - Login/Avatar -->
        <div class="hidden lg:flex items-center shrink-0">
          <!-- Login Button -->
          <div v-if="!isAuthenticated">
            <router-link 
              to="/auth" 
              class="relative group overflow-hidden bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
            >
              <span class="relative z-10 flex items-center gap-2">
                <font-awesome-icon icon="user" class="text-sm" />
                ĐĂNG NHẬP
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </router-link>
          </div>
          
          <!-- ✅ User Avatar Card -->
          <div v-else class="relative user-dropdown-container">
            <button 
              @click="toggleUserDropdown" 
              class="group flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-[#2a2a2a]/80 transition-all duration-300 border border-transparent hover:border-gray-700/50"
            >
              <!-- Avatar -->
              <div class="relative">
                <div 
                  :class="[
                    'w-9 h-9 rounded-full bg-gradient-to-br',
                    avatarStyle,
                    'text-white font-black text-base flex items-center justify-center',
                    'transition-all duration-500',
                    'group-hover:scale-110 group-hover:rotate-12',
                    'shadow-lg shadow-black/50',
                    'ring-2 ring-gray-700/50 group-hover:ring-[#b8e62e]',
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
              
              <!-- Username + Email Section -->
              <div class="hidden xl:flex items-center gap-2.5">
                <div class="text-left">
                  <!-- Username -->
                  <p class="text-white font-bold text-sm leading-none group-hover:text-[#b8e62e] transition-colors duration-300 mb-0.5">
                    {{ user?.username }}
                  </p>
                  <!-- ✅ Email (NEW) -->
                  <p class="text-gray-500 text-[11px] leading-none truncate max-w-[110px] group-hover:text-gray-400 transition-colors duration-300">
                    {{ user?.email }}
                  </p>
                </div>
                
                <!-- Chevron Icon -->
                <div class="flex items-center">
                  <font-awesome-icon 
                    icon="chevron-down" 
                    class="text-gray-500 text-[10px] transition-all duration-300 group-hover:text-[#b8e62e]"
                    :class="{ 'rotate-180': isUserDropdownOpen }"
                  />
                </div>
              </div>
            </button>

            <!-- ✅ Dropdown Menu (giữ nguyên) -->
            <transition name="dropdown">
              <div 
                v-if="isUserDropdownOpen" 
                class="absolute right-0 mt-2 w-72 bg-gradient-to-br from-[#2a2a2a] via-[#1f1f1f] to-[#1a1a1a] backdrop-blur-xl rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden z-50"
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
                      <p class="text-white font-bold text-base truncate mb-0.5">{{ user?.username }}</p>
                      <p class="text-gray-400 text-xs truncate mb-1.5">{{ user?.email }}</p>
                      
                      <!-- Role Badge -->
                      <span 
                        v-if="isAdmin"
                        class="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black text-[10px] font-bold rounded-full shadow-lg animate-pulse-slow"
                      >
                        <font-awesome-icon icon="shield-alt" class="text-[10px] animate-bounce-slow" />
                        ADMIN
                      </span>
                      <span 
                        v-else
                        class="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-[10px] font-bold rounded-full shadow-lg"
                      >
                        <font-awesome-icon icon="user" class="text-[10px]" />
                        USER
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Menu Items -->
                <div class="p-1.5">
                  <router-link 
                    to="/profile" 
                    @click="isUserDropdownOpen = false"
                    class="group flex items-center gap-2.5 px-3 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] transition-all duration-300 rounded-lg relative overflow-hidden"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-[#b8e62e]/0 via-[#b8e62e]/5 to-[#b8e62e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div class="relative w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-800/50 group-hover:from-[#b8e62e]/20 group-hover:to-[#b8e62e]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                      <font-awesome-icon icon="user" class="text-sm" />
                    </div>
                    <div class="relative flex-1 min-w-0">
                      <p class="font-semibold text-sm truncate">Trang cá nhân</p>
                      <p class="text-[11px] text-gray-500 group-hover:text-gray-400 truncate">Xem & chỉnh sửa thông tin</p>
                    </div>
                    <font-awesome-icon icon="chevron-right" class="relative text-[10px] text-gray-600 group-hover:text-[#b8e62e] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </router-link>

                  <router-link 
                    to="/favorites" 
                    @click="isUserDropdownOpen = false"
                    class="group flex items-center gap-2.5 px-3 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] transition-all duration-300 rounded-lg relative overflow-hidden"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-[#b8e62e]/0 via-[#b8e62e]/5 to-[#b8e62e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div class="relative w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-800/50 group-hover:from-pink-500/20 group-hover:to-red-500/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
                      <font-awesome-icon icon="heart" class="text-sm group-hover:text-pink-500 transition-colors duration-300" />
                    </div>
                    <div class="relative flex-1 min-w-0">
                      <p class="font-semibold text-sm truncate">Yêu thích</p>
                      <p class="text-[11px] text-gray-500 group-hover:text-gray-400 truncate">Anime đã lưu</p>
                    </div>
                    <font-awesome-icon icon="chevron-right" class="relative text-[10px] text-gray-600 group-hover:text-[#b8e62e] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </router-link>

                  <router-link 
                    to="/history" 
                    @click="isUserDropdownOpen = false"
                    class="group flex items-center gap-2.5 px-3 py-2.5 text-gray-300 text-sm hover:bg-[#b8e62e]/10 hover:text-[#b8e62e] transition-all duration-300 rounded-lg relative overflow-hidden"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-[#b8e62e]/0 via-[#b8e62e]/5 to-[#b8e62e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div class="relative w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700/50 to-gray-800/50 group-hover:from-blue-500/20 group-hover:to-cyan-500/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
                      <font-awesome-icon icon="clock" class="text-sm group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div class="relative flex-1 min-w-0">
                      <p class="font-semibold text-sm truncate">Lịch sử</p>
                      <p class="text-[11px] text-gray-500 group-hover:text-gray-400 truncate">Đã xem gần đây</p>
                    </div>
                    <font-awesome-icon icon="chevron-right" class="relative text-[10px] text-gray-600 group-hover:text-[#b8e62e] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </router-link>

                  <router-link 
                    v-if="isAdmin" 
                    to="/admin" 
                    @click="isUserDropdownOpen = false"
                    class="group flex items-center gap-2.5 px-3 py-2.5 text-[#b8e62e] text-sm hover:bg-[#b8e62e]/10 transition-all duration-300 rounded-lg relative overflow-hidden"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-[#b8e62e]/0 via-[#b8e62e]/10 to-[#b8e62e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div class="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#b8e62e]/20 to-[#a0d020]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                      <font-awesome-icon icon="shield-alt" class="text-sm animate-pulse-slow" />
                    </div>
                    <div class="relative flex-1 min-w-0">
                      <p class="font-semibold text-sm truncate">Quản trị</p>
                      <p class="text-[11px] text-[#b8e62e]/70 truncate">Admin Dashboard</p>
                    </div>
                    <font-awesome-icon icon="chevron-right" class="relative text-[10px] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </router-link>
                </div>

                <!-- Logout Section -->
                <div class="border-t border-gray-700/50 p-1.5">
                  <button 
                    @click="handleLogout" 
                    class="group flex items-center gap-2.5 px-3 py-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 text-sm transition-all duration-300 rounded-lg w-full relative overflow-hidden"
                  >
                    <div class="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <div class="relative w-8 h-8 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shrink-0">
                      <font-awesome-icon icon="sign-out-alt" class="text-sm" />
                    </div>
                    <div class="relative flex-1 text-left min-w-0">
                      <p class="font-semibold text-sm truncate">Đăng xuất</p>
                      <p class="text-[11px] text-red-400/70 group-hover:text-red-300/70 truncate">Thoát khỏi tài khoản</p>
                    </div>
                    <font-awesome-icon icon="arrow-right" class="relative text-[10px] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="lg:hidden p-2 text-white hover:text-[#b8e62e] transition-colors duration-300"
        >
          <font-awesome-icon 
            :icon="isMobileMenuOpen ? 'times' : 'bars'" 
            class="text-2xl" 
          />
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div 
          v-if="isMobileMenuOpen" 
          class="lg:hidden border-t border-gray-800/50 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <router-link 
            to="/" 
            @click="isMobileMenuOpen = false"
            class="block px-4 py-3 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg animate-slide-in-left"
          >
            TRANG CHỦ
          </router-link>

          <router-link 
            to="/thu-vien" 
            @click="isMobileMenuOpen = false"
            class="block px-4 py-3 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg animate-slide-in-left"
          >
            THƯ VIỆN
          </router-link>

          <router-link 
            to="/lich-chieu" 
            @click="isMobileMenuOpen = false"
            class="block px-4 py-3 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg animate-slide-in-left"
          >
            LỊCH CHIẾU
          </router-link>

          <!-- Mobile Login / User Section -->
          <div v-if="!isAuthenticated" class="px-4 pt-2">
            <router-link 
              to="/auth" 
              @click="isMobileMenuOpen = false"
              class="block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-lg font-bold text-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
            >
              <font-awesome-icon icon="user" class="mr-2" />
              ĐĂNG NHẬP
            </router-link>
          </div>

          <div v-else class="border-t border-gray-700/50 pt-4 mt-4">
            <div class="flex items-center gap-3 px-4 py-3 mb-2 bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f] rounded-xl">
              <div 
                :class="[
                  'w-14 h-14 rounded-full bg-gradient-to-br',
                  avatarStyle,
                  'text-white font-black text-2xl flex items-center justify-center',
                  'ring-2 ring-gray-700 shadow-lg shrink-0'
                ]"
              >
                <span class="drop-shadow-lg">{{ avatarLetter }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-white font-bold text-sm truncate">{{ user?.username }}</p>
                <p class="text-gray-400 text-xs truncate">{{ user?.email }}</p>
                <span 
                  v-if="isAdmin"
                  class="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black text-xs font-bold rounded-full mt-1"
                >
                  <font-awesome-icon icon="shield-alt" class="text-xs" />
                  ADMIN
                </span>
              </div>
            </div>

            <div class="space-y-1">
              <router-link 
                to="/profile" 
                @click="isMobileMenuOpen = false"
                class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg"
              >
                <font-awesome-icon icon="user" class="text-sm w-4" />
                Trang cá nhân
              </router-link>
              <router-link 
                to="/favorites" 
                @click="isMobileMenuOpen = false"
                class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg"
              >
                <font-awesome-icon icon="heart" class="text-sm w-4" />
                Yêu thích
              </router-link>
              <router-link 
                to="/history" 
                @click="isMobileMenuOpen = false"
                class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg"
              >
                <font-awesome-icon icon="clock" class="text-sm w-4" />
                Lịch sử
              </router-link>
              <router-link 
                v-if="isAdmin" 
                to="/admin" 
                @click="isMobileMenuOpen = false"
                class="flex items-center gap-3 px-4 py-2.5 text-[#b8e62e] text-sm hover:bg-[#2a2a2a] transition-all duration-300 rounded-lg"
              >
                <font-awesome-icon icon="shield-alt" class="text-sm w-4" />
                Quản trị
              </router-link>
              <button 
                @click="handleLogout" 
                class="flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-[#2a2a2a] text-sm transition-all duration-300 rounded-lg w-full text-left"
              >
                <font-awesome-icon icon="sign-out-alt" class="text-sm w-4" />
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </transition>
    </nav>
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

/* Slide Down Animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile Animations */
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.3s ease-out forwards;
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