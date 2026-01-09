<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:selected', 'edit', 'ban', 'delete', 'toggle-lock'])

const getRoleBadge = (role) => {
  const badges = {
    admin: 'bg-red-500/20 text-red-400 border border-red-500/30',
    moderator: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    user: 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
  }
  return badges[role] || badges.user
}

const getRoleText = (role) => {
  const texts = {
    admin: 'Quản trị',
    moderator: 'Kiểm duyệt',
    user: 'Thành viên'
  }
  return texts[role] || role
}

const getStatusBadge = (status) => {
  const badges = {
    active: 'bg-green-500/20 text-green-400 border border-green-500/30',
    inactive: 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
    banned: 'bg-red-500/20 text-red-400 border border-red-500/30'
  }
  return badges[status] || badges.inactive
}

const getStatusText = (status) => {
  const texts = {
    active: 'Hoạt động',
    inactive: 'Tạm khóa',
    banned: 'Bị cấm'
  }
  return texts[status] || status
}
</script>

<template>
  <tr class="hover:bg-white/5 transition-all duration-300 group animate-slide-in-left">
    <td class="px-6 py-4">
      <input 
        :checked="isSelected" 
        @change="emit('update:selected', { userId: user.id, checked: $event.target.checked })" 
        type="checkbox" 
        class="w-4 h-4 rounded border-gray-700 bg-black/30 text-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 cursor-pointer transition-all hover:scale-110" 
      />
    </td>
    <td class="px-6 py-4">
      <div class="flex items-center gap-3">
        <img 
          :src="user.avatar" 
          :alt="user.name" 
          class="w-10 h-10 rounded-full ring-2 ring-gray-800 group-hover:ring-[#b8e62e]/30 transition-all duration-300" 
        />
        <div>
          <p class="font-bold text-white group-hover:text-[#b8e62e] transition-colors">{{ user.name }}</p>
          <p class="text-sm text-gray-400">{{ user.email }}</p>
        </div>
      </div>
    </td>
    <td class="px-6 py-4">
      <span 
        :class="[getRoleBadge(user.role), 'px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 inline-block']"
      >
        {{ getRoleText(user.role) }}
      </span>
    </td>
    <td class="px-6 py-4">
      <span 
        :class="[getStatusBadge(user.status), 'px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 inline-block']"
      >
        {{ getStatusText(user.status) }}
      </span>
    </td>
    <td class="px-6 py-4 text-sm text-gray-400 group-hover:text-white transition-colors">{{ user.joinDate }}</td>
    
    <!-- Toggle Switch -->
    <td class="px-6 py-4">
      <div class="flex justify-center">
        <div class="switch-wrapper-ios">
          <input 
            class="tgl-ios" 
            :id="`switch-${user.id}`" 
            type="checkbox"
            :checked="user.isLocked"
            @change="emit('toggle-lock')"
          />
          <label class="tgl-btn-ios" :for="`switch-${user.id}`"></label>
        </div>
      </div>
    </td>

    <!-- Actions -->
    <td class="px-6 py-4">
      <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button 
          @click="emit('edit')" 
          class="p-2 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-all group/btn hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          title="Chỉnh sửa"
        >
          <font-awesome-icon icon="edit" class="group-hover/btn:rotate-12 transition-transform" />
        </button>

        <button 
          @click="emit('ban')" 
          class="p-2 hover:bg-orange-500/20 rounded-lg text-orange-400 transition-all group/btn hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50" 
          :title="user.status === 'banned' ? 'Bỏ cấm' : 'Cấm'"
        >
          <font-awesome-icon icon="ban" class="group-hover/btn:rotate-180 transition-transform duration-500" />
        </button>

        <button 
          @click="emit('delete')" 
          class="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-all group/btn hover:scale-110 hover:shadow-lg hover:shadow-red-500/50" 
          title="Xóa"
        >
          <font-awesome-icon icon="trash" class="group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped>
/* iOS Toggle Switch */
.switch-wrapper-ios .tgl-ios {
  display: none;
}

.switch-wrapper-ios .tgl-ios + .tgl-btn-ios {
  outline: 0;
  display: block;
  width: 48px;
  height: 24px;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: rgba(107, 114, 128, 0.3);
  border-radius: 24px;
  padding: 2px;
  transition: all 0.4s ease;
  border: 1px solid rgba(107, 114, 128, 0.5);
}

.switch-wrapper-ios .tgl-ios + .tgl-btn-ios:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
}

.switch-wrapper-ios .tgl-ios + .tgl-btn-ios:after {
  position: relative;
  display: block;
  content: "";
  width: 20px;
  height: 20px;
  left: 0;
  border-radius: 24px;
  background: #fbfbfb;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.switch-wrapper-ios .tgl-ios:checked + .tgl-btn-ios {
  background: rgba(239, 68, 68, 0.3);
  border-color: rgba(239, 68, 68, 0.5);
}

.switch-wrapper-ios .tgl-ios:checked + .tgl-btn-ios:after {
  left: calc(100% - 20px);
  background: #ef4444;
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

.animate-slide-in-left {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}
</style>