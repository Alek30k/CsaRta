import React from "react";
import { Link } from "react-router-dom";

const ShopCartCatproduct = ({ catFilteredSearch }) => {
  return (
    <>
      {catFilteredSearch.map((shopItems, index) => {
        return (
          <div className="box productCat" key={index}>
            <div className=" mtop  productImg">
              <div className="img">
                <Link to={`/product/${shopItems._id}`}>
                  <img src={shopItems.cover} alt="" />
                </Link>
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

export default ShopCartCatproduct;
