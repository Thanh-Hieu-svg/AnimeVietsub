<template>
  <header class="fixed top-0 left-0 right-0 bg-[#0f1416] shadow-lg z-50">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-3 sm:py-4">
      <div class="flex items-center justify-between gap-4">
        <!-- Logo with animation -->
        <div class="flex-shrink-0 animate-slide-in-left">
          <router-link to="/">
            <img 
              src="../../assets/images/logo.png" 
              alt="AnimeVib Logo" 
              class="h-8 sm:h-10 cursor-pointer hover:scale-110 transition-transform duration-300" 
            />
          </router-link>
        </div>

        <!-- Desktop Navigation Menu -->
        <nav class="hidden lg:flex items-center gap-6 flex-1">
          <router-link to="/" class="nav-item animate-fade-in" style="animation-delay: 0.1s">
            TRANG CHỦ
          </router-link>
          
          <div class="relative group animate-fade-in" style="animation-delay: 0.2s">
            <button class="nav-item flex items-center gap-1">
              DẠNG ANIME
              <font-awesome-icon icon="chevron-down" class="text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="film" class="text-xs mr-2" />
                TV Series
              </a>
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="film" class="text-xs mr-2" />
                Movie
              </a>
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="play-circle" class="text-xs mr-2" />
                OVA
              </a>
            </div>
          </div>

          <div class="relative group animate-fade-in" style="animation-delay: 0.3s">
            <button class="nav-item flex items-center gap-1">
              TOP ANIME
              <font-awesome-icon icon="chevron-down" class="text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="trophy" class="text-xs mr-2" />
                Top 100
              </a>
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="fire" class="text-xs mr-2" />
                Phổ biến
              </a>
            </div>
          </div>

          <div class="relative group animate-fade-in" style="animation-delay: 0.4s">
            <button class="nav-item flex items-center gap-1">
              THỂ LOẠI
              <font-awesome-icon icon="chevron-down" class="text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">Action</a>
              <a href="#" class="dropdown-item">Romance</a>
              <a href="#" class="dropdown-item">Comedy</a>
              <a href="#" class="dropdown-item">Drama</a>
            </div>
          </div>

          <div class="relative group animate-fade-in" style="animation-delay: 0.5s">
            <button class="nav-item flex items-center gap-1">
              SEASON
              <font-awesome-icon icon="chevron-down" class="text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="calendar" class="text-xs mr-2" />
                Mùa Đông
              </a>
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="calendar" class="text-xs mr-2" />
                Mùa Xuân
              </a>
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="calendar" class="text-xs mr-2" />
                Mùa Hè
              </a>
              <a href="#" class="dropdown-item">
                <font-awesome-icon icon="calendar" class="text-xs mr-2" />
                Mùa Thu
              </a>
            </div>
          </div>

          <router-link to="/lich-chieu" class="nav-item animate-fade-in" style="animation-delay: 0.7s">
            LỊCH CHIẾU
          </router-link>
        </nav>

        <!-- Desktop Search and Login -->
        <div class="hidden md:flex items-center gap-3 lg:gap-4 animate-slide-in-right">
          <!-- Search Box -->
          <div class="hidden lg:flex items-center bg-[#2a2a2a] rounded px-4 py-2 gap-3 min-w-[200px] xl:min-w-[300px] hover:bg-[#3a3a3a] transition-all duration-300 hover:shadow-lg hover:shadow-[#b8e62e]/20">
            <font-awesome-icon icon="search" class="text-gray-500 animate-pulse-slow" />
            <input 
              type="text" 
              placeholder="Tìm tên tiếng nhật, anh, việt"
              class="bg-transparent border-none outline-none text-white text-sm flex-1 placeholder-gray-600"
            />
          </div>

          <!-- Search Icon for tablet -->
          <button class="lg:hidden text-white hover:text-[#b8e62e] transition-all duration-300 hover:scale-110" @click="toggleSearch">
            <font-awesome-icon icon="search" class="w-5 h-5" />
          </button>

          <!-- Login Button - Changed to router-link -->
          <router-link 
            to="/auth" 
            class="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 rounded font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-lg hover:shadow-[#d32f2f]/50 active:scale-95 inline-block text-center"
          >
            Đăng nhập
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-white p-2 hover:text-[#b8e62e] transition-all duration-300 hover:scale-110 active:scale-95"
          @click="toggleMobileMenu"
        >
          <font-awesome-icon v-if="!isMobileMenuOpen" icon="bars" class="w-6 h-6 animate-fade-in" />
          <font-awesome-icon v-else icon="times" class="w-6 h-6 animate-rotate-in" />
        </button>
      </div>

      <!-- Mobile Search Bar (Expandable) -->
      <transition name="slide-down">
        <div v-if="isSearchOpen" class="lg:hidden mt-3 pb-1">
          <div class="flex items-center bg-[#2a2a2a] rounded px-4 py-2 gap-3 animate-scale-in">
            <font-awesome-icon icon="search" class="text-gray-500" />
            <input 
              type="text" 
              placeholder="Tìm kiếm anime..."
              class="bg-transparent border-none outline-none text-white text-sm flex-1 placeholder-gray-600"
              ref="mobileSearchInput"
            />
          </div>
        </div>
      </transition>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4">
          <nav class="flex flex-col space-y-1">
            <router-link to="/" class="mobile-nav-item animate-slide-in-left" style="animation-delay: 0.05s">
              TRANG CHỦ
            </router-link>
            
            <div class="animate-slide-in-left" style="animation-delay: 0.1s">
              <button 
                class="mobile-nav-item w-full flex items-center justify-between"
                @click="toggleMobileDropdown('dangAnime')"
              >
                <span>DẠNG ANIME</span>
                <font-awesome-icon 
                  icon="chevron-down"
                  class="w-4 h-4 transition-transform duration-200" 
                  :class="{ 'rotate-180': openMobileDropdown === 'dangAnime' }"
                />
              </button>
              <transition name="slide-down">
                <div v-if="openMobileDropdown === 'dangAnime'" class="pl-4 mt-1 space-y-1">
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.05s">TV Series</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.1s">Movie</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.15s">OVA</a>
                </div>
              </transition>
            </div>

            <div class="animate-slide-in-left" style="animation-delay: 0.15s">
              <button 
                class="mobile-nav-item w-full flex items-center justify-between"
                @click="toggleMobileDropdown('topAnime')"
              >
                <span>TOP ANIME</span>
                <font-awesome-icon 
                  icon="chevron-down"
                  class="w-4 h-4 transition-transform duration-200" 
                  :class="{ 'rotate-180': openMobileDropdown === 'topAnime' }"
                />
              </button>
              <transition name="slide-down">
                <div v-if="openMobileDropdown === 'topAnime'" class="pl-4 mt-1 space-y-1">
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.05s">Top 100</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.1s">Phổ biến</a>
                </div>
              </transition>
            </div>

            <div class="animate-slide-in-left" style="animation-delay: 0.2s">
              <button 
                class="mobile-nav-item w-full flex items-center justify-between"
                @click="toggleMobileDropdown('theLoai')"
              >
                <span>THỂ LOẠI</span>
                <font-awesome-icon 
                  icon="chevron-down"
                  class="w-4 h-4 transition-transform duration-200" 
                  :class="{ 'rotate-180': openMobileDropdown === 'theLoai' }"
                />
              </button>
              <transition name="slide-down">
                <div v-if="openMobileDropdown === 'theLoai'" class="pl-4 mt-1 space-y-1">
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.05s">Action</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.1s">Romance</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.15s">Comedy</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.2s">Drama</a>
                </div>
              </transition>
            </div>

            <div class="animate-slide-in-left" style="animation-delay: 0.25s">
              <button 
                class="mobile-nav-item w-full flex items-center justify-between"
                @click="toggleMobileDropdown('season')"
              >
                <span>SEASON</span>
                <font-awesome-icon 
                  icon="chevron-down"
                  class="w-4 h-4 transition-transform duration-200" 
                  :class="{ 'rotate-180': openMobileDropdown === 'season' }"
                />
              </button>
              <transition name="slide-down">
                <div v-if="openMobileDropdown === 'season'" class="pl-4 mt-1 space-y-1">
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.05s">Mùa Đông</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.1s">Mùa Xuân</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.15s">Mùa Hè</a>
                  <a href="#" class="mobile-dropdown-item animate-fade-in" style="animation-delay: 0.2s">Mùa Thu</a>
                </div>
              </transition>
            </div>

            <router-link to="/thu-vien" class="mobile-nav-item animate-slide-in-left" style="animation-delay: 0.3s">
              THƯ VIỆN
            </router-link>
            <router-link to="/lich-chieu" class="mobile-nav-item animate-slide-in-left" style="animation-delay: 0.35s">
              LỊCH CHIẾU
            </router-link>

            <!-- Mobile Login Button - Changed to router-link -->
            <router-link 
              to="/auth" 
              class="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-6 py-3 rounded font-semibold text-sm transition-all duration-300 mt-4 hover:scale-105 hover:shadow-lg active:scale-95 animate-slide-in-left block text-center" 
              style="animation-delay: 0.4s"
            >
              Đăng nhập
            </router-link>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<!-- Script và Style giữ nguyên -->
<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false,
      isSearchOpen: false,
      openMobileDropdown: null
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      if (this.isMobileMenuOpen) {
        this.isSearchOpen = false
      }
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen
      if (this.isSearchOpen) {
        this.isMobileMenuOpen = false
        this.$nextTick(() => {
          this.$refs.mobileSearchInput?.focus()
        })
      }
    },
    toggleMobileDropdown(dropdown) {
      if (this.openMobileDropdown === dropdown) {
        this.openMobileDropdown = null
      } else {
        this.openMobileDropdown = dropdown
      }
    }
  },
  watch: {
    '$route'() {
      this.isMobileMenuOpen = false
      this.isSearchOpen = false
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      const header = this.$el
      if (!header.contains(e.target)) {
        this.isMobileMenuOpen = false
        this.isSearchOpen = false
      }
    })
  }
}
</script>

