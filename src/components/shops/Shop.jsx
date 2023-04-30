import React, { useState } from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";

const Shop = ({ addToCart, shopItems }) => {
  const allMarcas = [
    "all",
    ...new Set(shopItems.map((producto) => producto.cateName)),
  ];

  const [cateName, setCateName] = useState(allMarcas);
  const [products, setProducts] = useState(shopItems);

  const filterMarcas = (marca) => {
    if (marca === "all") {
      setProducts(shopItems);
      return;
    }
    const filteredProduct = shopItems.filter((p) => p.cateName === marca);
    setProducts(filteredProduct);
  };

  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg
            cateName={cateName}
            filterMarcas={filterMarcas}
            shopItems={shopItems}
            setProducts={setProducts}
          />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Teléfonos móviles</h2>
              </div>
              <div className="heading-right row ">
                <span>Ver todo</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content  grid1">
              <ShopCart
                addToCart={addToCart}
                shopItems={shopItems}
                products={products}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
