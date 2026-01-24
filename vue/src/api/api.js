import axios from 'axios'

// Backend URL
const BACKEND_URL = 'http://localhost:3000'

// API Endpoints URLs
export const AUTH_URL = `${BACKEND_URL}/api/auth`
export const USER_URL = `${BACKEND_URL}/api/user`
export const MOVIE_URL = `${BACKEND_URL}/api/movies`

// Axios instance
const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// Request interceptor - Thêm token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor - Xử lý lỗi
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // ✅ KHÔNG tự động redirect, để component tự xử lý
    // Chỉ log lỗi để debug
    if (error.response?.status === 401) {
      console.log('Unauthorized - 401')
    }
    
    return Promise.reject(error)
  }
)

export default api