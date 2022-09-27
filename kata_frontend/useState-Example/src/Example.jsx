import React, { useState } from 'React'

const Example = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Example useState</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
