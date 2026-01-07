<script setup>
import AnimeHero from "../components/Detail/AnimeHero.vue"
import AnimeTabs from "../components/Detail/AnimeTabs.vue"
import AnimeInfo from "../components/Detail/AnimeInfo.vue"
import EpisodeList from "../components/common/EpisodeList.vue"
import AnnouncementPanel from "@/components/widgets/AnnouncementPanel.vue"
</script>

<template>
  <div class="bg-[#0f1416] text-white min-h-screen">
    <div class="py-4">
      <AnnouncementPanel />
    </div>

    <!-- HERO BANNER -->
    <AnimeHero />

    <!-- MAIN CONTENT -->
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 space-y-8">
      <section class="animate-fade-in" style="animation-delay: 0.2s">
        <AnimeTabs />
      </section>

      <section class="animate-fade-in">
        <EpisodeList :total-episodes="13" />
      </section>

      <section class="animate-fade-in" style="animation-delay: 0.1s">
        <AnimeInfo />
      </section>

      

    </div>
  </div>
</template>

<style scoped>
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