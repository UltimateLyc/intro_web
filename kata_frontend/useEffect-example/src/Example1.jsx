/**
 * Con este ejemplo vemos
 */
import { useEffect, useState } from 'react'

const Example1 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(10)
    console.log(count
    )
  })

  return (
    <div>
      <h2>Ejemplo 1</h2>
      <p>Se ejecuta cada que se cambia el estado </p>
      <p>El numero es {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example1
