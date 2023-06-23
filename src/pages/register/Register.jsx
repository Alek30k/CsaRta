import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";
// import upload from "../../utils/upload";
// import { useDispatch } from "react-redux";
// import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";

const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
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
            <label htmlFor="">Foto de perfil </label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />

            {err && err}
            <button className="button" type="submit">
              Registrarse
            </button>
            <span>¿Tiene usted una cuenta?</span>
            <Link to="/login">
              <p>Iniciar sesión</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
