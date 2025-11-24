// src/services/questionarioService.js
import api from './api'

export const questionarioService = {
  // Validar CPF (verifica se já respondeu)
  async validarCPF(cpf) {
    try {
      // Mude esta linha:
      const response = await api.post('/api/questionario/validar-cpf', { cpf }) // Adicione o '/api' aqui!
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
      // Mude esta linha:
      const response = await api.post('/api/questionario/iniciar', { cpf }) // Adicione o '/api' aqui!
      return response.data
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao iniciar questionário'
      }
    }
  },
  // Salvar perfil (Seção 0) - Note que no backend você marcou este endpoint como não sendo mais usado diretamente
  async salvarPerfil(respondente_id, perfil) {
    try {
      // Mude esta linha:
      const response = await api.post('/api/questionario/perfil', { // Adicione o '/api' aqui!
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
  // Salvar respostas do questionário - Note que no backend você marcou este endpoint como não sendo mais usado diretamente
  async salvarRespostas(respondente_id, respostas) {
    try {
      // Mude esta linha:
      const response = await api.post('/api/questionario/respostas', { // Adicione o '/api' aqui!
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
  // Método unificado para responder o questionário completo
  async responderQuestionario(cpf, perfil, questionario, pontuacao_total) { // Ajustei os parâmetros aqui para refletir o uso no backend
    try {
      // Mude esta linha:
      const response = await api.post('/api/questionario/responder', { cpf, perfil, questionario, pontuacao_total }) // Adicione o '/api' aqui!
      return response.data
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao salvar questionário'
      }
    }
  },
  // Buscar resultado
  async buscarResultado(respondente_id) {
    try {
      // Mude esta linha:
      const response = await api.get(`/api/questionario/resultado/${respondente_id}`) // Adicione o '/api' aqui!
      return response.data
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao buscar resultado'
      }
    }
  }
}
