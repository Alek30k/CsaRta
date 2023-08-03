import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ products }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const filterSection = products.filter(
    (item) => item.seccion === "flashdeals"
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 305,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 305,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 400,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 4, slidesToScroll: 3, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 3, infinite: false },
      },
    ],
  };

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (productItems) => {
    dispatch(addToCart(productItems));

    // history.push("/cart");
  };

  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("favorite") ?? "[]"));
  }, []);

  const handleHeartClick = (id) => {
    const draft = favorite.includes(id)
      ? favorite.filter((fav) => fav !== id)
      : [...favorite, id];

    setFavorite(draft);
    localStorage.setItem("favorite", JSON.stringify(draft));
  };

  return (
    <div>
      <Slider {...settings}>
        {filterSection?.map((productItems, i) => {
          return (
            <div key={i}>
              <div className="box">
                <div className="product mtop productshop">
                  <div className="imgFlash">
                    {/* <span className="discount">
                                  {productItems.discount}% Off
                                </span> */}

                    <Link to={`/product/${productItems?._id}`}>
                      <img
                        src={productItems?.img[0]}
                        alt=""
                        className="flashImg "
                      />
                    </Link>

                    <div
                      className="product-like"
                      onClick={() => handleHeartClick(productItems?._id)}
                    >
                      {favorite.includes(productItems._id) ? (
                        <i class="fa-solid fa-heart"></i>
                      ) : (
                        <i class="fa-regular fa-heart"></i>
                      )}
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{productItems?.name}</h3>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <div className="containerPriceFlash">
                        <h4>${productItems?.price}.00 </h4>

                        <button onClick={() => handleAddToCart(productItems)}>
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <ToastContainer />
    </div>
  );
};

export default FlashCard;
