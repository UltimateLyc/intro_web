const Card = ({ name = {}, flags = {}, capital = {} }) => { /* el usar en los props los nombres directos del api podemos usar el spread operator para poder llamar en especifico esos nombres de las props   */
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={flags.svg} className='card-img-top img-fluid' alt={name.common} />
      <div className='card-body'>
        <h5 className='text-center card-title m-0 '>{name.common}</h5>
        <p className='m-0 text-center'>{capital[0]}</p>
      </div>
    </div>

  )
}

export default Card
