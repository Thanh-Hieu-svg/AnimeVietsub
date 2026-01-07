<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

defineProps({
  animes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="relative">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :loop="true"
      :pagination="{
        clickable: true,
        el: '.hero-pagination',
      }"
      class="h-[480px] rounded-xl overflow-hidden"
    >
      <SwiperSlide
        v-for="anime in animes"
        :key="anime.id"
      >
        <!-- Slide -->
        <div class="relative w-full h-full">
          <!-- Background -->
          <img
            :src="anime.banner"
            class="absolute inset-0 w-full h-full object-cover"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0
                   bg-gradient-to-r
                   from-black/90 via-black/70 to-black/10"
          ></div>

          <!-- Content -->
          <div
            class="relative z-10 h-full
                   flex flex-col justify-center
                   px-8 md:px-14 max-w-3xl"
          >
            <!-- Title -->
            <h1 class="text-white text-3xl md:text-4xl font-bold mb-4">
              {{ anime.title }}
            </h1>

            <!-- Meta -->
            <div class="flex items-center gap-4 text-sm text-gray-300 mb-4">
              <span class="text-green-400 font-semibold">
                ⭐ {{ anime.rating }}
              </span>
              <span>⏱ {{ anime.episodes }}</span>
              <span>📅 {{ anime.year }}</span>
              <span class="px-2 py-0.5 rounded-full bg-red-600 text-white text-xs">
                HD
              </span>
            </div>

            <!-- Description -->
            <p
              class="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-3"
            >
              {{ anime.description }}
            </p>

            <!-- Studio -->
            <div class="text-gray-300 text-sm mb-1">
              🎬 {{ anime.studio }}
            </div>

            <!-- Genres -->
            <div class="text-gray-300 text-sm mb-6 line-clamp-1">
              🏷 {{ anime.genres.join(", ") }}
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-4">
              <button
                class="flex items-center gap-2
                       bg-red-600 hover:bg-red-700
                       text-white font-semibold
                       px-6 py-3 rounded-lg transition"
              >
                ▶ Xem Phim
              </button>

              <button
                class="w-12 h-12 rounded-full
                       bg-white/10 hover:bg-white/20
                       flex items-center justify-center
                       text-white text-xl"
              >
                ⋯
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Custom pagination dots -->
    <div
      class="hero-pagination absolute bottom-6 right-10
             flex gap-2 z-20"
    ></div>
  </section>
</template>

<style scoped>
.hero-pagination {
  position: absolute;
  bottom: 20px;
  right: 50px !important;  
  left: auto !important;  
  width: auto !important;
  text-align: right;
}

.hero-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.4);
  opacity: 1;
  margin: 0 4px;
}

.hero-pagination .swiper-pagination-bullet-active {
  background: #ef4444;
  width: 24px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
</style>
