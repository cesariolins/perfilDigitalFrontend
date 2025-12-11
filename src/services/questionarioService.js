
import api from './api'

export const questionarioService = {

  async validarCPF(cpf) {
    try {

      const response = await api.post('/api/questionario/validar-cpf', { cpf }) 
      return response.data
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao validar CPF'
      }
    }
  },

  async iniciarQuestionario(cpf) {
    try {

      const response = await api.post('/api/questionario/iniciar', { cpf })
      return response.data
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao iniciar questionário'
      }
    }
  },

  async salvarPerfil(respondente_id, perfil) {
    try {

      const response = await api.post('/api/questionario/perfil', { 
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

  async salvarRespostas(respondente_id, respostas) {
    try {

      const response = await api.post('/api/questionario/respostas', {
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

  async responderQuestionario(cpf, perfil, questionario, pontuacao_total) {
    try {
      const response = await api.post('/api/questionario/responder', { cpf, perfil, questionario, pontuacao_total })
      return response.data
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao salvar questionário'
      }
    }
  },

  async buscarResultado(respondente_id) {
    try {
      const response = await api.get(`/api/questionario/resultado/${respondente_id}`)
      return response.data
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Erro ao buscar resultado'
      }
    }
  }
}
