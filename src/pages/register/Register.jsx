import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import upload from "../../utils/upload";

const Register = () => {
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    passwordAgain: "",
    img: "",
  });

  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await axios.post("https://csarta.onrender.com/api/auth/register", {
        ...inputs,
        img: url,
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="registerform">
          <form onSubmit={handleSubmit}>
            <h1>Registrarse</h1>
            <input
              type="text"
              placeholder="Nombre"
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
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
            <input
              placeholder="Contraseña de nuevo"
              required
              type="password"
              name="passwordAgain"
              onChange={handleChange}
            />
            <label htmlFor="">Foto de perfil</label>
            <input
              name="img"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {err && err}
            <button type="submit" className="button">
              Registrarse
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
