// librerias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'/* import ReactDOM from 'react-dom/client' */

// componentes
import Router from './Router'

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode> {/* El StrictMode se debe de quitar cuando se manda a produccion */}
    <Router />
  </StrictMode>
)
