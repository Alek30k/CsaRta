import React from "react";
import Cart from "./Cart";
import "./style.css";
import { Link } from "react-router-dom";

const NewArrivals = ({ setListFiltered, products }) => {
  const filterMarcas = () => {
    const productsFilter = products.filter(
      (item) => item.seccion === "newcomers"
    );
    setListFiltered(productsFilter);
  };

  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" />
              <h2>Los recién llegados</h2>
            </div>
            <div className="heading-right row ">
              <Link to={`/productlist/recien&llegados`}>
                <span onClick={() => filterMarcas()}>Ver todo</span>
              </Link>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>

          <Cart products={products} />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
