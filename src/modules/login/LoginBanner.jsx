import Logo from "../../assets/images/Logo.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const LoginBanner = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <>
    <div className="login-container">
      <div className="login-content">
        <div className="title-container">
                <img className="Main-logo" src={Logo} alt="Logo de Choki Art" />
                <h1>Choki-Art alsjdhaksjdhaksjdhgkajsdhkjasdak</h1>
        </div>
        <div className="logo-container">
          <img className="login-logo" src={Logo} alt="Logo de Choki Art" />
        </div>
          <button className="btn" onClick={handleClick}>Login</button>
          <div className="login-newAccount">
          <span>Don't have an account?
            <Link className="login-link" to="/register"> Sing up</Link>
          </span>
          </div>
      </div>
    </div>
    </>
  )
}

export default LoginBanner