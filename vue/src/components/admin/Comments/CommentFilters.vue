<script setup>
const props = defineProps({
  searchQuery: {
    type: String,
    required: true
  },
  filterStatus: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:searchQuery', 'update:filterStatus'])
</script>

<template>
  <div class="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 mb-6 hover:border-[#b8e62e]/30 transition-all duration-300 animate-fade-in" style="animation-delay: 0.5s">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Search -->
      <div class="flex-1">
        <div class="relative group">
          <font-awesome-icon 
            :icon="['fas', 'search']" 
            class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#b8e62e] transition-colors" 
          />
          <input
            :value="searchQuery"
            @input="emit('update:searchQuery', $event.target.value)"
            type="text"
            placeholder="Tìm kiếm theo tên, anime, nội dung..."
            class="w-full bg-[#0f1416] border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
          />
        </div>
      </div>

      <!-- Status Filter -->
      <div class="md:w-64">
        <select
          :value="filterStatus"
          @change="emit('update:filterStatus', $event.target.value)"
          class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 cursor-pointer hover:border-[#b8e62e]/50 focus:shadow-lg focus:shadow-[#b8e62e]/20"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="approved">Đã duyệt</option>
          <option value="pending">Chờ duyệt</option>
          <option value="reported">Bị báo cáo</option>
        </select>
      </div>
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

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}
</style>