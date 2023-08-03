import React from "react";
import FlashCard from "./FlashCard";
import "./style.css";

const FlashDeals = ({ products, setProducts }) => {
  return (
    <>
      <section className="flash">
        <div className="container" id="ProductosDestacados">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Productos Destacados</h1>
          </div>

          <FlashCard products={products} setProducts={setProducts} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
