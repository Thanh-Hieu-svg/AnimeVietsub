<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { useToast } from 'vue-toastification'  // ✅ Thêm import toast

const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()  // ✅ Khởi tạo toast

const isMobileMenuOpen = ref(false)
const openDesktopDropdown = ref(null)
const openMobileDropdown = ref(null)
const isUserDropdownOpen = ref(false)

// Load user from storage on mount
onMounted(() => {
  authStore.restoreSession()
})

// ✅ Logout function với toast
const handleLogout = () => {
  authStore.logout()
  isUserDropdownOpen.value = false
  
  // ✅ Hiển thị toast thông báo
  toast.success('Đăng xuất thành công!')
  
  // ✅ Redirect sau 500ms
  setTimeout(() => {
    router.push('/')
  }, 500)
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

        <!-- Desktop Navigation - Căn giữa -->
        <div class="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          <router-link 
            to="/" 
            class="text-gray-300 hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-colors duration-300"
          >
            TRANG CHỦ
          </router-link>
          
          <!-- Thể Loại Dropdown -->
          <div class="relative">
            <button 
              @click="toggleDesktopDropdown('genre')" 
              class="text-gray-300 hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-colors duration-300 flex items-center gap-1.5"
            >
              THỂ LOẠI
              <font-awesome-icon 
                :icon="openDesktopDropdown === 'genre' ? 'chevron-up' : 'chevron-down'" 
                class="text-xs transition-transform duration-300" 
              />
            </button>
            <transition name="slide-down">
              <div 
                v-if="openDesktopDropdown === 'genre'" 
                class="absolute left-0 mt-3 w-48 bg-[#2a2a2a] rounded-xl shadow-2xl border border-gray-700/50 py-2 z-50"
              >
                <a href="#" class="block px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] hover:pl-5 transition-all duration-300">Hành Động</a>
                <a href="#" class="block px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] hover:pl-5 transition-all duration-300">Hài</a>
                <a href="#" class="block px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] hover:pl-5 transition-all duration-300">Tình Cảm</a>
                <a href="#" class="block px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] hover:pl-5 transition-all duration-300">Kinh Dị</a>
              </div>
            </transition>
          </div>

          <!-- Mùa Phim Dropdown -->
          <div class="relative">
            <button 
              @click="toggleDesktopDropdown('season')" 
              class="text-gray-300 hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-colors duration-300 flex items-center gap-1.5"
            >
              MÙA PHIM
              <font-awesome-icon 
                :icon="openDesktopDropdown === 'season' ? 'chevron-up' : 'chevron-down'" 
                class="text-xs transition-transform duration-300" 
              />
            </button>
            <transition name="slide-down">
              <div 
                v-if="openDesktopDropdown === 'season'" 
                class="absolute left-0 mt-3 w-48 bg-[#2a2a2a] rounded-xl shadow-2xl border border-gray-700/50 py-2 z-50"
              >
                <a href="#" class="block px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] hover:pl-5 transition-all duration-300">Mùa Đông</a>
                <a href="#" class="block px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] hover:pl-5 transition-all duration-300">Mùa Xuân</a>
                <a href="#" class="block px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] hover:pl-5 transition-all duration-300">Mùa Hè</a>
                <a href="#" class="block px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] hover:pl-5 transition-all duration-300">Mùa Thu</a>
              </div>
            </transition>
          </div>

          <router-link 
            to="/thu-vien" 
            class="text-gray-300 hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-colors duration-300"
          >
            THƯ VIỆN
          </router-link>
          
          <router-link 
            to="/lich-chieu" 
            class="text-gray-300 hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-colors duration-300"
          >
            LỊCH CHIẾU
          </router-link>
        </div>

        <!-- Right Side - Login/Avatar -->
        <div class="hidden lg:flex items-center shrink-0">
          <!-- Login Button / User Avatar -->
          <div v-if="!authStore.isAuthenticated">
            <router-link 
              to="/auth" 
              class="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
            >
              ĐĂNG NHẬP
            </router-link>
          </div>
          
          <div v-else class="relative">
            <button 
              @click="toggleUserDropdown" 
              class="w-10 h-10 rounded-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black font-black text-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-[#b8e62e]/50"
            >
              {{ authStore.avatarLetter }}
            </button>
            <transition name="slide-down">
              <div 
                v-if="isUserDropdownOpen" 
                class="absolute right-0 mt-3 w-56 bg-[#2a2a2a] rounded-xl shadow-2xl border border-gray-700/50 py-2 z-50"
              >
                <div class="px-4 py-3 border-b border-gray-700/50">
                  <p class="text-white font-bold text-sm truncate">{{ authStore.user.username }}</p>
                  <p class="text-gray-400 text-xs truncate">{{ authStore.user.email }}</p>
                </div>
                <router-link 
                  to="/profile" 
                  class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] transition-all duration-300"
                >
                  <font-awesome-icon icon="user" class="text-sm w-4" />
                  Trang cá nhân
                </router-link>
                <router-link 
                  to="/favorites" 
                  class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] transition-all duration-300"
                >
                  <font-awesome-icon icon="heart" class="text-sm w-4" />
                  Yêu thích
                </router-link>
                <router-link 
                  to="/history" 
                  class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] transition-all duration-300"
                >
                  <font-awesome-icon icon="clock" class="text-sm w-4" />
                  Lịch sử
                </router-link>
                <router-link 
                  v-if="authStore.isAdmin" 
                  to="/admin" 
                  class="flex items-center gap-3 px-4 py-2.5 text-[#b8e62e] text-sm hover:bg-[#3a3a3a] transition-all duration-300"
                >
                  <font-awesome-icon icon="shield" class="text-sm w-4" />
                  Quản trị
                </router-link>
                <div class="border-t border-gray-700/50 mt-2 pt-2">
                  <button 
                    @click="handleLogout" 
                    class="flex items-center gap-3 px-4 py-2.5 text-red-400 hover:text-red-300 hover:bg-[#3a3a3a] text-sm transition-all duration-300 w-full text-left"
                  >
                    <font-awesome-icon icon="sign-out-alt" class="text-sm w-4" />
                    Đăng xuất
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
            class="block px-4 py-3 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg animate-slide-in-left"
          >
            TRANG CHỦ
          </router-link>

          <!-- Mobile Thể Loại -->
          <div class="animate-slide-in-left" style="animation-delay: 0.1s">
            <button 
              @click="toggleMobileDropdown('genre')" 
              class="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg"
            >
              <span>THỂ LOẠI</span>
              <font-awesome-icon 
                :icon="openMobileDropdown === 'genre' ? 'chevron-up' : 'chevron-down'" 
                class="text-xs transition-transform duration-300" 
              />
            </button>
            <transition name="slide-down">
              <div v-if="openMobileDropdown === 'genre'" class="pl-4 mt-1 space-y-1">
                <a href="#" class="block px-4 py-2.5 text-gray-400 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg animate-fade-in">Hành Động</a>
                <a href="#" class="block px-4 py-2.5 text-gray-400 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg animate-fade-in" style="animation-delay: 0.05s">Hài</a>
                <a href="#" class="block px-4 py-2.5 text-gray-400 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg animate-fade-in" style="animation-delay: 0.1s">Tình Cảm</a>
                <a href="#" class="block px-4 py-2.5 text-gray-400 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg animate-fade-in" style="animation-delay: 0.15s">Kinh Dị</a>
              </div>
            </transition>
          </div>

          <!-- Mobile Mùa Phim -->
          <div class="animate-slide-in-left" style="animation-delay: 0.2s">
            <button 
              @click="toggleMobileDropdown('season')" 
              class="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg"
            >
              <span>MÙA PHIM</span>
              <font-awesome-icon 
                :icon="openMobileDropdown === 'season' ? 'chevron-up' : 'chevron-down'" 
                class="text-xs transition-transform duration-300" 
              />
            </button>
            <transition name="slide-down">
              <div v-if="openMobileDropdown === 'season'" class="pl-4 mt-1 space-y-1">
                <a href="#" class="block px-4 py-2.5 text-gray-400 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg animate-fade-in">Mùa Đông</a>
                <a href="#" class="block px-4 py-2.5 text-gray-400 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg animate-fade-in" style="animation-delay: 0.05s">Mùa Xuân</a>
                <a href="#" class="block px-4 py-2.5 text-gray-400 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg animate-fade-in" style="animation-delay: 0.1s">Mùa Hè</a>
                <a href="#" class="block px-4 py-2.5 text-gray-400 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg animate-fade-in" style="animation-delay: 0.15s">Mùa Thu</a>
              </div>
            </transition>
          </div>

          <router-link 
            to="/thu-vien" 
            class="block px-4 py-3 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg animate-slide-in-left" 
            style="animation-delay: 0.3s"
          >
            THƯ VIỆN
          </router-link>
          
          <router-link 
            to="/lich-chieu" 
            class="block px-4 py-3 text-gray-300 hover:bg-[#2a2a2a] hover:text-[#b8e62e] font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg animate-slide-in-left" 
            style="animation-delay: 0.35s"
          >
            LỊCH CHIẾU
          </router-link>

          <!-- Mobile Login / User Info -->
          <div v-if="!authStore.isAuthenticated" class="px-4 pt-2 animate-slide-in-left" style="animation-delay: 0.4s">
            <router-link 
              to="/auth" 
              class="block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-6 py-3 rounded-lg font-bold text-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95"
            >
              ĐĂNG NHẬP
            </router-link>
          </div>
          
          <div v-else class="border-t border-gray-700/50 pt-4 mt-4 animate-slide-in-left" style="animation-delay: 0.4s">
            <div class="flex items-center gap-3 px-4 py-3 mb-2">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black font-black text-xl flex items-center justify-center shrink-0">
                {{ authStore.avatarLetter }}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-white font-bold text-sm truncate">{{ authStore.user.username }}</p>
                <p class="text-gray-400 text-xs truncate">{{ authStore.user.email }}</p>
              </div>
            </div>
            <div class="space-y-1">
              <router-link 
                to="/profile" 
                class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg"
              >
                <font-awesome-icon icon="user" class="text-sm w-4" />
                Trang cá nhân
              </router-link>
              <router-link 
                to="/favorites" 
                class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg"
              >
                <font-awesome-icon icon="heart" class="text-sm w-4" />
                Yêu thích
              </router-link>
              <router-link 
                to="/history" 
                class="flex items-center gap-3 px-4 py-2.5 text-gray-300 text-sm hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-300 rounded-lg"
              >
                <font-awesome-icon icon="clock" class="text-sm w-4" />
                Lịch sử
              </router-link>
              <router-link 
                v-if="authStore.isAdmin" 
                to="/admin" 
                class="flex items-center gap-3 px-4 py-2.5 text-[#b8e62e] text-sm hover:bg-[#2a2a2a] transition-all duration-300 rounded-lg"
              >
                <font-awesome-icon icon="shield" class="text-sm w-4" />
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
/* Animations */
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

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-in-left {
  animation: slide-in-left 0.3s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

/* Transition for dropdowns */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>