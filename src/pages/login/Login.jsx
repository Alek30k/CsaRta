import React, { useContext, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
import { useDispatch } from "react-redux";
// import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import axios from "axios";
import newRequest from "../../utils/newRequest";
// import newRequest from "../../utils/newRequest";

function Login() {
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      // setError(err.response.data);
      console.log(err);
    }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   console.log("Click en login");
  //   dispatch(loginStart());
  //   try {
  //     const res = await axios.post(
  //       "https://csarta.onrender.com/api/auth/signin",
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     console.log("Entro");
  //     dispatch(loginSuccess(res.data));
  //     navigate("/");
  //   } catch (error) {
  //     dispatch(loginFailure());
  //     console.log("No entro");
  //   }
  // };

  return (
    <div className="login">
      <div className="cardlogin">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>
          <label htmlFor="">Nombre de usuario</label>
          {/* <input
            name="email"
            type="email"
            placeholder="ej. nombre@gmail.com"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="●●●●●●●●"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
            Iniciar Sesión
          </button>
          {err && err}
          <Link to="/register">
            <div className="registrate">Registrate</div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
