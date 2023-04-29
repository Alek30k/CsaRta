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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [slideNumber, setSlideNumber] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  return (
    <div>
      <Slider {...settings}>
        {productItems.map((productItems, i) => {
          return (
            <div key={i}>
              <div className="box">
                <div className="product mtop">
                  <div className="img">
                    <span className="discount">
                      {productItems.discount}% Off
                    </span>

                    <Link to={`/product/${productItems.id}`}>
                      <img
                        src={productItems.cover}
                        alt=""
                        onClick={() => handleOpen(i)}
                        className="flashImg"
                      />
                    </Link>

                    <div className="product-like">
                      {/* <label>{count}</label> <br /> */}

                      <i
                        className="fa-regular fa-heart"
                        // onClick={increment}
                      ></i>

                      {/* <i class="fa-solid fa-heart"></i> */}
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

// {open && (
//   <div className="productContainer">
//     <div className="slideer">
//       <FontAwesomeIcon
//         icon={faCircleXmark}
//         className="closee"
//         onClick={() => setOpen(false)}
//       />
//       {/* <FontAwesomeIcon
//             icon={faCircleArrowLeft}
//             className="arrow"
//             // onClick={() => handleMove("l")}
//           /> */}

//       <div className="sliderWrapper">
//         <img
//           src={productItems[slideNumber].cover}
//           alt=""
//           className="sliderImg"
//         />
//         <div className="price">
//           <h3>{productItems[slideNumber].name}</h3>
//           <h4>${productItems[slideNumber].price}.00 </h4>
//           {/* step : 3
//                if hami le button ma click garryo bahne
//               */}
//           <button onClick={() => addToCart(productItems)}>
//             <i className="fa fa-plus"></i>
//           </button>
//         </div>
//       </div>

//       {/* <FontAwesomeIcon
//             icon={faCircleArrowRight}
//             className="arrow"
//             // onClick={() => handleMove("r")}
//           /> */}
//     </div>
//   </div>
// )}
