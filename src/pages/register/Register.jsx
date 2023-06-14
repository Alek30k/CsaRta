import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
// import upload from "../../utils/upload";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(
        "https://csarta.onrender.com/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      console.log("erroooooor");
      dispatch(loginFailure());
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="registerform">
          <form>
            <h1>Registrarse</h1>
            <input
              type="text"
              placeholder="Nombre"
              // name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              // name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              // name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input
              placeholder="Contraseña de nuevo"
              required
              type="password"
              name="passwordAgain"
              onChange={handleChange}
            /> */}
            {/* <label htmlFor="">Foto de perfil</label>
            <input
              name="img"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            /> */}
            {err && err}
            <button className="button" onClick={handleSignup}>
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
