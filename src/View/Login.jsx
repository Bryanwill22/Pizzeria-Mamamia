import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token, setToken } = useContext(GlobalContext);

  const loginUsuario = (event) => {
    event.preventDefault();

    if (email.trim() === "" || password === "") {
      alert("Por favor, complete todos los campos.");
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
    } else {
      alert(`¡Bienvenido ${email}!`);
      setEmail("");
      setPassword("");
      setToken(true);
      navigate("/Pizzas");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">🍕</div>

        <h2>¡Bienvenido!</h2>
        <p className="login-subtitle">Ingresa a Pizza Mamamia</p>

        <form onSubmit={loginUsuario}>
          <div className="login-group">
            <label htmlFor="email">Correo electrónico</label>
            <div className="login-input">
              <span>✉️</span>
              <input
                type="email"
                id="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="login-group">
            <label htmlFor="password">Contraseña</label>
            <div className="login-input">
              <span>🔒</span>
              <input
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>

        <div className="login-footer">
          <p>¿No tienes una cuenta?</p>
          <a href="/register">Regístrate aquí</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
