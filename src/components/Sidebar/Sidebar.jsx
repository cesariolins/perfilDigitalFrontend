// src/components/Sidebar/Sidebar.jsx
import { useAuth } from '../../hooks/useAuth' // ← MUDA AQUI (não é de contexts)
import logo from '../../assets/logo.png'
import './Sidebar.css'

export default function Sidebar() {
  const { logout, user } = useAuth()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Perfil Digital" className="sidebar-logo" />
      </div>

      <nav className="sidebar-nav">
        <button className="sidebar-item active">
          <span>👤</span> Bem vindo {user?.nome || "UsuárioGestor!"}!
        </button>
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-item" onClick={logout}>
          <span>🚪</span> Sair
        </button>
      </div>
    </aside>
  )
}
