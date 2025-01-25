import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector((state) => state.categories.categories);
  // console.log(Object.keys(categoriesMap));

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        // console.log(products);

        return (
          <CategoryPreview
            key={products.title}
            title={products.title}
            products={products}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
