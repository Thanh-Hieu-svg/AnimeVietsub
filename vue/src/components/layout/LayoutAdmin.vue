<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/admin/Sidebar.vue'
import Header from '@/components/admin/Header.vue'

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-[#0f1416] flex">
    <!-- Sidebar -->
    <Sidebar :is-open="isSidebarOpen" @toggle="toggleSidebar" />

    <!-- Main Content -->
    <div 
      :class="[
        'flex-1 flex flex-col overflow-hidden transition-all duration-300',
        isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
      ]"
    >
      <!-- Header -->
      <Header @toggle-sidebar="toggleSidebar" />

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#0f1416] p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>