import React, { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart";
import Footer from "./common/footer/Footer";
import Sdata from "./components/shops/Sdata";
import Login from "./pages/login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./pages/register/Register";
import ProductCard from "./components/flashDeals/ProductCard";
import ProductList from "./pages/productList/ProductList";
import Head from "./common/header/Head";
import ProductListproduct from "./pages/productList/ProductListproduct";
import ProductListFilter from "./components/flashDeals/ProductListFilter";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://csarta.onrender.com/api/products`,
          {}
        );
        setProducts(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [CartItem, setCartItem] = useState([]);

  useEffect(() => {
    const cartIemLS = JSON.parse(localStorage.getItem("carItem")) ?? [];
    setCartItem(cartIemLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("carItem", JSON.stringify(CartItem));
  }, [CartItem]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const [catFiltered, setCatFiltered] = useState([]);
  const [listFiltered, setListFiltered] = useState([]);

  const [catFilteredModal, setCatFilteredModal] = useState([]);
  const [catFilteredSearch, setCatFilteredSearch] = useState([]);

  const Layout = () => {
    return (
      <div className="App">
        <Provider store={store}>
          <Head />
          <Header
            setCatFiltered={setCatFiltered}
            setCatFilteredSearch={setCatFilteredSearch}
            products={products}
          />
          <Outlet />
          <Footer />
        </Provider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: (
            <Pages
              productItems={productItems}
              shopItems={shopItems}
              products={products}
              setProducts={setProducts}
              setCatFiltered={setCatFiltered}
              setListFiltered={setListFiltered}
            />
          ),
        },

        {
          path: "/products/search/:product",
          element: (
            <ProductListproduct
              catFilteredSearch={catFilteredSearch}
              setCatFiltered={setCatFiltered}
              shopItems={shopItems}
              products={products}
            />
          ),
        },
        {
          path: "/products/:category",
          element: (
            <ProductList
              shopItems={shopItems}
              catFiltered={catFiltered}
              products={products}
              setCatFiltered={setCatFiltered}
              catFilteredModal={catFilteredModal}
            />
          ),
        },
        {
          path: "/productlist/:category",
          element: (
            <QueryClientProvider client={queryClient}>
              <ProductListFilter listFiltered={listFiltered} />
            </QueryClientProvider>
          ),
        },
        {
          path: "/product/:id",
          element: (
            <QueryClientProvider client={queryClient}>
              <ProductCard />
            </QueryClientProvider>
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
