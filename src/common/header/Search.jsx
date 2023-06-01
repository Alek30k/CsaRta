import React, { useContext, useState } from "react";
import logo from "../../components/assets/images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Data from "../../components/Data";

const Search = ({ CartItem, setCatFilteredSearch }) => {
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [avatarOpenIngresar, setAvatarOpenIngresar] = useState(false);

  const { productItems } = Data;

  const [query, setQuery] = useState("");

  // const [input, setInput] = useState("");

  // const handleSubmit = () => {
  //   navigate(`/products/${query}`);
  // };

  const navigate = useNavigate();

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

  const handleSearch = () => {
    const searchProduct = productItems.filter(
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
              placeholder="Buscar..."
              onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <span onClick={handleSearch}>Buscar</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa-solid fa-heart icon-circle heart"></i>
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
                  <button onClick={handleLogin}>Iniciar Sesion</button>
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
