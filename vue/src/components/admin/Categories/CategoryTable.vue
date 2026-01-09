<script setup>
defineProps({
  categories: Array
})

const emit = defineEmits(['toggle-status', 'edit', 'delete'])
</script>

<template>
  <div class="bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden mb-6">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-[#0f1416] border-b border-gray-800">
          <tr>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">ID</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Tên</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Slug</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Số Anime</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Trạng thái</th>
            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-400">Cập nhật</th>
            <th class="px-6 py-4 text-right text-sm font-semibold text-gray-400">Thao tác</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800">
          <tr
            v-for="(category, index) in categories"
            :key="category.id"
            class="hover:bg-[#0f1416] transition-all duration-300 group animate-slide-in-left"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <td class="px-6 py-4 text-sm text-gray-400 group-hover:text-white transition-colors">{{ category.id }}</td>
            <td class="px-6 py-4">
              <div>
                <p class="text-white font-semibold group-hover:text-[#b8e62e] transition-colors">{{ category.name }}</p>
                <p class="text-sm text-gray-400 line-clamp-1">{{ category.description }}</p>
              </div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-400">{{ category.slug }}</td>
            <td class="px-6 py-4">
              <span class="text-[#b8e62e] font-semibold group-hover:scale-110 inline-block transition-transform">{{ category.animeCount }}</span>
            </td>
            <td class="px-6 py-4">
              <button
                @click="emit('toggle-status', category.id)"
                class="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
                :class="category.status === 'active' 
                  ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:shadow-lg hover:shadow-green-500/50' 
                  : 'bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:shadow-lg hover:shadow-red-500/50'"
              >
                <font-awesome-icon 
                  :icon="['fas', category.status === 'active' ? 'check-circle' : 'ban']" 
                  class="w-3 h-3" 
                />
                {{ category.status === 'active' ? 'Hoạt động' : 'Không hoạt động' }}
              </button>
            </td>
            <td class="px-6 py-4 text-sm text-gray-400">{{ category.updatedAt }}</td>
            <td class="px-6 py-4">
              <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button
                  @click="emit('edit', category)"
                  class="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  title="Chỉnh sửa"
                >
                  <font-awesome-icon :icon="['fas', 'edit']" class="w-4 h-4" />
                </button>
                <button
                  @click="emit('delete', category.id)"
                  class="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
                  title="Xóa"
                >
                  <font-awesome-icon :icon="['fas', 'trash']" class="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty State -->
    <div
      v-if="categories.length === 0"
      class="p-12 text-center"
    >
      <font-awesome-icon 
        :icon="['fas', 'inbox']" 
        class="text-gray-600 text-5xl mb-4 animate-bounce-slow" 
      />
      <p class="text-gray-400 text-lg">Không tìm thấy thể loại nào</p>
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

@keyframes bounceSlow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-bounce-slow {
  animation: bounceSlow 2s ease-in-out infinite;
}
</style>