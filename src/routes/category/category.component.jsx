import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector((state) => state.categories.categories);
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const matchedCategory = categoriesMap.find(
      (cat) => cat.title.toLowerCase() === category.toLowerCase()
    );
    setProducts(matchedCategory ? matchedCategory.items : []);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
