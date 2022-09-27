// hooks
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { code } = useParams()
  const navigate = useNavigate()

  const { data, loading } = useGetData(`https://restcountries.com/v3.1/alpha/${code}`)

  /* console.log(data) */

  /* Esta parte de useNavigate sirve para cuando el usuario mete una URL o una ruta no existente la redirecciona a HOME */
  useEffect(() => {
    data.status === 400 && navigate('/')
  }, [data.status])

  return (
    <section className='container py-4'>
      <div className='row justify-content-center text-white'>
        <aside className='col-6'>
          {
            loading
              ? <p className='loading text-center'>Cargando ...</p>
              : (
                <article>
                  <img className='img-fluid' src={data[0]?.flags?.svg} alt='bandera' />
                  <h1 className='country text-center'>{data[0]?.name?.common || `${data.status} - ${data.message}`}</h1>
                </article>
                )
            }
        </aside>
      </div>
    </section>
  )
}

export default Country
