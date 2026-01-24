import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authAPI } from '../api/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  
  const avatarLetter = computed(() => {
    if (!user.value?.username) return '?'
    return user.value.username.charAt(0).toUpperCase()
  })

  // Register
  const register = async (userData) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await authAPI.register(userData)
      return { success: true, data: response.data }
    } catch (err) {
      const errorData = err.response?.data
      error.value = errorData?.message || 'Đăng ký thất bại'
      return { success: false, error: errorData }
    } finally {
      isLoading.value = false
    }
  }

  // Login
  const login = async (credentials, rememberMe = false) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await authAPI.login(credentials)
      const { token: newToken, data } = response.data
      
      // ✅ Cập nhật state TRƯỚC khi lưu storage
      token.value = newToken
      user.value = data
      
      // Sau đó mới lưu vào storage
      const storage = rememberMe ? localStorage : sessionStorage
      storage.setItem('token', newToken)
      storage.setItem('user', JSON.stringify(data))

      console.log('✅ User logged in:', user.value)

      return { success: true, data: response.data }
    } catch (err) {
      const errorData = err.response?.data
      error.value = errorData?.message || 'Đăng nhập thất bại'
      return { success: false, error: errorData }
    } finally {
      isLoading.value = false
    }
  }

  // Logout
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    user.value = null
    token.value = null
  }

  // Restore session from storage
  const restoreSession = () => {
    const savedToken = localStorage.getItem('token') || sessionStorage.getItem('token')
    const savedUser = localStorage.getItem('user') || sessionStorage.getItem('user')
    
    if (savedToken && savedUser) {
      token.value = savedToken
      try {
        user.value = JSON.parse(savedUser)
        console.log('✅ Session restored:', user.value)
      } catch (error) {
        console.error('❌ Error parsing user data:', error)
        logout()
      }
    }
  }

  const clearError = () => {
    error.value = null
  }

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    isAdmin,
    avatarLetter,
    register,
    login,
    logout,
    restoreSession,
    clearError
  }
})