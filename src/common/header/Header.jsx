import React from "react";
import "./Header.css";
// import Head from "./Head";
import Search from "./Search";
// import Navbar from "./Navbar";

const Header = ({
  CartItem,
  setCatFilteredSearch,
  setCatFiltered,
  products,
}) => {
  return (
    <div className="containerHeader">
      {/* <Head cambiarTheme={cambiarTheme} /> */}
      <Search
        CartItem={CartItem}
        products={products}
        setCatFilteredSearch={setCatFilteredSearch}
        setCatFiltered={setCatFiltered}
      />
      {/* <Navbar setCatFiltered={setCatFiltered} productItems={productItems} /> */}
    </div>
  );
};

export default Header;
