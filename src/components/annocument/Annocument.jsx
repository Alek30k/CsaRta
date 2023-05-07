import React from "react";
import "./Anuncios.css";

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };
  return (
    <>
      <section className="annocument backgroundb">
        <div className="container d_flex">
          <div style={mystyle}>
            <img
              src="./images/cajero.jpg"
              width="100%"
              height="70%"
              className="imgAnuncios"
            />
          </div>
          <div style={mystyle1}>
            <img
              src="./images/cajero2.jpg"
              width="100%"
              height="70%"
              className="imgAnuncios"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
