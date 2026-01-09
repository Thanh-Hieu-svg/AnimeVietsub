<script setup>
import { ref } from 'vue'

// Admin profile data
const profile = ref({
  id: 1,
  username: 'admin',
  email: 'admin@animevsub.com',
  fullName: 'Nguyễn Văn Admin',
  role: 'Super Admin',
  avatar: 'https://ui-avatars.com/api/?name=Admin&background=b8e62e&color=000&size=200',
  phone: '0123456789',
  bio: 'Quản trị viên cấp cao của AnimeVsub',
  joinDate: '2024-01-01',
  lastLogin: '2024-01-20 10:30:00',
  totalLogins: 1234,
  ipAddress: '123.456.789.0'
})

// Form data
const profileForm = ref({
  fullName: profile.value.fullName,
  email: profile.value.email,
  phone: profile.value.phone,
  bio: profile.value.bio
})

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// Stats
const stats = ref({
  totalAnime: 450,
  totalUsers: 125000,
  totalComments: 8500,
  totalViews: 2450000
})

// Activities
const recentActivities = ref([
  {
    id: 1,
    action: 'Thêm anime mới',
    target: 'Spy x Family Season 3',
    time: '2 giờ trước',
    icon: 'plus-circle',
    color: 'text-green-400',
    bg: 'bg-green-500/20'
  },
  {
    id: 2,
    action: 'Duyệt bình luận',
    target: '15 bình luận',
    time: '5 giờ trước',
    icon: 'check-circle',
    color: 'text-blue-400',
    bg: 'bg-blue-500/20'
  },
  {
    id: 3,
    action: 'Xóa người dùng',
    target: 'user@example.com',
    time: '1 ngày trước',
    icon: 'trash',
    color: 'text-red-400',
    bg: 'bg-red-500/20'
  },
  {
    id: 4,
    action: 'Cập nhật lịch chiếu',
    target: 'Jujutsu Kaisen - Tập 8',
    time: '2 ngày trước',
    icon: 'calendar-alt',
    color: 'text-purple-400',
    bg: 'bg-purple-500/20'
  }
])

// Active tab
const activeTab = ref('profile')

// Avatar upload
const avatarInput = ref(null)
const previewAvatar = ref(profile.value.avatar)

const handleAvatarClick = () => {
  avatarInput.value?.click()
}

const handleAvatarChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      previewAvatar.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// Actions
const updateProfile = () => {
  alert('Đã cập nhật thông tin!')
}

const changePassword = () => {
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    alert('Mật khẩu xác nhận không khớp!')
    return
  }
  alert('Đã đổi mật khẩu!')
  passwordForm.value = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  }
}

const enable2FA = () => {
  alert('Đang kích hoạt xác thực 2 yếu tố...')
}

