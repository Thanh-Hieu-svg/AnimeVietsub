<script setup>
import AnimeCard from "./AnimeCard.vue";

defineProps({
  animes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="grid grid-cols-2
           sm:grid-cols-3
           md:grid-cols-4
           lg:grid-cols-5
           xl:grid-cols-6
           gap-4"
  >
    <AnimeCard
      v-for="anime in animes"
      :key="anime.id"
      :anime="anime"
    />
  </div>
</template>