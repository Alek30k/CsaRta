import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../components/assets/images/logo2.png";
import logo from "../../components/assets/images/gifhead.gif";

const Head = ({ cambiarTheme }) => {
  return (
    <>
      <section className="head ">
        {/* <div className="container d_flex"> */}
        <img src={logo} alt="asd" />
        {/* </div> */}
      </section>
    </>
  );
};

export default Head;
