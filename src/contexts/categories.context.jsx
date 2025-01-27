import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

import { gql, useQuery } from "@apollo/client";

const COLLECTIONS = gql`
  query {
    collections {
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

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS);
  const [categoriesMap, setCategoriesMap] = useState({});
  // console.log(data);
  useEffect(() => {
    if (data) {
      const { collections } = data;
      const collectionMap = collections.reduce((acc, collection) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
      setCategoriesMap(collectionMap);
    }
  }, [data]);

  const value = { categoriesMap, loading };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
