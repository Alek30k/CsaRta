import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { Link, useLocation } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { calculateDiscountedPrice, formatPrice } from "../../utils/helpers";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import { AuthContext } from "../../context/authContext";

const Product = ({ productItems, CartItem }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [selectedImg, setSelectedImg] = useState(productItems[path - 1].cover1);

  const [previewImg, setPreviewImg] = useState(0);

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

  const countTotal = productItems[slideNumber - 1].price * quantity;

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > productItems[slideNumber - 1]?.stock)
        tempQty = productItems[slideNumber - 1]?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const imageUrl = `${
    productItems[slideNumber - 1]
      ? productItems[slideNumber - 1].img[previewImg]
        ? productItems[slideNumber - 1].img[previewImg]
        : "asdads"
      : "kjahdskjah"
  }`;

  return (
    <>
      <main className="bg-secundary">
        <div className="containersinglePage ">
          <div className="sc-wrapper py-5">
            <div className="product-s bg-white grid">
              <div className="product-s-img">
                <div className="img-preview py-5">
                  <div className="img-preview-zoom">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: imageUrl,
                          sizes:
                            "(min-width: 1000px) 33.5vw, (min-width: 415px) 50vw, 100vw",
                        },
                        largeImage: {
                          src: `.${
                            productItems[slideNumber - 1]
                              ? productItems[slideNumber - 1].img[previewImg]
                                ? productItems[slideNumber - 1].img[previewImg]
                                : "asdads"
                              : "kjahdskjah"
                          }`,
                          width: 800,
                          height: 800,
                        },
                        // isHintEnabled: true,
                      }}
                    />

                    {/* <img
                      src={
                        productItems[slideNumber - 1]
                          ? productItems[slideNumber - 1].img[previewImg]
                            ? productItems[slideNumber - 1].img[previewImg]
                            : "asdads"
                          : "kjahdskjah"
                      }
                      alt=""
                      className="img-cover"
                      draggable={false}
                    /> */}
                  </div>
                  <div className="img-preview-collection flex justify-center">
                    {productItems[slideNumber - 1].img?.map((image, idx) => {
                      return (
                        <div
                          className={`collection-item ${
                            previewImg === idx ? "collection-item-active" : ""
                          }`}
                          key={idx}
                          onClick={() => setPreviewImg(idx)}
                        >
                          <img
                            src={image ? image : "no_image"}
                            alt={productItems[slideNumber - 1]?.name}
                            className="img-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="product-s-details py-5">
                <div className="title fw-6 fs-16 px-3 py-1">
                  {productItems[slideNumber - 1]?.name}
                </div>
                <p className="description fs-14">
                  {productItems[slideNumber - 1]?.desc}
                </p>
                <div className="rating my-2 flex align-center"></div>
                <div className="price flex align-center">
                  <span className="discounted-price fs-20 fw-7">
                    {productItems[slideNumber - 1]?.price &&
                    productItems[slideNumber - 1]?.discount
                      ? formatPrice(
                          calculateDiscountedPrice(
                            productItems[slideNumber - 1].price,
                            productItems[slideNumber - 1].discount
                          )
                        )
                      : 0}
                  </span>
                  <span className="actual-price text-dark mx-3">
                    {formatPrice(productItems[slideNumber - 1]?.price)}
                  </span>

                  <span className="discounted-percent text-primary fs-12">
                    {productItems[slideNumber - 1]?.discount}%
                  </span>
                </div>
                <div className="quantity py-3">
                  <h5 className="fw-4">Quantity:</h5>
                  <div className="quantity-toggle flex">
                    <button
                      className="qty-dec flex align-center justify-center"
                      onClick={() => decreaseQty()}
                    >
                      <AiOutlineMinus size={14} />
                    </button>
                    <div className="qty-value flex align-center justify-center fs-14 mx-2">
                      {quantity}
                    </div>
                    <button
                      className="qty-inc flex align-center justify-center"
                      onClick={() => increaseQty()}
                    >
                      <AiOutlinePlus size={14} />
                    </button>
                  </div>
                </div>
                <div className="shop-btns">
                  <Link className="buy-btn shop-btn fs-14">Buy Now</Link>
                  {/* {authData.isLoggedIn ? (
                    <button className="add-to-cart-btn shop-btn fs-14">
                      Add to Cart
                    </button>
                  ) : ( */}
                  <Link className="add-to-cart-btn shop-btn fs-14">
                    Add to Cart
                  </Link>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
