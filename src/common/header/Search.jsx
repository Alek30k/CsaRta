import React, { useContext, useState } from "react";
import logo from "../../components/assets/images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Search = ({ CartItem }) => {
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [avatarOpenIngresar, setAvatarOpenIngresar] = useState(false);

  const navigate = useNavigate();

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const { currentUser } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = async (e) => {
    try {
      await logout();
      setAvatarOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogin = async (e) => {
    try {
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Busca y presiona enter..." />
            <span>Buscar</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa-solid fa-heart icon-circle"></i>
            {currentUser === "User has been logged out." ? (
              <i
                className="fa fa-user icon-circle"
                onClick={() => setAvatarOpenIngresar(!avatarOpenIngresar)}
              ></i>
            ) : (
              <div onClick={() => setAvatarOpen(!avatarOpen)}>
                <img
                  src={
                    currentUser?.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                  }
                  className="user"
                  alt=""
                />
              </div>
            )}

            {avatarOpen && (
              <div className="menuAvatar">
                <div className="buttonLogout">
                  <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
              </div>
            )}
            {avatarOpenIngresar && (
              <div className="menuAvatar">
                <div className="buttonLogout">
                  <button onClick={handleLogin}>Ingresar</button>
                </div>
              </div>
            )}
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
