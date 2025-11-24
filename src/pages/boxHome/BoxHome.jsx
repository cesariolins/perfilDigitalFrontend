import logo from "../../assets/logo.png"
import PrimaryButton from "../../components/primaryButton/primaryButton"
import "./boxHome.css"
import { useNavigate } from "react-router-dom"

export default function BoxHome() {

  const navigate = useNavigate()

    return (
              <div className='boxHome'>
                <img src={logo} alt="logo Perfil Digital" />
                <h2>Hábitos de uso da internet</h2>
                <PrimaryButton onClick={() => navigate('/questionario')}>
                  Ir para questionário
                </PrimaryButton>
                <hr />
                <div className='boxOu'>Ou</div>
                <p>Você é gestor? Faça login <a onClick={()=> navigate('/login')}>aqui</a></p>
              </div>
    )
}