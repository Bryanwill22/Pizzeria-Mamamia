import { useState } from "react";
import { Link } from "react-router-dom";
import "./Registro.css";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const registrarUsuario = (event) => {
    event.preventDefault();

    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert(`¡${nombre}! Te has registrado exitosamente. 🍕`);

    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        {/* LOGO */}
        <div className="registro-logo">🍕</div>

        <h2>¡Únete a nosotros!</h2>

        <p className="registro-subtitle">Crea tu cuenta en Pizza Mamamia</p>

        <form onSubmit={registrarUsuario}>
          {/* NOMBRE */}
          <div className="registro-group">
            <label htmlFor="nombre">Nombre completo</label>

            <div className="registro-input">
              <span>👤</span>

              <input
                type="text"
                id="nombre"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                autoComplete="name"
                required
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="registro-group">
            <label htmlFor="email">Correo electrónico</label>

            <div className="registro-input">
              <span>✉️</span>

              <input
                type="email"
                id="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="registro-group">
            <label htmlFor="password">Contraseña</label>

            <div className="registro-input">
              <span>🔒</span>

              <input
                type={mostrarPassword ? "text" : "password"}
                id="password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="registro-ver"
                onClick={() => setMostrarPassword(!mostrarPassword)}
              >
                {mostrarPassword ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>

          {/* CONFIRMAR PASSWORD */}
          <div className="registro-group">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>

            <div className="registro-input">
              <span>🔐</span>

              <input
                type={mostrarConfirmacion ? "text" : "password"}
                id="confirmPassword"
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="registro-ver"
                onClick={() => setMostrarConfirmacion(!mostrarConfirmacion)}
              >
                {mostrarConfirmacion ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>

          {/* BOTÓN */}
          <button type="submit" className="registro-button">
            Crear mi cuenta
          </button>
        </form>

        {/* FOOTER */}
        <div className="registro-footer">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/Login">Inicia sesión aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default Registro;
