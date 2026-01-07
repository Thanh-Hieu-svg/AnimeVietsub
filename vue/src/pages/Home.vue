<script setup>
import AnnouncementPanel from "../components/widgets/AnnouncementPanel.vue";
import AnimeCarousel from "../components/cards/AnimeCarousel.vue";
import AnimeHeroCarousel from "../components/Banner/AnimeHeroCarousel.vue";
import AnimeCard from "../components/cards/AnimeCard.vue";
import ImageAnimeVsub from "../assets/images/animevsub.jpg";

// Dữ liệu mẫu cho anime
const featuredAnimes = [
  {
    id: 1,
    title: "Spy x Family Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 9.6,
    status: "completed",
    season: "Season 3",
  },
  {
    id: 2,
    title: "Jujutsu Kaisen Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.2,
    status: "airing",
    season: "Season 2",
  },
  {
    id: 3,
    title: "Attack on Titan Final Season",
    thumbnail: ImageAnimeVsub,
    rating: 9.8,
    status: "completed",
    season: "Final Season",
  },
  {
    id: 4,
    title: "Demon Slayer Season 4",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "airing",
    season: "Season 4",
  },
  {
    id: 5,
    title: "My Hero Academia Season 7",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 7",
  },
  {
    id: 6,
    title: "One Piece",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Arc Egghead",
  },
  {
    id: 7,
    title: "Attack on Titan Final Season",
    thumbnail: ImageAnimeVsub,
    rating: 9.8,
    status: "completed",
    season: "Final Season",
  },
  {
    id: 8,
    title: "Demon Slayer Season 4",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "airing",
    season: "Season 4",
  },
  {
    id: 9,
    title: "My Hero Academia Season 7",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 7",
  },
  {
    id: 10,
    title: "One Piece",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Arc Egghead",
  },
];

// Anime Mới Cập Nhật (12 anime)
const newAnimes = [
  {
    id: 11,
    title: "Frieren: Beyond Journey's End",
    thumbnail: ImageAnimeVsub,
    rating: 9.7,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 12,
    title: "Chainsaw Man",
    thumbnail: ImageAnimeVsub,
    rating: 8.8,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 13,
    title: "Blue Lock Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 8.5,
    status: "airing",
    season: "Season 2",
  },
  {
    id: 14,
    title: "Mushoku Tensei Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.1,
    status: "completed",
    season: "Season 2",
  },
  {
    id: 15,
    title: "The Apothecary Diaries",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 1",
  },
  {
    id: 16,
    title: "Classroom of the Elite Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 8.7,
    status: "airing",
    season: "Season 3",
  },
  {
    id: 17,
    title: "Tokyo Revengers Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 8.3,
    status: "completed",
    season: "Season 3",
  },
  {
    id: 18,
    title: "Vinland Saga Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 9.3,
    status: "completed",
    season: "Season 2",
  },
  {
    id: 19,
    title: "Hell's Paradise",
    thumbnail: ImageAnimeVsub,
    rating: 8.6,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 20,
    title: "Oshi no Ko",
    thumbnail: ImageAnimeVsub,
    rating: 9.0,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 21,
    title: "Undead Unluck",
    thumbnail: ImageAnimeVsub,
    rating: 8.4,
    status: "airing",
    season: "Season 1",
  },
  {
    id: 22,
    title: "Ragna Crimson",
    thumbnail: ImageAnimeVsub,
    rating: 8.2,
    status: "airing",
    season: "Season 1",
  },
];

