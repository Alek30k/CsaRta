import React, { useState } from "react";
import logo from "../../components/assets/images/logo2.png";
import { Link, useNavigate } from "react-router-dom";

import newRequest from "../../utils/newRequest";
import { useSelector } from "react-redux";

const Search = ({ setCatFilteredSearch, products }) => {
  const [avatarOpenIngresar, setAvatarOpenIngresar] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    const searchProduct = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.catCat.toLowerCase().includes(query) ||
        product.subCategory.toLowerCase().includes(query)
    );
    setCatFilteredSearch(searchProduct);
    navigate(`/products/search/${query}`);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (query.length === 0) {
      return alert("Please write a product");
    } else if (!query) return alert();
    else {
      handleSearch();
      setQuery("");
    }
  }

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // const quantity = useSelector((state) => state.cart.cartTotalQuantity);
  const quantity = useSelector((state) => state.cart.cartItems.length);

  const [openModalFavorite, setOpenModalFavorite] = useState(false);

  return (
    <>
      <section className="search">
        <div className="containerSearch c_flex">
          <div className="logo  ">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <span onClick={handleSearch}>Buscar</span>
          </div>

          <div className="icon f_flex width">
            <i
              className="fa-solid fa-heart icon-circle heart"
              onClick={() => setOpenModalFavorite(!openModalFavorite)}
              // onChange={(event) => setView(event.target.value as "available" | "readlist")}
            ></i>

            {openModalFavorite && (
              <div className="menuAvatar">
                <div className="buttonLogout">
                  <button>Favoritos</button>
                </div>
              </div>
            )}

            {currentUser ? (
              <div>
                <div onClick={() => setOpenModal(!openModal)}>
                  <img
                    src={
                      currentUser?.img ||
                      "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                    }
                    className="user"
                    alt=""
                  />
                </div>
                {openModal && (
                  <div className="menuAvatar">
                    <div className="buttonLogout">
                      <button onClick={handleLogout}>Cerrar Sesión</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <i
                className="fa fa-user icon-circle"
                onClick={() => setAvatarOpenIngresar(!avatarOpenIngresar)}
              ></i>
            )}
            {avatarOpenIngresar && (
              <div className="menuAvatar">
                <div className="buttonLogout">
                  <Link to="login" style={{ textDecoration: "none" }}>
                    <span>Iniciar Sesion</span>
                  </Link>
                </div>
              </div>
            )}

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{quantity}</span>
              </Link>
            </div>
          </div>
          <div className="cartMobile">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>{quantity === 0 ? "" : quantity}</span>

              <span>{quantity}</span>
            </Link>
          </div>
        </div>
        <div className="containerSearchMobile c_flex containerMobile">
          <div className="logo  ">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="icon f_flex width">
            <i className="fa-solid fa-heart icon-circle heart"></i>

            {currentUser ? (
              <div>
                <div onClick={() => setOpenModal(!openModal)}>
                  <img
                    src={
                      currentUser?.img ||
                      "https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                    }
                    className="user"
                    alt=""
                  />
                </div>
                {openModal && (
                  <div className="menuAvatar">
                    <div className="buttonLogout">
                      <button onClick={handleLogout}>Cerrar Sesión</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <i
                className="fa fa-user icon-circle user"
                onClick={() => setAvatarOpenIngresar(!avatarOpenIngresar)}
              ></i>
            )}
            {avatarOpenIngresar && (
              <div className="menuAvatar">
                <div className="buttonLogout">
                  <Link to="login" style={{ textDecoration: "none" }}>
                    <span>Iniciar Sesion</span>
                  </Link>
                </div>
              </div>
            )}

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{quantity === 0 ? "" : quantity}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="search-boxMobile f_flex">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />

          <span onClick={handleSearch}>
            <i className="fa fa-search lupa"></i>
          </span>
        </div>
      </section>
    </>
  );
};

export default Search;
