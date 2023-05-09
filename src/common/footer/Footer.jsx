import React from "react";
import "./style.css";
import logo from "./facebook.png";
import insta from "./instagram.png";
import twitter from "./twitter.png";

const Footer = () => {
  return (
    <div className="containerFooter" id="QuienesSomos">
      <footer className="footera ">
        <ul className="right-area">
          <li className="link-area">
            <h1>SUPERMERCADOS</h1>
            <h2>Santa Rita</h2>
            <div className="constainerIcons">
              <div className="icons">
                <i className="fa-solid fa-house"></i>
                <p>Av Pers/n, Gral. Manuel Belgrano, Formosa</p>
              </div>
              <div className="icons">
                <i className="fa-solid fa-phone"></i>
                <p>0123-456-7890 </p>
              </div>
            </div>
          </li>
          <li>
            <h2>Contactos</h2>
            <ul className="boxa">
              <li>
                <a href="#"></a>QUIÉNES SOMOS
              </li>
              <li>
                <a href="#"></a>CONTACTO
              </li>
              <li>
                <a href="#"></a>SUCURSALES
              </li>
              <li>
                <a href="#"></a>¿CÓMO REALIZAR SU PEDIDO?
              </li>
            </ul>
          </li>
          <li>
            <h2>SEGUINOS</h2>
            <div className="socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo} alt="" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="" />
              </a>
            </div>
          </li>
        </ul>

        <div className="footer-bottom">
          <p>All Right reserved by &copy;Supermercados Santa Rita 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
