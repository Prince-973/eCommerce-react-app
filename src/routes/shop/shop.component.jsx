import { Routes, Route } from "react-router-dom";
import "./shop.style.scss";
import CategoriesPreview from "../categories-preview.component.jsx/categories-prerview.component";
import Category from "../category/category.component";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
