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
import ProductCard from "./pages/card/ProductCard";

function App() {
  /*
  step1 :  const { productItems } = Data 
  lai pass garne using props
  
  Step 2 : item lai cart ma halne using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> ani import garrxa in cartItem ma
 
  Step 3 :  chai flashCard ma xa button ma
  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */

  //Step 1 :
  const { productItems } = Data;
  const { shopItems } = Sdata;

  //Step 2 :
  const [CartItem, setCartItem] = useState([]);

  //Step 4 :
  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id);
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id);

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Header CartItem={CartItem} />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
      ),
      // </ProtectedRoute>

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
        {
          path: "/cart",
          element: (
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          ),
        },
        {
          path: "/product/:id",
          element: (
            <ProductCard
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
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
