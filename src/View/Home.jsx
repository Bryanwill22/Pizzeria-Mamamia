import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const respuesta = await fetch("http://localhost:5000/api/pizzas");

        const data = await respuesta.json();

        setPizzas(data.results || []);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    obtenerPizzas();
  }, []);

  return (
    <div>
      <Header />

      <div className="container my-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <CardPizza
                nombre={pizza.name}
                precio={pizza.price}
                imagen={pizza.img}
                ingredientes={pizza.ingredients}
                desc={pizza.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
