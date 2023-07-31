import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Link, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { calculateDiscountedPrice, formatPrice } from "../../utils/helpers";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer } from "react-toastify";

const Product = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://csarta.onrender.com/api/products/single/${id}`
        );

        setSingleProduct(res.data);
        setLoading(false);
      } catch (err) {}
    };
    getProducts();
  }, [id]);

  const [previewImg, setPreviewImg] = useState(0);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const imageUrl = `${
    singleProduct
      ? singleProduct.img
        ? singleProduct?.img[previewImg]
          ? singleProduct.img
            ? singleProduct?.img[previewImg]
            : "asdads"
          : "kjahdskjah"
        : "kjahdskjah"
      : "kjahdskjah"
  }`;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(singleProduct));
  };

  return (
    <>
      <main className="bg-secundary">
        <div className="containersinglePage ">
          <div className="sc-wrapper py-5">
            <div className="product-s bg-white ">
              <div className="product-s-img">
                <div className="img-preview py-5">
                  <div className="img-preview-zoom ">
                    {loading ? (
                      "Loading..."
                    ) : (
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src: imageUrl,
                          },
                          largeImage: {
                            src: imageUrl,
                            width: 1000,
                            height: 1000,
                          },
                          enlargedImageContainerStyle: {
                            zIndex: "1",
                          },

                          // isHintEnabled: true,
                        }}
                      />
                    )}
                  </div>
                  <div className="img-preview-collection flex justify-center">
                    {singleProduct.img?.map((image, idx) => {
                      return (
                        <div
                          className={`collection-item ${
                            singleProduct === idx
                              ? "collection-item-active"
                              : ""
                          }`}
                          key={idx}
                          onClick={() => setPreviewImg(idx)}
                        >
                          <img
                            src={image ? image : "no_image"}
                            alt={image?.name}
                            className="img-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="img-preview-collection-mobile flex justify-center">
                    <Slider {...settings}>
                      {/* <div className="img-preview-collection-mobile flex justify-center"> */}
                      {singleProduct.img?.map((image, idx) => {
                        return (
                          <div
                            className={`collection-item  ${
                              singleProduct === idx
                                ? "collection-item-active"
                                : ""
                            }`}
                            key={idx}
                            onClick={() => setPreviewImg(idx)}
                          >
                            <img
                              src={image ? image : "no_image"}
                              alt={image?.name}
                              className="img-cover"
                            />
                          </div>
                        );
                      })}
                      {/* </div> */}
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="product-s-details py-5">
                <div className="title fw-6 fs-16 px-3 py-1">
                  {singleProduct?.name}
                </div>
                <p className="description fs-14">{singleProduct?.desc}</p>
                <div className="rating my-2 flex align-center"></div>
                <div className="price flex align-center">
                  <span className="discounted-price fs-20 fw-7">
                    {singleProduct?.price && singleProduct?.discount
                      ? formatPrice(
                          calculateDiscountedPrice(
                            singleProduct.price,
                            singleProduct.discount
                          )
                        )
                      : 0}
                  </span>
                  <span className="actual-price text-dark mx-3">
                    {formatPrice(singleProduct?.price)}
                  </span>

                  <span className="discounted-percent text-primary fs-12">
                    {singleProduct?.discount}%
                  </span>
                </div>
                <div className="quantity py-3">
                  <h5 className="fw-4">Quantity:</h5>
                </div>
                <div className="shop-btns">
                  <Link className="buy-btn shop-btn fs-14">Buy Now</Link>

                  <button
                    className="add-to-cart-btn shop-btn fs-14"
                    onClick={() => handleAddToCart()}
                  >
                    Add to Cart
                  </button>
                  <ToastContainer />
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
