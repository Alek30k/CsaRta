import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { BsFillCartXFill } from "react-icons/bs";
import Swal from "sweetalert2";

const Cart = ({
  CartItem,
  addToCart,
  addToCart2,
  decreaseQty,
  setCartItem,
}) => {
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const cleartCart = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "El carrito fue vaciado!",
    });
    setCartItem([]);
  };

  return (
    <>
      <section className="cart-items">
        <div className="containerCart  d_flex">
          <div className="cart-details">
            {CartItem.length === 0 && (
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

            {CartItem.map((item) => {
              const productQty = item.price * item.quantity;

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
                      <h4>
                        ${item.price}.00 * {item.quantity}
                        <span>${productQty}.00</span>
                      </h4>
                    </div>
                    <div className="cart-items-function">
                      <div className="cartControl buttons d_flexCart">
                        <button
                          className="incCart"
                          onClick={() => addToCart2(item)}
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
                </div>
              );
            })}

            <button
              className={CartItem.length == 0 ? "resetNone" : "reset"}
              onClick={() => cleartCart()}
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
