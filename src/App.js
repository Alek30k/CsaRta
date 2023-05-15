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

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app ">
        <QueryClientProvider client={queryClient}>
          <Header CartItem={CartItem} />
          <Outlet />
          <Footer />
        </QueryClientProvider>
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
            />
          ),
        },
      ],
    },
    {
      path: "/product/:id",
      element: (
        <ProductCard
          shopItems={shopItems}
          CartItem={CartItem}
          productItems={productItems}
          addToCart={addToCart}
          decreaseQty={decreaseQty}
        />
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

//   return (
//     <div>
//       <Router>
//         <Header CartItem={CartItem} />
//         <Switch>
//           <Route path="/" exact>
//             <Pages
//               productItems={productItems}
//               addToCart={addToCart}
//               shopItems={shopItems}
//             />
//           </Route>
//           <Route path="/cart" exact>
//             <Cart
//               CartItem={CartItem}
//               addToCart={addToCart}
//               decreaseQty={decreaseQty}
//             />
//           </Route>
//           <Route path="/login" exact>
//             <Login />
//           </Route>
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

export default App;
