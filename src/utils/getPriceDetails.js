export const getPriceDetails = (myCart) => {
    return myCart?.reduce(
      ( {price} , item) => {
        price +=  item.Price * item.qty ;
        // discount += (item.originalPrice - item.price) * item.qty;
        return  {price} ;
      },
      {
        price: 0,
        // discount: 0,
      }
    );
  }; 