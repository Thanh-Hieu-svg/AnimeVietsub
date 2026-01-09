<script setup>
import { ref } from 'vue'

const isChangingPassword = ref(false)

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const handleChangePassword = () => {
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    alert('Mật khẩu mới không khớp!')
    return
  }
  console.log('Change password:', passwordForm.value)
  isChangingPassword.value = false
  passwordForm.value = { currentPassword: '', newPassword: '', confirmPassword: '' }
}
</script>

<template>
  <div class="space-y-6 max-w-2xl">
    <div>
      <h3 class="text-xl font-black text-white mb-4">Cài đặt tài khoản</h3>
      
      <!-- Change Password -->
      <div class="bg-[#2a2a2a]/50 rounded-xl p-6 border border-gray-700/50 space-y-4 hover:border-[#b8e62e]/50 transition-all duration-300 animate-slide-up">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-white font-bold">Đổi mật khẩu</h4>
            <p class="text-gray-400 text-sm">Cập nhật mật khẩu của bạn</p>
          </div>
          <button @click="isChangingPassword = !isChangingPassword" class="text-[#b8e62e] hover:text-[#a0d020] font-bold text-sm transition-all hover:scale-110">
            {{ isChangingPassword ? 'Hủy' : 'Đổi' }}
          </button>
        </div>

        <transition name="slide-down">
          <div v-if="isChangingPassword" class="space-y-3 pt-4 border-t border-gray-700">
            <input v-model="passwordForm.currentPassword" type="password" placeholder="Mật khẩu hiện tại" class="input-field" />
            <input v-model="passwordForm.newPassword" type="password" placeholder="Mật khẩu mới" class="input-field" />
            <input v-model="passwordForm.confirmPassword" type="password" placeholder="Xác nhận mật khẩu mới" class="input-field" />
            <button @click="handleChangePassword" class="w-full bg-[#b8e62e] hover:bg-[#a0d020] text-black font-bold py-2.5 rounded-xl transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#b8e62e]/50">
              Cập nhật mật khẩu
            </button>
          </div>
        </transition>
      </div>

      <!-- Logout -->
      <div class="bg-red-500/10 rounded-xl p-6 border border-red-500/30 mt-4 hover:border-red-500/50 transition-all duration-300 animate-slide-up" style="animation-delay: 0.1s">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-red-400 font-bold">Đăng xuất</h4>
            <p class="text-gray-400 text-sm">Đăng xuất khỏi tài khoản</p>
          </div>
          <button class="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-500/50 active:scale-95">
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px;
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

.slide-down-enter-active {
  animation: slideDown 0.3s ease-out;
}

.slide-down-leave-active {
  animation: slideDown 0.3s ease-out reverse;
}

.input-field {
  @apply w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all;
}
</style>