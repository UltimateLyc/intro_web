// dependencias
// import { useEffect, useState } from 'react'

// estilos

// components
import Container from '../components/Container'
import Navbar from '../components/Navbar'

// funciones propias

function App () {
  return (
    <>
      <Container>
        <Navbar /> {/* con children podemos pasar un componente como props */}
      </Container>
    </>
  )
}

export default App
