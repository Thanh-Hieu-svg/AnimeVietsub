<script setup>
import { ref, defineAsyncComponent } from 'vue'

const isLogin = ref(true)

const LoginForm = defineAsyncComponent(() => import('./Login.vue'))
const RegisterForm = defineAsyncComponent(() => import('./Register.vue'))

const toggleView = () => {
  isLogin.value = !isLogin.value
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

    <div class="max-w-6xl w-full relative z-10">
      
      <transition name="fade-zoom" mode="out-in">
        <component 
          :is="isLogin ? LoginForm : RegisterForm" 
          :key="isLogin ? 'login' : 'register'"
          @toggle="toggleView"
        />
      </transition>

    </div>
  </div>
</template>

<style scoped>
/* Fade Zoom Animation */
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-zoom-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* Float Animation for Background */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, -20px);
  }
  50% {
    transform: translate(-10px, -30px);
  }
  75% {
    transform: translate(-20px, 10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-20px, 20px);
  }
  50% {
    transform: translate(10px, 30px);
  }
  75% {
    transform: translate(20px, -10px);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1.05);
  }
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
</style>