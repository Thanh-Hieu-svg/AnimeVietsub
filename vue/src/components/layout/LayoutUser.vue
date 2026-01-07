<template>
  <div class="min-h-screen bg-[#0f1416] flex flex-col">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="flex-1 pt-[72px] sm:pt-[80px]">
      <div class="max-w-[1280px] mx-auto px-4 sm:px-6">
        <router-view />
      </div>
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'LayoutUser',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
/* Custom scrollbar */
:deep(::-webkit-scrollbar) {
  width: 8px;
}

:deep(::-webkit-scrollbar-track) {
  background: #1a1a1a;
}

:deep(::-webkit-scrollbar-thumb) {
  background: #b8e62e;
  border-radius: 4px;
}

:deep(::-webkit-scrollbar-thumb:hover) {
  background: #a0d020;
}
</style>