import React, { useState } from "react";
import "./ProductCard.css";
import { useLocation } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

const Product = ({ productItems, addToCart }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [selectedImg, setSelectedImg] = useState(productItems[path - 1].cover);

  const [slideNumber, setSlideNumber] = useState(path);
  const [selectedImage, setSelectedImage] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const seleted1 = () => {
    setSelectedImg(productItems[slideNumber - 1].cover1);
    setSelectedImage(!selectedImage);
  };
  const seleted2 = () => {
    setSelectedImg(productItems[slideNumber - 1].cover2);
    setSelectedImage(!selectedImage);
  };

  // const imgUrl = `.${selectedImg}`

  const countTotal = productItems[slideNumber - 1].price * quantity;

  return (
    <div className="containerr container containerProduct">
      <div className="leftt">
        <div className="sliderWrapper">
          <div className="images">
            <img
              src={`.${productItems[slideNumber - 1].cover1}`}
              alt=""
              onClick={(e) => seleted1()}
              className={!selectedImage && "active"}
            />

            <img
              src={`.${productItems[slideNumber - 1].cover2}`}
              alt=""
              onClick={(e) => seleted2()}
              className={selectedImage && "active"}
            />
          </div>
          <div className="sliderImg">
            <div className="imgProduct">
              {/* <img src={`.${selectedImg}`} alt="" draggable={false} /> */}
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: `.${selectedImg}`,
                  },
                  largeImage: {
                    src: `.${selectedImg}`,
                    width: 377,
                    height: 370,
                  },
                  // isHintEnabled: true,
                }}
              />
            </div>
          </div>
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
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                <i className="fa fa-minus"></i>
              </button>
              <span className="count"> {quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <button
            className="buttonp"
            onClick={() => addToCart(productItems[slideNumber - 1], quantity)}
          >
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
