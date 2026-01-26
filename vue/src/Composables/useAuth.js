import { useAuthStore } from '@/stores/auth.store'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export function useAuth() {
  const authStore = useAuthStore()
  const router = useRouter()
  const toast = useToast()

  
  const register = async (userData) => {
    const result = await authStore.register(userData)
    
    if (result.success) {
      toast.success('Đăng ký thành công!')
      return result
    } else {
      if (result.error?.errors) {
        result.error.errors.forEach(err => {
          toast.error(err.msg || err.message)
        })
      } else {
        toast.error(result.error?.message || 'Đăng ký thất bại')
      }
      return result
    }
  }

  
  const login = async (credentials, rememberMe = false) => {
    const result = await authStore.login(credentials, rememberMe)
    
    if (result.success) {
      toast.success('Đăng nhập thành công!')
      
      // Redirect dựa trên role
      setTimeout(() => {
        const user = authStore.user
        if (user?.role === 'admin') {
          router.push('/admin')
        } else {
          router.push('/')
        }
      }, 500)
      
      return result
    } else {
      if (result.error?.errors) {
        result.error.errors.forEach(err => {
          toast.error(err.msg || err.message)
        })
      } else {
        toast.error(result.error?.message || 'Đăng nhập thất bại')
      }
      return result
    }
  }

  
  const logout = (redirectTo = '/auth') => {
    authStore.logout()
    toast.success('Đăng xuất thành công!')
    
    setTimeout(() => {
      router.push(redirectTo)
    }, 500)
  }

  
  const hasRole = (requiredRole) => {
    return authStore.user?.role === requiredRole
  }

  
  const checkAuth = () => {
    if (!authStore.isAuthenticated) {
      toast.warning('Vui lòng đăng nhập!')
      router.push('/auth')
      return false
    }
    return true
  }

  
  const requireAdmin = () => {
    if (!authStore.isAdmin) {
      toast.error('Bạn không có quyền truy cập!')
      router.push('/')
      return false
    }
    return true
  }

  return {
    user: authStore.user,
    token: authStore.token,
    isLoading: authStore.isLoading,
    error: authStore.error,
    isAuthenticated: authStore.isAuthenticated,
    isAdmin: authStore.isAdmin,
    isUser: authStore.isUser,
    avatarLetter: authStore.avatarLetter,
    register,
    login,
    logout,
    hasRole,
    checkAuth,
    requireAdmin,
    clearError: authStore.clearError,
    restoreSession: authStore.restoreSession
  }
}