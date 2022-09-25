import React from 'react'
import ReactDOM from 'react-dom/client'
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Ejemplos useEffect</h1>
    <Example1 />
    <br />
    <Example2 />
    <br />
    <Example3 />
  </React.StrictMode>
)
