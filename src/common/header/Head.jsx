import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../components/assets/images/logo2.png";

const Head = ({ cambiarTheme }) => {
  return (
    <>
      <section className="head ">
        <div className="container d_flex">
          <div className="leftHead row">
            <i className="fa fa-phone"></i>
            <label>+880 3456 789</label>
          </div>
          {/* <div className="logoHead">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div> */}
          <div className="right row RText">
            <label>Theme FAQ"s</label>
            {/* <input type="checkbox" onClick={cambiarTheme} /> */}

            {/* <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
