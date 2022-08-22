import { useState } from "react";

const useSort = () => {
  const [sort, setSort] = useState({
    value: 'DESC',
    icon: 'Down'
  })
};

export default useSort;
