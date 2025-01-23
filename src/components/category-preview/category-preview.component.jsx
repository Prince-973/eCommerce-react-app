import React from "react";
import "./category-preview.style.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
function CAtegoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        {/* <span ></span> */}
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
        <div className="preview">
          {products
            .filter((_, ind) => ind < 4)
            .map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
        </div>
      </h2>
    </div>
  );
}

export default CAtegoryPreview;
