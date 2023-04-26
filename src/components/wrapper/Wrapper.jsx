import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i className="fa-solid fa-truck-fast"></i>,
      title: "Envíos a todo el mundo",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier rango.",
    },
    {
      cover: <i className="fa-solid fa-id-card"></i>,
      title: "Pago Seguro",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier rango.",
    },
    {
      cover: <i className="fa-solid fa-shield"></i>,
      title: "Compra con confianza ",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier rango.",
    },
    {
      cover: <i className="fa-solid fa-headset"></i>,
      title: "Soporte 24/7",
      decs: "Ofrecemos precios competitivos en nuestros más de 100 millones de productos de cualquier rango.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
