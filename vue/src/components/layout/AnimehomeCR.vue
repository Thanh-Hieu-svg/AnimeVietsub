<script setup>
import AnimeCarouselCR from "@components/AnimeCarousel.vue";

const animes = [
  {
    id: 1,
    title: "Spy x Family 3rd Season",
    thumbnail: "/images/spyxfamily.jpg",
    rating: 9.6,
    status: "completed",
    season: "Season 3",
  },
  // ...
];
</script>

<template>
  <section class="px-6 py-6">
    <h2 class="text-white text-xl font-semibold mb-4">
      Anime nổi bật
    </h2>

    <AnimeCarouselCR :animes="animes" />
  </section>
</template>
