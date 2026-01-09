<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'save'])

const editForm = ref({
  username: props.user.username,
  email: props.user.email,
  bio: props.user.bio
})

watch(() => props.user, (newUser) => {
  editForm.value = {
    username: newUser.username,
    email: newUser.email,
    bio: newUser.bio
  }
}, { deep: true })

const handleSave = () => {
  emit('save', editForm.value)
}
</script>

<template>
  <transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm" @click.self="$emit('close')">
      <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-3xl max-w-md w-full p-8 border border-gray-800 animate-scale-in">
        <h3 class="text-2xl font-black text-white mb-6">Chỉnh sửa hồ sơ</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-bold text-gray-300 mb-2">Tên người dùng</label>
            <input v-model="editForm.username" type="text" class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-300 mb-2">Email</label>
            <input v-model="editForm.email" type="email" class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-300 mb-2">Giới thiệu</label>
            <textarea v-model="editForm.bio" rows="3" class="input-field resize-none"></textarea>
          </div>
          <div class="flex gap-3 pt-4">
            <button @click="handleSave" class="flex-1 bg-[#b8e62e] hover:bg-[#a0d020] text-black font-bold py-2.5 rounded-xl transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#b8e62e]/50">
              Lưu
            </button>
            <button @click="$emit('close')" class="flex-1 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white font-bold py-2.5 rounded-xl transition-all hover:scale-105">
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.input-field {
  @apply w-full bg-[#2a2a2a] border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 transition-all;
}
</style>