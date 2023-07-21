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
  products,
  setProducts,
  addToCart,
  CartItem,
  shopItems,
  setCatFiltered,
  setCatFilteredModal,
  setListFiltered,
  isLoading,
}) => {
  return (
    <div>
      <Navbar
        setCatFiltered={setCatFiltered}
        productItems={productItems}
        setCatFilteredModal={setCatFilteredModal}
        products={products}
      />
      <Home CartItem={CartItem} />

      <FlashDeals
        products={products}
        addToCart={addToCart}
        setProducts={setProducts}
        isLoading={isLoading}
      />

      <TopCate />
      <NewArrivals
        productItems={productItems}
        setListFiltered={setListFiltered}
        products={products}
      />
      <Discount
        addToCart={addToCart}
        setListFiltered={setListFiltered}
        products={products}
      />
      <Shop shopItems={shopItems} addToCart={addToCart} products={products} />
      <Annocument />
      <Wrapper />
    </div>
  );
};

export default Pages;
