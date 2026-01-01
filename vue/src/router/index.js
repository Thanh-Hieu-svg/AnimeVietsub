import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/thu-vien',
    name: 'Library',
    component: () => import('@/views/Library.vue')
  },
  {
    path: '/lich-chieu',
    name: 'Schedule',
    component: () => import('@/views/Schedule.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router