<style scoped>
/* Style giữ nguyên như cũ */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes rotateIn {
  from { opacity: 0; transform: rotate(-90deg); }
  to { opacity: 1; transform: rotate(0); }
}

@keyframes pulseSlow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-fade-in { animation: fadeIn 0.5s ease-out forwards; opacity: 0; }
.animate-slide-in-left { animation: slideInLeft 0.5s ease-out forwards; opacity: 0; }
.animate-slide-in-right { animation: slideInRight 0.5s ease-out forwards; opacity: 0; }
.animate-scale-in { animation: scaleIn 0.3s ease-out forwards; }
.animate-rotate-in { animation: rotateIn 0.3s ease-out forwards; }
.animate-pulse-slow { animation: pulseSlow 2s ease-in-out infinite; }

.nav-item {
  @apply text-white text-sm font-semibold cursor-pointer py-2.5 px-0 transition-all duration-300 whitespace-nowrap relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background: #b8e62e;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover::after { width: 100%; }
.nav-item:hover { @apply text-[#b8e62e]; transform: translateY(-2px); }
.nav-item.router-link-active { @apply text-[#b8e62e]; }
.nav-item.router-link-active::after { width: 100%; }

.dropdown-menu {
  @apply absolute top-full left-0 bg-[#2a2a2a] min-w-[200px] rounded shadow-xl mt-2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible;
  transition: all 0.3s ease;
  transform: translateY(-10px);
}

.group:hover .dropdown-menu { transform: translateY(0); }

.dropdown-item {
  @apply block px-4 py-2 text-white text-sm hover:bg-[#3a3a3a] hover:text-[#b8e62e] transition-all duration-200;
}

.dropdown-item:hover { transform: translateX(5px); padding-left: 1.25rem; }

.mobile-nav-item {
  @apply text-white text-sm font-semibold px-4 py-3 rounded hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-200;
}

.mobile-nav-item:hover { transform: translateX(5px); }
.mobile-nav-item.router-link-active { @apply text-[#b8e62e] bg-[#2a2a2a]; }

.mobile-dropdown-item {
  @apply block text-gray-300 text-sm px-4 py-2 rounded hover:bg-[#2a2a2a] hover:text-[#b8e62e] transition-all duration-200;
}

.mobile-dropdown-item:hover { transform: translateX(5px); }

.slide-down-enter-active { animation: slideDown 0.3s ease-out; }
.slide-down-leave-active { animation: slideDown 0.3s ease-in reverse; }

@keyframes slideDown {
  from { max-height: 0; opacity: 0; transform: translateY(-10px); }
  to { max-height: 1000px; opacity: 1; transform: translateY(0); }
}
</style>