import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { BsFillCartXFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCart,
  addToCart,
  removeFromCart,
  getTotals,
  clearCart,
} from "../../redux/cartSlice";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  return (
    <>
      <section className="cart-items">
        <div className="containerCart  d_flex">
          <div className="cart-details">
            {cart.cartItems.length === 0 && (
              <>
                <div className="div_no_cartItem  product">
                  <div className="icon_cartEmpty">
                    <BsFillCartXFill />
                  </div>
                  <h1 className="no-items">TU CARRITO ESTÁ VACÍO</h1>
                  <Link className="keepShopping" to="/">
                    <p>SEGUIR COMPRANDO</p>
                  </Link>
                </div>
                {/* <h4>Aún no tenes artículos en tu carrito de compra.</h4> */}
              </>
            )}
            {cart.cartItems.map((item) => {
              // const productQty = item.price * item.cartQuantity;
              const productQty = item.price * item.cartQuantity;

              return (
                <div className="cart-list product d_flexCart" key={item._id}>
                  <span
                    className="removeProduct"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    x
                  </span>
                  <div className="img">
                    <Link to={`/product/${item._id}`}>
                      <img src={item.img[0]} alt="" />
                      <div className="ver">Ver Producto</div>
                    </Link>
                  </div>
                  <div className="conteinerDetailsCart">
                    <div className="cart-details">
                      <h3>{item.name}</h3>
                      <div className="cart-details-cantPrice">
                        ${item.price}.00
                        <span>${productQty}.00</span>
                      </div>
                    </div>
                    <div className="cart-items-function">
                      <div className="cartControl buttons d_flexCart">
                        <button
                          className="desCart"
                          onClick={() => handleDecreaseCart(item)}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <div type="number" className="inputQuantity">
                          {item.cartQuantity}
                        </div>
                        <button
                          className="incCart"
                          onClick={() => handleAddToCart(item)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
                    <div className="cart-item-price"></div>
                  </div>
                </div>
              );
            })}

            <button
              className={cart.cartItems.length == 0 ? "resetNone" : "reset"}
              onClick={() => handleClearCart()}
            >
              Vaciar Carrito
            </button>
            <ToastContainer />
          </div>
          <div className="cart-total productCart">
            <h2>Resumen de la compra</h2>
            <div className=" d_flex total">
              <h4>Precio Total:</h4>
              <h3>${cart.cartTotalAmount}.00</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
