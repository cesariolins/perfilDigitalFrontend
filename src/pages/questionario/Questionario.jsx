import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { formatCPF, validateCPF } from "../../utils/cpfUtils"
import { perguntasPerfil } from "./perguntas" // Não precisamos de perguntasQuestionario aqui
import logo from "../../assets/logo.png"
import user from "../../assets/user.svg"
// import UserInput from "../../components/userInput/UserInput"
import UserInput2 from "../../components/userInput2/UserInput2"
import "./questionario.css"

export default function Questionario() {
  const navigate = useNavigate()

  // Estados
  const [etapa, setEtapa] = useState('cpf') // cpf, perfil
  const [cpf, setCpf] = useState("")
  const [cpfError, setCpfError] = useState("")
  const [perguntaAtual, setPerguntaAtual] = useState(0)
  const [respostasPerfil, setRespostasPerfil] = useState({})

  // Handlers
  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setCpf(formatted)
    setCpfError("")
  }

  const handleIniciarQuestionario = () => {
    if (!validateCPF(cpf)) {
      setCpfError("CPF inválido")
      return
    }
    // Aqui, em vez de setEtapa('perfil'), vamos para a próxima etapa.
    // Se o CPF for válido, já vamos para a primeira pergunta de perfil.
    setEtapa('perfil')
    setPerguntaAtual(0)
  }

  const handleRespostaPerfil = (valor) => {
    console.log('🔹 Resposta selecionada:', valor)
    console.log('🔹 Pergunta atual:', perguntaAtual)
    console.log('🔹 Total de perguntas perfil:', perguntasPerfil.length)

    const pergunta = perguntasPerfil[perguntaAtual]
    console.log('🔹 ID da pergunta:', pergunta.id)

    const novasRespostas = { ...respostasPerfil, [pergunta.id]: valor }
    console.log('🔹 Respostas até agora:', novasRespostas)

    setRespostasPerfil(novasRespostas)

    if (perguntaAtual < perguntasPerfil.length - 1) {
      console.log('✅ Indo para próxima pergunta de perfil')
      setPerguntaAtual(perguntaAtual + 1)
    } else {
      console.log('✅ Terminou perfil! Navegando para Questionario2.jsx')
      // Navega para a próxima página, passando os dados do perfil
      navigate('/questionario2', { state: { cpf: cpf.replace(/\D/g, ''), perfil: novasRespostas } })
    }
  }

  // Renderizações condicionais
  if (etapa === 'cpf') {
    return (
      <div className='questionario'>
        <img src={logo} alt="logo Perfil Digital" />
        <h3>Cadastre seu CPF para ganhar a moeda digital do Recife</h3>
        <UserInput2 
          icon={user}
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={handleCPFChange}
        />
        {cpfError && <p className="error-message">{cpfError}</p>}
        <div className="vaivolta">
          <button className='backButton' onClick={() => navigate('/')}>Voltar</button>
          <button className='nextButton' onClick={handleIniciarQuestionario}>Próximo</button>
        </div>
      </div>
    )
  }

  if (etapa === 'perfil') {
    const pergunta = perguntasPerfil[perguntaAtual]
    return (
      <div className='questionario'>
        <img src={logo} alt="logo Perfil Digital" className="logo-pequena" />
        <div className="progresso">
          <span>Etapa de Perfil ({perguntaAtual + 1} de {perguntasPerfil.length})</span>
          <div className="barra-progresso">
            <div 
              className="barra-progresso-preenchida"
              style={{ width: `${((perguntaAtual + 1) / perguntasPerfil.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="pergunta-card">
          <h2 className="numero-pergunta">{perguntaAtual + 1}.</h2>
          <p className="texto-pergunta">{pergunta.pergunta}</p>

          <div className="opcoes">
            {pergunta.opcoes.map((opcao, index) => (
              <button
                key={index}
                className="opcao-btn"
                onClick={() => handleRespostaPerfil(opcao)}
              >
                {opcao}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return null
}
