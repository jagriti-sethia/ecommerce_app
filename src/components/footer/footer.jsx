import React from 'react'

// import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div>
       
       <footer>
        <div className="newsletter">
          <h2>Newsletter</h2>
          <p>Get timely updates from your favorite products.</p>
          <form className="input-container">
            <input placeholder="Your email" type="email"/>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="facilities">
          <div>
            <i class="fa-solid fa-truck-fast facilities-icon"></i>
            <p>FREE SHIPPING</p>
          </div>
          <div>
            <i class="fa-solid fa-rotate-left facilities-icon"></i>
            <p>EASY RETURNS</p>
          </div>
          <div>
            <i class="fa-solid fa-cloud-arrow-up facilities-icon"></i>
            <p>100% ORIGINAL PRODUCTS</p>
          </div>
          <div>
            <i class="fa-solid fa-tag facilities-icon"></i>
            <p>TOP BRANDS</p>
          </div>
          <div>
            <p>Show some love on social media</p>
            <div className="social-links">
              <a href="">
                <i class="fa-brands fa-github fa-lg"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-twitter fa-lg"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div>
            <a href="/">Terms & Condition</a>
            <a href="/">Shipping Policy</a>
            <a href="/">Cancellation Policy</a>
            <a href="/">Privacy Policy</a>
          </div>
          <p>
            Copyright <i class="fa-regular fa-copyright"></i> 2023 . All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer