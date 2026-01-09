<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentStep = ref(1) // 1: Email, 2: OTP, 3: New Password

// Step 1: Email
const email = ref('')
const isLoadingEmail = ref(false)

// Step 2: OTP
const otp = ref(['', '', '', '', '', ''])
const otpInputs = ref([])
const isLoadingOTP = ref(false)
const countdown = ref(60)
const canResend = ref(false)

// Step 3: New Password
const newPassword = ref('')
const confirmNewPassword = ref('')
const isLoadingPassword = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Step 1: Submit Email
const handleSubmitEmail = async () => {
  isLoadingEmail.value = true
  setTimeout(() => {
    isLoadingEmail.value = false
    currentStep.value = 2
    startCountdown()
  }, 1500)
}

// Step 2: OTP Input Handler
const handleOTPInput = (index, event) => {
  const value = event.target.value
  
  if (value.length === 1 && index < 5) {
    otpInputs.value[index + 1]?.focus()
  }
}

const handleOTPKeydown = (index, event) => {
  if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus()
  }
}

const handleOTPPaste = (event) => {
  event.preventDefault()
  const pastedData = event.clipboardData.getData('text').slice(0, 6)
  const digits = pastedData.split('')
  
  digits.forEach((digit, index) => {
    if (index < 6) {
      otp.value[index] = digit
    }
  })
  
  if (digits.length === 6) {
    otpInputs.value[5]?.focus()
  }
}

// Step 2: Countdown Timer
const startCountdown = () => {
  canResend.value = false
  countdown.value = 60
  
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      canResend.value = true
    }
  }, 1000)
}

// Step 2: Resend OTP
const handleResendOTP = () => {
  if (!canResend.value) return
  startCountdown()
  console.log('Resend OTP to:', email.value)
}

// Step 2: Verify OTP
const handleVerifyOTP = async () => {
  const otpCode = otp.value.join('')
  if (otpCode.length !== 6) {
    alert('Vui lòng nhập đủ 6 số!')
    return
  }
  
  isLoadingOTP.value = true
  setTimeout(() => {
    isLoadingOTP.value = false
    currentStep.value = 3
  }, 1500)
}

// Step 3: Reset Password
const handleResetPassword = async () => {
  if (newPassword.value !== confirmNewPassword.value) {
    alert('Mật khẩu không khớp!')
    return
  }
  
  if (newPassword.value.length < 8) {
    alert('Mật khẩu phải có ít nhất 8 ký tự!')
    return
  }
  
  isLoadingPassword.value = true
  setTimeout(() => {
    isLoadingPassword.value = false
    router.push('/auth')
  }, 1500)
}

const goBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  } else {
    router.push('/auth')
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#0f1416] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b8e62e]/5 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b8e62e]/5 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#b8e62e]/3 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="relative max-w-lg mx-auto w-full z-10">
      <!-- Animated Border -->
      <div class="absolute -inset-1 bg-gradient-to-r from-[#b8e62e] via-[#a0d020] to-[#b8e62e] rounded-3xl opacity-75 blur-sm animate-border-pulse"></div>
      
      <!-- Main Card -->
      <div class="relative bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#0f1416] rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50 backdrop-blur-xl">
        
        <!-- Form Container -->
        <div class="flex flex-col justify-center p-8 sm:p-10">
          <div class="w-full max-w-sm mx-auto space-y-5">

            <!-- Progress Steps -->
            <div class="flex items-center justify-between animate-fade-in" style="animation-delay: 0.1s">
              <div v-for="step in 3" :key="step" class="flex items-center">
                <div 
                  :class="currentStep >= step ? 'bg-[#b8e62e] text-black' : 'bg-[#2a2a2a] text-gray-500'"
                  class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300"
                >
                  <font-awesome-icon v-if="currentStep > step" icon="check" />
                  <span v-else>{{ step }}</span>
                </div>
                <div v-if="step < 3" 
                  :class="currentStep > step ? 'bg-[#b8e62e]' : 'bg-[#2a2a2a]'"
                  class="h-1 w-16 sm:w-20 mx-2 transition-all duration-300"
                ></div>
              </div>
            </div>

            <!-- Logo -->
            <div class="flex justify-center animate-fade-in" style="animation-delay: 0.2s">
              <img src="../assets/images/logo.png" alt="Logo" class="h-10" />
            </div>

            <!-- STEP 1: Email -->
            <div v-if="currentStep === 1" class="space-y-5 animate-fade-in" style="animation-delay: 0.3s">
              <div class="text-center space-y-2">
                <div class="flex justify-center mb-3">
                  <div class="w-16 h-16 rounded-full bg-[#b8e62e]/20 flex items-center justify-center">
                    <font-awesome-icon icon="envelope" class="text-[#b8e62e] text-2xl" />
                  </div>
                </div>
                <h2 class="text-2xl sm:text-3xl font-black text-white">Quên mật khẩu?</h2>
                <p class="text-gray-400 text-sm">
                  Nhập email để nhận mã xác thực
                </p>
              </div>

              <form @submit.prevent="handleSubmitEmail" class="space-y-4">
                <div>
                  <label class="block text-xs font-bold text-gray-300 mb-1.5">Email</label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <font-awesome-icon icon="envelope" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors text-sm" />
                    </div>
                    <input 
                      v-model="email" 
                      type="email" 
                      required 
                      placeholder="example@gmail.com" 
                      class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-10 pr-3.5 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500 hover:border-gray-600 text-sm" 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  :disabled="isLoadingEmail" 
                  class="w-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] hover:from-[#a0d020] hover:to-[#b8e62e] disabled:from-gray-700 disabled:to-gray-700 text-black disabled:text-gray-500 font-black py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#b8e62e]/50 active:scale-95 flex items-center justify-center gap-2 text-sm mt-6"
                >
                  <font-awesome-icon v-if="isLoadingEmail" icon="clock" class="animate-spin" />
                  <span>{{ isLoadingEmail ? 'Đang gửi...' : 'Gửi mã xác thực' }}</span>
                </button>
              </form>

              <!-- Login Link -->
                <div class="text-center pt-1 animate-fade-in" style="animation-delay: 0.4s">
                    <p class="text-xs text-gray-400">
                        Đã nhớ mật khẩu?
                        <router-link to="/auth" class="text-[#b8e62e] hover:text-[#a0d020] font-black ml-1 underline underline-offset-2 transition-colors">
                        Đăng nhập ngay
                        </router-link>
                    </p>
                </div>
            </div>

            <!-- STEP 2: OTP -->
            <div v-if="currentStep === 2" class="space-y-5 animate-fade-in" style="animation-delay: 0.3s">
              <div class="text-center space-y-2">
                <div class="flex justify-center mb-3">
                  <div class="w-16 h-16 rounded-full bg-[#b8e62e]/20 flex items-center justify-center">
                    <font-awesome-icon icon="shield" class="text-[#b8e62e] text-2xl" />
                  </div>
                </div>
                <h2 class="text-2xl sm:text-3xl font-black text-white">Nhập mã OTP</h2>
                <p class="text-gray-400 text-sm">
                  Mã đã được gửi đến <span class="text-[#b8e62e] font-bold">{{ email }}</span>
                </p>
              </div>

              <form @submit.prevent="handleVerifyOTP" class="space-y-4">
                <!-- OTP Inputs -->
                <div class="flex justify-center gap-2 sm:gap-3">
                  <input
                    v-for="(digit, index) in otp"
                    :key="index"
                    :ref="el => otpInputs[index] = el"
                    v-model="otp[index]"
                    type="text"
                    inputmode="numeric"
                    maxlength="1"
                    @input="handleOTPInput(index, $event)"
                    @keydown="handleOTPKeydown(index, $event)"
                    @paste="handleOTPPaste"
                    class="w-12 h-12 sm:w-14 sm:h-14 bg-[#2a2a2a] border-2 border-gray-700 text-white text-center text-xl font-bold rounded-xl focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all hover:border-gray-600"
                  />
                </div>

                <!-- Resend Timer -->
                <div class="text-center text-sm">
                  <p v-if="!canResend" class="text-gray-500">
                    Gửi lại mã sau <span class="text-[#b8e62e] font-bold">{{ countdown }}s</span>
                  </p>
                  <button
                    v-else
                    type="button"
                    @click="handleResendOTP"
                    class="text-[#b8e62e] hover:text-[#a0d020] font-bold underline underline-offset-2"
                  >
                    Gửi lại mã
                  </button>
                </div>

                <button 
                  type="submit" 
                  :disabled="isLoadingOTP" 
                  class="w-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] hover:from-[#a0d020] hover:to-[#b8e62e] disabled:from-gray-700 disabled:to-gray-700 text-black disabled:text-gray-500 font-black py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#b8e62e]/50 active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <font-awesome-icon v-if="isLoadingOTP" icon="clock" class="animate-spin" />
                  <span>{{ isLoadingOTP ? 'Đang xác thực...' : 'Xác thực' }}</span>
                </button>
              </form>

              <!-- Back Link -->
              <div class="text-center pt-1 animate-fade-in" style="animation-delay: 0.4s">
                <button @click="goBack" class="text-xs text-gray-400 hover:text-white font-semibold transition-colors underline underline-offset-2">
                  ← Quay lại bước trước
                </button>
              </div>
            </div>

            <!-- STEP 3: New Password -->
            <div v-if="currentStep === 3" class="space-y-5 animate-fade-in" style="animation-delay: 0.3s">
              <div class="text-center space-y-2">
                <div class="flex justify-center mb-3">
                  <div class="w-16 h-16 rounded-full bg-[#b8e62e]/20 flex items-center justify-center">
                    <font-awesome-icon icon="check-circle" class="text-[#b8e62e] text-2xl" />
                  </div>
                </div>
                <h2 class="text-2xl sm:text-3xl font-black text-white">Đặt mật khẩu mới</h2>
                <p class="text-gray-400 text-sm">
                  Tạo mật khẩu mới cho tài khoản của bạn
                </p>
              </div>

              <form @submit.prevent="handleResetPassword" class="space-y-4">
                <div>
                  <label class="block text-xs font-bold text-gray-300 mb-1.5">Mật khẩu mới</label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <font-awesome-icon icon="shield" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors text-sm" />
                    </div>
                    <input 
                      v-model="newPassword" 
                      :type="showPassword ? 'text' : 'password'" 
                      required 
                      placeholder="Tối thiểu 8 ký tự" 
                      class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-10 pr-10 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500 hover:border-gray-600 text-sm" 
                    />
                    <button
                      type="button"
                      @click="showPassword = !showPassword"
                      class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-500 hover:text-[#b8e62e] transition-colors"
                    >
                      <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" class="text-sm" />
                    </button>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold text-gray-300 mb-1.5">Xác nhận mật khẩu</label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <font-awesome-icon icon="shield" class="text-gray-500 group-hover:text-[#b8e62e] transition-colors text-sm" />
                    </div>
                    <input 
                      v-model="confirmNewPassword" 
                      :type="showConfirmPassword ? 'text' : 'password'" 
                      required 
                      placeholder="Nhập lại mật khẩu" 
                      class="w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl pl-10 pr-10 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all placeholder-gray-500 hover:border-gray-600 text-sm" 
                    />
                    <button
                      type="button"
                      @click="showConfirmPassword = !showConfirmPassword"
                      class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-500 hover:text-[#b8e62e] transition-colors"
                    >
                      <font-awesome-icon :icon="showConfirmPassword ? 'eye-slash' : 'eye'" class="text-sm" />
                    </button>
                  </div>
                </div>

                <button 
                  type="submit" 
                  :disabled="isLoadingPassword" 
                  class="w-full bg-gradient-to-r from-[#b8e62e] to-[#a0d020] hover:from-[#a0d020] hover:to-[#b8e62e] disabled:from-gray-700 disabled:to-gray-700 text-black disabled:text-gray-500 font-black py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#b8e62e]/50 active:scale-95 flex items-center justify-center gap-2 text-sm mt-6"
                >
                  <font-awesome-icon v-if="isLoadingPassword" icon="clock" class="animate-spin" />
                  <span>{{ isLoadingPassword ? 'Đang cập nhật...' : 'Đặt lại mật khẩu' }}</span>
                </button>
              </form>

              <!-- Login Link -->
              <div class="text-center pt-1 animate-fade-in" style="animation-delay: 0.4s">
                <p class="text-xs text-gray-400">
                    Mật khẩu đã được đặt lại thành công!
                    <router-link to="/auth" class="text-[#b8e62e] hover:text-[#a0d020] font-black ml-1 underline underline-offset-2 transition-colors">
                    Đăng nhập ngay
                    </router-link>
                </p>
                </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- Style giữ nguyên -->
<style scoped>
/* ... existing styles ... */
</style>

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

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(20px, -20px); }
  50% { transform: translate(-10px, -30px); }
  75% { transform: translate(-20px, 10px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-20px, 20px); }
  50% { transform: translate(10px, 30px); }
  75% { transform: translate(20px, -10px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.05); }
}

.animate-float {
  animation: float 25s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 30s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

/* Spin */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Remove arrows from number input */
input[type="text"]::-webkit-outer-spin-button,
input[type="text"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>