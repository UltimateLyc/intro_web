import Tarea from './Tarea'

const Tareas = ({ tareas, onDelete }) => {

  return (
    <>
    {tareas.map((tarea) => (
      <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete}/>
      /* <h3 key={tarea.id}>  {tarea.texto}</h3> */
    ))}
    </>
  )
}

export default Tareas