import api from './api'

export const movieAPI = {
  getAll: (params) => api.get('/api/movies', { params }),
  getById: (id) => api.get(`/api/movies/${id}`),
  getEpisodes: (movieId) => api.get(`/api/movies/${movieId}/episodes`)
}