import React, { useState } from "react";
import "./ProductCard.css";
import { useLocation } from "react-router-dom";

const Product = ({ productItems, addToCart }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [selectedImg, setSelectedImg] = useState(productItems[path - 1].cover);

  const [slideNumber, setSlideNumber] = useState(path);
  const [count, setCount] = useState(1);

  const decrementCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  const countTotal = productItems[slideNumber - 1].price * count;

  return (
    <div className="containerr">
      <div className="leftt">
        <div className="images">
          <img
            src={`.${productItems[slideNumber - 1].cover1}`}
            alt=""
            onClick={(e) =>
              setSelectedImg(productItems[slideNumber - 1].cover1)
            }
          />

          <img
            src={`.${productItems[slideNumber - 1].cover2}`}
            alt=""
            onClick={(e) =>
              setSelectedImg(productItems[slideNumber - 1].cover2)
            }
          />
        </div>
        {/* <div className="imgContainer">
          <img src={productItems[slideNumber].cover} alt="" />
        </div> */}
        <div className="sliderWrapper">
          <img src={`.${selectedImg}`} alt="" className="sliderImg" />
        </div>
      </div>
      <div className="rightt">
        <h1 className="titlee">{productItems[slideNumber - 1].name}</h1>
        <h3 className="precioUnidad">Precio por unidad</h3>
        <span className="pricee">
          ${productItems[slideNumber - 1].price}.00
        </span>
        <div className="addCart">
          <div className="cantidad">
            <span>cantidad</span>
            <div className="buttonCant">
              <button onClick={decrementCount}>
                <i className="fa fa-minus"></i>
              </button>
              <span className="count"> {count}</span>
              <button onClick={() => setCount(count + 1)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <button
            className="button"
            onClick={() => addToCart(productItems[slideNumber - 1])}
          >
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
