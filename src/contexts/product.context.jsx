import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data";
import { addCollectionAndDocumnets } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    addCollectionAndDocumnets("categories", SHOP_DATA);
  }, []);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
