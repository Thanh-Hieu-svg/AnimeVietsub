<script setup>
import { ref } from 'vue'
import ButtonAction from '../widgets/ButtonActions.vue'
import AnimeStats from '../common/AnimeStats.vue'
import defaultBanner from '@/assets/images/animevsub.jpg'
import defaultPoster from '@/assets/images/animevsub.jpg'

const props = defineProps({
  anime: {
    type: Object,
    default: () => ({
      title: 'Spy x Family',
      banner: defaultBanner,
      poster: defaultPoster,
      rating: 9.6,
      year: 2024,
      episodes: '13/13',
      totalEpisodes: 13,
      status: 'Hoàn thành',
      description: 'Loid Forger, một điệp viên hàng đầu, phải lập một gia đình giả để thực hiện nhiệm vụ...',
      views: 1250000,
      seasons: [
        { id: 1, name: 'Phần 1', episodes: 12 },
        { id: 2, name: 'Phần 2', episodes: 13 },
        { id: 3, name: 'Phần 3', episodes: 12, current: true },
      ]
    })
  },
  showActions: {
    type: Boolean,
    default: true
  }
})

const selectedSeason = ref(3)

const selectSeason = (seasonId) => {
  selectedSeason.value = seasonId
}
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-2xl">
    <!-- Hero Banner -->
    <div class="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
      <!-- Background Image with Gradient Overlay -->
      <div 
        class="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
        :style="`background-image: url(${anime.banner})`"
      ></div>
      
      <!-- Multi-layer Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#0f1416] via-transparent to-transparent"></div>

      <!-- Content Container -->
      <div class="relative max-w-[1280px] mx-auto h-full flex items-center px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8 w-full pb-8">
          
          <!-- Poster Image -->
          <div class="flex-shrink-0 animate-slide-in-left">
            <div class="relative group/poster">
              <img
                :src="anime.poster"
                :alt="anime.title"
                class="w-48 md:w-56 lg:w-64 rounded-xl shadow-2xl transform transition-all duration-500 group-hover/poster:scale-105 group-hover/poster:shadow-[#b8e62e]/50"
              />
              
              <!-- Rating Badge -->
              <div class="absolute -top-3 -right-3 bg-[#b8e62e] text-black font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1 animate-pulse-slow z-10">
                <font-awesome-icon icon="star" class="text-sm" />
                <span>{{ anime.rating }}</span>
              </div>
            </div>
          </div>

          <!-- Info Section -->
          <div class="flex-1 space-y-4 md:space-y-6 text-center md:text-left animate-slide-in-right">
            <!-- Title -->
            <div class="space-y-2">
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in">
                {{ anime.title }}
              </h1>
              <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm animate-fade-in" style="animation-delay: 0.1s">
                <span class="px-3 py-1 bg-[#b8e62e]/20 text-[#b8e62e] rounded-full font-semibold border border-[#b8e62e]/30">
                  {{ anime.year }}
                </span>
                <span class="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full font-semibold border border-blue-500/30">
                  {{ anime.episodes }} Tập
                </span>
                <span class="px-3 py-1 bg-green-500/20 text-green-400 rounded-full font-semibold border border-green-500/30">
                  {{ anime.status }}
                </span>
              </div>
            </div>

            <!-- Description -->
            <p class="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl line-clamp-3 animate-fade-in" style="animation-delay: 0.2s">
              {{ anime.description }}
            </p>

            <!-- Conditional Rendering: Actions or Stats -->
            <div class="animate-fade-in" style="animation-delay: 0.3s">
              <ButtonAction v-if="showActions" :anime-id="anime.id" />
              <AnimeStats 
                v-else 
                :rating="anime.rating" 
                :total-episodes="anime.totalEpisodes" 
                :year="anime.year" 
                :views="anime.views" 
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1416] to-transparent"></div>
    </div>

    <!-- Season Selector Bar (Full Width Bottom) -->
    <div 
      v-if="anime.seasons && anime.seasons.length > 1" 
      class="relative bg-[#0f1416] border-t border-[#b8e62e]/20"
    >
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-4">
        <div class="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <!-- Label -->
          <div class="flex items-center gap-2 text-white whitespace-nowrap pr-3 border-r border-[#b8e62e]/30">
            <font-awesome-icon icon="film" class="text-[#b8e62e]" />
            <span class="text-sm font-semibold">Chọn phần:</span>
          </div>

          <!-- Season Buttons -->
          <div class="flex gap-2">
            <button
              v-for="season in anime.seasons"
              :key="season.id"
              @click="selectSeason(season.id)"
              class="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap"
              :class="selectedSeason === season.id 
                ? 'bg-[#b8e62e] text-black shadow-lg shadow-[#b8e62e]/30 scale-105' 
                : 'bg-[#1e293b] text-white hover:bg-[#2d3748] hover:text-[#b8e62e] border border-gray-700/50 hover:border-[#b8e62e]/50'"
            >
              <font-awesome-icon 
                :icon="selectedSeason === season.id ? 'play-circle' : 'film'" 
                class="text-xs"
              />
              <span>{{ season.name }}</span>
              <span class="text-xs opacity-70">({{ season.episodes }} tập)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes pulseSlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
.animate-slide-in-left { animation: slideInLeft 0.6s ease-out forwards; }
.animate-slide-in-right { animation: slideInRight 0.6s ease-out forwards; }
.animate-pulse-slow { animation: pulseSlow 2s ease-in-out infinite; }

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>