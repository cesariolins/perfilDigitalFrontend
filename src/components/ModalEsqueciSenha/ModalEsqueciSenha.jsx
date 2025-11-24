// src/components/Modal/Modal.jsx
import "./ModalEsqueciSenha.css"
import UserInput from "../userInput/UserInput"
import user from "../../assets/user.svg"
import { useState } from "react"

export default function Modal({ isOpen, onClose }) {
  const [email, setEmail] = useState("")

  if (!isOpen) return null // Se não tiver aberto, não renderiza nada

  const handleEnviar = () => {
    console.log("Email para recuperação:", email)
    // Aqui você faz a lógica de enviar o email
    onClose() // Fecha o modal após enviar
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Vamos enviar um pedido de redefinição de senha</h2>
        
        <UserInput 
          icon={user}
          placeholder="Email cadastrado"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="modal-buttons">
          <button className="backButton" onClick={onClose}>Voltar</button>
          <button className="nextButton" onClick={handleEnviar}>Enviar</button>
        </div>
      </div>
    </div>
  )
}
