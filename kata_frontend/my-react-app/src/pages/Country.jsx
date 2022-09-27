// hooks
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { data, loading } = useGetData('https://restcountries.com/v3.1/alpha/pe')

  console.log(data, loading)

  return (
    <section className='container'>
      <div className='row justify-content-center text-white'>
        <aside className='col-6'>
          <article>
            <img src='bandera' alt='bandera' />
            <h1 className='country text-center'>Country</h1>
          </article>
        </aside>
      </div>
    </section>
  )
}

export default Country
