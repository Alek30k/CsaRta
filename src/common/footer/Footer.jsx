import React from "react";
import "./style.css";
import logo from "../../components/assets/images/logo2.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2" id="QuienesSomos">
          <div className="box">
            {/* <div className="logo width ">
              <img src={logo} alt="" />
            </div> */}
            <h1>SUPERMERCADOS Santa Rita</h1>
            <p>
              Brindamos el mejor servicio en comercialización mayorista de
              productos masivos, alimenticios y no alimenticios del país,
              respondiendo día a día a las necesidades de los clientes y
              proveedores, otorgando precios bajos y productos de excelente
              calidad.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i className="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>Sobre nosotros</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Sucursales</h2>
            <ul>
              <li>General Manuel Belgrano </li>
              <li>Laguna Blanca </li>
              <li>Formosa </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contáctenos</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{" "}
              </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
