import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Data from "../../components/Data";
import ShopCartCatproduct from "./ShopCartCatproduct";
import CatgSearch from "./CatgSearch";

const ProductListproduct = ({
  shopItems,
  catFilteredSearch,
  setCatFiltered,
  productItems,
}) => {
  const [products, setProducts] = useState(shopItems);

  const location = useLocation();
  const cat = location.pathname.split("/")[3];

  const filterMarcas = (value) => {
    const filteredProduct = productItems.filter(
      (p) => p.catCat.toLowerCase() === value.cateName
    );
    setCatFiltered(filteredProduct);
  };

  const data = [
    {
      id: 1,
      cateImg: "./images/category/almacen.png",
      cateName: "almacen",
    },
    {
      id: 3,
      cateImg: "./images/category/congelados.png",
      cateName: "congelados",
    },
    {
      id: 4,
      cateImg: "./images/category/electro.png",
      cateName: "electro",
    },
    {
      id: 5,
      cateImg: "./images/category/pan.png",
      cateName: "panaderia",
    },
    {
      id: 6,
      cateImg: "./images/category/limpieza.png",
      cateName: "limpieza",
    },
    {
      id: 7,
      cateImg: "./images/category/telefono.png",
      cateName: "telefonos",
    },
    {
      id: 8,
      cateImg: "./images/category/cafe.png",
      cateName: "cafe",
    },
    {
      id: 9,
      cateImg: "./images/category/hogar.png",
      cateName: "hogar",
    },
    {
      id: 10,
      cateImg: "./images/category/queso.png",
      cateName: "lacteos",
    },

    {
      id: 11,
      cateImg: "./images/category/vino.png",
      cateName: "bebidas",
    },
  ];

  const allMarcas = [
    // "Todo",
    ...new Set(data.map((producto) => producto.cateName)),
  ];

  const [cateName, setCateName] = useState(allMarcas);
  const [catOpen, setCatOpen] = useState(true);

  const { DataCategory } = Data;

  // const filterCat = (value) => {
  //   const filteredProduct = productItems.filter(
  //     (p) => p.catCat.toLowerCase() === value.cateName
  //   );
  //   setCatFiltered(filteredProduct);
  // };

  const [productsSearch, setProductsSearch] = useState(data);
  // const [openFiltro, setOpenFiltro] = useState(false);

  return (
    <div>
      <section className=" shop backgroundd categoris catFilterSearch">
        <div className="filterCatTitle container">
          <div className=" f_flex">
            <h2>{cat}</h2>
          </div>
        </div>
        <button className="buttonFiltrar" onClick={() => setCatOpen(!catOpen)}>
          Filtrar
        </button>
        <div
          className={
            !catOpen ? " categoryList categorySearch activve" : "categoryy"
          }
        >
          <CatgSearch
            cateName={cateName}
            filterMarcas={filterMarcas}
            shopItems={shopItems}
            setProductsSearch={setProductsSearch}
            catOpen={catOpen}
            setCatOpen={setCatOpen}
            setCatFiltered={setCatFiltered}
          />
        </div>

        <div className="containerMobile containerCat d_flexCat">
          <div className="filterCat filterMobile">
            <div className=" f_flex">
              <h2>{cat}</h2>
            </div>

            <div className="listCat">
              {/* <div className="filter">
                <h4>Sub-Categorías</h4>
              </div> */}
              {data.map((value, index) => {
                return (
                  <Link to={`/products/${value.cateName}`} key={index}>
                    <div
                      className="box  f_flex"
                      onClick={() => filterMarcas(value)}
                    >
                      <span>{value.cateName}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="contentWidthCat ">
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

            {catFilteredSearch == 0 ? (
              <div className="container noFound">
                <div className="left">OOPS!</div>
                <div className="right">
                  <h2>"No hay productos que coincidan con tu búsqueda."</h2>
                  <p>Te recomendamos que:</p>

                  <ul>
                    <li>• Revises la ortografía.</li>
                    <li>• Intentes utilizar una sola palabra.</li>
                    <li>• Pruebes con algún sinónimo.</li>
                    <li>• Hagas una búsqueda más genérica.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="product-content grid1">
                <ShopCartCatproduct catFilteredSearch={catFilteredSearch} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductListproduct;
