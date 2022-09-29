import Header from './components/Header'
import { FaSearch, FaUser } from 'react-icons/fa'

const App = () => {
  return (
    <>
      <Header />
      <div className="container m-5">
        <h1><FaUser /> Hola mundo</h1>
        <button className='btn btn-success'><FaSearch /> Buscar</button>
      </div>
    </>
  )
}

export default App
