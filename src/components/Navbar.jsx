import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Navbar.css";

function Navbar() {
  const { totalCarrito, cartLength } = useContext(CartContext);

  const [menuAbierto, setMenuAbierto] = useState(false);

  const location = useLocation();

  // Cerrar el menú cada vez que cambia la vista
  useEffect(() => {
    setMenuAbierto(false);
  }, [location.pathname]);

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

        {/* CARRITO Y BOTÓN MÓVIL */}
        <div className="d-flex align-items-center gap-2 ms-auto">
          <Link className="cart-mamamia" to="/Cart">
            <span>🛒</span>
            <span className="d-none d-sm-inline">
              Mi carrito ({cartLength})
            </span>
            <strong>${totalCarrito.toLocaleString("es-CL")}</strong>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="menuMamamia"
            aria-expanded={menuAbierto}
            aria-label="Abrir menú"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* MENÚ */}
        <div
          className={`collapse navbar-collapse ${menuAbierto ? "show" : ""}`}
          id="menuMamamia"
        >
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
