import React, { useState } from "react";
import Categories from "../../components/MainPage/Categories";

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

  return (
    <header className="header">
      <div className="container d_flex">
        <div className="cat">
          <div
            className="catgrories d_flex"
            onClick={() => setMenu(true)}
            onMouseOver={handleHover}
          >
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
        <div className="navlink">
          <ul
            className={
              MobileMenu
                ? "nav-links-MobileMenu active"
                : "link f_flex capitalize"
            }
            onClick={() => setMobileMenu(false)}
          >
            {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}

            <li>
              <a href="#ProductosDestacados">Productos Destacados</a>
            </li>
            {/* <li>
                <a href="#GrandesDescuentos">Grandes Descuentos</a>
              </li> */}
            <li>
              <a href="#QuienesSomos">Quiénes Somos</a>
            </li>

            <li>
              <a href="#QuienesSomos">Contactos</a>
            </li>
          </ul>

          <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
            {/* {!MobileMenu && <i className="fas fa-bars open"></i>} */}
          </button>

          {/* <div
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
          </div> */}

          <div className="navlink">
            <ul
              className={
                MobileMenu
                  ? "nav-links-MobileMenu active"
                  : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}

              <li>
                <a href="#ProductosDestacados">Productos Destacados</a>
              </li>
              {/* <li>
                <a href="#GrandesDescuentos">Grandes Descuentos</a>
              </li> */}
              <li>
                <a href="#QuienesSomos">Quiénes Somos</a>
              </li>

              <li>
                <a href="#QuienesSomos">Contactos</a>
              </li>
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
              {/* {!MobileMenu && <i className="fas fa-bars open"></i>} */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
