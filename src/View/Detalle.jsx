import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

export default function Detalle() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizzaDetails = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await res.json();
      setPizza(data);
    };
    getPizzaDetails();
  }, [id]);
  return (
    <>
      <div className="detalle-container">
        <h1>Detalle de la pizza</h1>
        {pizza ? (
          <div>
            <img src={pizza.img} style={{ width: "200px" }} alt="" />
            <p>
              <strong>Nombre:</strong> {pizza.name}
            </p>
            <p>
              <strong>Descripción:</strong> {pizza.desc}
            </p>
            <p>
              <strong>Precio:</strong> ${pizza.price.toFixed()}
            </p>
            <button>Comprar</button>
          </div>
        ) : (
          <p>Cargando detalles de la pizza...</p>
        )}
      </div>
      <Footer />
    </>
  );
}
