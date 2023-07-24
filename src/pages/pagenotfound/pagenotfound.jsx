import React, { useContext } from "react";
import ErrorImage from "../../assets/404errorimage.jpg";
import { useNavigate } from "react-router-dom";
import "./pagenotfound.css";


const PageNotFound = () => {

  const navigate = useNavigate();
  document.title = "Page Not Found";
  return (
    <div className="page-not-found-main ">
      <div className="page-not-found-page">
        <img src={ErrorImage} alt="page-not-found-img" />
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
};

export default PageNotFound;