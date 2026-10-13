import { useEffect, useState } from "react";

function Pizzas() {
  const [productos, setProductos] = useState([]);

  const getProducto = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const data = await res.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <>
      <div>
        <h2>Lista de productos:</h2>
      </div>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "10px",
        }}
      >
        {productos.length > 0 ? (
          productos.map((p, i) => {
            return (
              <div key={p.id}>
                <h3>{p.name}</h3>
                <h4>{p.price}</h4>
                <p>{p.desc}</p>
                <button>comprar</button>
              </div>
            );
          })
        ) : (
          <p>cargando productos</p>
        )}
      </section>
    </>
  );
}

export default Pizzas;
