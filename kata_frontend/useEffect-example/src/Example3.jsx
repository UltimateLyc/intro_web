/**
 * Se ejecuta cada que hay un cambio en las dependencias
 */
import { useEffect, useState } from 'react'

const Example3 = () => {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState(false)

  useEffect(() => {
    setCount(10)
    console.log(count)
    // condicional que limita el renderizado del componente
    console.log(test)
  }, [test])

  return (
    <div>
      <h2>Ejemplo 3</h2>
      <p>Se ejecuta cada que se cambia el estado </p>
      <p>El numero es {count}</p>
      <button onClick={() => setTest(!test)}>Click me</button>
    </div>
  )
}

export default Example3
