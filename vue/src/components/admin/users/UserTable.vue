<script setup>
import UserTableRow from './UserTableRow.vue'

defineProps({
  users: {
    type: Array,
    required: true
  },
  selectedUsers: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['select-all', 'update:selectedUsers', 'edit', 'ban', 'delete', 'toggle-lock'])
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl shadow-xl overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-black/30 border-b border-gray-800/50">
          <tr>
            <th class="px-6 py-4 text-left">
              <input type="checkbox" @change="emit('select-all', $event)" class="w-4 h-4 rounded border-gray-700 bg-black/30 text-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20" />
            </th>
            <th class="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Người dùng</th>
            <th class="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Vai trò</th>
            <th class="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Trạng thái</th>
            <th class="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Ngày tham gia</th>
            <th class="px-6 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Khóa TK</th>
            <th class="px-6 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Thao tác</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800/50">
          <UserTableRow
            v-for="user in users"
            :key="user.id"
            :user="user"
            :is-selected="selectedUsers.includes(user.id)"
            @update:selected="emit('update:selectedUsers', $event)"
            @edit="emit('edit', user)"
            @ban="emit('ban', user.id)"
            @delete="emit('delete', user.id)"
            @toggle-lock="emit('toggle-lock', user.id)"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>