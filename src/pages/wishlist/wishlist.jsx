import React , { useContext } from 'react'
import { NavLink } from "react-router-dom";
import "./wishlist.css";
import emptyWishlistImg from "../../assets/empty-wishlist.png";
import { useNavigate } from "react-router-dom";
import { ProductContext } from '../../contexts/productContext';
import Productcard from '../../components/productcard/productcard';
const Wishlist = () => {
  const { productState } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <div>
      {productState?.wishlist?.length === 0 ?(
        <div className="wishlist">
           <h1>Wishlist </h1>
      <div className="wishlist-container">
         {/* emptywishlist start here */}
         <div className="emptyWishlist">
      <img src={emptyWishlistImg} alt="empty-wishlist" />
      <h2>Your Wishlist is Empty!</h2>
      <p>Explore exclusive products and add your favourites to Wishlist!</p>
      <button onClick={() => navigate("/products")}>Shop Now</button>
    </div>
    {/* emptywishlist ends here */}
      </div>
        </div>
      ):( <div className="wishlist">
      <h1>Wishlist ({productState?.wishlist?.length})</h1>
      <div className="wishlist-container">
        <div className="wishlist-list">
          {productState?.wishlist?.map((product) => (
            <li>
              <Productcard productsData={product} key={product._id} />
            </li>
          ))}
        </div>
      </div>
    </div>)}


  </div>   
  )


      }

export default Wishlist