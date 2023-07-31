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
import Swal from "sweetalert2";
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

  const addToCart = (product) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "El producto fue agregado al carrito!",
    });
    const productExit = CartItem.find((item) => item._id === product._id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item._id === product._id
            ? { ...productExit, quantity: productExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, quantity: 1 }]);
    }
  };

  const addToCart2 = (product) => {
    const productExit = CartItem.find((item) => item._id === product._id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item._id === product._id
            ? { ...productExit, quantity: productExit.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item._id === product._id);

    if (productExit.quantity === 1) {
      setCartItem(CartItem.filter((item) => item._id !== product._id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item._id === product._id
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
              addToCart={addToCart}
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
            // <ThemeProvider theme={themeStyle}>
            //   <QueryClientProvider client={queryClient}>
            //     <Container>
            <ProductList
              addToCart={addToCart}
              shopItems={shopItems}
              CartItem={CartItem}
              catFiltered={catFiltered}
              products={products}
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
              addToCart2={addToCart2}
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
