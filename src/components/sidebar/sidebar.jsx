import React, { useContext, useState } from 'react'
import { ProductContext } from "../../contexts/productContext";
import { FilterContext } from "../../contexts/filterContext";
import "./sidebar.css";






const Sidebar = () => {
  const { productState } = useContext(ProductContext);
  const { filterState,  filterDispatch } = useContext(FilterContext);

  const BrandArr = productState?.products?.reduce(
    (acc, { Brand }) => (!acc.includes(Brand) ? [...acc, Brand] : acc),
    []
  );

  const ratingArr = [4, 3, 2, 1];

  const sortByPriceArr = [
    { label: "High To Low", value: "HTL" },
    { label: "Low To High", value: "LTH" },
    { label: "Reset", value: "RESET" },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <div
        className={showSidebar ? "sidebar mobile_filters" : "sidebar filters"}
      >
        <div className="filter-heading">
          <h2>Filters</h2>
          <button
            onClick={() =>
              filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" })
            }
          >
            Clear
          </button>
        </div>

        <h3>Price</h3>
        <div className="price-range-filter">
          <div className="price-range">
            <p>100</p>
            <p>1500</p>
            <p>3000</p>
          </div>
          <input
            type="range"
            className="price-slider"
            min={100}
            max={3000}
            value={filterState?.priceRange}
            onChange={(e) =>
              filterDispatch({
                type: "SET_PRICE_RANGE",
                payload: e.target.value,
              })
            }
          />
        </div>

        <h3>Category</h3>
        <div className="category-filter">
          {productState?.categories?.map(({ _id, OperatingSystem }) => (
            <label key={_id} >
              <input
                type="checkbox"
                key={OperatingSystem}
                checked={filterState?.categoryFilter?.includes(OperatingSystem)}
                onChange={() =>
                  filterDispatch({
                    type: "SET_CATEGORY_FILTER",
                    payload: OperatingSystem,
                  })
                }
              />
              {OperatingSystem}
            </label>
          ))}
        </div>

        <h3>Brands</h3>
        <div className="Brand-filter">
          {BrandArr?.map((Brand) => (
            <div >
              <input
                type="checkbox"
                key={Brand}
                checked={filterState?.brandFilter?.includes(Brand)}
                onChange={(e) =>
                  filterDispatch({ type: "SET_BRAND_FILTER", payload: Brand })
                }
              />
              <label>
              {Brand}
              </label>
         
            </div>
          ))}
        </div>

        <h3>Ratings</h3>
        <div className="rating-filter">
          {ratingArr?.map((rating) => {
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={Number(filterState?.ratingFilter) === Number(rating)}
                  onChange={(e) =>
                    filterDispatch({
                      type: "SET_RATING_FILTER",
                      payload: e.target.value,
                    })
                  }
                />
                {rating}⭐ and above
              </label>
            );
          })}
        </div>

        <h3>Sort By Price:</h3>
        <div className="price-filter">
          {sortByPriceArr?.map(({ label, value }) => (
            <label >
              <input
                type="radio"
                name="sort"
                value={value}
                checked={filterState?.sortByPriceFilter === value}
                onChange={(e) =>
                  filterDispatch({
                    type: "SET_SORTBYPRICE_FILTER",
                    payload: e.target.value,
                  })
                }
              />
              {label}
            </label>
          ))
          }

        </div>
        
        {showSidebar && (
          <div className="filter-modal-btns">
            <button onClick={() => setShowSidebar(!showSidebar)}>Apply</button>
            <button onClick={() => setShowSidebar(!showSidebar)}>Cancel</button>
          </div>
        )}
      </div>
      {!showSidebar && (
        <div className="mobile-view-btn">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="filter-btn"
          >
            Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default Sidebar;