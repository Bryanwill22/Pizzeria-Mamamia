import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>

      <h2>¡Ups! Esta pizza no existe 🍕</h2>

      <p className="lead">Parece que te perdiste en nuestra pizzería.</p>

      <Link to="/" className="btn btn-danger mt-3">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
