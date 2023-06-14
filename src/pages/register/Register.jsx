import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
// import upload from "../../utils/upload";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";

const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://csarta.onrender.com/api/auth/signup",
        {
          ...user,
        }
      );
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   dispatch(loginStart());
  //   try {
  //     const res = await axios.post(
  //       "https://csarta.onrender.com/api/auth/signup",
  //       {
  //         name,
  //         email,
  //         password,
  //       }
  //     );
  //     dispatch(loginSuccess(res.data));
  //     navigate("/");
  //   } catch (error) {
  //     dispatch(loginFailure());
  //   }
  // };

  return (
    <div className="register">
      <div className="card">
        <div className="registerform">
          <form onSubmit={handleSubmit}>
            <h1>Registrarse</h1>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
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
