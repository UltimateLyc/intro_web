// Dependencias
import Card from './Card'

// hooks
import useGetData from '../hooks/useGetData'

const Countries = () => {
  const { data, loading } = useGetData('https://restcountries.com/v3.1/all')

  return (
    <section className='container py-4'>
      <div className='row gy-4'>
        {
          loading
            ? <p className='loading text-center'>Cargando ...</p>
            : data.map((country, index) => (
              <aside key={index} className='col-12 col-md-6 col-lg-3'>
                <Card {...country}/* flags={country.flags} name={country.name} */ /> {/* el usar en los props los nombres directos del api podemos usar el spread operator para poder llamar en especifico esos nombres de las props   */}
              </aside>
            ))
          /* !loading && <Card name={data[0].name} flags={data[0].flags} /> */
        }
      </div>
    </section>
  )
}

export default Countries
