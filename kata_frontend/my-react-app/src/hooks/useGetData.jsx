import { useEffect, useState } from 'react'

const useGetData = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const req = await window.fetch(url)
      const res = await req.json()

      // data.length === 0 && setData(res)
      setData(res)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  /* getData() */

  useEffect(() => {
    getData()
  }, [])

  return { data, loading }
}

export default useGetData
