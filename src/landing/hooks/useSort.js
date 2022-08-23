import { useState } from "react";

const useSort = () => {
  const [sort, setSort] = useState('DESC')
  
  const onChangeSort = () => setSort(sort === 'DESC' ? 'ASC' : 'DESC')

  return { sort, onChangeSort }
};

export default useSort;
