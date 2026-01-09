<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle'])

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeTerms = ref(false)
const isLoading = ref(false)

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Mật khẩu không khớp!')
    return
  }
  if (!agreeTerms.value) {
    alert('Vui lòng đồng ý điều khoản!')
    return
  }
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    console.log('Register:', { username: username.value, email: email.value })
  }, 1500)
}

const registerWithGoogle = () => console.log('Google')
const registerWithFacebook = () => console.log('Facebook')
</script>

<template>
  <div class="relative max-w-lg mx-auto">
    <!-- Animated Border -->
    <div class="absolute -inset-1 bg-gradient-to-r from-[#b8e62e] via-[#a0d020] to-[#b8e62e] rounded-3xl opacity-75 blur-sm animate-border-pulse"></div>
    
    <!-- Main Card -->
    <div class="relative bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#0f1416] rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50 backdrop-blur-xl">
      
      <!-- Form Only -->
      <div class="flex flex-col justify-center p-8 sm:p-10">
        <div class="w-full max-w-sm mx-auto space-y-5">
          
          <!-- Logo -->
          <div class="flex justify-center animate-fade-in">
            <img src="../assets/images/logo.png" alt="Logo" class="h-10" />
          </div>

          <!-- Header -->
          <div class="text-center space-y-1.5 animate-fade-in" style="animation-delay: 0.1s">
            <h2 class="text-2xl sm:text-3xl font-black text-white">Đăng ký</h2>
            <p class="text-gray-400 text-sm">Chỉ mất 30 giây thôi! ⚡</p>
          </div>

          <!-- Social Buttons First -->
          <div class="grid grid-cols-2 gap-3 animate-fade-in" style="animation-delay: 0.2s">
            <button @click="registerWithGoogle" class="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-bold py-2.5 px-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="hidden sm:inline text-xs">Google</span>
            </button>

            <button @click="registerWithFacebook" class="flex items-center justify-center gap-2 bg-[#4267B2] hover:bg-[#365899] text-white font-bold py-2.5 px-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
              <font-awesome-icon :icon="['fab', 'facebook']" class="text-lg" />
              <span class="hidden sm:inline text-xs">Facebook</span>
            </button>
          </div>

          <!-- Divider -->
          <div class="relative animate-fade-in" style="animation-delay: 0.3s">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-700"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-3 bg-[#1a1a1a] text-gray-500 font-bold uppercase tracking-wider">Hoặc email</span>
            </div>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleRegister" class="space-y-3 animate-fade-in" style="animation-delay: 0.4s">
            <div>
              <label class="block text-xs font-bold text-gray-300 mb-1.5">Tên người dùng</label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <font-awesome-icon icon="users" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors text-sm" />
                </div>
                <input v-model="username" type="text" required placeholder="VD: animefan2024" class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-10 pr-3.5 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500 hover:border-gray-600 text-sm" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-300 mb-1.5">Email</label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <font-awesome-icon icon="envelope" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors text-sm" />
                </div>
                <input v-model="email" type="email" required placeholder="example@gmail.com" class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-10 pr-3.5 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500 hover:border-gray-600 text-sm" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-300 mb-1.5">Mật khẩu</label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <font-awesome-icon icon="shield" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors text-sm" />
                </div>
                <input v-model="password" type="password" required placeholder="Tối thiểu 8 ký tự" class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-10 pr-3.5 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500 hover:border-gray-600 text-sm" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-300 mb-1.5">Xác nhận</label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <font-awesome-icon icon="shield" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors text-sm" />
                </div>
                <input v-model="confirmPassword" type="password" required placeholder="Nhập lại mật khẩu" class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-10 pr-3.5 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500 hover:border-gray-600 text-sm" />
              </div>
            </div>

            <div class="flex items-start gap-2 bg-[#2a2a2a]/50 p-3 rounded-xl border border-gray-700/50">
              <input v-model="agreeTerms" type="checkbox" required class="w-3.5 h-3.5 rounded border-gray-700 bg-[#2a2a2a] text-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 mt-0.5 cursor-pointer" />
              <label class="text-xs text-gray-300 leading-relaxed cursor-pointer select-none">
                Đồng ý <a href="#" class="text-[#b8e62e] hover:text-[#a0d020] font-bold underline">Điều khoản</a> và <a href="#" class="text-[#b8e62e] hover:text-[#a0d020] font-bold underline">Bảo mật</a>
              </label>
            </div>

            <button type="submit" :disabled="isLoading" class="w-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] hover:from-[#a0d020] hover:to-[#b8e62e] disabled:from-gray-700 disabled:to-gray-700 text-black disabled:text-gray-500 font-black py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#b8e62e]/50 active:scale-95 flex items-center justify-center gap-2 text-sm mt-4">
              <font-awesome-icon v-if="isLoading" icon="clock" class="animate-spin" />
              <span>{{ isLoading ? 'Đang đăng ký...' : 'Đăng ký ngay' }}</span>
            </button>
          </form>

          <!-- Login Link -->
          <div class="text-center pt-1 animate-fade-in" style="animation-delay: 0.5s">
            <p class="text-xs text-gray-400">
              Đã có tài khoản?
              <button @click="emit('toggle')" class="text-[#b8e62e] hover:text-[#a0d020] font-black ml-1 underline underline-offset-2">
                Đăng nhập ngay
              </button>
            </p>
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>