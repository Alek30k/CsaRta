import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 2 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 4, slidesToScroll: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 3 },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <div key={index}>
              <div className="box productMarcas">
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
