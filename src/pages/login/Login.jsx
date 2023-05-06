import React, { useContext, useState } from "react";
import "./style.css";
// import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await newRequest.post("/auth/login", { username, password });
  //     localStorage.setItem("currentUser", JSON.stringify(res.data));
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.response.data);
  //   }
  // };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

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
            onChange={handleChange}
          />

          <label htmlFor="">Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="●●●●●●●●"
            className="input"
            onChange={handleChange}
          />
          {err && err}
          <button onClick={handleLogin} className="button">
            Iniciar Sesión
          </button>

          <div onClick={handleRegister} className="registrate">
            Registrate
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
