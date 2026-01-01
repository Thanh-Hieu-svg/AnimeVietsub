<script setup>
const items = [
  {
    icon: "📌",
    title: "LINK RÚT GỌN",
    desc: "Lưu lại để truy cập khi nhà mạng chặn!",
    actions: [
      {
        label: "bit.ly/animevietsubtv",
        type: "danger",
      },
    ],
  },
  {
    icon: "🤝",
    title: "CỘNG ĐỒNG",
    desc: "Tham gia để cập nhật và ủng hộ AnimeVietsub!",
    actions: [
      { label: "Facebook", type: "facebook" },
      { label: "Discord", type: "discord" },
    ],
  },
  {
    icon: "🚀",
    title: "KHÔI PHỤC DỮ LIỆU",
    desc: "Lấy lịch sử xem & đăng nhập từ tên miền cũ",
    actions: [
      { label: "TẢI NGAY", type: "success" },
    ],
  },
];

const buttonClass = (type) => {
  const map = {
    danger: "bg-red-500 hover:bg-red-600",
    facebook: "bg-[#4267B2] hover:bg-[#365899]",
    discord: "bg-[#5865F2] hover:bg-[#4752C4]",
    success: "bg-green-500 hover:bg-green-600",
  };
  return map[type] || "bg-gray-500";
};
</script>

<template>
  <section class="space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#3b2f2f] to-[#2b2b2b] px-6 py-5 shadow-lg"
    >
      <!-- Left -->
      <div class="flex items-center gap-4">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-lg"
        >
          {{ item.icon }}
        </div>

        <div>
          <h4 class="text-sm font-bold text-white">
            {{ item.title }}
          </h4>
          <p class="text-sm text-gray-300">
            {{ item.desc }}
          </p>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <button
          v-for="(action, i) in item.actions"
          :key="i"
          class="rounded-full px-4 py-2 text-sm font-semibold text-white transition"
          :class="buttonClass(action.type)"
        >
          {{ action.label }}
        </button>
      </div>
    </div>
  </section>
</template>
