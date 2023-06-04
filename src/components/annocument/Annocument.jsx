import React, { useState } from "react";
import "./Anuncios.css";
import Bdata from "./Bdata";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Annocument = () => {
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState("");

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

  const mystyle = {
    // width: "30%",
    // height: "400px",
  };
  const mystyle1 = {
    // width: "68%",
    // height: "340px",
  };
  return (
    <>
      <section className="annocument backgroundb">
        <div className="container d_flex">
          <div style={mystyle} className="bannerPubli">
            <img
              src="./images/cajero.jpg"
              width="100%"
              height="100%"
              className="imgAnuncios"
            />
          </div>
          <div style={mystyle1} className="bannerPubli1">
            <img
              src="./images/cajero2.jpg"
              width="100%"
              height="100%"
              className="imgAnuncios"
            />
          </div>
        </div>
        <div className="galeriaNew container">
          {Bdata.map((val, index) => (
            <img src={val.cover} alt="" onClick={() => handleOpen(index)} />
          ))}
        </div>
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
                {/* <Link to={`/product/${Bdata[slideNumber].id}`}> */}
                <img
                  src={`.${Bdata[slideNumber].cover}`}
                  alt=""
                  className="sliderImg"
                />
                {/* </Link> */}
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
      </section>
    </>
  );
};

export default Annocument;
