<script setup>
defineProps({
  activities: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="lg:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-xl shadow-xl border border-gray-800/50">
    <div class="p-6 border-b border-gray-800/50 flex items-center justify-between">
      <h2 class="text-xl font-black text-white">Hoạt động gần đây</h2>
      <button class="text-[#b8e62e] text-sm font-semibold hover:underline">Xem tất cả</button>
    </div>
    <div class="p-6 space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
      <div
        v-for="activity in activities"
        :key="activity.id"
        class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
      >
        <div :class="[activity.color, 'w-10 h-10 rounded-lg bg-opacity-10 flex items-center justify-center flex-shrink-0 bg-white/5']">
          <font-awesome-icon :icon="activity.icon" :class="activity.color" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-300">
            <span class="font-bold text-white">{{ activity.user }}</span>
            <span class="text-gray-400"> {{ activity.action }} </span>
            <span class="font-semibold text-[#b8e62e]">{{ activity.target }}</span>
          </p>
          <p class="text-xs text-gray-500 mt-1">{{ activity.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(184, 230, 46, 0.3);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(184, 230, 46, 0.5);
}
</style>