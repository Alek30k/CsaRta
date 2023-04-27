import React from "react";
import "./ProductCard.css";

const Product = ({ productItems }) => {
  return (
    <div className="containerr">
      <div className="leftt">
        <div className="imgContainer">
          <img src={productItems.cover} alt="" />
        </div>
      </div>
      <div className="rightt">
        <h1 className="titlee">{productItems.name}</h1>
        <span className="pricee">${productItems.price}</span>
        <div className="addCart">
          <button className="buttonn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
