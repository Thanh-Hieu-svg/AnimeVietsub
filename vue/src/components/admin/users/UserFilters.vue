<script setup>
const props = defineProps({
  searchQuery: String,
  selectedRole: String,
  selectedStatus: String,
  sortBy: String,
  selectedUsersCount: Number
})

const emit = defineEmits(['update:searchQuery', 'update:selectedRole', 'update:selectedStatus', 'update:sortBy', 'bulk-action'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:border-[#b8e62e]/30 transition-all duration-300 animate-fade-in" style="animation-delay: 0.5s">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <!-- Search -->
      <div class="lg:col-span-2">
        <div class="relative group">
          <font-awesome-icon 
            icon="search" 
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#b8e62e] transition-colors" 
          />
          <input
            :value="searchQuery"
            @input="emit('update:searchQuery', $event.target.value)"
            type="text"
            placeholder="Tìm kiếm theo tên, email..."
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 transition-all placeholder-gray-500 text-sm"
          />
        </div>
      </div>

      <!-- Role Filter -->
      <select 
        :value="selectedRole" 
        @change="emit('update:selectedRole', $event.target.value)" 
        class="bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option value="all">Tất cả vai trò</option>
        <option value="admin">Quản trị</option>
        <option value="moderator">Kiểm duyệt</option>
        <option value="user">Thành viên</option>
      </select>

      <!-- Status Filter -->
      <select 
        :value="selectedStatus" 
        @change="emit('update:selectedStatus', $event.target.value)" 
        class="bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option value="all">Tất cả trạng thái</option>
        <option value="active">Hoạt động</option>
        <option value="inactive">Tạm khóa</option>
        <option value="banned">Bị cấm</option>
      </select>

      <!-- Sort -->
      <select 
        :value="sortBy" 
        @change="emit('update:sortBy', $event.target.value)" 
        class="bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option value="newest">Mới nhất</option>
        <option value="oldest">Cũ nhất</option>
      </select>
    </div>

    <!-- Bulk Actions -->
    <div v-if="selectedUsersCount > 0" class="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-800/50 animate-slide-in-left">
      <p class="text-sm text-gray-400 font-semibold">{{ selectedUsersCount }} người dùng được chọn</p>
      <button 
        @click="emit('bulk-action', 'lock')" 
        class="bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
      >
        <font-awesome-icon icon="lock" />
        <span>Khóa</span>
      </button>
      <button 
        @click="emit('bulk-action', 'ban')" 
        class="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
      >
        <font-awesome-icon icon="ban" />
        <span>Cấm</span>
      </button>
      <button 
        @click="emit('bulk-action', 'delete')" 
        class="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
      >
        <font-awesome-icon icon="trash" />
        <span>Xóa</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
}
</style>