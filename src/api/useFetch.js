/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    (async () => {
      try {
        const response = await (await fetch(url, options)).json()
        setData(Object.values(response))
        setError(undefined)
      }
      catch (e) {
        setData(undefined)
        setError(e)
      }
      setLoading(false)
    })()
  }, [])
  return { data, error, loading }
};

export default useFetch;
