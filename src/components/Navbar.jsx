import { useState } from "react";

function Navbar() {

  // Simulación del estado de inicio de sesión
  const [token, setToken] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container-fluid">

        {/* Botón Home: siempre visible */}
        <a className="navbar-brand" href="#">
          Home
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">

            {/* Si el usuario está logueado */}
            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => setToken(false)}
                  >
                    Logout
                  </button>
                </li>

                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Total : $25.000
                  </a>
                </li>
              </>
            ) : (

              /* Si el usuario NO está logueado */
              <>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => setToken(true)}
                  >
                    Login
                  </button>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Register
                  </a>
                </li>
              </>

            )}

          </ul>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;