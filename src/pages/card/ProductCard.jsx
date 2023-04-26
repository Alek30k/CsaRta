import React from "react";
import "./ProductCard.css";

const Product = () => {
  //   const pizza = {
  //     id: 1,
  //     img: "/img/pizza.png",
  //     name: "CAMPAGNOLA",
  //     price: [19.9, 23.9, 27.9],
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  //   };

  const productItems = {
    id: 1,
    discount: 50,
    cover: "./flash-1.png",
    name: "Shoes",
    price: 100,
  };

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
