import { useState } from "react";

function CardPizza({ nombre, precio, imagen, ingredientes, desc }) {
  const [verMas, setVerMas] = useState(false);
  return (
    <div className="card h-100">
      <img src={imagen} className="card-img-top" alt={nombre} />

      <div className="card-body ">
        <h2>{nombre}</h2>
        <ul>
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
        <p>Precio: ${precio}</p>

        <p>{verMas ? desc : `${desc.substring(0, 80)}...`}</p>

        <div className="d-flex gap-2">
          {" "}
          <button
            className="btn btn-primary"
            onClick={() => setVerMas(!verMas)}
          >
            {" "}
            {verMas ? "Ver menos" : "Ver más"}{" "}
          </button>{" "}
          <button className="btn btn-success"> Agregar </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
