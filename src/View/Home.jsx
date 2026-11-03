import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/api/pizzas");

        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const data = await respuesta.json();

        console.log("Datos recibidos de la API:", data);

        const lista = Array.isArray(data)
          ? data
          : Array.isArray(data.results)
            ? data.results
            : [];

        setPizzas(lista);

        if (lista.length === 0) {
          setError("La API respondió, pero no entregó pizzas.");
        }
      } catch (error) {
        console.error("Error al cargar pizzas:", error);
        setError("No se pudieron cargar las pizzas. Revisa el servidor.");
      } finally {
        setCargando(false);
      }
    };

    obtenerPizzas();
  }, []);

  return (
    <>
      <Header />

      <div className="container my-4">
        <h2 className="mb-4">Nuestras pizzas 🍕</h2>

        {cargando && <p>Cargando pizzas...</p>}

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
