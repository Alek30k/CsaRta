import React, { useState } from "react";
// import Search from "../../common/header/Search";
// import Footer from "../../common/footer/Footer";
import { useLocation } from "react-router-dom";
import ShopCartCat from "./ShopCartCat";
import Data from "../../components/Data";
// import flecha from "./flecha-correcta.png";

const ProductList = ({
  addToCart,
  shopItems,
  catFiltered,
  setCatFiltered,
  productItems,
}) => {
  const [products, setProducts] = useState(shopItems);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const { DataCategory } = Data;

  const filterMarcas = (cat) => {
    const filteredProduct = productItems.filter(
      (p) => p.subCategory === cat.name
    );
    setCatFiltered(filteredProduct);
  };

  return (
    <div>
      <section className=" shop backgroundd categoris">
        <div className="containerMobile containerCat d_flexCat">
          <div className="filterCat ">
            <div className=" f_flex">
              {/* <h2>{cat.toLocaleUpperCase()}</h2> */}
              <h2>{cat}</h2>
            </div>
            <div className="filter">
              <h4>Categorías </h4>
            </div>
            <div className="listCat">
              {DataCategory.map((value) => (
                <div className="listItem" key={value.id}>
                  {cat === value.name.toLowerCase() && (
                    <div>
                      {value.subCat.map((cat) => (
                        // <Link to={`/products/${cat.name}`}>
                        <div
                          className="subCat"
                          key={cat.id}
                          onClick={() => filterMarcas(cat)}
                        >
                          {/* <input type="checkbox" /> */}
                          <label>{cat.name}</label>
                          {/* <img src={flecha} alt="" /> */}
                        </div>
                        // </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="contentWidthCat container">
            {isLoading ? (
              "Loading..."
            ) : (
              <div className="cateBanner">
                {DataCategory.map((value) => {
                  return (
                    <div key={value.id}>
                      {cat === value.name.toLowerCase() && (
                        <img src={value.img} alt="" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {catFiltered == 0 ? (
              "No hay productos con la SubCategoría seleccionada"
            ) : (
              <div className="product-content grid1">
                <ShopCartCat
                  addToCart={addToCart}
                  shopItems={shopItems}
                  products={products}
                  catFiltered={catFiltered}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
