import { Link } from 'react-router-dom'
import Container from './Container'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Container>
        <a className='navbar-brand' href='#'>Navbar</a>
        <button className='navbar-toggler'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/link'>Link</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>

  )
}

export default Navbar
