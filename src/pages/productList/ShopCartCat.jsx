import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShopCartCat = ({ catFiltered, catFilteredModal }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  console.log(catFiltered);

  return (
    <>
      {catFiltered.map((shopItems, index) => {
        return (
          <div className="box productCat" key={index}>
            <div className=" mtop  productImg">
              <div className="img">
                <Link to={`/product/${shopItems._id}`}>
                  <img src={shopItems.img[0]} alt="" />
                </Link>
                <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="titleShop">
                <h3>{shopItems.name}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCartCat;
