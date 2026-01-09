<script setup>
defineProps({
  searchQuery: String,
  selectedDay: String,
  selectedStatus: String,
  sortBy: String,
  daysOfWeek: Array,
  dayNames: Object
})

const emit = defineEmits(['update:searchQuery', 'update:selectedDay', 'update:selectedStatus', 'update:sortBy'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl hover:border-[#b8e62e]/30 transition-all duration-300">
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
            placeholder="Tìm kiếm anime..."
            class="w-full bg-black/30 border border-gray-800 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 transition-all placeholder-gray-500 text-sm"
          />
        </div>
      </div>

      <!-- Day Filter -->
      <select 
        :value="selectedDay"
        @change="emit('update:selectedDay', $event.target.value)"
        class="bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option value="all">Tất cả ngày</option>
        <option v-for="day in daysOfWeek" :key="day" :value="day">{{ dayNames[day] }}</option>
      </select>

      <!-- Status Filter -->
      <select 
        :value="selectedStatus"
        @change="emit('update:selectedStatus', $event.target.value)"
        class="bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option value="all">Tất cả trạng thái</option>
        <option value="published">Đã xuất bản</option>
        <option value="pending">Chờ xuất bản</option>
      </select>

      <!-- Sort -->
      <select 
        :value="sortBy"
        @change="emit('update:sortBy', $event.target.value)"
        class="bg-black/30 border border-gray-800 text-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:shadow-lg focus:shadow-[#b8e62e]/20 text-sm cursor-pointer hover:border-[#b8e62e]/50 transition-all"
      >
        <option value="date">Sắp xếp theo ngày</option>
        <option value="episode">Sắp xếp theo tập</option>
      </select>
    </div>
  </div>
</template>