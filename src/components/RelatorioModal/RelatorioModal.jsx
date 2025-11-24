// src/components/RelatorioModal/RelatorioModal.jsx
import { useState, useEffect } from 'react'
import { dashboardService } from '../../services/dashboardService'
import './RelatorioModal.css'

export default function RelatorioModal({ isOpen, onClose }) {
  const [relatorio, setRelatorio] = useState(null)
  const [loading, setLoading] = useState(false)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      carregarRelatorio()
    }
  }, [isOpen])

  const carregarRelatorio = async () => {
    setLoading(true)
    const resultado = await dashboardService.getRelatorioIA()
    if (resultado.success) {
      setRelatorio(resultado.data)
    }
    setLoading(false)
  }

  const handleDownload = async () => {
    setDownloading(true)
    try {
      await dashboardService.downloadExcel()
    } catch (error) {
      console.error('Erro ao baixar:', error)
    }
    setDownloading(false)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Relatório Geral</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          {loading && (
            <div className="modal-loading">Gerando relatório...</div>
          )}

          {!loading && relatorio && (
            <>
              {/* Alertas */}
              <div className="alertas-section">
                {relatorio.alertas.map((alerta, index) => (
                  <div 
                    key={index} 
                    className={`alerta-card ${alerta.tipo}`}
                  >
                    {alerta.mensagem}
                  </div>
                ))}
              </div>

              {/* Sugestões */}
              <div className="sugestoes-section">
                <h3>Sugestões de ação:</h3>
                <ul>
                  {relatorio.sugestoes.map((sugestao, index) => (
                    <li key={index}>{sugestao}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-voltar" onClick={onClose}>
            Voltar
          </button>
          <button 
            className="btn-download" 
            onClick={handleDownload}
            disabled={downloading}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {downloading ? 'Baixando...' : 'Baixar dados'}
          </button>
        </div>
      </div>
    </div>
  )
}
