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
import { Link } from "react-router-dom";

const Dcard = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 384,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 450,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 2 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 4, slidesToScroll: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 3 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 6, slidesToScroll: 3 },
      },
    ],
  };

  const [slideNumber, setSlideNumber] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const filterSection = products.filter((item) => item.seccion === "discount");

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 6 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 6 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Slider {...settings}>
        {filterSection?.map((value, index) => {
          return (
            <div key={index} onClick={() => handleOpen(index)}>
              <div className="box product producti">
                <div className="img">
                  <img src={value.cover} alt="" width="90%" />
                </div>
                <h4>{value.name}</h4>
                <span>${value.price}</span>
              </div>
            </div>
          );
        })}
      </Slider>
      {open && (
        <div className="productContainer">
          <div className="slideer">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="closee"
                onClick={() => setOpen(false)}
              />
              <Link to={`/product/${filterSection[slideNumber]._id}`}>
                <img
                  src={`${filterSection[slideNumber].cover}`}
                  alt=""
                  className="sliderImg"
                />
              </Link>
              <div className="price">
                <h3>{Ddata[slideNumber].name}</h3>
                <h4>${Ddata[slideNumber].price}.00 </h4>

                {/* <button onClick={() => addToCart(Ddata[slideNumber])}>
                  <i className="fa fa-plus"></i>
                </button> */}
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
