import React, { useContext } from "react";

import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.style.scss";
function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}

export default Shop;
