import React, { useState } from "react";
import Dcard from "./Dcard";

const Discount = ({ addToCart }) => {
  return (
    <>
      <section
        className="Discount background NewArrivals "
        id="GrandesDescuentos"
      >
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/windows/32/fa314a/gift.png" />
              <h2>Grandes descuentos</h2>
            </div>
            <div className="heading-right row ">
              <span>Ver todo</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Dcard addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default Discount;
