import Button from './Button'

const Header = (props) => {
  
  const onClick = () => {
    console.log('click')
  }

/*   const saludo = () => {
    console.log('holi')
  } */

  return (

    <header className='header' /* style={ estiloEncabezado /* forma 1 de agregar estilos {color:'red', backgroundColor: 'black'} } */>

        <h1>
            {props.titulo}  {/* Mandamos a llamar atravez de props el titulo */}
        </h1>
        <Button texto='Agregar' color='black' onClick={onClick} />
        {/* <Button texto='Boton 2' color='blue' onClick={saludo}/> */}

    </header>
  )
}

/* de este manera podemos crear un props por defaul */
Header.defaultProps = {
    titulo: 'Tareas'
}

//Forma dos de agregar estilos
/* const estiloEncabezado = {
  color: 'red',
  backgroundColor: 'black'
} */

export default Header