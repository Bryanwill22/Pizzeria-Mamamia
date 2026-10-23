import { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registrarUsuario = (event) => {
    if (nombre === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, complete todos los campos.");
    }
    else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
    }
    else if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
    }
    else {
        alert(`${nombre} se ha registrado exitosamente!`);
        
    }
  };

  return (
    <>
    <input type="text"
    placeholder="Nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    />
    <br />
    <input type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <br />
    <input type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <input type="password"
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <br />
    <button className="btn btn-primary" onClick={registrarUsuario}>Registrarse</button>
    </> 
)

  }

export default Registro;
