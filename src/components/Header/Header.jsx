
import React,{useContext, useEffect,  useState } from "react";
import"./header.css";
// import {div, div } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductContext } from "../../contexts/productContext";
import { FilterContext } from "../../contexts/filterContext";
import { AuthContext } from "../../contexts/authContext";



const Header = () => {

  const { productState } = useContext(ProductContext);
const { filterState, filterDispatch } = useContext(FilterContext);
const { authState } = useContext(AuthContext);

const [searchText, setSearchText] = useState("");


const navigate = useNavigate();

useEffect(() => {
  filterDispatch({ type: "SEARCH", payload: searchText });
}, [searchText, filterDispatch]);


  

  return (
    <div >
      <div   >
        <div className="flexbox">

          <div className="flex-item-left"><NavLink to="/" >
            <h3 style={{color : "white"}}>Shopping cart</h3>
          </NavLink></div>

          <div className="flex-item-mid">
            <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              placeholder="Search"
              value={searchText}
              type="search"
              name="search"
              onChange={(e) => {
                setSearchText(e.target.value);
                e.target.value.trim() !== "" && navigate("/products");
                filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
              }}
            />
          </div>
          </div>
          <div className="flex-item-right"> 
            <div className="nav-icons">
            <NavLink to="/products" className="icon-navlink">
              <i class="fa-solid fa-bag-shopping"></i>
            </NavLink>
            <NavLink to="/cart" className="icon-navlink">
              <i class="fa-solid fa-cart-shopping"></i>
              {productState?.cart?.length > 0 && (
                <span className="icon-badge">{productState?.cart?.length}</span>
              )}
            </NavLink>
            <NavLink to="/wishlist" className="icon-navlink">
              <i class="fa-solid fa-heart"></i>
              {productState?.wishlist?.length > 0 && (
                <span className="icon-badge">
                  {productState?.wishlist?.length}
                </span> 
               )}
            </NavLink>
            <NavLink
              to={
                authState?.isLoggedIn
                  ? "/account-details/userDetails"
                  : "/login"
              }
              className={authState?.isLoggedIn ? "login-user" : "icon-navlink"}  >
             
                
             {authState?.isLoggedIn ? (
                <p>{authState?.user.firstName}</p>
              ) : (
                <i className="user" class="fa-solid fa-user"></i>
              )}
            </NavLink>
          </div>
          </div>
        
            
         
        </div>
      </div>

     
    </div>
  )
}

export default Header