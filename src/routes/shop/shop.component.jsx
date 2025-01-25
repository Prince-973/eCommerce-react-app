import { Routes, Route } from "react-router-dom";
import "./shop.style.scss";
import CategoriesPreview from "../categories-preview.component.jsx/categories-prerview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesAsync,
  fetchCategoriesStart,
  setCategories,
} from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
