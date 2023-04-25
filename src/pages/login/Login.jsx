import React, { useState } from "react";
import "./style.css";
import newRequest from "../../utils/newRequest";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="cardlogin">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>
          <label htmlFor="">Nombre de usuario</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="">Contraseña</label>
          <input
            name="password"
            type="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
            Ingresar
          </button>

          <div onClick={handleRegister} className="registrate">
            Registrate
          </div>

          {error && error}
        </form>
      </div>
    </div>
  );
}

export default Login;
