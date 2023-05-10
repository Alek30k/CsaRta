import React from "react";
import "./style.css";
import { useCart } from "react-use-cart";

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const { emptyCart } = useCart();

  // prodcut qty total
  return (
    <>
      <section className="cart-items ">
        <div className="containerCart  d_flex">
          <div className="cart-details">
            {CartItem.length === 0 && (
              <>
                <h1 className="no-items product">TU CARRITO ESTÁ VACÍO</h1>
                <h4>Aún no tenes artículos en tu carrito de compra.</h4>
              </>
            )}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flexCart" key={item}>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i
                          className="fa-solid fa-xmark"
                          onClick={() => emptyCart()}
                        ></i>
                      </button>
                    </div>

                    <div className="cartControl buttons d_flexCart">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total productCart">
            <h2>Resumen de la compra</h2>
            <div className=" d_flex total">
              <h4>Precio Total :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
