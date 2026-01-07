<template>
  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 space-y-6">

    <!-- PLAYER -->
    <VideoPlayer />

    <!-- SERVER (Horizontal) -->
    <ServerSelect />

    <!-- EPISODES -->
    <EpisodeList :total-episodes="13" />

    <!-- NOTE -->
    <div class="bg-gradient-to-r from-[#b8e62e]/10 to-transparent border border-[#b8e62e]/30 text-white text-sm p-4 rounded-xl space-y-2 shadow-lg">
      <p class="flex items-center gap-2">
        <font-awesome-icon icon="info-circle" class="text-[#b8e62e]" />
        <span>Xem lịch chiếu những bộ anime khác tại đây!!</span>
      </p>
      <p class="flex items-center gap-2 text-[#b8e62e] font-semibold">
        <font-awesome-icon icon="heart" class="text-red-500" />
        <span>Click quảng cáo hoặc like, share Facebook giúp xem Anime mượt hơn!!</span>
      </p>
    </div>

    <!-- ANIME HERO WITH STATS (No Actions) -->
    <AnimeHero :show-actions="false" />

    <!-- RELATED ANIME -->
    <RelatedAnime />

    <!-- COMMENT SECTION -->
    <CommentSection />
  </div>
</template>

<script setup>
import VideoPlayer from "@/components/watch/VideoPlayer.vue"
import ServerSelect from "@/components/watch/ServerSelect.vue"
import EpisodeList from "@/components/common/EpisodeList.vue"
import AnimeHero from "@/components/Detail/AnimeHero.vue"
import RelatedAnime from "@/components/watch/RelatedAnime.vue"
import CommentSection from "@/components/watch/CommentSection.vue"
</script>