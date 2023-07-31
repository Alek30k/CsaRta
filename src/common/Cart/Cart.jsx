import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { BsFillCartXFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductCart,
  decreaseCart,
  addToCart,
  deleteProductCart,
  getTotals,
  reset,
  clearCart,
} from "../../redux/cartSlice";

const Cart = ({
  CartItem,
  // addToCart,
  addToCart2,
  decreaseQty,
  setCartItem,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // const [quantity, setQuantity] = useState(1);

  const totalPrice = cart.cartItems.reduce(
    (price, item) => price + item.cartQuantity * item.price,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
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
              const productQty = item.price * item.cartQuantity;

              return (
                <div className="cart-list product d_flexCart" key={item._id}>
                  <div className="img">
                    <Link to={`/product/${item._id}`}>
                      <img src={item.cover} alt="" />
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

                        <div
                          // onChange={(e) => setQuantity(e.target.value)}
                          type="number"
                          // value={item.quantity}
                          className="inputQuantity"
                        >
                          {item.cartQuantity}
                        </div>
                        <button
                          className="incCart"
                          onClick={() => handleAddToCart(item)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
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
          </div>
          <div className="cart-total productCart">
            <h2>Resumen de la compra</h2>
            <div className=" d_flex total">
              <h4>Precio Total:</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
