import React, { useState } from "react";
// import Search from "../../common/header/Search";
// import Footer from "../../common/footer/Footer";
import { Link, useLocation } from "react-router-dom";
import ShopCartCat from "./ShopCartCat";
import Data from "../../components/Data";
import proximo from "./proximo.png";
import CatgFilter from "./CatgFilter";

const ProductList = ({
  addToCart,
  shopItems,
  catFiltered,
  setCatFiltered,
  productItems,
  catFilteredModal,
}) => {
  const [products, setProducts] = useState(shopItems);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [catOpen, setCatOpen] = useState(true);

  // const [productSelect, setProductSelect] = useState("");

  // console.log(productSelect);
  const { DataCategory } = Data;

  const filterMarcas = (cat) => {
    const filteredProduct = productItems.filter(
      (p) => p.subCategory === cat.name
    );
    setCatFiltered(filteredProduct);
  };

  // const filterRuta = (cat) => {
  //   console.log(cat);
  //   setProductSelect(cat[0].name);
  // };

  return (
    <div>
      <section className=" shop backgroundd categoris">
        <div className="containerMobile containerCat d_flexCat">
          <div className="filterCat ">
            <div className=" f_flex">
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
                          key={cat.id}
                          className="subCat"
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
              "Cargando..."
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
            <button
              className="buttonFiltrar"
              onClick={() => setCatOpen(!catOpen)}
            >
              Filtrar
            </button>
            <div
              className={
                !catOpen ? " categoryList categorySearch activve" : "categoryy"
              }
            >
              <CatgFilter
                filterMarcas={filterMarcas}
                shopItems={shopItems}
                catOpen={catOpen}
                setCatOpen={setCatOpen}
                setCatFiltered={setCatFiltered}
              />
            </div>

            {catFiltered == 0 ? (
              <div className="container noFound">
                <div className="left">OOPS!</div>
                <div className="right">
                  <h2>
                    "No hay productos que coincidan con la opción seleccionada"
                  </h2>
                </div>
              </div>
            ) : (
              <div className="product-content grid1 shopCartCatFilter">
                <ShopCartCat
                  addToCart={addToCart}
                  shopItems={shopItems}
                  products={products}
                  catFiltered={catFiltered}
                  catFilteredModal={catFilteredModal}
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
