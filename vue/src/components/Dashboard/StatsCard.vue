<script setup>
defineProps({
  title: String,
  value: String,
  icon: String,
  color: String,
  change: String,
  trend: String
})
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/10 transition-all duration-300 group cursor-pointer relative overflow-hidden">
    <!-- Glow effect on hover -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#b8e62e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div class="flex items-center justify-between relative z-10">
      <div>
        <p class="text-gray-500 text-sm font-semibold">{{ title }}</p>
        <h3 class="text-3xl font-black text-white mt-2 group-hover:text-[#b8e62e] transition-colors duration-300">{{ value }}</h3>
        <div class="flex items-center gap-2 mt-2">
          <span 
            :class="[
              trend === 'up' ? 'text-[#b8e62e]' : trend === 'down' ? 'text-red-400' : 'text-gray-500',
              'text-sm font-semibold flex items-center gap-1'
            ]"
          >
            <font-awesome-icon 
              :icon="trend === 'up' ? 'arrow-up' : trend === 'down' ? 'arrow-down' : 'minus'" 
              class="text-xs"
            />
            {{ change }}
          </span>
        </div>
      </div>
      <div :class="[color, 'w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg']">
        <font-awesome-icon :icon="icon" class="text-white text-2xl" />
      </div>
    </div>
  </div>
</template>