import { useState } from "react";
import { pizzaCart } from "./pizzas";

function Cart() {
  const [carrito, setCarrito] = useState(pizzaCart);

  // Aumentar cantidad
  const aumentar = (id) => {
    setCarrito(
      carrito.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza,
      ),
    );
  };

  // Disminuir cantidad
  const disminuir = (id) => {
    setCarrito(
      carrito
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza,
        )
        .filter((pizza) => pizza.count > 0),
    );
  };

  // Calcular total
  const total = carrito.reduce(
    (acumulado, pizza) => acumulado + pizza.price * pizza.count,
    0,
  );

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>

      {carrito.map((pizza) => (
        <div key={pizza.id} className="card mb-3">
          <div className="row g-0 align-items-center">
            <div className="col-md-2">
              <img
                src={pizza.img}
                className="img-fluid rounded"
                alt={pizza.name}
              />
            </div>

            <div className="col-md-3">
              <h5>{pizza.name}</h5>
            </div>

            <div className="col-md-2">
              <p>${pizza.price}</p>
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-danger"
                onClick={() => disminuir(pizza.id)}
              >
                -
              </button>

              <span className="mx-3">{pizza.count}</span>

              <button
                className="btn btn-success"
                onClick={() => aumentar(pizza.id)}
              >
                +
              </button>
            </div>

            <div className="col-md-2">
              <p>${pizza.price * pizza.count}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="text-end">
        <h3>Total: ${total}</h3>

        <button className="btn btn-primary">Pagar</button>
      </div>
    </div>
  );
}

export default Cart;
