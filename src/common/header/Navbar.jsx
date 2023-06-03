import React, { useContext, useState } from "react";
import Categories from "../../components/MainPage/Categories";
import Data from "../../components/Data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { AuthContext } from "../../context/authContext";

const Navbar = ({ setCatFiltered, productItems }) => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const [Menu, setMenu] = useState(false);

  const handleHover = () => {
    setMenu(true);
  };

  // window.onscroll = () => {
  //   const mobileMenu = document.querySelector(".capitalize");
  //   mobileMenu.classList.remove(".nav-links-MobileMenu");
  // };

  // window.addEventListener("scroll", function () {
  //   const mobileMenu = document.querySelector(".categroriesMenu");
  //   mobileMenu.classList.toggle("active", window.scrollY > 100);
  // });

  // window.onscroll = () => {
  //   const mobileMenu = document.querySelector(".capitalize");
  //   mobileMenu.classList.remove(".nav-links-MobileMenu");
  // };

  // window.addEventListener("scroll", function () {
  //   const mobileMenu = document.querySelector(".nav-links-MobileMenu");
  //   mobileMenu.classList.toggle("active", window.scrollY > 100);
  // });

  const { dataCat } = Data;

  const { currentUser } = useSelector((state) => state.user);

  // const filterMarcas = (cat) => {
  //   const filteredProduct = productItems.filter(
  //     (p) => p.subCategory === cat.name
  //   );
  //   setCatFiltered(filteredProduct);
  // };
  const filterMarcass = (value) => {
    const filteredProduct = productItems.filter(
      (p) => p.catCat.toLowerCase() === value.cateName
    );
    setCatFiltered(filteredProduct);
  };

  return (
    <header className="header">
      <div className="container d_flex">
        <div className="cat">
          <div className="catgrories d_flex" onClick={() => setMenu(!Menu)}>
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categorias
              <i className="fa fa-chevron-down"></i>
            </h4>
          </div>
          <div
            className={Menu ? "categroriesMenu" : "catNoneMenu"}
            onClick={() => setMenu(false)}
          >
            {Menu && (
              <div className="containerTotal">
                <Categories
                  setCatFiltered={setCatFiltered}
                  productItems={productItems}
                />
              </div>
            )}
          </div>
        </div>
        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
          {MobileMenu ? (
            <i className="fas fa-times close home-btn"></i>
          ) : (
            <i className="fas fa-bars open"></i>
          )}
        </button>
        <div className="navlink">
          <ul
            className={
              MobileMenu
                ? "nav-links-MobileMenu active"
                : "link f_flex capitalize"
            }
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <a href="#ProductosDestacados">Productos Destacados</a>
            </li>

            <li>
              <a href="#QuienesSomos">Quiénes Somos</a>
            </li>

            <li>
              <a href="#QuienesSomos">Contactos</a>
            </li>
          </ul>

          {MobileMenu && (
            <div className="navlink">
              <ul
                className={
                  MobileMenu
                    ? "nav-links-MobileMenu active"
                    : "link f_flex capitalize"
                }
                onClick={() => setMobileMenu(false)}
              >
                {!currentUser && (
                  <Link to="login" style={{ textDecoration: "none" }}>
                    <div className="saludo">
                      <span>¡Hola!</span>
                      <span>Ingresa a tu cuenta</span>
                    </div>
                  </Link>
                )}
                <div className="filter">
                  <h4>Categorías </h4>
                </div>
                <div className="listCat">
                  {dataCat.map((value, index) => {
                    return (
                      <Link to={`/products/${value.cateName}`} key={index}>
                        <div
                          className="box  f_flex"
                          onClick={() => filterMarcass(value)}
                        >
                          <span>{value.cateName}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </ul>

              <button
                className="toggle"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                {MobileMenu ? (
                  <i className="fas fa-times close home-btn"></i>
                ) : (
                  <i className="fas fa-bars open"></i>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
