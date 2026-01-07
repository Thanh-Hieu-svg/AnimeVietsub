<script setup>
const items = [
  {
    icon: "link",
    title: "LINK RÚT GỌN",
    desc: "Lưu lại để truy cập khi nhà mạng chặn!",
    actions: [
      {
        label: "bit.ly/animevietsubtv",
        type: "danger",
        icon: "copy"
      },
    ],
  },
  {
    icon: "users",
    title: "CỘNG ĐỒNG",
    desc: "Tham gia để cập nhật và ủng hộ AnimeVietsub!",
    actions: [
      { label: "Facebook", type: "facebook", icon: "facebook" },
      { label: "Discord", type: "discord", icon: "discord" },
    ],
  },
  {
    icon: "database",
    title: "KHÔI PHỤC DỮ LIỆU",
    desc: "Lấy lịch sử xem & đăng nhập từ tên miền cũ",
    actions: [
      { label: "TẢI NGAY", type: "success", icon: "download" },
    ],
  },
];

const buttonClass = (type) => {
  const map = {
    danger: "bg-red-500 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50",
    facebook: "bg-[#4267B2] hover:bg-[#365899] hover:shadow-lg hover:shadow-blue-500/50",
    discord: "bg-[#5865F2] hover:bg-[#4752C4] hover:shadow-lg hover:shadow-purple-500/50",
    success: "bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/50",
  };
  return map[type] || "bg-gray-500";
};

const iconType = (icon) => {
  // Mapping icon sang FontAwesome brands hoặc solid
  const brands = ['facebook', 'discord'];
  return brands.includes(icon) ? 'fab' : 'fas';
};
</script>

<template>
  <section class="space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] px-6 py-5 shadow-lg border border-gray-800 hover:border-[#b8e62e]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#b8e62e]/10 animate-fade-in group"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <!-- Left -->
      <div class="flex items-center gap-4">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-full bg-[#b8e62e]/10 text-[#b8e62e] border border-[#b8e62e]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
        >
          <font-awesome-icon :icon="['fas', item.icon]" class="w-5 h-5" />
        </div>

        <div>
          <h4 class="text-sm font-bold text-white group-hover:text-[#b8e62e] transition-colors duration-300">
            {{ item.title }}
          </h4>
          <p class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {{ item.desc }}
          </p>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3 flex-wrap">
        <button
          v-for="(action, i) in item.actions"
          :key="i"
          class="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 group/btn"
          :class="buttonClass(action.type)"
        >
          <font-awesome-icon 
            :icon="[iconType(action.icon), action.icon]" 
            class="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" 
          />
          <span>{{ action.label }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fade In Animation */
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