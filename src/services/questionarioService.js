// src/services/questionarioService.js
import api from './api'

export const questionarioService = {
  // Validar CPF (verifica se já respondeu)
  async validarCPF(cpf) {
    try {
      const response = await api.post('/questionario/validar-cpf', { cpf })
      return response.data
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao validar CPF' 
      }
    }
  },

  // Iniciar questionário
  async iniciarQuestionario(cpf) {
    try {
      const response = await api.post('/questionario/iniciar', { cpf })
      return response.data
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao iniciar questionário' 
      }
    }
  },

  // Salvar perfil (Seção 0)
  async salvarPerfil(respondente_id, perfil) {
    try {
      const response = await api.post('/questionario/perfil', { 
        respondente_id, 
        perfil 
      })
      return response.data
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao salvar perfil' 
      }
    }
  },

  // Salvar respostas do questionário
  async salvarRespostas(respondente_id, respostas) {
    try {
      const response = await api.post('/questionario/respostas', { 
        respondente_id, 
        respostas 
      })
      return response.data
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao salvar respostas' 
      }
    }
  },

  // Buscar resultado
  async buscarResultado(respondente_id) {
    try {
      const response = await api.get(`/questionario/resultado/${respondente_id}`)
      return response.data
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao buscar resultado' 
      }
    }
  }
}
