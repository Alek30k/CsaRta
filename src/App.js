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
import { Dark, Light } from "./styles/Themes";
import styled, { ThemeProvider } from "styled-components";
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

  useEffect(async () => {
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

  const ThemeContext = React.createContext(null);
  const [theme, setTheme] = useState("Dark");
  const themeStyle = theme === "light" ? Light : Dark;

  const cambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const Layout = () => {
    return (
      <div className="App">
        <Provider store={store}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            {/* <ThemeProvider theme={themeStyle}>
            <QueryClientProvider client={queryClient}> */}
            <Container>
              <Head />
              <Header
                CartItem={CartItem}
                setCatFiltered={setCatFiltered}
                setCatFilteredSearch={setCatFilteredSearch}
                productItems={productItems}
                products={products}
                cambiarTheme={cambiarTheme}
                theme={theme}
                setTheme={setTheme}
              />
              <Outlet />
              <Footer />
            </Container>
            {/* </QueryClientProvider>
          </ThemeProvider> */}
          </ThemeContext.Provider>
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
              isLoading={isLoading}
              productItems={productItems}
              shopItems={shopItems}
              products={products}
              setProducts={setProducts}
              Container={Container}
              setCatFiltered={setCatFiltered}
              catFilteredModal={setCatFilteredModal}
              setCatFilteredModal={setCatFilteredModal}
              setListFiltered={setListFiltered}
            />
          ),
        },

        {
          path: "/products/search/:product",
          element: (
            <ProductListproduct
              catFilteredSearch={catFilteredSearch}
              productItems={productItems}
              setCatFilteredSearch={setCatFilteredSearch}
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
              CartItem={CartItem}
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
              <Container>
                <ProductListFilter
                  productItems={productItems}
                  listFiltered={listFiltered}
                />
              </Container>
            </QueryClientProvider>
          ),
        },
        {
          path: "/product/:id",
          element: (
            // <ThemeProvider theme={themeStyle}>
            <QueryClientProvider client={queryClient}>
              <Container>
                <ProductCard
                  products={products}
                  shopItems={shopItems}
                  CartItem={CartItem}
                  productItems={productItems}
                  cambiarTheme={cambiarTheme}
                />
              </Container>
            </QueryClientProvider>
            // </ThemeProvider>
          ),
        },
        {
          path: "/cart",
          element: <Cart CartItem={CartItem} setCartItem={setCartItem} />,
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

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

export default App;
