import { createRouter, createWebHistory } from 'vue-router'
import LayoutUser from '@/components/layout/LayoutUser.vue'
import LayoutAdmin from '@/components/layout/LayoutAdmin.vue'
import { useAuthStore } from '@/stores/auth.store'

const routes = [
  {
    path: '/',
    component: LayoutUser,
    meta: { layout: 'user' },
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
        component: () => import('@/pages/Profile.vue'),
        meta: { requiresAuth: true } 
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
    meta: { 
      layout: 'admin',
      requiresAuth: true,
      requiresAdmin: true 
    },
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
  },
  // // ✅ 404 Page
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('@/pages/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ Global Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  // 1. Restore session nếu chưa có
  if (!authStore.user && (localStorage.getItem('token') || sessionStorage.getItem('token'))) {
    authStore.restoreSession()
  }

  // 2. Kiểm tra route yêu cầu đăng nhập
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    console.log('❌ Not authenticated, redirect to home')
    return next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  }

  // 3. ✅ Kiểm tra route yêu cầu admin
  if (to.meta.requiresAdmin) {
    if (!authStore.isAdmin) {
      console.log('❌ Not admin, redirect to home')
      // ✅ Toast notification (optional)
      import('vue-toastification').then(({ useToast }) => {
        const toast = useToast()
        toast.error('Bạn không có quyền truy cập trang này!')
      })
      return next('/')
    }
  }

  // 4. ✅ Redirect admin từ home về dashboard
  if (to.path === '/' && authStore.isAuthenticated && authStore.isAdmin) {
    console.log('✅ Admin detected, redirect to /admin')
    return next('/admin')
  }

  // 5. ✅ Ngăn user vào /admin thủ công
  if (to.path.startsWith('/admin') && authStore.isAuthenticated && !authStore.isAdmin) {
    console.log('❌ User trying to access admin, redirect to home')
    import('vue-toastification').then(({ useToast }) => {
      const toast = useToast()
      toast.error('Bạn không có quyền truy cập trang Admin!')
    })
    return next('/')
  }

  next()
})

export default router