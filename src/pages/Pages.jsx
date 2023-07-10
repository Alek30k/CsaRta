import React from "react";
import Home from "../components/MainPage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";
import Navbar from "../common/header/Navbar";

const Pages = ({
  productItems,
  addToCart,
  CartItem,
  shopItems,
  setCatFiltered,
  setCatFilteredModal,
  setListFiltered,
}) => {
  return (
    <div>
      <Navbar
        setCatFiltered={setCatFiltered}
        productItems={productItems}
        setCatFilteredModal={setCatFilteredModal}
      />
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals
        productItems={productItems}
        setListFiltered={setListFiltered}
      />
      <Discount addToCart={addToCart} setListFiltered={setListFiltered} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </div>
  );
};

export default Pages;
