import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import "./productcard.css";
import { AuthContext } from "../../contexts/authContext";
import { isItemInCart } from "../../utils/isItemInCart";
import { addToCartHandler } from "../../utils/addToCartHandler";
import { addToWishlistHandler } from "../../utils/addToWishlistHandler";
import { isItemInWishlist } from "../../utils/isItemInWishlist";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlistHandler";
import { ProductContext } from "../../contexts/productContext";
import { toast } from "react-toastify";

const Productcard = ({ productsData }) => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);
  const { productState, productDispatch } = useContext(ProductContext);
  const {
    _id,
    Brand,
    Name,
    Image,
    Storage,
    Price,
    ScreenSize,
    RAM,
    OperatingSystem,
    Camera,
    BatteryCapacity,
    ratings,
    inStock,
    isBestSeller,
  } = productsData;



  return (
    <div>
      <div
        className={
          inStock ? "product-card" : "product-card out-of-stock-product-card"
        }
      >
        <div className="card-tag">
          {isBestSeller && <span className="card-badge">BESTSELLER</span>}
          <button className=
            {`${
              isItemInWishlist(productState?.wishlist, _id)
                ? `wishlist-toggle`
                : `wishlist-icon`
            }`}

            style={{ cursor: !inStock ? "not-allowed" : "pointer" }}
            disabled={!inStock && true}
            onClick={() => {
              if (authState.isLoggedIn) {
                if (isItemInWishlist(productState?.wishlist, _id)) {
                  removeFromWishlistHandler(productDispatch, _id);
                  toast.success("Item is removed from Wishlist!");
                } else {
                  addToWishlistHandler(productsData, productDispatch);
                  toast.success("Item is added to Wishlist!");
                }
              } else {
                toast.warn("Please login to proceed!");
                navigate("/login");
              }
            }}
          >
            <i className="fa fa-heart" ></i>
          </button>
        </div>
        <div className="content-product-card" onClick={() => navigate(`/products/${_id}`)}>
          <div  className='content-product-img'>
          <img className='content-product-img' src={Image} alt={Name} />
          {!inStock && <b className="out-of-stock-overlay">Out of Stock</b>}
          </div>
          
          <div className="name-rating">

            <p className="product-name">
              {Name.length > 30 ? Name.substring(0, 30) + "..." : Name}
            </p>
            <div className="card-star">
              <p>{ratings?.value}  <i className="fa fa-star"></i></p>

            </div>
          </div>
          <div className="name-rating">
            <p className="size">{RAM}</p>
            <p className="price-text">
              MRP: <strong>{Price}</strong>{" "}
              <span className="originalPrice">{Price}</span> |{" "}
              <span className="off">Off</span>
            </p>

          </div>
        </div>
        <button
          style={{ cursor: !inStock && "not-allowed" }}
          disabled=''
          className='add-to-cart'

          onClick={() => {
            if (authState.isLoggedIn) {
              if (isItemInCart(productState?.cart, _id)) {
                navigate("/cart");
              } else {
                addToCartHandler(productsData, productDispatch);
                toast.success("Item is added to Cart!");
                // console.log(p)
              }
            } else {
              toast.warn("Please login to proceed!");
              navigate("/login");
            }
          }}
        >
          <i className="fa fa-shopping-cart"></i>{" "}
          {isItemInCart(productState?.cart, _id) ? "Go to Cart" : "Add to Cart"}

        </button>
      </div>
    </div>
  );
};

export default Productcard;