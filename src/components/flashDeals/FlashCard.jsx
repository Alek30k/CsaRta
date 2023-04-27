import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <>
              {open && (
                <div className="slider">
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="close"
                    onClick={() => setOpen(false)}
                  />
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="arrow"
                    // onClick={() => handleMove("l")}
                  />
                  <div className="sliderWrapper">
                    <img
                      src={productItems.cover}
                      alt=""
                      className="sliderImg"
                    />
                  </div>
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="arrow"
                    // onClick={() => handleMove("r")}
                  />
                </div>
              )}
              <div className="box" key={productItems}>
                <div className="product mtop">
                  <div className="img">
                    <span className="discount">
                      {productItems.discount}% Off
                    </span>

                    <img src={productItems.cover} alt="" />

                    <div className="product-like">
                      <label>{count}</label> <br />
                      <i
                        className="fa-regular fa-heart"
                        onClick={increment}
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
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
