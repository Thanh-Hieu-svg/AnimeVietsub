<script setup>
import Header from './components/layout/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0f1416]">
    <Header />
    
    <!-- Main Content Area with top padding for fixed header -->
    <main class="pt-16 sm:pt-20">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
/* Page Transition Animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>