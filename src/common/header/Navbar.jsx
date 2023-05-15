import React, { useState } from "react";
import Categories from "../../components/MainPage/Categories";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const [Menu, setMenu] = useState(false);

  const handleHover = () => {
    setMenu(true);
  };
  const handleHoverr = () => {
    setMenu(!true);
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div
            className="catgrories d_flex"
            onClick={() => setMenu(false)}
            onMouseOver={handleHover}
          >
            <span className="fa-solid fa-border-all"></span>
            <h4>
              Categorias
              <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
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
            </button>
          </div>
        </div>
      </header>

      <div
        className={Menu ? "categroriesMenu" : "menuCate"}
        onClick={() => setMenu(false)}
      >
        {Menu && (
          <div className="containerTotal" onClick={() => setMenu(false)}>
            <Categories />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
