// src/pages/Login/Login.jsx
import "./login.css"
import lock from "../../assets/lock.svg"
import user from "../../assets/user.svg"
import logo from "../../assets/logo.png"
import UserInput from "../../components/userInput/UserInput"
import { formatCPF } from "../../utils/cpfUtils"
import { useState } from "react"
import ModalEsqueciSenha from "../../components/ModalEsqueciSenha/ModalEsqueciSenha"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")
  const [loginError, setLoginError] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setCpf(formatted)
    setLoginError("")
  }

  const handleNext = async (e) => {
    e.preventDefault()
    // Validações básicas
    if (!cpf) {
      setLoginError("Digite o CPF")
      return
    }

    if (!senha) {
      setLoginError("Digite a senha")
      return
    }

    setLoading(true)
    setLoginError("")

    // Faz login via API
    const result = await login(cpf, senha)
    
    setLoading(false)

    if (!result.success) {
      setLoginError(result.message || "CPF ou senha inválidos")
    }
  }

  return (
    <div className='login'>
      <img src={logo} alt="logo Perfil Digital" />
      <UserInput 
        icon={user}
        placeholder="CPF"
        value={cpf}
        onChange={handleCPFChange}
        disabled={loading}
      />
      <UserInput 
        icon={lock}
        placeholder="Senha"
        type={"password"}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        disabled={loading}
      />
      {loginError && <p className="error-message">{loginError}</p>}
      <span className="esqueci" onClick={() => setIsModalOpen(true)}>
        Esqueceu a senha?
      </span>
      <div className="vaivolta">
        <button className='backButton' onClick={() => navigate('/')} disabled={loading}>
          Voltar
        </button>
        <button 
          className='nextButton' 
          onClick={handleNext} 
          disabled={loading}
          type="button"  // ← IMPORTANTE
        >
          {loading ? 'Entrando...' : 'Próximo'}
        </button>

      </div>
      <ModalEsqueciSenha 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}
