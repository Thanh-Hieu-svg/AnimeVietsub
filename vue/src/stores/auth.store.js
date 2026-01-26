import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authAPI } from '../api/auth'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const isUser = computed(() => user.value?.role === 'user')
  
  const avatarLetter = computed(() => {
    if (!user.value?.username) return '?'
    return user.value.username.charAt(0).toUpperCase()
  })

  // ✅ Kiểm tra token expiry
  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token)
      return decoded.exp * 1000 < Date.now()
    } catch {
      return true
    }
  }

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
      
      token.value = newToken
      user.value = data
      
      const storage = rememberMe ? localStorage : sessionStorage
      storage.setItem('token', newToken)
      storage.setItem('user', JSON.stringify(data))

      console.log('✅ User logged in:', user.value)
      console.log('✅ Role:', user.value.role)

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

  // ✅ Restore session với token validation
  const restoreSession = () => {
    const savedToken = localStorage.getItem('token') || sessionStorage.getItem('token')
    const savedUser = localStorage.getItem('user') || sessionStorage.getItem('user')
    
    if (savedToken && savedUser) {
      // Kiểm tra token expiry
      if (isTokenExpired(savedToken)) {
        console.log('❌ Token expired, logging out')
        logout()
        return false
      }

      token.value = savedToken
      try {
        user.value = JSON.parse(savedUser)
        console.log('✅ Session restored:', user.value)
        console.log('✅ Role:', user.value.role)
        return true
      } catch (error) {
        console.error('❌ Error parsing user data:', error)
        logout()
        return false
      }
    }
    return false
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
    isUser,
    avatarLetter,
    register,
    login,
    logout,
    restoreSession,
    clearError
  }
})