import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sdata2 from "./Sdata2";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 300,
        settings: { dots: false, arrows: false },
      },
    ],

    appendDots: (dots) => {
      return <ul style={{ margin: "0" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings} className="banerOne">
        {Sdata.map((value, index) => {
          return (
            <div key={index}>
              <div className="box d_flex topSLider flexi ">
                <div className="rightSlider">
                  <img className="rightImg" src={value.cover} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <Slider {...settings} className="banerTwo containerB">
        {Sdata2.map((value, index) => {
          return (
            <div key={index}>
              <div className="box d_flex topSLider flexi">
                <div className="rightSlider">
                  <img className="rightImg" src={value.cover} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
