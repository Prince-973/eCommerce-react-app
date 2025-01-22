import React from "react";
import "./category-item.style.scss";

function CategoryItem({ category }) {
  const { id, imageUrl, title } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* <img/> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
