function CardPizza({ nombre, precio, imagen, ingredientes }) {
  return (
    <div className="card h-100">
      <img src={imagen} className="card-img-top" alt={nombre} />

      <div className="card-body ">
        <h2>{nombre}</h2>
        <p>{ingredientes}</p>
        <p>Precio: ${precio}</p>

        <button>Ver más</button>
      </div>
    </div>
  );
}

export default CardPizza;