<script setup>
import { computed } from "vue";

const props = defineProps({
  anime: {
    type: Object,
    required: true,
  },
});

const rating = computed(() => {
  const ratingValue = props.anime.rating
  if (ratingValue == null) return "N/A"
  
  // Parse to number if it's a string
  const numRating = typeof ratingValue === 'string' ? parseFloat(ratingValue) : ratingValue
  
  return isNaN(numRating) ? "N/A" : numRating.toFixed(1)
})

const statusLabel = computed(() =>
  props.anime.status === "completed" ? "HOÀN TẤT" : "ĐANG CHIẾU"
);

const statusClass = computed(() =>
  props.anime.status === "completed"
    ? "bg-red-500"
    : "bg-green-500"
);
</script>

<template>
  <div
    class="relative group bg-zinc-900 rounded-xl overflow-hidden cursor-pointer
           transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#b8e62e]/20"
  >
    <!-- Thumbnail -->
    <img
      :src="anime.thumbnail"
      :alt="anime.title"
      class="w-full h-[320px] object-cover
             transition duration-300
             group-hover:scale-105
             group-hover:blur-[1px]"
    />

    <!-- Dark overlay (hover) -->
    <div
      class="absolute inset-0
             bg-black/40
             opacity-0
             group-hover:opacity-100
             transition duration-300"
    ></div>

    <!-- Top Badges -->
    <div class="absolute top-2 left-0 right-0 flex items-start justify-between px-2 z-10 gap-2">
      <!-- Rating Badge -->
      <div
        class="flex items-center gap-1
               bg-black/80 text-yellow-400 text-xs font-bold
               px-2 py-1 rounded-md shadow-lg backdrop-blur-sm"
      >
        <font-awesome-icon icon="star" class="w-3 h-3" />
        <span>{{ rating }}</span>
      </div>

      <!-- Status Badge -->
      <div
        class="text-[10px] font-bold text-white uppercase tracking-wide
               px-2 py-1 rounded-md shadow-lg"
        :class="statusClass"
      >
        {{ statusLabel }}
      </div>
    </div>

    <!-- PLAY BUTTON (CHỈ HIỆN KHI HOVER) -->
    <div
      class="absolute inset-0 z-20
             flex items-center justify-center
             opacity-0
             group-hover:opacity-100
             transition duration-300"
    >
      <div
        class="w-16 h-16
               rounded-full
               border-4 border-white
               bg-black/40
               flex items-center justify-center
               text-white
               hover:scale-110 hover:bg-[#b8e62e] hover:border-[#b8e62e]
               transition-all duration-300"
      >
        <font-awesome-icon icon="play" class="w-6 h-6 ml-1" />
      </div>
    </div>

    <!-- Info -->
    <div
      class="absolute bottom-0 w-full p-4
             bg-gradient-to-t from-black/90 via-black/70 to-transparent"
    >
      <h3 class="text-white text-base font-semibold leading-snug line-clamp-2 mb-1">
        {{ anime.title }}
      </h3>
      <p class="text-zinc-400 text-xs">
        {{ anime.season }}
      </p>
    </div>
  </div>
</template>