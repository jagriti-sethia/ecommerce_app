import Productcard from '../../components/productcard/productcard';
import Sidebar from '../../components/sidebar/sidebar';
import React from 'react'
import'./Productlisting.css';
import  { useContext,useEffect } from "react";
import { FilterContext } from "../../contexts/filterContext";
import { ProductContext } from "../../contexts/productContext";


const Productlisting = () => {
  const { sortByPriceFilteredProducts } = useContext(FilterContext);
  const { productState } = useContext(ProductContext);
  
  const { setLoader } = useContext(ProductContext);

  useEffect(() => {
    setLoader(true);
    const id = setTimeout(() => {
      setLoader(false);
    }, 500);
    return () => clearTimeout(id);
    // eslint-disable-next-line
  }, []);




  return (
    <div className='products'>
        
    <div className="sidebar-filter">
    <Sidebar />
    </div>

      <div className='productListing'>
        <div  >
          {sortByPriceFilteredProducts?.length===0?(
            <h1>
<p>No products found!!!</p>
              
            </h1>
          ):(
            <div>
               <h2 className='product-list-header' >
             Showing All Products
               <small>({sortByPriceFilteredProducts?.length})</small>
             </h2>
             
               <div  className="products-list">
                 {sortByPriceFilteredProducts?.map((product) => (
                  <li><Productcard productsData={product} key={product._id} /></li>
                     
                  
                 ))}
               </div>
            </div>
            
          )}
   
      
         </div>
      </div>

    </div>
  )
}


export default Productlisting;