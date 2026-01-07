<script setup>
import { ref, computed } from "vue"
import CommentItem from "./CommentItem.vue"

const commentText = ref("")
const displayLimit = ref(10)

// Fake data for demo
const allComments = ref([
  {
    id: 1,
    user: "AnimeFan01",
    avatar: "https://i.pravatar.cc/40?img=1",
    content: "Tập này coi đã ghê 🔥",
    time: "5 phút trước",
    likes: 12
  },
  {
    id: 2,
    user: "OtakuVN",
    avatar: "https://i.pravatar.cc/40?img=2",
    content: "Anya dễ thương quá 🥹",
    time: "30 phút trước",
    likes: 8
  },
  {
    id: 3,
    user: "MangaLover",
    avatar: "https://i.pravatar.cc/40?img=3",
    content: "Animation đẹp vcl",
    time: "1 giờ trước",
    likes: 15
  },
  {
    id: 4,
    user: "AnimeAddict",
    avatar: "https://i.pravatar.cc/40?img=4",
    content: "Bản nhạc cũng hay nữa",
    time: "2 giờ trước",
    likes: 6
  },
  {
    id: 5,
    user: "VietsubFan",
    avatar: "https://i.pravatar.cc/40?img=5",
    content: "Sub nhanh quá 👍",
    time: "3 giờ trước",
    likes: 20
  },
  {
    id: 6,
    user: "ConanFan",
    avatar: "https://i.pravatar.cc/40?img=6",
    content: "Mong có season tiếp",
    time: "5 giờ trước",
    likes: 10
  },
  {
    id: 7,
    user: "Weeb123",
    avatar: "https://i.pravatar.cc/40?img=7",
    content: "Đỉnh của chóp 🔥🔥",
    time: "6 giờ trước",
    likes: 18
  },
  {
    id: 8,
    user: "NarutoFan",
    avatar: "https://i.pravatar.cc/40?img=8",
    content: "Hơi chậm nhưng hay",
    time: "8 giờ trước",
    likes: 5
  },
  {
    id: 9,
    user: "OnePieceLover",
    avatar: "https://i.pravatar.cc/40?img=9",
    content: "Chất lượng top tier",
    time: "10 giờ trước",
    likes: 14
  },
  {
    id: 10,
    user: "AttackOnTitan",
    avatar: "https://i.pravatar.cc/40?img=10",
    content: "Remake khi nào?",
    time: "12 giờ trước",
    likes: 9
  },
  {
    id: 11,
    user: "DemonSlayer",
    avatar: "https://i.pravatar.cc/40?img=11",
    content: "Mãi yêu anime này",
    time: "1 ngày trước",
    likes: 25
  },
  {
    id: 12,
    user: "JujutsuKaisen",
    avatar: "https://i.pravatar.cc/40?img=12",
    content: "OST quá đỉnh luôn",
    time: "1 ngày trước",
    likes: 30
  },
])

const displayedComments = computed(() => {
  return allComments.value.slice(0, displayLimit.value)
})

const hasMore = computed(() => {
  return displayLimit.value < allComments.value.length
})

const loadMore = () => {
  displayLimit.value += 10
}

const submitComment = () => {
  if (!commentText.value.trim()) return

  allComments.value.unshift({
    id: Date.now(),
    user: "Bạn",
    avatar: "https://i.pravatar.cc/40",
    content: commentText.value,
    time: "Vừa xong",
    likes: 0
  })

  commentText.value = ""
}
</script>

<template>
  <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] rounded-2xl p-6 space-y-6 border border-gray-800/50 hover:border-[#b8e62e]/30 transition-all duration-300 shadow-xl">

    <!-- HEADER -->
    <div class="flex items-center justify-between pb-4 border-b border-gray-800">
      <h3 class="text-xl font-bold text-white flex items-center gap-2">
        <font-awesome-icon icon="comments" class="text-[#b8e62e]" />
        <span>Bình luận phim</span>
        <span class="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
          {{ allComments.length }}
        </span>
      </h3>
    </div>

    <!-- INPUT -->
    <div class="flex gap-4">
      <img
        src="https://i.pravatar.cc/40"
        class="w-10 h-10 rounded-full ring-2 ring-[#b8e62e]/30"
        alt="Avatar"
      />

      <div class="flex-1 space-y-3">
        <textarea
          v-model="commentText"
          placeholder="Nhập bình luận của bạn..."
          rows="3"
          class="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#b8e62e] focus:ring-2 focus:ring-[#b8e62e]/20 resize-none transition-all duration-300"
        ></textarea>

        <div class="flex justify-end">
          <button
            @click="submitComment"
            :disabled="!commentText.trim()"
            class="bg-[#b8e62e] hover:bg-[#a0d020] disabled:bg-gray-700 disabled:cursor-not-allowed text-black disabled:text-gray-500 px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#b8e62e]/50 active:scale-95 flex items-center gap-2"
          >
            <font-awesome-icon icon="paper-plane" />
            <span>Gửi bình luận</span>
          </button>
        </div>
      </div>
    </div>

    <!-- COMMENTS LIST -->
    <div class="space-y-4">
      <CommentItem
        v-for="item in displayedComments"
        :key="item.id"
        :comment="item"
      />
    </div>

    <!-- Load More Button -->
    <div v-if="hasMore" class="pt-4">
      <button
        @click="loadMore"
        class="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-gray-700 hover:border-[#b8e62e]/50 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group"
      >
        <font-awesome-icon icon="chevron-down" class="transition-transform duration-300 group-hover:translate-y-1" />
        <span>Tải thêm 10 bình luận</span>
        <span class="text-xs text-gray-400">({{ allComments.length - displayLimit }} còn lại)</span>
      </button>
    </div>

    <!-- End Message -->
    <div v-else-if="allComments.length > 0" class="pt-4 text-center">
      <p class="text-sm text-gray-500 flex items-center justify-center gap-2">
        <font-awesome-icon icon="check-circle" class="text-[#b8e62e]" />
        <span>Đã hiển thị tất cả bình luận</span>
      </p>
    </div>

    <!-- Empty State -->
    <div v-if="allComments.length === 0" class="text-center py-12">
      <font-awesome-icon icon="comment-slash" class="text-gray-600 text-4xl mb-3" />
      <p class="text-gray-500 text-sm">Chưa có bình luận nào. Hãy là người đầu tiên!</p>
    </div>
  </div>
</template>