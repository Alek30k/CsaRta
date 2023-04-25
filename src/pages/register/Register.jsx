import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
  });

  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="registerform">
          <h1>Registrarse</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick} className="button">
              Register
            </button>
            <span>¿Tiene usted una cuenta?</span>
            <Link to="/login">
              {/* <button >Login</button> */}
              <p>Iniciar sesión</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
