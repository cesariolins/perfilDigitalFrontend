// src/services/authService.js
import api from './api'

export const authService = {
  async login(cpf, senha) {
    try {
      const response = await api.post('/auth/login', { cpf, senha })
      
      if (response.data.success) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.usuario))
        return { 
          success: true, 
          usuario: response.data.usuario 
        }
      }
      
      return { success: false, message: response.data.message }
    } catch (error) {
      console.error('Erro no login:', error)
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao fazer login' 
      }
    }
  },

  async verificarToken() {
    try {
      const response = await api.get('/auth/verificar')
      return response.data
    } catch (error) {
      console.error('Erro ao verificar token:', error)
      return { success: false }
    }
  },

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
