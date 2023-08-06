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

const Pages = ({ products, setProducts, setCatFiltered, setListFiltered }) => {
  return (
    <div>
      <Navbar setCatFiltered={setCatFiltered} products={products} />
      <Home />

      <FlashDeals products={products} setProducts={setProducts} />

      <TopCate />
      <NewArrivals setListFiltered={setListFiltered} products={products} />
      <Discount setListFiltered={setListFiltered} products={products} />
      <Shop products={products} />
      <Annocument />
      <Wrapper />
    </div>
  );
};

export default Pages;
