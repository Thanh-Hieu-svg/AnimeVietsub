<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
      :modules="[Autoplay, Pagination, EffectFade]"
      :autoplay="{ 
        delay: 5000, 
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :loop="true"
      :pagination="{
        clickable: true,
        el: '.hero-pagination',
      }"
      :effect="'fade'"
      :fadeEffect="{
        crossFade: true
      }"
      :speed="1200"
      :grabCursor="true"
      class="h-[480px] rounded-xl overflow-hidden shadow-2xl"
    >
      <SwiperSlide
        v-for="anime in animes"
        :key="anime.id"
      >
        <!-- Slide -->
        <div class="relative w-full h-full">
          <!-- Background with Ken Burns effect -->
          <div class="absolute inset-0 overflow-hidden">
            <img
              :src="anime.banner"
              class="w-full h-full object-cover animate-ken-burns"
            />
          </div>

          <!-- Animated Overlay -->
          <div
            class="absolute inset-0
                   bg-gradient-to-r
                   from-black/90 via-black/70 to-black/10
                   animate-fade-in"
          ></div>

          <!-- Content -->
          <div
            class="relative z-10 h-full
                   flex flex-col justify-center
                   px-8 md:px-14 max-w-3xl"
          >
            <!-- Title -->
            <h1 class="text-white text-3xl md:text-4xl font-bold mb-4 animate-slide-in-left" style="animation-delay: 0.2s">
              {{ anime.title }}
            </h1>

            <!-- Meta -->
            <div class="flex items-center gap-4 text-sm text-gray-300 mb-4 animate-slide-in-left" style="animation-delay: 0.3s">
              <span class="text-[#b8e62e] font-semibold flex items-center gap-1 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <font-awesome-icon icon="star" class="text-yellow-400 animate-pulse-slow" />
                {{ anime.rating }}
              </span>
              <span class="flex items-center gap-1 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <font-awesome-icon icon="clock" class="text-[#b8e62e]" />
                {{ anime.episodes }}
              </span>
              <span class="flex items-center gap-1 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <font-awesome-icon icon="calendar" class="text-[#b8e62e]" />
                {{ anime.year }}
              </span>
              <span class="px-2 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold shadow-lg hover:shadow-red-600/50 transition-all hover:scale-110 cursor-pointer">
                HD
              </span>
            </div>

            <!-- Description -->
            <p
              class="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-3 animate-slide-in-left"
              style="animation-delay: 0.4s"
            >
              {{ anime.description }}
            </p>

            <!-- Studio -->
            <div class="text-gray-300 text-sm mb-1 flex items-center gap-2 animate-slide-in-left hover:text-[#b8e62e] transition-colors duration-300 cursor-pointer" style="animation-delay: 0.5s">
              <font-awesome-icon icon="film" class="text-[#b8e62e]" />
              {{ anime.studio }}
            </div>

            <!-- Genres -->
            <div class="text-gray-300 text-sm mb-6 line-clamp-1 flex items-center gap-2 animate-slide-in-left hover:text-[#b8e62e] transition-colors duration-300 cursor-pointer" style="animation-delay: 0.6s">
              <font-awesome-icon icon="tags" class="text-[#b8e62e]" />
              {{ anime.genres.join(", ") }}
            </div>

            <!-- Actions -->
            <div class="flex items-center gap-4 animate-slide-in-left" style="animation-delay: 0.7s">
              <button
                class="flex items-center gap-2
                       bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800
                       text-white font-bold
                       px-6 py-3 rounded-lg 
                       transition-all duration-300
                       shadow-lg hover:shadow-2xl hover:shadow-red-600/50
                       hover:scale-105 active:scale-95
                       relative overflow-hidden group/btn"
              >
                <div class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                <font-awesome-icon icon="play" class="relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
                <span class="relative z-10">Xem Phim</span>
              </button>

              <button
                class="w-12 h-12 rounded-full
                       bg-white/10 hover:bg-[#b8e62e] hover:text-black
                       backdrop-blur-sm
                       flex items-center justify-center
                       text-white
                       transition-all duration-300
                       hover:scale-110 active:scale-95
                       shadow-lg hover:shadow-xl hover:shadow-[#b8e62e]/50
                       group/icon"
                title="Thêm thông tin"
              >
                <font-awesome-icon icon="info-circle" class="text-xl group-hover/icon:rotate-12 transition-all duration-300" />
              </button>

              <button
                class="w-12 h-12 rounded-full
                       bg-white/10 hover:bg-[#b8e62e] hover:text-black
                       backdrop-blur-sm
                       flex items-center justify-center
                       text-white
                       transition-all duration-300
                       hover:scale-110 active:scale-95
                       shadow-lg hover:shadow-xl hover:shadow-[#b8e62e]/50
                       group/icon"
                title="Thêm vào yêu thích"
              >
                <font-awesome-icon icon="heart" class="text-xl group-hover/icon:scale-125 transition-all duration-300" />
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
/* Ken Burns effect - subtle zoom animation */
@keyframes kenBurns {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

.animate-ken-burns {
  animation: kenBurns 10s ease-in-out infinite alternate;
}

/* Fade in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

/* Slide in from left */
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
  animation: slideInLeft 0.8s ease-out forwards;
  opacity: 0;
}

/* Pulse slow for star */
@keyframes pulseSlow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulseSlow 2s ease-in-out infinite;
}

/* Pagination styles */
.hero-pagination {
  position: absolute;
  bottom: 20px;
  right: 50px !important;  
  left: auto !important;  
  width: auto !important;
  text-align: right;
}

.hero-pagination :deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.4);
  opacity: 1;
  margin: 0 4px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.hero-pagination :deep(.swiper-pagination-bullet-active) {
  background: linear-gradient(90deg, #b8e62e 0%, #a0d020 100%);
  width: 28px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(184, 230, 46, 0.6);
  transform: scale(1.1);
}

.hero-pagination :deep(.swiper-pagination-bullet:hover) {
  background: rgba(184, 230, 46, 0.6);
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(184, 230, 46, 0.4);
}

/* Smooth transitions for swiper */
:deep(.swiper-slide) {
  transition: opacity 1.2s ease-in-out;
}

:deep(.swiper-slide-active) {
  z-index: 10;
}
</style>