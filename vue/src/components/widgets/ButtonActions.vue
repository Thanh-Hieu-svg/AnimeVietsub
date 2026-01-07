<script setup>
defineProps({
  animeId: {
    type: [String, Number],
    default: null
  }
})

const handleWatch = () => {
  console.log('Xem ngay')
  // Navigate to watch page
}

const handleFavorite = () => {
  console.log('Thêm vào yêu thích')
  // Add to favorites
}

const handleShare = () => {
  console.log('Chia sẻ')
  // Share functionality
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
    <!-- Watch Now Button -->
    <button 
      @click="handleWatch"
      class="flex items-center gap-2 bg-[#b8e62e] hover:bg-[#a0d020] text-black font-bold px-6 md:px-8 py-3 md:py-3.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#b8e62e]/50 active:scale-95 group"
    >
      <font-awesome-icon icon="play" class="transition-transform group-hover:translate-x-1" />
      <span>Xem Ngay</span>
    </button>
    
    <!-- Favorite Button -->
    <button 
      @click="handleFavorite"
      class="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40 active:scale-95 group"
    >
      <font-awesome-icon icon="heart" class="transition-transform group-hover:scale-110" />
      <span>Yêu Thích</span>
    </button>

    <!-- Share Button -->
    <button 
      @click="handleShare"
      class="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 md:px-8 py-3 md:py-3.5 rounded-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:border-white/40 active:scale-95 group"
    >
      <font-awesome-icon icon="share" class="transition-transform group-hover:rotate-12" />
      <span>Chia Sẻ</span>
    </button>
  </div>
</template>