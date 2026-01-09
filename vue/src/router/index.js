import { createRouter, createWebHistory } from 'vue-router'
import LayoutUser from '@/components/layout/LayoutUser.vue'
import LayoutAdmin from '@/components/layout/LayoutAdmin.vue'

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
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('@/pages/ForgotPassword.vue')
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
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/pages/Profile.vue')
      },
      {
        path: 'anime/new',
        name: 'AnimeNews',
        component: () => import('@/pages/AnimeNew.vue')
      },
      {
        path: 'anime/trending',
        name: 'AnimeTrending',
        component: () => import('@/pages/AnimeTrending.vue')
      },
      {
        path: 'anime/recommended',
        name: 'AnimeRecommended',
        component: () => import('@/pages/AnimeRecommended.vue')
      },
    ]
  },
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: () => import('@/pages/Dashboard.vue')
      },
      {
        path: 'users',
        name: 'AdminUsers',
        component: () => import('@/pages/UserManagement.vue')
      },
      {
        path: 'anime',
        name: 'AdminAnime',
        component: () => import('@/pages/AnimeManagement.vue')
      },
      {
        path: 'comments',
        name: 'AdminComments',
        component: () => import('@/pages/CommentsManagement.vue')
      },
       {
        path: 'categories',
        name: 'AdminCategories',
        component: () => import('@/pages/CategoriesManagement.vue')
      },
      {
        path: 'schedule',
        name: 'AdminSchedule',
        component: () => import('@/pages/ScheduleManagement.vue')
      },
      {
        path: 'episodes',
        name: 'AdminEpisodes',
        component: () => import('@/pages/EpisodesManagement.vue')
      },
      {
        path: 'tags',
        name: 'AdminTags',
        component: () => import('@/pages/TagsManagement.vue')
      },
      {
        path: 'analytics',
        name: 'AdminanAlytics',
        component: () => import('@/pages/AnalyticsManagement.vue')
      },
      {
        path: 'settings',
        name: 'AdminSettings',
        component: () => import('@/pages/AdminSetting.vue')
      },
      {
        path: 'profile',
        name: 'AdminProfile',
        component: () => import('@/pages/AdminProfile.vue')
      },
      
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router