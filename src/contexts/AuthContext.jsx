// src/contexts/AuthContext.jsx
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authService } from '../services/authService'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Verifica se há usuário logado ao carregar a aplicação
  useEffect(() => {
    const verificarUsuario = async () => {
      const token = localStorage.getItem('token')
      const userData = localStorage.getItem('user')

      if (token && userData) {
        // Verifica se o token ainda é válido
        const resultado = await authService.verificarToken()
        if (resultado.success) {
          setUser(JSON.parse(userData))
        } else {
          // Token inválido, limpa
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      }
      setLoading(false)
    }

    verificarUsuario()
  }, [])

  const login = async (cpf, senha) => {
    try {
      const resultado = await authService.login(cpf, senha)
      
      if (resultado.success) {
        setUser(resultado.usuario)
        navigate('/dashboard')
        return { success: true }
      } else {
        return { success: false, message: resultado.message }
      }
    } catch (error) {
      // ✅ AGORA USA O ERROR
      console.error('Erro ao fazer login:', error)
      return { 
        success: false, 
        message: 'Erro ao conectar com o servidor' 
      }
    }
  }

  const logout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
