// con children podemos pasar un componente como props

const Container = ({ children }) => {
  return (
    <section className='container'>
      {children}
    </section>
  )
}

export default Container
