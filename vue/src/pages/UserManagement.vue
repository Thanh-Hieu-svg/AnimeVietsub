<script setup>
import { ref, computed } from 'vue'
import Pagination from '@/components/common/Pagination.vue'
import UserStatsCards from '@/components/admin/users/UserStatsCards.vue'
import UserFilters from '@/components/admin/users/UserFilters.vue'
import UserTable from '@/components/admin/users/UserTable.vue'

// User data
const users = ref([
  { id: 1, name: 'Nguyễn Văn A', email: 'user1@example.com', avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=b8e62e&color=000', role: 'admin', status: 'active', isLocked: false, joinDate: '2024-01-15', lastLogin: '2 giờ trước' },
  { id: 2, name: 'Trần Thị B', email: 'user2@example.com', avatar: 'https://ui-avatars.com/api/?name=Tran+Thi+B&background=10b981&color=fff', role: 'moderator', status: 'active', isLocked: false, joinDate: '2024-01-14', lastLogin: '5 giờ trước' },
  { id: 3, name: 'Lê Văn C', email: 'user3@example.com', avatar: 'https://ui-avatars.com/api/?name=Le+Van+C&background=f59e0b&color=fff', role: 'user', status: 'inactive', isLocked: true, joinDate: '2024-01-13', lastLogin: '3 ngày trước' },
  { id: 4, name: 'Phạm Thị D', email: 'user4@example.com', avatar: 'https://ui-avatars.com/api/?name=Pham+Thi+D&background=ef4444&color=fff', role: 'user', status: 'banned', isLocked: true, joinDate: '2024-01-12', lastLogin: '1 tuần trước' },
  { id: 5, name: 'Hoàng Văn E', email: 'user5@example.com', avatar: 'https://ui-avatars.com/api/?name=Hoang+Van+E&background=8b5cf6&color=fff', role: 'user', status: 'active', isLocked: false, joinDate: '2024-01-11', lastLogin: '1 giờ trước' },
  { id: 6, name: 'Vũ Thị F', email: 'user6@example.com', avatar: 'https://ui-avatars.com/api/?name=Vu+Thi+F&background=ec4899&color=fff', role: 'moderator', status: 'active', isLocked: false, joinDate: '2024-01-10', lastLogin: '30 phút trước' },
  { id: 7, name: 'Đặng Văn G', email: 'user7@example.com', avatar: 'https://ui-avatars.com/api/?name=Dang+Van+G&background=3b82f6&color=fff', role: 'user', status: 'active', isLocked: false, joinDate: '2024-01-09', lastLogin: '2 ngày trước' },
  { id: 8, name: 'Bùi Thị H', email: 'user8@example.com', avatar: 'https://ui-avatars.com/api/?name=Bui+Thi+H&background=14b8a6&color=fff', role: 'user', status: 'inactive', isLocked: true, joinDate: '2024-01-08', lastLogin: '5 ngày trước' }
])

// Filters
const searchQuery = ref('')
const selectedRole = ref('all')
const selectedStatus = ref('all')
const sortBy = ref('newest')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 6

// Filtered users
const filteredUsers = computed(() => {
  let filtered = users.value

  if (searchQuery.value) {
    filtered = filtered.filter(user => 
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (selectedRole.value !== 'all') {
    filtered = filtered.filter(user => user.role === selectedRole.value)
  }

  if (selectedStatus.value !== 'all') {
    filtered = filtered.filter(user => user.status === selectedStatus.value)
  }

  if (sortBy.value === 'newest') {
    filtered = [...filtered].reverse()
  }

  return filtered
})

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / itemsPerPage))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredUsers.value.slice(start, end)
})

// Stats
const stats = computed(() => ({
  total: users.value.length,
  active: users.value.filter(u => u.status === 'active').length,
  banned: users.value.filter(u => u.status === 'banned').length,
  locked: users.value.filter(u => u.isLocked).length
}))

// Actions
const selectedUsers = ref([])