// Anime Đang Hot (12 anime - được xem nhiều trong mùa)
const trendingAnimes = [
  {
    id: 23,
    title: "Solo Leveling",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "airing",
    season: "Season 1",
  },
  {
    id: 24,
    title: "Demon Slayer: Hashira Training Arc",
    thumbnail: ImageAnimeVsub,
    rating: 9.6,
    status: "airing",
    season: "Season 4",
  },
  {
    id: 25,
    title: "Kaiju No. 8",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "airing",
    season: "Season 1",
  },
  {
    id: 26,
    title: "Wind Breaker",
    thumbnail: ImageAnimeVsub,
    rating: 8.7,
    status: "airing",
    season: "Season 1",
  },
  {
    id: 27,
    title: "That Time I Got Reincarnated as a Slime Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 9.0,
    status: "airing",
    season: "Season 3",
  },
  {
    id: 28,
    title: "Tower of God Season 2",
    thumbnail: ImageAnimeVsub,
    rating: 8.5,
    status: "airing",
    season: "Season 2",
  },
  {
    id: 29,
    title: "Konosuba Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 8.8,
    status: "airing",
    season: "Season 3",
  },
  {
    id: 30,
    title: "Re:Zero Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 9.2,
    status: "airing",
    season: "Season 3",
  },
  {
    id: 31,
    title: "Overlord Season 4",
    thumbnail: ImageAnimeVsub,
    rating: 8.6,
    status: "completed",
    season: "Season 4",
  },
  {
    id: 32,
    title: "Bleach: Thousand-Year Blood War Part 3",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "airing",
    season: "Part 3",
  },
  {
    id: 33,
    title: "Black Clover: Sword of the Wizard King",
    thumbnail: ImageAnimeVsub,
    rating: 8.3,
    status: "completed",
    season: "Movie",
  },
  {
    id: 34,
    title: "Mob Psycho 100 Season 3",
    thumbnail: ImageAnimeVsub,
    rating: 9.1,
    status: "completed",
    season: "Season 3",
  },
];

// Anime Đề Cử (12 anime - được biên tập viên đề xuất)
const recommendedAnimes = [
  {
    id: 35,
    title: "Steins;Gate",
    thumbnail: ImageAnimeVsub,
    rating: 9.8,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 36,
    title: "Fullmetal Alchemist: Brotherhood",
    thumbnail: ImageAnimeVsub,
    rating: 9.9,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 37,
    title: "Hunter x Hunter",
    thumbnail: ImageAnimeVsub,
    rating: 9.7,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 38,
    title: "Code Geass",
    thumbnail: ImageAnimeVsub,
    rating: 9.5,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 39,
    title: "Death Note",
    thumbnail: ImageAnimeVsub,
    rating: 9.6,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 40,
    title: "Monster",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 41,
    title: "Cowboy Bebop",
    thumbnail: ImageAnimeVsub,
    rating: 9.3,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 42,
    title: "Violet Evergarden",
    thumbnail: ImageAnimeVsub,
    rating: 9.2,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 43,
    title: "Made in Abyss",
    thumbnail: ImageAnimeVsub,
    rating: 9.1,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 44,
    title: "Haikyuu!!",
    thumbnail: ImageAnimeVsub,
    rating: 9.0,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 45,
    title: "Your Lie in April",
    thumbnail: ImageAnimeVsub,
    rating: 8.9,
    status: "completed",
    season: "Season 1",
  },
  {
    id: 46,
    title: "A Silent Voice",
    thumbnail: ImageAnimeVsub,
    rating: 9.4,
    status: "completed",
    season: "Movie",
  },
];

// Dữ liệu cho Hero Banner (Carousel)
const heroAnimes = [
  {
    id: 1,
    title: "Spy x Family Season 3",
    banner: ImageAnimeVsub,
    rating: 9.6,
    episodes: "25 Tập",
    year: "2024",
    description: "Loid Forger, một điệp viên hàng đầu, phải lập một gia đình giả để thực hiện nhiệm vụ. Anh nhận nuôi Anya, một cô bé có khả năng đọc suy nghĩ, và kết hôn giả với Yor, một sát thủ chuyên nghiệp. Câu chuyện hài hước và cảm động về một gia đình bất thường.",
    studio: "Wit Studio & CloverWorks",
    genres: ["Action", "Comedy", "Shounen", "Supernatural"]
  },
  {
    id: 2,
    title: "Jujutsu Kaisen Season 2",
    banner: ImageAnimeVsub,
    rating: 9.2,
    episodes: "23 Tập",
    year: "2023",
    description: "Yuji Itadori tiếp tục cuộc chiến chống lại các lời nguyền mạnh mẽ. Season 2 tập trung vào arc Shibuya với những trận chiến gay cấn và bi thảm nhất của series.",
    studio: "MAPPA",
    genres: ["Action", "Dark Fantasy", "Shounen"]
  },
  {
    id: 3,
    title: "Attack on Titan Final Season",
    banner: ImageAnimeVsub,
    rating: 9.8,
    episodes: "28 Tập",
    year: "2023",
    description: "Kết thúc hoành tráng của series anime huyền thoại. Eren Yeager và đồng đội đối mặt với những sự thật tàn khốc về thế giới và lựa chọn định mệnh của nhân loại.",
    studio: "MAPPA",
    genres: ["Action", "Drama", "Dark Fantasy"]
  }
];
</script>

