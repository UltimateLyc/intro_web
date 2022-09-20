import { useState } from 'react'
import Header from './components/Header' // Importamos el componente
import Tareas from './components/Tareas'
import AddTarea from './AddTarea'

function App() {

  const [tareas, setTareas] = useState ([
    {
      id: 1,
      text: 'Ir al cine',
      fecha: '02 de Febrero de 2022',
      terminado: true,
    },
    {
      id: 2,
      text: 'Comprar en el supermercado',
      fecha: '10 de Febrero de 2022',
      terminado: false,
    },
    {
      id: 3,
      text: 'Hacer app en React',
      fecha: '11 de Febrero de 2022',
      terminado: false,
    }
  ])

//Funcion que va a borrar una tarea
const borrarTarea = (id) => {
  //console.log('action delete task', id)
  setTareas(tareas.filter((tarea) => tarea.id !== id)) // Con filter recorremos el array y nos da uno nuevo diferentes al id que seleccionamos
}

//Terminar Tarea 
const terminarTarea = (id) =>{
  setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea, terminada: !tarea.terminada }: tarea))
}

  return (
    <div className='container'>
      <Header titulo = 'Tareas' /> {/* ejecutanos el componente */}
      <AddTarea />
      {tareas.length > 0 ? <Tareas tareas = {tareas} onDelete={borrarTarea} onToggle={terminarTarea}/> : 'No hay tareas para mostrar'}
    </div>
  )
}

export default App