<template>
  <div class="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl border border-gray-800">

    <!-- FAKE PLAYER -->
    <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <button class="w-20 h-20 rounded-full bg-[#b8e62e] hover:bg-[#a0d020] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-[#b8e62e]/50">
        <font-awesome-icon icon="play" class="text-black text-2xl ml-1" />
      </button>
    </div>

    <!-- WARNING TEXT -->
    <div class="absolute inset-0 flex items-center justify-center text-center px-4 pointer-events-none">
      <div class="text-gray-300 text-sm md:text-base font-semibold space-y-3 bg-black/50 backdrop-blur-sm p-6 rounded-xl">
        <p class="text-[#b8e62e] text-lg md:text-xl font-bold">⚠️ WEBSITE NÀY CÓ QUẢNG CÁO!</p>
        <p>KHÔNG CÓ QUẢNG CÁO THÌ DUY TRÌ WEBSITE LÀM SAO?!</p>
        <p class="text-red-500 mt-2 font-bold">
          NẾU BẠN DÙNG CHẶN QUẢNG CÁO<br>
          VUI LÒNG TẮT ĐỂ ỦNG HỘ ANIMEVIETSUB!
        </p>
      </div>
    </div>

  </div>
</template>