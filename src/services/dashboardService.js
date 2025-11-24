// src/services/dashboardService.js
import api from './api'

export const dashboardService = {
  async getEstatisticas() {
    try {
      const response = await api.get('/dashboard/estatisticas')
      return response.data
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao buscar estatísticas' 
      }
    }
  },

  async getDadosGraficos() {
    try {
      const response = await api.get('/dashboard/graficos')
      return response.data
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao buscar dados dos gráficos' 
      }
    }
  },

  async getRelatorioIA() {
    try {
      const response = await api.get('/dashboard/relatorio-ia')
      return response.data
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Erro ao gerar relatório' 
      }
    }
  },

  async downloadExcel() {
    try {
      const response = await api.get('/dashboard/exportar', {
        responseType: 'blob'
      })
      
      // Cria um link temporário para download
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `relatorio_digisaude_${Date.now()}.xlsx`)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
      
      return { success: true }
    } catch (error) {
      console.error('Erro ao baixar Excel:', error)
      return { 
        success: false, 
        message: 'Erro ao baixar arquivo' 
      }
    }
  }
}