const downloadData = () => {
  alert('Đang tải dữ liệu...')
}
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between animate-fade-in">
      <div>
        <h1 class="text-3xl font-black text-white flex items-center gap-3">
          <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center animate-pulse-slow">
            <font-awesome-icon icon="user-circle" class="text-[#b8e62e]" />
          </div>
          Hồ Sơ Cá Nhân
        </h1>
        <p class="text-gray-400 mt-1">Quản lý thông tin và cài đặt tài khoản</p>
      </div>
    </div>

    <!-- Profile Header Card -->
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl overflow-hidden shadow-xl animate-fade-in" style="animation-delay: 0.1s">
      <div class="h-32 bg-gradient-to-r from-[#b8e62e]/20 via-[#a0d020]/10 to-[#b8e62e]/20"></div>
      <div class="px-6 pb-6">
        <div class="flex flex-col md:flex-row gap-6 -mt-16">
          <!-- Avatar -->
          <div class="relative group">
            <img 
              :src="previewAvatar" 
              alt="Avatar" 
              class="w-32 h-32 rounded-xl object-cover ring-4 ring-[#0f1416] shadow-xl"
            />
            <button
              @click="handleAvatarClick"
              class="absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <font-awesome-icon icon="camera" class="text-white text-2xl" />
            </button>
            <input
              ref="avatarInput"
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleAvatarChange"
            />
          </div>

          <!-- Info -->
          <div class="flex-1 mt-16 md:mt-0">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 class="text-2xl font-black text-white flex items-center gap-2">
                  {{ profile.fullName }}
                  <span class="px-3 py-1 bg-[#b8e62e]/20 text-[#b8e62e] rounded-lg text-sm font-bold">
                    {{ profile.role }}
                  </span>
                </h2>
                <p class="text-gray-400 mt-1">@{{ profile.username }}</p>
                <p class="text-sm text-gray-500 mt-2">{{ profile.bio }}</p>
              </div>
              <button
                @click="downloadData"
                class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:border-[#b8e62e]/50 hover:scale-105 transition-all flex items-center gap-2 shadow-xl"
              >
                <font-awesome-icon icon="download" />
                <span>Tải dữ liệu</span>
              </button>
            </div>

            <!-- Stats Row -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div class="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-all">
                <p class="text-gray-400 text-sm">Anime đã thêm</p>
                <p class="text-2xl font-black text-[#b8e62e] mt-1">{{ stats.totalAnime }}</p>
              </div>
              <div class="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-all">
                <p class="text-gray-400 text-sm">Người dùng</p>
                <p class="text-2xl font-black text-blue-400 mt-1">{{ (stats.totalUsers / 1000).toFixed(1) }}K</p>
              </div>
              <div class="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-all">
                <p class="text-gray-400 text-sm">Bình luận</p>
                <p class="text-2xl font-black text-green-400 mt-1">{{ (stats.totalComments / 1000).toFixed(1) }}K</p>
              </div>
              <div class="bg-black/20 rounded-lg p-4 hover:bg-black/30 transition-all">
                <p class="text-gray-400 text-sm">Lượt xem</p>
                <p class="text-2xl font-black text-purple-400 mt-1">{{ (stats.totalViews / 1000000).toFixed(1) }}M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs & Content -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <!-- Sidebar Tabs -->
      <div class="lg:col-span-1">
        <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-4 shadow-xl sticky top-6">
          <div class="space-y-2">
            <button
              @click="activeTab = 'profile'"
              class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300"
              :class="activeTab === 'profile' 
                ? 'bg-[#b8e62e]/20 text-[#b8e62e] border border-[#b8e62e]/30 shadow-lg shadow-[#b8e62e]/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'"
            >
              <font-awesome-icon icon="user" class="w-5 h-5" />
              <span class="font-semibold">Thông tin</span>
            </button>
            <button
              @click="activeTab = 'password'"
              class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300"
              :class="activeTab === 'password' 
                ? 'bg-[#b8e62e]/20 text-[#b8e62e] border border-[#b8e62e]/30 shadow-lg shadow-[#b8e62e]/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'"
            >
              <font-awesome-icon icon="lock" class="w-5 h-5" />
              <span class="font-semibold">Mật khẩu</span>
            </button>
            <button
              @click="activeTab = 'security'"
              class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300"
              :class="activeTab === 'security' 
                ? 'bg-[#b8e62e]/20 text-[#b8e62e] border border-[#b8e62e]/30 shadow-lg shadow-[#b8e62e]/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'"
            >
              <font-awesome-icon icon="shield-alt" class="w-5 h-5" />
              <span class="font-semibold">Bảo mật</span>
            </button>
            <button
              @click="activeTab = 'activity'"
              class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300"
              :class="activeTab === 'activity' 
                ? 'bg-[#b8e62e]/20 text-[#b8e62e] border border-[#b8e62e]/30 shadow-lg shadow-[#b8e62e]/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'"
            >
              <font-awesome-icon icon="history" class="w-5 h-5" />
              <span class="font-semibold">Hoạt động</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="lg:col-span-3">
        <!-- Profile Tab -->
        <div v-show="activeTab === 'profile'" class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <font-awesome-icon icon="user" class="text-[#b8e62e]" />
            Chỉnh sửa thông tin
          </h2>
          <form @submit.prevent="updateProfile" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-400 mb-2">Họ tên</label>
                <input
                  v-model="profileForm.fullName"
                  type="text"
                  class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-400 mb-2">Email</label>
                <input
                  v-model="profileForm.email"
                  type="email"
                  class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-400 mb-2">Số điện thoại</label>
              <input
                v-model="profileForm.phone"
                type="tel"
                class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-400 mb-2">Tiểu sử</label>
              <textarea
                v-model="profileForm.bio"
                rows="4"
                class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 resize-none focus:shadow-lg focus:shadow-[#b8e62e]/20"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black px-6 py-3 rounded-lg font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/50"
            >
              Cập nhật thông tin
            </button>
          </form>
        </div>

        <!-- Password Tab -->
        <div v-show="activeTab === 'password'" class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <font-awesome-icon icon="lock" class="text-[#b8e62e]" />
            Đổi mật khẩu
          </h2>
          <form @submit.prevent="changePassword" class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-400 mb-2">Mật khẩu hiện tại</label>
              <input
                v-model="passwordForm.currentPassword"
                type="password"
                class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-400 mb-2">Mật khẩu mới</label>
              <input
                v-model="passwordForm.newPassword"
                type="password"
                class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-400 mb-2">Xác nhận mật khẩu mới</label>
              <input
                v-model="passwordForm.confirmPassword"
                type="password"
                class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black px-6 py-3 rounded-lg font-bold hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/50"
            >
              Đổi mật khẩu
            </button>
          </form>
        </div>

        <!-- Security Tab -->
        <div v-show="activeTab === 'security'" class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <font-awesome-icon icon="shield-alt" class="text-[#b8e62e]" />
            Bảo mật tài khoản
          </h2>

          <div class="space-y-4">
            <!-- 2FA -->
            <div class="bg-black/20 rounded-lg p-6 border border-gray-800 hover:border-[#b8e62e]/30 transition-all">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h3 class="text-white font-bold mb-2 flex items-center gap-2">
                    <font-awesome-icon icon="mobile-alt" class="text-[#b8e62e]" />
                    Xác thực 2 yếu tố
                  </h3>
                  <p class="text-sm text-gray-400">Thêm lớp bảo mật bằng mã OTP từ ứng dụng xác thực</p>
                </div>
                <button
                  @click="enable2FA"
                  class="bg-[#b8e62e]/20 hover:bg-[#b8e62e]/30 text-[#b8e62e] px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105"
                >
                  Kích hoạt
                </button>
              </div>
            </div>

            <!-- Login Info -->
            <div class="bg-black/20 rounded-lg p-6 border border-gray-800">
              <h3 class="text-white font-bold mb-4">Thông tin đăng nhập</h3>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-400">Lần đăng nhập cuối:</span>
                  <span class="text-white font-semibold">{{ profile.lastLogin }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Địa chỉ IP:</span>
                  <span class="text-white font-semibold">{{ profile.ipAddress }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Tổng số lần đăng nhập:</span>
                  <span class="text-[#b8e62e] font-bold">{{ profile.totalLogins }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-400">Ngày tạo tài khoản:</span>
                  <span class="text-white font-semibold">{{ profile.joinDate }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Activity Tab -->
        <div v-show="activeTab === 'activity'" class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl animate-fade-in">
          <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <font-awesome-icon icon="history" class="text-[#b8e62e]" />
            Hoạt động gần đây
          </h2>

          <div class="space-y-3">
            <div 
              v-for="(activity, index) in recentActivities" 
              :key="activity.id"
              class="flex items-center gap-4 p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300 border border-gray-800 hover:border-[#b8e62e]/30 animate-slide-in-left"
              :style="{ animationDelay: `${index * 0.05}s` }"
            >
              <div 
                class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                :class="activity.bg"
              >
                <font-awesome-icon :icon="activity.icon" :class="activity.color" class="text-xl" />
              </div>
              <div class="flex-1">
                <p class="text-white font-semibold">{{ activity.action }}</p>
                <p class="text-sm text-gray-400">{{ activity.target }}</p>
              </div>
              <span class="text-xs text-gray-500">{{ activity.time }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* Animations */
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}
</style>