<template>
  <div class="py-6">
    <!-- Announcement Panel -->
    <AnnouncementPanel />
    
    <!-- Anime Nổi Bật -->
    <section class="mt-8">
      <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'trophy']" class="text-[#b8e62e] w-6 h-6" />
        Anime Nổi Bật
      </h2>
      <AnimeCarousel :animes="featuredAnimes" />
    </section>

    <!-- Hero Banner Carousel -->
    <section class="mt-12">
      <AnimeHeroCarousel :animes="heroAnimes" />
    </section>

    <!-- Anime Mới Cập Nhật -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'clock']" class="text-[#b8e62e] w-6 h-6" />
        Anime Mới Cập Nhật
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <AnimeCard 
          v-for="anime in newAnimes" 
          :key="anime.id" 
          :anime="anime" 
        />
      </div>
      <!-- Nút Xem Thêm -->
      <div class="mt-6">
        <a 
          href="/anime/new" 
          class="w-full flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#b8e62e] text-white hover:text-black px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 group border border-[#b8e62e]/20 hover:border-[#b8e62e] hover:shadow-lg hover:shadow-[#b8e62e]/50 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Xem thêm</span>
          <font-awesome-icon 
            :icon="['fas', 'arrow-right']" 
            class="transition-transform duration-300 group-hover:translate-x-2" 
          />
        </a>
      </div>
    </section>

    <!-- Anime Đang Hot -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'fire']" class="text-[#b8e62e] w-6 h-6" />
        Anime Đang Hot
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <AnimeCard 
          v-for="anime in trendingAnimes" 
          :key="anime.id" 
          :anime="anime" 
        />
      </div>
      <!-- Nút Xem Thêm -->
      <div class="mt-6">
        <a 
          href="/anime/trending" 
          class="w-full flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#b8e62e] text-white hover:text-black px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 group border border-[#b8e62e]/20 hover:border-[#b8e62e] hover:shadow-lg hover:shadow-[#b8e62e]/50 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Xem thêm</span>
          <font-awesome-icon 
            :icon="['fas', 'arrow-right']" 
            class="transition-transform duration-300 group-hover:translate-x-2" 
          />
        </a>
      </div>
    </section>

    <!-- Anime Đề Cử -->
    <section class="mt-12">
      <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
         <font-awesome-icon :icon="['fas', 'star']" class="text-[#b8e62e] w-6 h-6" />
        Anime Đề Cử
        <span class="text-xs font-normal text-gray-400 ml-2">● Được biên tập viên gợi ý</span>
      </h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <AnimeCard 
          v-for="anime in recommendedAnimes" 
          :key="anime.id" 
          :anime="anime" 
        />
      </div>
      <!-- Nút Xem Thêm -->
      <div class="mt-6">
        <a 
          href="/anime/recommended" 
          class="w-full flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#b8e62e] text-white hover:text-black px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 group border border-[#b8e62e]/20 hover:border-[#b8e62e] hover:shadow-lg hover:shadow-[#b8e62e]/50 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Xem thêm</span>
          <font-awesome-icon 
            :icon="['fas', 'arrow-right']" 
            class="transition-transform duration-300 group-hover:translate-x-2" 
          />
        </a>
      </div>
    </section>
  </div>
</template>