<script setup>
import { computed } from 'vue'

const props = defineProps({
  users: {
    type: Array,
    required: true
  }
})

const activeUsersCount = computed(() => 
  props.users.filter(u => u.status === 'active').length
)
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-xl shadow-xl border border-gray-800/50">
    <div class="p-6 border-b border-gray-800/50 flex items-center justify-between">
      <div>
        <h2 class="text-xl font-black text-white">Người dùng mới</h2>
        <p class="text-sm text-gray-400 mt-1">{{ activeUsersCount }}/{{ users.length }} đang hoạt động</p>
      </div>
      <button class="text-[#b8e62e] text-sm font-semibold hover:underline">Quản lý</button>
    </div>
    <div class="p-6 space-y-3">
      <div
        v-for="user in users"
        :key="user.id"
        class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
      >
        <img :src="user.avatar" alt="Avatar" class="w-12 h-12 rounded-full ring-2 ring-gray-800 group-hover:ring-[#b8e62e] transition-all duration-300" />
        <div class="flex-1 min-w-0">
          <p class="font-bold text-white truncate">{{ user.name }}</p>
          <p class="text-sm text-gray-400 truncate">{{ user.email }}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <p class="text-xs text-gray-500">{{ user.joined }}</p>
          <span 
            :class="[
              user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400',
              'px-2 py-0.5 rounded-full text-xs font-bold mt-1 inline-block'
            ]"
          >
            {{ user.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>