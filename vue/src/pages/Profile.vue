<script setup>
import { ref, computed } from 'vue'
import ProfileHeader from '@/components/profile/ProfileHeader.vue'
import AnimeList from '@/components/profile/AnimeList.vue'
import SettingsTab from '@/components/profile/SettingsTab.vue'
import EditProfileModal from '@/components/profile/EditProfileModal.vue'
import ImagesAnime from '@/assets/images/animevsub.jpg'

const user = ref({
  username: 'AnimeFan2024',
  email: 'animefan@gmail.com',
  avatar: 'https://ui-avatars.com/api/?name=Anime+Fan&background=b8e62e&color=000&size=200&bold=true',
  joinDate: '15/01/2024',
  favoriteGenres: ['Action', 'Romance', 'Comedy'],
  bio: 'Yêu thích anime, đặc biệt là thể loại hành động và tình cảm. Mục tiêu là xem hết 1000 bộ anime! 🎌',
  stats: {
    watching: 12,
    completed: 156,
    planToWatch: 48,
    totalHours: 2340
  }
})

const activeTab = ref('overview')
const isEditingProfile = ref(false)

// Pagination
const currentPage = ref(1)
const itemsPerPage = 8
const totalPages = computed(() => Math.ceil(allAnime.value.length / itemsPerPage))

