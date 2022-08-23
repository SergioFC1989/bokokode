import { useState } from "react";

const useCartShopping = () => {
  const [cartShopping, setCartShopping] = useState([])

  const onAddItem = item => setCartShopping(prev => [...prev, item])
  const onRemoveItems = () => setCartShopping([])

  return { cartShopping, onAddItem, onRemoveItems }
};

export default useCartShopping;