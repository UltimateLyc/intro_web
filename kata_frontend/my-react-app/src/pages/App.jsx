// dependencias
// import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
// estilos

// components
import Navbar from '../components/Navbar'

// funciones propias

function App () {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
