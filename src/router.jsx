// src/router.jsx
import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import BoxHome from "./pages/boxHome/BoxHome"
import Questionario from "./pages/questionario/Questionario"
import Questionario2 from "./pages/questionario/Questionario2" // ✅ IMPORTAR O NOVO COMPONENTE
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BoxHome />
      },
      {
        path: "/questionario",
        element: <Questionario />
      },
      {
        path: "/questionario2",
        element: <Questionario2 />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      }
    ]
  }
])

export default router
