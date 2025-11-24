// src/pages/Dashboard/Dashboard.jsx
import { useState, useEffect } from 'react'
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import Sidebar from '../../components/Sidebar/Sidebar'
import RelatorioModal from '../../components/RelatorioModal/RelatorioModal'
import { dashboardService } from '../../services/dashboardService'
import './Dashboard.css'

export default function Dashboard() {
  const [estatisticas, setEstatisticas] = useState(null)
  const [graficos, setGraficos] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    carregarDados()
  }, [])

  const carregarDados = async () => {
    setLoading(true)
    setError(null)
    
    // Carrega estatísticas e gráficos em paralelo
    const [resultEstatisticas, resultGraficos] = await Promise.all([
      dashboardService.getEstatisticas(),
      dashboardService.getDadosGraficos()
    ])
    
    if (resultEstatisticas.success) {
      setEstatisticas(resultEstatisticas.data)
    } else {
      setError(resultEstatisticas.message)
    }

    if (resultGraficos.success) {
      setGraficos(resultGraficos.data)
    }
    
    setLoading(false)
  }

  // Cores para o gráfico de pizza
  const CORES_PIZZA = ['#10b981', '#fbbf24', '#f97316', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4']

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Visão Geral</h1>
          <button 
            className="btn-gerar-relatorio"
            onClick={() => setModalOpen(true)}
          >
            📊 Gerar Relatório
          </button>
        </div>
        
        {loading && (
          <div className="loading">Carregando dados...</div>
        )}

        {error && (
          <div className="error">{error}</div>
        )}

        {!loading && !error && estatisticas && (
          <>
            {/* Cards de Estatísticas */}
            <div className='dashboard-content'>
              <div className="stats-cards">
                <div
                  className="stat-card"
                  style={{ backgroundColor: estatisticas.classificacoes['Uso saudável e equilibrado'].cor }}
                >
                  <div className="stat-percentage">
                    {Math.round(estatisticas.classificacoes['Uso saudável e equilibrado'].percentual)}%
                  </div>
                  <div className="stat-label">Uso Saudável</div>
                  <div className="stat-count">
                    {estatisticas.classificacoes['Uso saudável e equilibrado'].quantidade} pessoas
                  </div>
                </div>
                <div
                  className="stat-card"
                  style={{ backgroundColor: estatisticas.classificacoes['Uso moderado / controlado'].cor }}
                >
                  <div className="stat-percentage">
                    {Math.round(estatisticas.classificacoes['Uso moderado / controlado'].percentual)}%
                  </div>
                  <div className="stat-label">Uso Moderado</div>
                  <div className="stat-count">
                    {estatisticas.classificacoes['Uso moderado / controlado'].quantidade} pessoas
                  </div>
                </div>
                <div
                  className="stat-card"
                  style={{ backgroundColor: estatisticas.classificacoes['Uso excessivo'].cor }}
                >
                  <div className="stat-percentage">
                    {Math.round(estatisticas.classificacoes['Uso excessivo'].percentual)}%
                  </div>
                  <div className="stat-label">Uso Excessivo</div>
                  <div className="stat-count">
                    {estatisticas.classificacoes['Uso excessivo'].quantidade} pessoas
                  </div>
                </div>
                <div
                  className="stat-card"
                  style={{ backgroundColor: estatisticas.classificacoes['Uso problemático / dependência severa'].cor }}
                >
                  <div className="stat-percentage">
                    {Math.round(estatisticas.classificacoes['Uso problemático / dependência severa'].percentual)}%
                  </div>
                  <div className="stat-label">Dependência</div>
                  <div className="stat-count">
                    {estatisticas.classificacoes['Uso problemático / dependência severa'].quantidade} pessoas
                  </div>
                </div>
              </div>
                {/* Total de respondentes */}
                <div className="total-info">
                  <p>Total de respostas: <strong>{estatisticas.total}</strong></p>
                </div>
              {/* Gráficos */}
              {graficos && (
                <div className="charts-section">
                  {/* Gráfico de Barras - Faixa Etária */}
                  <div className="chart-card">
                    <h2>Distribuição por Faixa Etária</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={graficos.faixaEtaria}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="faixa"
                          angle={-45}
                          textAnchor="end"
                          height={100}
                          interval={0}
                          style={{ fontSize: '12px' }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" fill="#3b82f6" name="Respondentes" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  {/* Gráfico de Pizza - Uso Principal */}
                  <div className="chart-card">
                    <h2>Contextos de Uso da Internet</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={graficos.usoPrincipal}
                          dataKey="total"
                          nameKey="uso_principal"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          label={(entry) => `${entry.uso_principal}: ${entry.total}`}
                        >
                          {graficos.usoPrincipal.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={CORES_PIZZA[index % CORES_PIZZA.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
            )}
            </div>
          </>
        )}
      </main>

      {/* Modal de Relatório */}
      <RelatorioModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}
