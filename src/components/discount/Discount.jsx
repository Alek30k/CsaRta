import React, { useState } from "react";
import Dcard from "./Dcard";
// import Ddata from "./Ddata";
import { Link } from "react-router-dom";

const Discount = ({ addToCart, setListFiltered, products }) => {
  const filterMarcas = () => {
    const productsFilter = products.filter(
      (item) => item.seccion === "discount"
    );
    setListFiltered(productsFilter);
  };

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
              <Link to={`/productlist/grandes&descuentos`}>
                <span onClick={() => filterMarcas()}>Ver todo</span>
              </Link>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Dcard addToCart={addToCart} products={products} />
        </div>
      </section>
    </>
  );
};

export default Discount;
