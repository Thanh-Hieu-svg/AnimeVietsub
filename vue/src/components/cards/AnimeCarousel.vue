<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import AnimeCard from "./AnimeCard.vue";

defineProps({
  animes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="relative group/carousel">
    <!-- Swiper -->
    <Swiper
      :modules="[Navigation, Autoplay]"
      :slides-per-view="2"
      :space-between="16"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }"
      :breakpoints="{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
      }"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :speed="1000"
      class="pb-4"
    >
      <SwiperSlide v-for="anime in animes" :key="anime.id">
        <AnimeCard :anime="anime" />
      </SwiperSlide>
    </Swiper>

    <!-- Prev Button -->
    <button
      class="swiper-prev absolute left-0 top-1/2 -translate-y-1/2
             z-10 opacity-0 group-hover/carousel:opacity-100
             flex items-center justify-center
             w-12 h-20 bg-black/60 hover:bg-[#b8e62e] hover:text-black
             text-white text-2xl rounded-r-lg
             transition-all duration-300 hover:scale-110"
    >
      <font-awesome-icon :icon="['fas', 'chevron-left']" class="w-5 h-5" />
    </button>

    <!-- Next Button -->
    <button
      class="swiper-next absolute right-0 top-1/2 -translate-y-1/2
             z-10 opacity-0 group-hover/carousel:opacity-100
             flex items-center justify-center
             w-12 h-20 bg-black/60 hover:bg-[#b8e62e] hover:text-black
             text-white text-2xl rounded-l-lg
             transition-all duration-300 hover:scale-110"
    >
      <font-awesome-icon :icon="['fas', 'chevron-right']" class="w-5 h-5" />
    </button>
  </div>
</template>