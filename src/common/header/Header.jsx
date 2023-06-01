import React from "react";
import "./Header.css";
// import Head from "./Head";
import Search from "./Search";
// import Navbar from "./Navbar";

const Header = ({ CartItem, setCatFilteredSearch }) => {
  return (
    <div className="containerHeader">
      {/* <Head cambiarTheme={cambiarTheme} /> */}
      <Search CartItem={CartItem} setCatFilteredSearch={setCatFilteredSearch} />
      {/* <Navbar setCatFiltered={setCatFiltered} productItems={productItems} /> */}
    </div>
  );
};

export default Header;
