import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

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
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

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
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {productItems.map((productItems, i) => {
          return (
            <div key={i}>
              <div className="box productt">
                <div className="product mtop ">
                  <div className="img">
                    <span className="discount">
                      {productItems.discount}% Off
                    </span>

                    <Link to={`/product/${productItems.id}`}>
                      <img
                        src={productItems.cover}
                        alt=""
                        className="flashImg"
                      />
                    </Link>

                    <div className="product-like">
                      {/* <label>{count}</label> <br /> */}

                      <i
                        className="fa-regular fa-heart"
                        // onClick={increment}
                      ></i>
                    </div>
                  </div>
                  <div className="product-details">
                    <h3>{productItems.name}</h3>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div className="price">
                      <h4>${productItems.price}.00 </h4>
                      {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                      <button onClick={() => addToCart(productItems)}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FlashCard;
