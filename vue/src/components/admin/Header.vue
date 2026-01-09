<script setup>
import { ref } from 'vue'

defineEmits(['toggle-sidebar'])

const searchQuery = ref('')
const showNotifications = ref(false)
const showProfile = ref(false)

const notifications = [
  { id: 1, text: 'New user registered', time: '5 mins ago', unread: true },
  { id: 2, text: 'New anime uploaded', time: '1 hour ago', unread: true },
  { id: 3, text: 'Server maintenance', time: '3 hours ago', unread: false }
]

const user = {
  name: 'Admin User',
  email: 'admin@animevib.com',
  avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=b8e62e&color=000&size=200&bold=true'
}
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
      <div class="relative">
        <button
          @click="showNotifications = !showNotifications"
          class="relative p-2 hover:bg-[#b8e62e]/10 rounded-lg transition-all duration-300 group"
        >
          <font-awesome-icon icon="bell" class="text-gray-400 group-hover:text-[#b8e62e] text-xl transition-colors duration-300" />
          <span class="absolute top-1 right-1 w-2 h-2 bg-[#b8e62e] rounded-full animate-pulse"></span>
        </button>

        <!-- Notifications Dropdown -->
        <transition name="dropdown">
          <div
            v-if="showNotifications"
            class="absolute right-0 mt-2 w-80 bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-xl shadow-2xl border border-gray-800/50 py-2 backdrop-blur-xl"
          >
            <div class="px-4 py-3 border-b border-gray-800/50">
              <h3 class="font-bold text-white">Thông báo</h3>
            </div>
            <div class="max-h-96 overflow-y-auto">
              <a
                v-for="notif in notifications"
                :key="notif.id"
                href="#"
                class="flex items-start gap-3 px-4 py-3 hover:bg-[#b8e62e]/10 transition-all duration-300"
                :class="notif.unread && 'bg-[#b8e62e]/5'"
              >
                <div class="w-2 h-2 rounded-full bg-[#b8e62e] mt-2 flex-shrink-0" v-if="notif.unread"></div>
                <div class="flex-1">
                  <p class="text-sm text-gray-300 font-medium">{{ notif.text }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ notif.time }}</p>
                </div>
              </a>
            </div>
            <div class="px-4 py-3 border-t border-gray-800/50">
              <a href="#" class="text-sm text-[#b8e62e] font-semibold hover:underline">
                Xem tất cả
              </a>
            </div>
          </div>
        </transition>
      </div>

      <!-- Profile -->
      <div class="relative">
        <button
          @click="showProfile = !showProfile"
          class="flex items-center gap-3 px-3 py-2 hover:bg-[#b8e62e]/10 rounded-xl transition-all duration-300 group"
        >
          <img :src="user.avatar" alt="Avatar" class="w-8 h-8 rounded-full ring-2 ring-gray-800 group-hover:ring-[#b8e62e] transition-all duration-300" />
          <div class="hidden md:block text-left">
            <p class="text-sm font-bold text-white">{{ user.name }}</p>
            <p class="text-xs text-gray-500">{{ user.email }}</p>
          </div>
          <font-awesome-icon icon="chevron-down" class="hidden md:block text-gray-500 group-hover:text-[#b8e62e] text-xs transition-all duration-300" />
        </button>

        <!-- Profile Dropdown -->
        <transition name="dropdown">
          <div
            v-if="showProfile"
            class="absolute right-0 mt-2 w-64 bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-xl shadow-2xl border border-gray-800/50 py-2 backdrop-blur-xl"
          >
            <div class="px-4 py-3 border-b border-gray-800/50">
              <p class="font-bold text-white">{{ user.name }}</p>
              <p class="text-sm text-gray-500">{{ user.email }}</p>
            </div>
            <div class="py-2">
              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-[#b8e62e]/10 transition-all duration-300 group">
                <font-awesome-icon icon="user" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors duration-300" />
                <span class="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Hồ sơ</span>
              </a>
              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-[#b8e62e]/10 transition-all duration-300 group">
                <font-awesome-icon icon="cog" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors duration-300" />
                <span class="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Cài đặt</span>
              </a>
            </div>
            <div class="border-t border-gray-800/50 pt-2">
              <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-red-500/10 transition-all duration-300 text-red-400 hover:text-red-300 group">
                <font-awesome-icon icon="sign-out-alt" class="group-hover:scale-110 transition-transform duration-300" />
                <span class="text-sm font-semibold">Đăng xuất</span>
              </a>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>