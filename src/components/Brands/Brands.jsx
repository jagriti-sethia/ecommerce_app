import React,{useContext} from 'react'
import "./Brands.css";
import { FilterContext } from "../../contexts/filterContext";
import apple from "../../assets/Apple_brand.jpg";
import Huwaie from "../../assets/HUwai_Brand.jpg";
import lg from "../../assets/LG_brand.jpg";
import motorola from "../../assets/Motorola_Brand.jpg";
import Sony from "../../assets/Sony_brand.jpg";
import Xiaomi from "../../assets/Xiaomi_brand.jpg";
import { useNavigate } from "react-router-dom";
const Brands = () => {
  const { filterDispatch } = useContext(FilterContext);
  const navigate = useNavigate();

  return (
    <div>
      <header> BRANDS</header>
      <div className="top-brands">
        <img
          src={apple}
          alt="apple"
          onClick={() => {
            filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
            filterDispatch({ type: "SET_BRAND_FILTER", payload: "Apple" });
            navigate("/products")
          }}
        />
        <img
          src={Huwaie}
          alt="huwaie"
          onClick={() => {
            filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
            filterDispatch({ type: "SET_BRAND_FILTER", payload: "Huawei" });
            navigate("/products")
          }}
        />
        <img
          src={lg}
          alt="LG"
          onClick={() => {
            filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
            filterDispatch({ type: "SET_BRAND_FILTER", payload: "LG" });
            navigate("/products")
          }}
        />
        <img
          src={motorola}
          alt="motorola"
          onClick={() => {
            filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
            filterDispatch({ type: "SET_BRAND_FILTER", payload: "Motorola" });
            navigate("/products")
          }}
        />
        <img
          src={Sony}
          alt="Sony"
          onClick={() => {
            filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
            filterDispatch({ type: "SET_BRAND_FILTER", payload: "Sony" });
            navigate("/products")
          }}
        />
        <img
          src={Xiaomi}
          alt="Xiaomi"
          onClick={() => {
            filterDispatch({ type: "CLEAR_ALL_FILTERS", payload: "" });
            filterDispatch({ type: "SET_BRAND_FILTER", payload: "Xiaomi" });
            navigate("/products")
          }}
        />


      </div>
    </div>
  )
}

export default Brands