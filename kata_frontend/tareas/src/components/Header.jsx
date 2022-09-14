const Header = (props) => {
  return (
    <header>
        <h1>
            {props.titulo}  {/* Mandamos a llamar atravez de props el titulo */}
            </h1>
    </header>
  )
}

/* de este manera podemos crear un props por defaul */
Header.defaultProps = {
    titulo: 'Tareas'
}

export default Header