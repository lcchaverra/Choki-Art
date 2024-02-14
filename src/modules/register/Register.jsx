import Logo from "../../assets/images/Logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import Swal from 'sweetalert2'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handledRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/create', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();

      if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Validando...",
            text: "Se ha creado el usuario Correctamente!",
          });
          setUsername('');
          setPassword('');
      } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `No se ha podido crear el usuario. ${data.message || 'Inténtalo de nuevo'}`,
          });
      }
  } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error en la solicitud. ${error.message || ''}`,
      });
  }
  }


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
              <form className="form-container" onSubmit={handledRegister} method='POST'>
                  <div className="login-tap">
                    <span className="tap-singup">Login</span>
                    <span className="tap-login">Sing up</span>
                  </div>
                  <div className="login-note">
                    <span>Register Form</span>
                  </div>
                  <div className="form__group field">
                    <input type="text" className="form__field" placeholder="Email" name="Email" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label htmlFor="Email" className="form__label">Email</label>
                  </div>
                  <div className="form__group field">
                    <label htmlFor="password" className="form__label">password</label>
                    <input type="password" className="form__field" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                  <button className="btn" type="submit">Register</button>
                  <div className="login-newAccount">
                  <span>Do you have an account?
                    <Link className="login-link" to="/login"> Login</Link>
                  </span>
                  </div>
              </form>
          </div>
      </div>
    </>
  )
}

export default Register