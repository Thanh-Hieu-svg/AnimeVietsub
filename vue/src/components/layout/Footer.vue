<template>
  <footer class="border-gray-800 text-gray-300 mt-auto">
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 text-center space-y-8">

      <!-- Keywords -->
      <div class="animate-fade-in">
        <p class="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300">
          kanefusa fansub • one piece • vua hải tặc • đảo hải tặc • thám tử lừng danh conan • hoạt hình trung quốc
        </p>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 max-w-md mx-auto"></div>

      <!-- Ads contact -->
      <div class="animate-fade-in" style="animation-delay: 0.1s">
        <p class="text-sm text-gray-400">
          Liên Hệ Quảng Cáo:
          <a
            href="mailto:ads@animevietsub.tv"
            class="text-[#b8e62e] hover:text-[#a0d020] transition-all duration-300 hover:underline ml-1 font-semibold inline-flex items-center gap-1 group"
          >
            <font-awesome-icon icon="envelope" class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            ads@animevietsub.tv
          </a>
        </p>
      </div>

      <!-- Copyright -->
      <div class="animate-fade-in" style="animation-delay: 0.2s">
        <p class="text-sm text-gray-500">
          © Copyright 2024 
          <span class="text-[#b8e62e] font-semibold">AnimeVib.TV</span>
          . All rights reserved.
        </p>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 max-w-md mx-auto"></div>

      <!-- Disclaimer -->
      <div class="max-w-3xl mx-auto space-y-5 animate-fade-in" style="animation-delay: 0.3s">
        <!-- Disclaimer title -->
        <h3 class="text-base font-bold text-white pt-2 flex items-center justify-center gap-2">
          <font-awesome-icon icon="shield" class="text-[#b8e62e] w-5 h-5" />
          Miễn trừ trách nhiệm
        </h3>

        <!-- Disclaimer content -->
        <div class="space-y-4">
          <p class="text-xs text-gray-500 leading-relaxed hover:text-gray-400 transition-colors duration-300">
            Trang web này cung cấp nội dung anime chỉ với mục đích giải trí và không
            chịu trách nhiệm về bất kỳ nội dung quảng cáo, liên kết của bên thứ ba
            hiển thị trên trang web của chúng tôi.
          </p>

          <p class="text-xs text-gray-500 leading-relaxed hover:text-gray-400 transition-colors duration-300">
            Tất cả thông tin và hình ảnh trên website đều được thu thập từ internet.
            Chúng tôi không chịu trách nhiệm về bất kỳ nội dung nào. Nếu bạn hoặc tổ
            chức của bạn có vấn đề gì liên quan đến nội dung hiển thị trên website,
            vui lòng liên hệ với chúng tôi để được giải quyết.
          </p>
        </div>
      </div>

      <!-- Back to top button -->
      <div class="pt-6 animate-fade-in" style="animation-delay: 0.4s">
        <button
          @click="scrollToTop"
          class="inline-flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#b8e62e] text-white hover:text-black px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#b8e62e]/50 group"
        >
          <font-awesome-icon 
            icon="arrow-up" 
            class="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" 
          />
          <span>Về đầu trang</span>
        </button>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
/* Fade In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}
</style>