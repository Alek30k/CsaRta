import React from "react";
import FlashCard from "./FlashCard";
import "./style.css";

const FlashDeals = ({ products, addToCart, setProducts, isLoading }) => {
  return (
    <>
      <section className="flash">
        <div className="container" id="ProductosDestacados">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Productos Destacados</h1>
          </div>

          <FlashCard
            isLoading={isLoading}
            products={products}
            addToCart={addToCart}
            setProducts={setProducts}
          />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
