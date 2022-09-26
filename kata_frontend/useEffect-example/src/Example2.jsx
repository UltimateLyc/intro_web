/**
 * Se ejecuta solo la primera vez que se monta el componente
 */
import { useEffect, useState } from 'react'

const Example2 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        //Ejemplo 2.1
        setCount(10)
        console.log(count)

        //Ejemplo 2.2
        //count < 15 && setCount(10)
    },[])

    return (
        <div>
            <h2>Ejemplo 2</h2>
            <p>Se ejecuta cada que se cambia el estado </p>
            <p>El numero es {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Example2