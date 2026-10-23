import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-mamamia">
      <div className="container py-2">
        {/* LOGO */}
        <Link className="navbar-brand brand-mamamia" to="/Home">
          <span className="brand-icon">🍕</span>
          <span>
            Pizza <strong>Mamamia</strong>
            <small>EL SABOR DE ITALIA</small>
          </span>
        </Link>

        {/* BOTÓN PARA MÓVILES */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuMamamia"
          aria-controls="menuMamamia"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="menuMamamia">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <NavLink className="nav-link nav-mamamia" to="/Home">
              Inicio
            </NavLink>

            <NavLink className="nav-link nav-mamamia" to="/Pizzas">
              Nuestras pizzas
            </NavLink>

            <NavLink className="nav-link nav-mamamia" to="/Registro">
              Registro
            </NavLink>

            <NavLink className="nav-link nav-mamamia" to="/Login">
              Iniciar sesión
            </NavLink>

            <NavLink className="nav-link nav-mamamia" to="/Profile">
              Mi perfil
            </NavLink>

            <Link className="cart-mamamia" to="/Cart">
              <span>🛒</span>
              <span>Mi carrito</span>
              <strong>$0</strong>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
