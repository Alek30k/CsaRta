import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Dcard = ({ addToCart }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 305,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 450,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 4, slidesToScroll: 3, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 3, infinite: false },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 6, slidesToScroll: 3, infinite: false },
      },
    ],
  };

  const [slideNumber, setSlideNumber] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 8 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 8 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, i) => {
          return (
            <div key={i} onClick={() => handleOpen(i)}>
              <div className="box product producti">
                <div className="img">
                  <img src={value.cover} alt="" width="90%" />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </div>
          );
        })}
      </Slider>
      {open && (
        <div className="productContainer">
          <div className="slideer">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="closee"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />

            <div className="sliderWrapper">
              <img
                src={`.${Ddata[slideNumber].cover}`}
                alt=""
                className="sliderImg"
              />
              <div className="price">
                <h3>{Ddata[slideNumber].name}</h3>
                <h4>{Ddata[slideNumber].price}.00 </h4>
                {/* step : 3
                     if hami le button ma click garryo bahne
                    */}
                <button onClick={() => addToCart(Ddata[slideNumber])}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            {
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Dcard;
