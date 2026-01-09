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

    <!-- Chatbot -->
    <Chatbot />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Chatbot from '@/components/Chatbot/Chatbot.vue'

export default {
  name: 'LayoutUser',
  components: {
    Header,
    Footer,
    Chatbot
  }
}
</script>