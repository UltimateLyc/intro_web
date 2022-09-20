import { useState } from "react"

const AddTarea = () => {

    const[texto, setTexto] = useState('')
    const[fecha, setFecha] = useState('')
    const[terminada, setTerminada] = useState(false)

    return (
        <form action="" className="add-form">
            <div className="form-control">
                <label>Tarea</label>
                <input type="text" placeholder="Agregar una tarea"/>
            </div>
            <div className="form-control">
                <label>Fecha</label>
                <input type="text" placeholder="Teclea la fecha"/>
            </div>
            <div className="form-control form-control-check">
                <label>Termianda</label>
                <input type="checkbox"/>
            </div>
            <input type="submit" value='Agregar' className="btn btn-block"/>
        </form>
    )
}

export default AddTarea