const handleSelectAll = (event) => {
  if (event.target.checked) {
    selectedUsers.value = paginatedUsers.value.map(u => u.id)
  } else {
    selectedUsers.value = []
  }
}

const handleUpdateSelected = ({ userId, checked }) => {
  if (checked) {
    selectedUsers.value.push(userId)
  } else {
    selectedUsers.value = selectedUsers.value.filter(id => id !== userId)
  }
}

const editUser = (user) => {
  alert(`Chỉnh sửa: ${user.name}`)
}

const deleteUser = (userId) => {
  if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
    users.value = users.value.filter(u => u.id !== userId)
  }
}

const banUser = (userId) => {
  const user = users.value.find(u => u.id === userId)
  if (user) {
    const action = user.status === 'banned' ? 'bỏ cấm' : 'cấm'
    if (confirm(`Bạn có chắc muốn ${action} người dùng này?`)) {
      user.status = user.status === 'banned' ? 'active' : 'banned'
    }
  }
}

const toggleLockAccount = (userId) => {
  const user = users.value.find(u => u.id === userId)
  if (user) {
    user.isLocked = !user.isLocked
    if (user.isLocked) {
      user.status = 'inactive'
    } else if (user.status === 'inactive') {
      user.status = 'active'
    }
  }
}

const handleBulkAction = (action) => {
  if (selectedUsers.value.length === 0) {
    alert('Vui lòng chọn ít nhất 1 người dùng')
    return
  }

  const actionText = { lock: 'khóa', ban: 'cấm', delete: 'xóa' }
  
  if (confirm(`Bạn có chắc muốn ${actionText[action]} ${selectedUsers.value.length} người dùng?`)) {
    if (action === 'delete') {
      users.value = users.value.filter(u => !selectedUsers.value.includes(u.id))
    } else if (action === 'ban') {
      users.value.forEach(u => {
        if (selectedUsers.value.includes(u.id)) u.status = 'banned'
      })
    } else if (action === 'lock') {
      users.value.forEach(u => {
        if (selectedUsers.value.includes(u.id)) {
          u.isLocked = true
          u.status = 'inactive'
        }
      })
    }
    selectedUsers.value = []
  }
}

const handlePageChange = (page) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 animate-fade-in">
      <div>
        <h1 class="text-3xl font-black text-white flex items-center gap-3">
          <div class="w-10 h-10 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center animate-pulse-slow">
            <font-awesome-icon icon="users" class="text-[#b8e62e]" />
          </div>
          Quản lý người dùng
        </h1>
        <p class="text-gray-400 mt-1">Quản lý {{ users.length }} người dùng trong hệ thống</p>
      </div>

      <button class="bg-gradient-to-r from-[#b8e62e] to-[#a0d020] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-[#b8e62e]/50 group">
        <font-awesome-icon icon="user-plus" class="transition-transform duration-300 group-hover:rotate-12" />
        <span>Thêm người dùng</span>
      </button>
    </div>

    <!-- Stats Cards -->
    <UserStatsCards :stats="stats" />

    <!-- Filters & Actions -->
    <UserFilters
      v-model:search-query="searchQuery"
      v-model:selected-role="selectedRole"
      v-model:selected-status="selectedStatus"
      v-model:sort-by="sortBy"
      :selected-users-count="selectedUsers.length"
      @bulk-action="handleBulkAction"
    />

    <!-- Users Table -->
    <UserTable
      :users="paginatedUsers"
      :selected-users="selectedUsers"
      @select-all="handleSelectAll"
      @update:selected-users="handleUpdateSelected"
      @edit="editUser"
      @ban="banUser"
      @delete="deleteUser"
      @toggle-lock="toggleLockAccount"
    />

    <!-- Pagination -->
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800/50 rounded-xl p-6 shadow-xl">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">
          Hiển thị {{ ((currentPage - 1) * itemsPerPage) + 1 }}-{{ Math.min(currentPage * itemsPerPage, filteredUsers.length) }} 
          trong tổng số {{ filteredUsers.length }} người dùng
        </p>
        <Pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @page-change="handlePageChange"
        />
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

@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}
</style>