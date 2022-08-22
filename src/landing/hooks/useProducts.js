import { useQuery } from "react-query";

const useProducts = (page = 1, categories, sortKey = 'price', sortType = 'ASC') => {
  const query = useQuery([page, categories, sortKey, sortType], async () => {
    const url = `https://technical-frontend-api.bokokode.com/api/products?page=${page}`
    const options = {
      method: 'POST',
      body: JSON.stringify({
        categories,
        sort: {
          key: sortKey,
          type: sortType
        }
      })
    };
    const res = await fetch(url, options)
    const json = await res.json()
    return json.data
  });
  return query
};
export default useProducts;