import React, { useState } from "react";
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

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, quantity: productExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.quantity === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, quantity: productExit.quantity - 1 }
            : item
        )
      );
    }
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const [catFiltered, setCatFiltered] = useState([]);
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
              addToCart={addToCart}
              shopItems={shopItems}
              cambiarTheme={cambiarTheme}
              Container={Container}
              setCatFiltered={setCatFiltered}
              catFilteredModal={setCatFilteredModal}
              setCatFilteredModal={setCatFilteredModal}
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
            />
          ),
        },
        {
          path: "/products/:category",
          element: (
            // <ThemeProvider theme={themeStyle}>
            //   <QueryClientProvider client={queryClient}>
            //     <Container>
            <ProductList
              addToCart={addToCart}
              shopItems={shopItems}
              CartItem={CartItem}
              catFiltered={catFiltered}
              productItems={productItems}
              setCatFiltered={setCatFiltered}
              catFilteredModal={catFilteredModal}
            />
            //     </Container>
            //   </QueryClientProvider>
            // </ThemeProvider>
          ),
        },
        {
          path: "/product/:id",
          element: (
            // <ThemeProvider theme={themeStyle}>
            <QueryClientProvider client={queryClient}>
              <Container>
                <ProductCard
                  shopItems={shopItems}
                  CartItem={CartItem}
                  productItems={productItems}
                  addToCart={addToCart}
                  decreaseQty={decreaseQty}
                  cambiarTheme={cambiarTheme}
                />
              </Container>
            </QueryClientProvider>
            // </ThemeProvider>
          ),
        },
        {
          path: "/cart",
          element: (
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              setCartItem={setCartItem}
            />
          ),
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
