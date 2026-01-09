<script setup>
defineProps({
  searchQuery: String,
  selectedStatus: String,
  sortBy: String,
  selectedEpisodesCount: Number
})

const emit = defineEmits(['update:searchQuery', 'update:selectedStatus', 'update:sortBy', 'bulk-action'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:border-[#b8e62e]/30 transition-all duration-300">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            placeholder="Tìm kiếm theo số tập, tên tập..."
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 transition-all placeholder-gray-500 text-sm"
          />
        </div>
      </div>

      <!-- Status Filter -->
      <select 
        :value="selectedStatus"
        @change="emit('update:selectedStatus', $event.target.value)"
        class="bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option value="all">Tất cả trạng thái</option>
        <option value="published">Đã xuất bản</option>
        <option value="draft">Bản nháp</option>
      </select>

      <!-- Sort -->
      <select 
        :value="sortBy"
        @change="emit('update:sortBy', $event.target.value)"
        class="bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option value="episode">Sắp xếp theo tập</option>
        <option value="views">Sắp xếp theo lượt xem</option>
        <option value="date">Sắp xếp theo ngày</option>
      </select>
    </div>

    <!-- Bulk Actions -->
    <div v-if="selectedEpisodesCount > 0" class="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-800/50 animate-slide-in-left">
      <p class="text-sm text-gray-400 font-semibold">{{ selectedEpisodesCount }} tập được chọn</p>
      <button 
        @click="emit('bulk-action', 'publish')" 
        class="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
      >
        <font-awesome-icon icon="check-circle" />
        <span>Xuất bản</span>
      </button>
      <button 
        @click="emit('bulk-action', 'draft')" 
        class="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 px-4 py-2 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50"
      >
        <font-awesome-icon icon="edit" />
        <span>Chuyển về nháp</span>
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

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
}
</style>