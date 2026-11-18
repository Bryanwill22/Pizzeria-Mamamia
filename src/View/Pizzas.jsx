import { useEffect, useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Pizzas.css";
import { useNavigate } from "react-router-dom";

function Pizzas() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const { agregarCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductos = async () => {
      try {
        setCargando(true);
        setError("");

        const res = await fetch("http://localhost:5000/api/pizzas");

        if (!res.ok) {
          throw new Error("No fue posible cargar las pizzas.");
        }

        const data = await res.json();

        const pizzas = Array.isArray(data)
          ? data
          : Array.isArray(data.results)
            ? data.results
            : [];

        setProductos(pizzas);
      } catch (error) {
        console.error("Error al cargar pizzas:", error);
        setError("No pudimos conectar con el servidor. Inténtalo nuevamente.");
      } finally {
        setCargando(false);
      }
    };

    getProductos();
  }, []);

  const formatearPrecio = (precio) => Number(precio).toLocaleString("es-CL");

  return (
    <main className="pizzas-page">
      {/* ENCABEZADO */}
      <section className="pizzas-header">
        <span className="pizzas-etiqueta">HECHAS CON PASIÓN</span>

        <h1>
          Nuestras <span>pizzas</span>
        </h1>

        <p>
          Ingredientes seleccionados, sabores irresistibles y el auténtico
          espíritu de Italia.
        </p>

        <div className="pizzas-divider"></div>
      </section>

      {/* CARGANDO */}
      {cargando && (
        <div className="pizzas-estado">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p>Preparando nuestro menú...</p>
        </div>
      )}

      {/* ERROR */}
      {!cargando && error && (
        <div className="pizzas-estado">
          <div className="pizzas-error-icon">🍕</div>
          <h3>¡Ups! Algo salió mal</h3>
          <p>{error}</p>
          <button
            className="btn-reintentar"
            onClick={() => window.location.reload()}
          >
            Volver a intentar
          </button>
        </div>
      )}

      {/* CATÁLOGO */}
      {!cargando && !error && productos.length > 0 && (
        <section className="container pb-5">
          <div className="pizzas-resultados">
            <span>{productos.length} variedades disponibles</span>
          </div>

          <div className="row g-4">
            {productos.map((pizza) => (
              <div className="col-12 col-md-6 col-lg-4" key={pizza.id}>
                <article className="pizza-card">
                  {/* IMAGEN */}
                  <div className="pizza-imagen-container">
                    <img
                      src={pizza.img}
                      alt={pizza.name}
                      className="pizza-imagen"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/600x400?text=Pizza+Mamamia";
                      }}
                    />

                    <span className="pizza-etiqueta">Pizza Mamamia</span>
                  </div>

                  {/* INFORMACIÓN */}
                  <div className="pizza-info">
                    <div className="pizza-titulo">
                      <h3>{pizza.name}</h3>
                      <span className="pizza-precio">
                        ${formatearPrecio(pizza.price)}
                      </span>
                    </div>

                    {/* INGREDIENTES */}
                    {pizza.ingredients && (
                      <div className="pizza-ingredientes">
                        <span className="ingredientes-titulo">
                          INGREDIENTES
                        </span>

                        <div className="ingredientes-lista">
                          {(Array.isArray(pizza.ingredients)
                            ? pizza.ingredients
                            : String(pizza.ingredients).split(",")
                          ).map((ingrediente, index) => (
                            <span key={index} className="ingrediente-tag">
                              {String(ingrediente).trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* BOTÓN */}
                    <button
                      className="pizza-boton"
                      onClick={() => agregarCarrito(pizza)}
                    >
                      <span>🛒</span>
                      Agregar al carrito
                    </button>
                    <br />
                    <button
                      onClick={() => navigate(`/detalle/${pizza.id}`)}
                      className="pizza-boton"
                    >
                      {" "}
                      <span>📖</span>ver detalle
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SIN PRODUCTOS */}
      {!cargando && !error && productos.length === 0 && (
        <div className="pizzas-estado">
          <div className="pizzas-error-icon">🍕</div>
          <h3>Pronto tendremos pizzas para ti</h3>
          <p>En este momento no hay productos disponibles.</p>
        </div>
      )}
    </main>
  );
}

export default Pizzas;
