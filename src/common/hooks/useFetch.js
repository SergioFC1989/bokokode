/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState()

  const doFetch = async () => {
    console.log('llamada HTTP fetch')
    try {
      const response = await (await fetch(url, JSON.stringify(options))).json()
      setData(response)
      setError(undefined)
    }
    catch (e) {
      setData(undefined)
      setError(e)
    }
    return setLoading(false)
  };

  useEffect(() => {
    doFetch()
  }, [url, options])

  return { data, error, loading }
};

export default useFetch;
