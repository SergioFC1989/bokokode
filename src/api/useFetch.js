const useFetch = (url, options) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    (async () => {
      try {
        const getData = await fetch(url, options)
        setData(getData)
        setError(undefined)
      }
      catch (e) {
        setData(undefined)
        setError(e)
      }
      setLoading(false)
    })()
  }, [fetchParams])
  return { data, error, loading }
};

export default useFetch;
