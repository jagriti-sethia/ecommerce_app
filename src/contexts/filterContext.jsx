import React, { createContext, useContext, useReducer } from "react";
import filterReducer from "../Reducer/filterreducer";

import { ProductContext } from "./productContext";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { productState } = useContext(ProductContext);

  const initialFilter = {
    search: "",
    priceRange: 10000,
    categoryFilter: [],
    brandFilter: [],
    ratingFilter: "",
    sortByPriceFilter: "",
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );

  const searchFilteredProducts =
    filterState?.search?.length > 0
      ? productState?.products?.filter(({ Name }) =>
          Name.toLowerCase().includes(filterState?.search.toLowerCase())
        )
      : productState?.products;
      console.log(searchFilteredProducts)

  const priceRangeFilteredProducts = searchFilteredProducts?.filter(
    ({ Price }) => Number(Price) <= Number(filterState?.priceRange)
  );
  console.log(priceRangeFilteredProducts)

  const categoryFilteredProducts =
    filterState?.categoryFilter?.length > 0
      ? priceRangeFilteredProducts?.filter(({ OperatingSystem }) =>
      filterState?.categoryFilter?.includes(OperatingSystem)
        )
      : priceRangeFilteredProducts;

  const brandFilteredProducts =
    filterState?.brandFilter?.length > 0
      ? categoryFilteredProducts?.filter(({ Brand }) =>
      filterState?.brandFilter?.includes(Brand)
        )
      : categoryFilteredProducts;

  const ratingFilteredProducts =
    filterState?.ratingFilter?.length > 0
      ? brandFilteredProducts?.filter(
          ({ ratings: { value } }) =>
            Number(value) >= Number(filterState?.ratingFilter)
        )
      : brandFilteredProducts;

  const sortByPriceFilteredProducts =
    filterState?.sortByPriceFilter?.length > 0
      ? (() => {
          switch (filterState.sortByPriceFilter) {
            case "LTH":
              return [...ratingFilteredProducts]?.sort(
                (product1, product2) => product1.Price - product2.Price
              );
            case "HTL":
              return [...ratingFilteredProducts]?.sort(
                (product1, product2) => product2.Price - product1.Price
              );
            case "RESET":
              return ratingFilteredProducts;
            default:
              return ratingFilteredProducts;
          }
        })()
      : ratingFilteredProducts;

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, sortByPriceFilteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;