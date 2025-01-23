import React from "react";
import "./directory.style.scss";
// import CategoryItem from "../category-item/directory-item.component";
import DirectoryItem from "../category-item/directory-item.component";
function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
