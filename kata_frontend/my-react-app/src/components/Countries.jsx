import { useEffect, useState } from 'react'

const Countries = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const req = await window.fetch('https://restcountries.com/v3.1/all')
    const res = await req.json()

    // data.length === 0 && setData(res)
    setData(res)
  }

  /* getData() */

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <p>Paises</p>
  )
}

export default Countries
