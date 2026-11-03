import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CardPizza({ pizza }) {
  const [verMas, setVerMas] = useState(false);

  const { agregarCarrito } = useContext(CartContext);

  const agregar = () => {
    agregarCarrito(pizza);
  };

  return (
    <div className="card h-100 shadow">
      <img
        src={pizza.img}
        className="card-img-top"
        alt={pizza.name}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">{pizza.name}</h5>

        <h6>Ingredientes:</h6>

        <ul>
          {pizza.ingredients.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>

        <p>{verMas ? pizza.desc : `${pizza.desc.substring(0, 80)}...`}</p>

        <button
          className="btn btn-link p-0 mb-3 align-self-start"
          onClick={() => setVerMas(!verMas)}
        >
          {verMas ? "Ver menos" : "Ver más"}
        </button>

        <h5 className="mt-auto">
          Precio: ${Number(pizza.price).toLocaleString("es-CL")}
        </h5>

        <button className="btn btn-danger w-100" onClick={agregar}>
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default CardPizza;
