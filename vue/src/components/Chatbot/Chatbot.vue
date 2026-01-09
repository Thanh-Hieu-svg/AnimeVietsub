<template>
  <div>
    <!-- Chatbot Button -->
    <button
      @click="toggleChatbot"
      class="fixed bottom-6 right-6 z-50 shadow-2xl"
      style="width: 130px; height: 150px;"
      title="Chat với AI"
    >
      <img 
        :src="Icon_Chatbot" 
        alt="Chatbot" 
        class="w-full h-full object-contain"
      />
    </button>

    <!-- Chatbot Panel -->
    <transition name="slide-up">
      <div
        v-if="showChatbot"
        class="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-gradient-to-br from-[#1a1a1a] to-[#0f1416] border border-gray-800 rounded-xl shadow-2xl"
      >
        <!-- Chatbot Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-800">
          <div class="flex items-center gap-3">
            <img :src="Icon_Chatbot1" alt="AI" class="w-10 h-10 rounded-full" />
            <div>
              <h3 class="text-white font-bold">Anime Vietsub</h3>
              <p class="text-xs text-gray-400">Trực tuyến</p>
            </div>
          </div>
          <button
            @click="showChatbot = false"
            class="p-2 hover:bg-white/5 rounded-lg transition-all"
          >
            <font-awesome-icon icon="times" class="text-gray-400 hover:text-white" />
          </button>
        </div>

        <!-- Chat Messages Area -->
        <div class="h-[380px] overflow-y-auto p-4 space-y-3">
          <!-- AI Message -->
          <div class="flex items-start gap-3">
            <img :src="Icon_Chatbot1" alt="AI" class="w-8 h-8 rounded-full flex-shrink-0" />
            <div class="bg-[#b8e62e]/10 border border-[#b8e62e]/30 rounded-lg p-3 max-w-[80%]">
              <p class="text-sm text-gray-300">
                Xin chào! 👋 Tôi là trợ lý AI của AnimeVsub. Tôi có thể giúp gì cho bạn?
              </p>
            </div>
          </div>

          <!-- User Message Example -->
          <div class="flex items-start gap-3 flex-row-reverse">
            <div class="w-8 h-8 rounded-full bg-[#b8e62e] flex items-center justify-center flex-shrink-0">
              <font-awesome-icon icon="user" class="text-black text-sm" />
            </div>
            <div class="bg-white/5 border border-gray-800 rounded-lg p-3 max-w-[80%]">
              <p class="text-sm text-gray-300">
                Anime mới hôm nay có gì?
              </p>
            </div>
          </div>

          <!-- AI Response Example -->
          <div class="flex items-start gap-3">
            <img :src="Icon_Chatbot1" alt="AI" class="w-8 h-8 rounded-full flex-shrink-0" />
            <div class="bg-[#b8e62e]/10 border border-[#b8e62e]/30 rounded-lg p-3 max-w-[80%]">
              <p class="text-sm text-gray-300">
                Hôm nay có 5 anime mới cập nhật! Bao gồm Spy x Family Season 3 - Tập 12, Jujutsu Kaisen Season 2 - Tập 8... Bạn muốn xem anime nào? 🎬
              </p>
            </div>
          </div>
        </div>

        <!-- Chat Input -->
        <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-[#0f1416]">
          <div class="flex items-center gap-2">
            <input
              v-model="message"
              @keyup.enter="sendMessage"
              type="text"
              placeholder="Nhập tin nhắn..."
              class="flex-1 bg-black/30 border border-gray-800 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#b8e62e] transition-all"
            />
            <button 
              @click="sendMessage"
              class="p-2 bg-[#b8e62e] hover:bg-[#a0d020] rounded-lg transition-all active:scale-95"
            >
              <font-awesome-icon icon="paper-plane" class="text-black" />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Icon_Chatbot from "@/assets/images/chatbot.gif"
import Icon_Chatbot1 from "@/assets/images/chatbot(1).gif"

const showChatbot = ref(false)
const message = ref('')

const toggleChatbot = () => {
  showChatbot.value = !showChatbot.value
}

const sendMessage = () => {
  if (message.value.trim()) {
    // TODO: Handle send message logic
    console.log('Sending message:', message.value)
    message.value = ''
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

/* Slide up animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>