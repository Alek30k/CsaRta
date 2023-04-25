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
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <div key={index}>
              <div className="box product">
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
