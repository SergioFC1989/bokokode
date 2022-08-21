import { useMemo } from "react";
import useFetch from "../../common/hooks/useFetch";
const useProducts = (page, categories = [], sortKey = 'price', sortType = 'ASC') => {
  console.log('useFecth Products')
  const options = useMemo(() => ({
    method: 'POST',
    body: {
      categories,
      sort: {
        key: sortKey,
        sort: sortType
      }
    }
  }), [categories, sortType, sortKey])

  const fetchData = useFetch(
    `https://technical-frontend-api.bokokode.com/api/products?page=${page}`,
    options
  )
  console.log('useFecth Products Final')

  return fetchData;
}

export default useProducts;