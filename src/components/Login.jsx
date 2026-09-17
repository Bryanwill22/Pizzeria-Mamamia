import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUsuario = (event) => {
    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos.");
    } else if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
    } else {
      alert(`Bienvenido ${email}!`);
    }
  }
    return (
      <div >
        <h2>Iniciar Sesión</h2>
        
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={loginUsuario} className="btn btn-primary">
            Iniciar Sesión
          </button>
        
      </div>
    );
  };


export default Login;
