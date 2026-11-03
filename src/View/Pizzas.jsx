import { useEffect, useState } from "react";

function Pizzas() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getProducto = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");

        if (!res.ok) {
          throw new Error("Error al obtener las pizzas");
        }

        const data = await res.json();

        setProductos(Array.isArray(data) ? data : data.results || []);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setCargando(false);
      }
    };

    getProducto();
  }, []);

  return (
    <div className="container py-3">
      {/* Titulo */}
      <div className="text-center mb-10">
        <h1 className="fw-bold">🍕 Pizza Mamamia</h1>
        <p className="text-muted">Descubre nuestras deliciosas pizzas</p>
      </div>

      {/* Productos */}
      <div className="row g-4">
        {cargando ? (
          <div className="text-center">
            <div className="spinner-border text-danger"></div>
            <p>Cargando pizzas...</p>
          </div>
        ) : productos.length > 0 ? (
          productos.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.id}>
              <div className="card h-100 shadow-sm border-0">
                {/* Imagen */}
                <img
                  src={p.img}
                  className="card-img-top"
                  alt={p.name}
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x300?text=Pizza";
                  }}
                />

                {/* Informacion */}
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title text-capitalize fw-bold">
                    {p.name}
                  </h4>

                  <p className="text-muted">{p.desc}</p>

                  <h5 className="text-danger fw-bold mt-auto">
                    ${Number(p.price).toLocaleString("es-CL")}
                  </h5>

                  <button className="btn btn-danger w-100 mt-2">
                    🛒 Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">No se encontraron pizzas.</p>
        )}
      </div>
    </div>
  );
}

export default Pizzas;
