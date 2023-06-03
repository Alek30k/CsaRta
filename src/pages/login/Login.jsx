import React, { useContext, useState } from "react";
import "./style.css";
// import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import axios from "axios";

function Login() {
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8800/api/auth/signin", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8800/api/auth/signup", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await login(inputs);
  //     navigate("/");
  //   } catch (err) {
  //     setErr(err.response.data);
  //   }
  // };

  // const handleRegister = () => {
  //   navigate("/register");
  // };

  return (
    <div className="login">
      <div className="cardlogin">
        <form>
          <h1>Iniciar sesión</h1>
          <label htmlFor="">Nombre de usuario</label>
          <input
            name="email"
            type="email"
            placeholder="ej. nombre@gmail.com"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="">Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="●●●●●●●●"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          {err && err}
          <button onClick={handleLogin} className="button">
            Iniciar Sesión
          </button>

          <div className="registrate">Registrate</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
