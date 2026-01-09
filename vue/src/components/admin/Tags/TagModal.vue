<script setup>
const props = defineProps({
  show: Boolean,
  tag: Object,
  formData: Object
})

const emit = defineEmits(['close', 'save', 'update:formData'])

const updateField = (field, value) => {
  emit('update:formData', { ...props.formData, [field]: value })
}

const generateSlug = () => {
  if (props.formData.name) {
    const slug = props.formData.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
    
    updateField('slug', slug)
  }
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
    @click.self="emit('close')"
  >
    <div class="bg-[#1a1a1a] border border-gray-800 rounded-xl max-w-2xl w-full p-6 animate-scale-in shadow-2xl shadow-[#b8e62e]/10">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-white flex items-center gap-3">
          <div class="w-8 h-8 bg-[#b8e62e]/20 rounded-lg flex items-center justify-center">
            <font-awesome-icon 
              :icon="tag ? 'edit' : 'plus'" 
              class="text-[#b8e62e]" 
            />
          </div>
          {{ tag ? 'Chỉnh Sửa Tag' : 'Thêm Tag Mới' }}
        </h2>
        <button
          @click="emit('close')"
          class="p-2 hover:bg-[#2a2a2a] rounded-lg transition-all duration-300 group hover:scale-110"
        >
          <font-awesome-icon 
            icon="times" 
            class="text-gray-400 w-5 h-5 group-hover:text-red-400 group-hover:rotate-90 transition-all duration-300" 
          />
        </button>
      </div>

      <form @submit.prevent="emit('save')" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2">
            <label class="block text-sm font-semibold text-gray-400 mb-2">Tên tag *</label>
            <input
              :value="formData.name"
              @input="e => { updateField('name', e.target.value); generateSlug() }"
              type="text"
              required
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              placeholder="Nhập tên tag"
            />
          </div>

          <div class="col-span-2">
            <label class="block text-sm font-semibold text-gray-400 mb-2">Slug *</label>
            <input
              :value="formData.slug"
              @input="e => updateField('slug', e.target.value)"
              type="text"
              required
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#b8e62e]/20"
              placeholder="slug-tu-dong-tao"
            />
          </div>

          <div class="col-span-2">
            <label class="block text-sm font-semibold text-gray-400 mb-2">Mô tả</label>
            <textarea
              :value="formData.description"
              @input="e => updateField('description', e.target.value)"
              rows="3"
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 resize-none focus:shadow-lg focus:shadow-[#b8e62e]/20"
              placeholder="Nhập mô tả tag"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-400 mb-2">Màu sắc</label>
            <input
              :value="formData.color"
              @input="e => updateField('color', e.target.value)"
              type="color"
              class="w-full h-12 bg-[#0f1416] border border-gray-700 rounded-lg cursor-pointer focus:border-[#b8e62e] focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-400 mb-2">Trạng thái</label>
            <select
              :value="formData.status"
              @change="e => updateField('status', e.target.value)"
              class="w-full bg-[#0f1416] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#b8e62e] focus:outline-none transition-all duration-300 cursor-pointer focus:shadow-lg focus:shadow-[#b8e62e]/20"
            >
              <option value="active">Hoạt động</option>
              <option value="inactive">Không hoạt động</option>
            </select>
          </div>
        </div>

        <div class="flex items-center gap-3 pt-4">
          <button
            type="submit"
            class="flex-1 bg-[#b8e62e] hover:bg-[#a0d020] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#b8e62e]/50 active:scale-95"
          >
            {{ tag ? 'Cập Nhật' : 'Tạo Mới' }}
          </button>
          <button
            type="button"
            @click="emit('close')"
            class="flex-1 bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

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

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}
</style>