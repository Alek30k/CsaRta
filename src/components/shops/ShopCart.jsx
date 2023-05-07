import React, { useState } from "react";

const ShopCart = ({ addToCart, products }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  let productsShop = products.slice(0, 6);

  return (
    <>
      {productsShop.map((shopItems, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop shopi productImg">
              <div className="img">
                <span className="discount">{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt="" />
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="titleShop">
                <h3>{shopItems.name}</h3>
              </div>
              <div className="product-details">
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price ">
                  <div className="containerPriceShop">
                    <h4>${shopItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(shopItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCart;