const handlePageChange = (page) => {
  currentPage.value = page
  const element = document.querySelector('.anime-grid-section')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Edit Profile
const handleSaveProfile = (editedData) => {
  user.value.username = editedData.username
  user.value.email = editedData.email
  user.value.bio = editedData.bio
  isEditingProfile.value = false
}

const allAnime = ref([
  { id: 1, title: 'Frieren: Beyond Journey\'s End', thumbnail: ImagesAnime, episode: 16, status: 'completed', rating: 9.2, season: 'Tập 16/28' },
  { id: 2, title: 'Spy x Family Season 2', thumbnail: ImagesAnime, episode: 12, status: 'completed', rating: 8.8, season: 'Tập 12/12' },
  { id: 3, title: 'Jujutsu Kaisen', thumbnail: ImagesAnime, episode: 8, status: 'ongoing', rating: 8.6, season: 'Tập 8/24' },
  { id: 4, title: 'Attack on Titan Final Season', thumbnail: ImagesAnime, episode: 87, status: 'completed', rating: 9.5, season: 'Hoàn thành' },
  { id: 5, title: 'Demon Slayer: Kimetsu no Yaiba', thumbnail: ImagesAnime, episode: 26, status: 'ongoing', rating: 8.7, season: 'Mùa 3' },
  { id: 6, title: 'One Piece', thumbnail: ImagesAnime, episode: 1090, status: 'ongoing', rating: 8.9, season: 'Tập 1090/?' },
  { id: 7, title: 'My Hero Academia', thumbnail: ImagesAnime, episode: 138, status: 'ongoing', rating: 8.4, season: 'Mùa 7' },
  { id: 8, title: 'Bleach: Thousand-Year Blood War', thumbnail: ImagesAnime, episode: 26, status: 'ongoing', rating: 9.0, season: 'Phần 2' },
  { id: 9, title: 'Chainsaw Man', thumbnail: ImagesAnime, episode: 12, status: 'completed', rating: 8.8, season: 'Mùa 1' },
  { id: 10, title: 'Tokyo Revengers', thumbnail: ImagesAnime, episode: 50, status: 'completed', rating: 8.3, season: 'Mùa 2' },
  { id: 11, title: 'Mob Psycho 100', thumbnail: ImagesAnime, episode: 37, status: 'completed', rating: 8.9, season: 'Hoàn thành' },
  { id: 12, title: 'Hunter x Hunter', thumbnail: ImagesAnime, episode: 148, status: 'completed', rating: 9.1, season: 'Hoàn thành' },
  { id: 13, title: 'Vinland Saga', thumbnail: ImagesAnime, episode: 48, status: 'completed', rating: 8.9, season: 'Mùa 2' },
  { id: 14, title: 'Blue Lock', thumbnail: ImagesAnime, episode: 24, status: 'completed', rating: 8.5, season: 'Mùa 1' },
  { id: 15, title: 'Dr. Stone', thumbnail: ImagesAnime, episode: 58, status: 'ongoing', rating: 8.4, season: 'Mùa 3' },
  { id: 16, title: 'The Eminence in Shadow', thumbnail: ImagesAnime, episode: 20, status: 'ongoing', rating: 8.3, season: 'Mùa 2' },
  { id: 17, title: 'Mushoku Tensei', thumbnail: ImagesAnime, episode: 23, status: 'ongoing', rating: 8.7, season: 'Mùa 2' },
  { id: 18, title: 'Overlord', thumbnail: ImagesAnime, episode: 52, status: 'completed', rating: 8.0, season: 'Mùa 4' },
  { id: 19, title: 'Re:Zero', thumbnail: ImagesAnime, episode: 50, status: 'ongoing', rating: 8.6, season: 'Mùa 2' },
  { id: 20, title: 'Konosuba', thumbnail: ImagesAnime, episode: 20, status: 'completed', rating: 8.2, season: 'Mùa 2' }
])
</script>

<template>
  <div class="min-h-screen bg-[#0f1416] pt-24 pb-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
      
      <!-- Profile Header -->
      <ProfileHeader :user="user" @edit-profile="isEditingProfile = true" />

      <!-- Tabs -->
      <div class="bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#0f1416] rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50 animate-fade-in-up" style="animation-delay: 0.2s">
        <div class="flex border-b border-gray-800 overflow-x-auto">
          <button @click="activeTab = 'overview'" :class="activeTab === 'overview' ? 'text-[#b8e62e] border-[#b8e62e]' : 'text-gray-400 border-transparent'" class="px-6 py-4 font-bold text-sm border-b-2 transition-all hover:text-white whitespace-nowrap hover:scale-105">
            <font-awesome-icon icon="film" class="mr-2" />
            Anime gần đây
          </button>
          <button @click="activeTab = 'favorites'" :class="activeTab === 'favorites' ? 'text-[#b8e62e] border-[#b8e62e]' : 'text-gray-400 border-transparent'" class="px-6 py-4 font-bold text-sm border-b-2 transition-all hover:text-white whitespace-nowrap hover:scale-105">
            <font-awesome-icon icon="heart" class="mr-2" />
            Yêu thích
          </button>
          <button @click="activeTab = 'settings'" :class="activeTab === 'settings' ? 'text-[#b8e62e] border-[#b8e62e]' : 'text-gray-400 border-transparent'" class="px-6 py-4 font-bold text-sm border-b-2 transition-all hover:text-white whitespace-nowrap hover:scale-105">
            <font-awesome-icon icon="cog" class="mr-2" />
            Cài đặt
          </button>
        </div>

        <!-- Tab Content -->
        <div class="p-6">
          <transition name="fade" mode="out-in">
            <!-- Overview Tab -->
            <AnimeList
              v-if="activeTab === 'overview'"
              :anime-list="allAnime"
              :current-page="currentPage"
              :total-pages="totalPages"
              @page-change="handlePageChange"
            />

            <!-- Favorites Tab -->
            <div v-else-if="activeTab === 'favorites'" class="text-center py-12 animate-fade-in">
              <div class="inline-block animate-bounce-in">
                <font-awesome-icon icon="heart" class="text-gray-700 text-6xl mb-4" />
              </div>
              <p class="text-gray-400 text-lg">Chưa có anime yêu thích</p>
            </div>

            <!-- Settings Tab -->
            <SettingsTab v-else-if="activeTab === 'settings'" />
          </transition>
        </div>
      </div>

    </div>

    <!-- Edit Profile Modal -->
    <EditProfileModal
      :is-open="isEditingProfile"
      :user="user"
      @close="isEditingProfile = false"
      @save="handleSaveProfile"
    />
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-bounce-in {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>