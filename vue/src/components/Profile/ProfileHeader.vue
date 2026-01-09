<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})

defineEmits(['edit-profile'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#0f1416] rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50 animate-fade-in-up">
    <div class="relative h-48 bg-gradient-to-r from-[#b8e62e]/20 to-[#a0d020]/20">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578632767115-351597cf2477')] bg-cover bg-center opacity-20"></div>
    </div>
    
    <div class="relative px-6 pb-6">
      <!-- Avatar -->
      <div class="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-16 animate-slide-up" style="animation-delay: 0.1s">
        <div class="relative group">
          <img :src="user.avatar" alt="Avatar" class="w-32 h-32 rounded-full border-4 border-[#0f1416] shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#b8e62e]/50" />
          <button class="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
            <font-awesome-icon icon="camera" class="text-white text-xl animate-bounce-in" />
          </button>
        </div>
        
        <div class="flex-1 text-center sm:text-left space-y-2">
          <h1 class="text-3xl font-black text-white hover:text-[#b8e62e] transition-colors duration-300">{{ user.username }}</h1>
          <p class="text-gray-400 text-sm">{{ user.email }}</p>
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm">
            <span class="flex items-center gap-2 text-gray-400 hover:text-[#b8e62e] transition-colors cursor-pointer group">
              <font-awesome-icon icon="calendar" class="text-[#b8e62e] group-hover:scale-125 transition-transform" />
              Tham gia: {{ user.joinDate }}
            </span>
            <span class="flex items-center gap-2 text-gray-400 hover:text-[#b8e62e] transition-colors cursor-pointer group">
              <font-awesome-icon icon="clock" class="text-[#b8e62e] group-hover:rotate-12 transition-transform" />
              {{ user.stats.totalHours }} giờ xem
            </span>
          </div>
        </div>

        <button @click="$emit('edit-profile')" class="bg-[#b8e62e] hover:bg-[#a0d020] text-black font-bold px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#b8e62e]/50 active:scale-95 flex items-center gap-2">
          <font-awesome-icon icon="pen" class="transition-transform group-hover:rotate-12" />
          <span>Chỉnh sửa</span>
        </button>
      </div>

      <!-- Bio -->
      <div class="mt-6 bg-[#2a2a2a]/50 rounded-xl p-4 border border-gray-700/50 hover:border-[#b8e62e]/50 transition-all duration-300 animate-slide-up" style="animation-delay: 0.2s">
        <p class="text-gray-300 text-sm leading-relaxed">{{ user.bio }}</p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        <div class="stat-card animate-slide-up" style="animation-delay: 0.3s">
          <div class="text-3xl font-black text-[#b8e62e] stat-number">{{ user.stats.watching }}</div>
          <div class="text-xs text-gray-400 mt-1">Đang xem</div>
        </div>
        <div class="stat-card animate-slide-up" style="animation-delay: 0.4s">
          <div class="text-3xl font-black text-[#b8e62e] stat-number">{{ user.stats.completed }}</div>
          <div class="text-xs text-gray-400 mt-1">Đã hoàn thành</div>
        </div>
        <div class="stat-card animate-slide-up" style="animation-delay: 0.5s">
          <div class="text-3xl font-black text-[#b8e62e] stat-number">{{ user.stats.planToWatch }}</div>
          <div class="text-xs text-gray-400 mt-1">Sẽ xem</div>
        </div>
        <div class="stat-card animate-slide-up" style="animation-delay: 0.6s">
          <div class="text-3xl font-black text-[#b8e62e] stat-number">{{ user.stats.totalHours }}</div>
          <div class="text-xs text-gray-400 mt-1">Giờ xem</div>
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}

.stat-card {
  @apply bg-[#2a2a2a]/50 rounded-xl p-4 border border-gray-700/50 text-center cursor-pointer;
  transition: all 0.3s ease;
}

.stat-card:hover {
  @apply border-[#b8e62e]/50 transform scale-105 shadow-xl shadow-[#b8e62e]/20;
}

.stat-number {
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-number {
  transform: scale(1.2);
}
</style>