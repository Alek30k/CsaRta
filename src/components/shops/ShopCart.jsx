import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

const ShopCart = ({ productsSelect }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const dispatch = useDispatch();

  const handleAddToCart = (shopItems) => {
    dispatch(addToCart(shopItems));
  };

  return (
    <>
      {productsSelect.slice(0, 6).map((shopItems, index) => {
        return (
          <div className="box" key={index}>
            <div className="product mtop shopi productImg">
              <div className="img">
                <span className="discount">{shopItems.discount}% Off</span>
                <Link to={`/product/${shopItems._id}`}>
                  <img src={shopItems.cover} alt="" />
                </Link>
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
                    <button onClick={() => handleAddToCart(shopItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                    <ToastContainer />
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
