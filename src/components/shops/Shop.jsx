import React, { useState } from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";

const Shop = ({ addToCart, shopItems, products }) => {
  const allMarcas = [
    // "Todo",
    ...new Set(shopItems.map((producto) => producto.cateName)),
  ];

  const filterShop = products.filter((item) => item.seccion === "shop");

  const [cateName, setCateName] = useState(allMarcas);
  const [productsSelect, setProductsSelect] = useState(filterShop);
  const [catOpen, setCatOpen] = useState(true);

  const filterMarcas = (marca) => {
    if (marca === "Marcas") {
      setProductsSelect(filterShop);
      return;
    }
    const filteredProduct = products.filter(
      (p) => p.subCategory.toLowerCase() === marca.toLowerCase()
    );
    setProductsSelect(filteredProduct);
  };
  return (
    <>
      <section className="shop background  categoris">
        <div className="containerMobile container d_flex">
          <div
            className={!catOpen ? " category categorys activve" : "categoryy"}
          >
            <Catg
              cateName={cateName}
              filterMarcas={filterMarcas}
              shopItems={shopItems}
              setProductsSelect={setProductsSelect}
              catOpen={catOpen}
              setCatOpen={setCatOpen}
            />
          </div>
          <div className="contentWidthh container">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Teléfonos móviles</h2>
              </div>

              <div className="noneCat" onClick={() => setCatOpen(!catOpen)}>
                <span>Marcas</span>
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCart
                addToCart={addToCart}
                shopItems={shopItems}
                productsSelect={productsSelect}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
