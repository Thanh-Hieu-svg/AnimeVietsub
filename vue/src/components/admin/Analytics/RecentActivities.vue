<script setup>
defineProps({
  activities: {
    type: Array,
    required: true
  }
})

const getActivityColor = (type) => {
  const colors = {
    view: 'text-blue-400',
    comment: 'text-green-400',
    register: 'text-purple-400'
  }
  return colors[type] || 'text-gray-400'
}

const getActivityBg = (type) => {
  const bgs = {
    view: 'bg-blue-500/20',
    comment: 'bg-green-500/20',
    register: 'bg-purple-500/20'
  }
  return bgs[type] || 'bg-gray-500/20'
}
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/10 transition-all duration-300 hover:border-[#b8e62e]/30">
    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-2 group hover:text-[#b8e62e] transition-colors">
      <font-awesome-icon icon="history" class="text-[#b8e62e] group-hover:scale-110 transition-transform" />
      Hoạt động gần đây
    </h2>
    <div class="space-y-3">
      <div 
        v-for="(activity, index) in activities" 
        :key="index"
        class="flex items-center gap-4 p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300 group/activity border border-gray-800 hover:border-[#b8e62e]/30 hover:shadow-lg hover:shadow-[#b8e62e]/5 animate-slide-in-left cursor-pointer"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <div 
          class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/activity:scale-110 group-hover/activity:rotate-6 transition-all duration-300"
          :class="getActivityBg(activity.type)"
        >
          <font-awesome-icon :icon="activity.icon" :class="getActivityColor(activity.type)" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-300">
            <span class="font-semibold text-white group-hover/activity:text-[#b8e62e] transition-colors">{{ activity.user }}</span>
            <span class="text-gray-400"> {{ activity.action }} </span>
            <span v-if="activity.target" class="text-[#b8e62e]">{{ activity.target }}</span>
          </p>
          <p class="text-xs text-gray-500 mt-1 group-hover/activity:text-gray-400 transition-colors">{{ activity.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}
</style>