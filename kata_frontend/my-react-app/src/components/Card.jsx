import { Link } from 'react-router-dom'
import toLowerCase from '../utils/toLowerCase'

const Card = ({ name = {}, flags = {}, capital = {}, cca3 = '' }) => { /* el usar en los props los nombres directos del api podemos usar el spread operator para poder llamar en especifico esos nombres de las props   */
  return (
    <Link className='text-decoration-none' to={toLowerCase(cca3)}>
      <div className='card' style={{ width: '18rem' }}>
        <img src={flags.svg} className='card-img-top img-fluid' alt={name.common} />
        <div className='card-body'>
          <h5 className='text-center card-title m-0 '>{name.common}</h5>
          <p className='m-0 text-center'>{capital[0]}</p>
        </div>
      </div>
    </Link>

  )
}

export default Card
