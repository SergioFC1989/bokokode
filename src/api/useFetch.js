/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    (async () => {
      try {
        const getData = await fetch(url, options)
        const data = await getData.json()
        setData(Object.values(data))
        setError(undefined)
      }
      catch (e) {
        setData(undefined)
        setError(e)
      }
      setLoading(false)
    })()
  },[])
  return { data, error, loading }
};

export default useFetch;
