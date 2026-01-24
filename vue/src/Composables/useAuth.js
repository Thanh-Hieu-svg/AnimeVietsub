import { ref } from 'vue'
import { authAPI } from '../api/auth'

export function useAuth() {
  const user = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

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

  const login = async (credentials, rememberMe = false) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await authAPI.login(credentials)
      const { token, data } = response.data
      
      // Lưu vào localStorage hoặc sessionStorage
      const storage = rememberMe ? localStorage : sessionStorage
      storage.setItem('token', token)
      storage.setItem('user', JSON.stringify(data))
      
      user.value = data

      return { success: true, data: response.data }
    } catch (err) {
      const errorData = err.response?.data
      error.value = errorData?.message || 'Đăng nhập thất bại'
      return { success: false, error: errorData }
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    user.value = null
  }

  const clearError = () => {
    error.value = null
  }

  return {
    user,
    isLoading,
    error,
    register,
    login,
    logout,
    clearError
  }
}