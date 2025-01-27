import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import { CategoryContainer, Title } from "./category.styles";
import Spinner from "../../components/spinner/spinner.component";

const GET_CATEGORY = gql`
  query ($title: String!) {
    getCollectionsByTitle(title: $title) {
      title
      id
      items {
        name
        id
        price
        imageUrl
      }
    }
  }
`;

const SET_CATEGORY = gql`
  mutation ($category: Category!) {
    addCategory(category: $category) {
      title
      id
      items {
        name
        id
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap, loading } = useContext(CategoriesContext);
  // const [addCategory, { loading, error, data }] = useMutation(SET_CATEGORY);
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: {
      title: category,
    },
  });

  // addCategory({ variables: { category: category } });
  console.log(data);
  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;
      setProducts(items);
    }
  }, [category, data]);

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Title>{category.toUpperCase()}</Title>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Category;
