import { createRouter, createWebHistory } from 'vue-router'
import LayoutUser from '@/components/layout/LayoutUser.vue'

const routes = [
  {
    path: '/',
    component: LayoutUser, 
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/Login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/pages/Register.vue')
      },
      {
        path: 'auth',
        name: 'auth',
        component: () => import('@/pages/Auth.vue')
      },
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: 'animedetail',
        name: 'detail',
        component: () => import('@/pages/AnimeDetail.vue')
      },
      {
        path: 'animewatch',
        name: 'watch',
        component: () => import('@/pages/WatchAnime.vue')
      },
      {
        path: 'lich-chieu',
        name: 'Schedule',
        component: () => import('@/views/Schedule.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router