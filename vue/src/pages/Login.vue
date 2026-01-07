<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle'])

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    console.log('Login:', { email: email.value, password: password.value })
  }, 1500)
}

const loginWithGoogle = () => console.log('Google')
const loginWithFacebook = () => console.log('Facebook')
</script>

<template>
  <div class="relative">
    <!-- Animated Border -->
    <div class="absolute -inset-1 bg-gradient-to-r from-[#b8e62e] via-[#a0d020] to-[#b8e62e] rounded-3xl opacity-75 blur-sm animate-border-pulse"></div>
    
    <!-- Main Card -->
    <div class="relative bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#0f1416] rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50 backdrop-blur-xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        <!-- Left: Welcome -->
        <div class="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-[#b8e62e]/15 via-[#b8e62e]/8 to-transparent relative overflow-hidden">
          <div class="absolute top-10 left-10 w-24 h-24 border-2 border-[#b8e62e]/20 rounded-full animate-spin-slow"></div>
          <div class="absolute bottom-10 right-10 w-32 h-32 border-2 border-[#b8e62e]/15 rounded-full animate-spin-slower"></div>

          <div class="relative z-10 space-y-8">
            <img src="../assets/images/logo.png" alt="Logo" class="h-16 mb-6" />
            
            <div class="space-y-4">
              <h1 class="text-5xl font-black text-white leading-tight">
                Chào mừng<br/>trở lại! 👋
              </h1>
              <p class="text-xl text-gray-300 font-medium">Tiếp tục hành trình anime của bạn</p>
            </div>

            <div class="space-y-5 pt-4">
              <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all cursor-pointer">
                <div class="w-14 h-14 rounded-2xl bg-[#b8e62e]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <font-awesome-icon icon="film" class="text-[#b8e62e] text-2xl" />
                </div>
                <div>
                  <p class="font-black text-white text-lg">10,000+ Anime</p>
                  <p class="text-sm text-gray-400">Kho phim khổng lồ</p>
                </div>
              </div>

              <div class="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all cursor-pointer">
                <div class="w-14 h-14 rounded-2xl bg-[#b8e62e]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <font-awesome-icon icon="heart" class="text-[#b8e62e] text-2xl" />
                </div>
                <div>
                  <p class="font-black text-white text-lg">Miễn phí 100%</p>
                  <p class="text-sm text-gray-400">Không giới hạn</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="flex flex-col justify-center p-8 sm:p-12">
          <div class="w-full max-w-md mx-auto space-y-6">
            
            <!-- Header -->
            <div class="text-center lg:text-left space-y-2">
              <h2 class="text-4xl font-black text-white">Đăng nhập</h2>
              <p class="text-gray-400 text-base">Chào mừng bạn quay trở lại! 🎬</p>
            </div>

            <!-- Form Only -->
            <form @submit.prevent="handleLogin" class="space-y-4">
              <div>
                <label class="block text-sm font-bold text-gray-300 mb-2">Email</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <font-awesome-icon icon="envelope" class="text-gray-500" />
                  </div>
                  <input v-model="email" type="email" required placeholder="example@gmail.com" class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-bold text-gray-300 mb-2">Mật khẩu</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <font-awesome-icon icon="shield" class="text-gray-500" />
                  </div>
                  <input v-model="password" type="password" required placeholder="Nhập mật khẩu" class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500" />
                </div>
              </div>

              <div class="flex items-center justify-between text-sm">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <input v-model="rememberMe" type="checkbox" class="w-5 h-5 rounded border-gray-700 bg-[#2a2a2a] text-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 cursor-pointer" />
                  <span class="text-gray-400 group-hover:text-gray-300 font-semibold">Ghi nhớ đăng nhập</span>
                </label>
                <a href="#" class="text-[#b8e62e] hover:text-[#a0d020] font-bold underline">Quên mật khẩu?</a>
              </div>

              <button type="submit" :disabled="isLoading" class="w-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] hover:from-[#a0d020] hover:to-[#b8e62e] disabled:from-gray-700 disabled:to-gray-700 text-black disabled:text-gray-500 font-black py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#b8e62e]/50 active:scale-95 flex items-center justify-center gap-2 text-lg">
                <font-awesome-icon v-if="isLoading" icon="clock" class="animate-spin" />
                <span>{{ isLoading ? 'Đang đăng nhập...' : 'Đăng nhập ngay' }}</span>
              </button>
            </form>

            <div class="relative">
              <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-700"></div></div>
              <div class="relative flex justify-center text-sm"><span class="px-4 bg-[#1a1a1a] text-gray-500 font-semibold">Hoặc tiếp tục với</span></div>
            </div>

            <!-- Social Buttons -->
            <div class="grid grid-cols-2 gap-3">
              <button @click="loginWithGoogle" class="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                <svg class="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>

              <button @click="loginWithFacebook" class="flex items-center justify-center gap-2 bg-[#4267B2] hover:bg-[#365899] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                <font-awesome-icon :icon="['fab', 'facebook']" class="text-xl" />
                Facebook
              </button>
            </div>

            <div class="text-center pt-2">
              <p class="text-sm text-gray-400">
                Chưa có tài khoản?
                <button @click="emit('toggle')" class="text-[#b8e62e] hover:text-[#a0d020] font-black ml-1 underline">
                  Đăng ký ngay
                </button>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animated Border Pulse */
@keyframes border-pulse {
  0%, 100% {
    opacity: 0.75;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.02);
  }
}

.animate-border-pulse {
  animation: border-pulse 3s ease-in-out infinite;
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin-slower {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-spin-slower {
  animation: spin-slower 30s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>