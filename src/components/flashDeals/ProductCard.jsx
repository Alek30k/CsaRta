import React, { useState } from "react";
import "./ProductCard.css";
import { useLocation } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Footer from "../../common/footer/Footer";
import Search from "../../common/header/Search";

const Product = ({ productItems, addToCart, CartItem, shopItems }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
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
    <>
      <div className="searchProduct">
        <Search CartItem={CartItem} />
      </div>
      <div className="containerr container containerProduct">
        <div className="leftt">
          <div className="sliderWrapper">
            <div className="images ">
              <img
                src={`.${productItems[slideNumber - 1].cover1}`}
                alt=""
                onClick={(e) => seleted1()}
                className={!selectedImage ? "active" : "actuve"}
              />

              <img
                src={`.${productItems[slideNumber - 1].cover2}`}
                alt=""
                onClick={(e) => seleted2()}
                className={selectedImage ? "active" : "actuve"}
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
                      srcSet,
                      sizes:
                        "(min-width: 1000px) 33.5vw, (min-width: 415px) 50vw, 100vw",
                    },
                    largeImage: {
                      src: `.${selectedImg}`,
                      width: 877,
                      height: 870,
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
              onClick={() => addToCart(productItems[slideNumber - 1])}
            >
              AGREGAR
            </button>
          </div>
        </div>
      </div>
      <div className="descProduct container">
        <h1>DESCRIPCION DEL PRODUCTO</h1>
        <p>{productItems[slideNumber - 1].desc}</p>
      </div>

      <Footer />
    </>
  );
};

export default Product;
