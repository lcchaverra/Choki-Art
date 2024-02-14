import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handledLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          icon: "success",
          title: "Validando...",
          text: "Credenciales correctas!",
        });
        setMessage(data.message);
        localStorage.setItem("username", username);
        navigate("/home");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Credenciales incorrectas!",
        });
        setMessage("Credenciales incorrectas");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error en la solicitud!",
      });
      setMessage("Error en la solicitud");
    }
  };

  return (
    <>
      <div className="login-grid-container">
        <div className="left-login-container">
          <img src={Logo} alt="Logo principal de Choki-Art" />
          <h1 className="title-login">Choki-Art</h1>
        </div>
        <div className="right-login-container">
          <div className="form-title-container">
            <img src={Logo} alt="Logo secundario de Choki-Art" />
            <h3 className="title-login">Choki-Art</h3>
          </div>
          <form
            className="form-container"
            onSubmit={handledLogin}
            method="POST"
          >
            <div className="login-tap">
              <span className="tap-singup">Sing up</span>
              <span className="tap-login">Login</span>
            </div>
            <div className="login-note">
              <span>Welcome to Choki Art</span>
            </div>
            <div className="form__group field">
              <input
                type="text"
                className="form__field"
                placeholder="Email"
                name="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="Email" className="form__label">
                Email
              </label>
            </div>
            <div className="form__group field">
              <label htmlFor="password" className="form__label">
                password
              </label>
              <input
                type="password"
                className="form__field"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <div className="login-newAccount">
              <span>
                Don't have an account?
                <Link className="login-link" to="/register">
                  {" "}
                  Sing up
                </Link>
              </span>
            </div>
            <p style={{ color: "red" }}>{message}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
