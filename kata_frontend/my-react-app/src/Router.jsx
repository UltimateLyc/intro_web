import { BrowserRouter, Routes, Route } from 'react-router-dom'

// componentes
import Countries from './components/Countries'
import App from './pages/App'
import Country from './pages/Country'
// import Navbar from './components/Navbar'

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Navbar />  esta es una aforma de colocoar el navbar de manera estatica, en caso de que tengamos muchas rutas podemos usar outlet */}
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Countries />} />
          <Route path='country' element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
