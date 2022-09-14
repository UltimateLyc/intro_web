import { useState } from 'react'
import Header from './components/Header' // Importamos el componente

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header titulo = 'Tareas' /> {/* ejecutanos el componente */}
    </div>
  )
}

export default App
