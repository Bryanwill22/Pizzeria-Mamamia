import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const {
    cart,
    cartLength,
    totalCarrito,
    sumarUno,
    restarUno,
    eliminarProducto,
    vaciarCarrito,
  } = useContext(CartContext);

  return (
    <div className="container py-5">
      <h2 className="mb-4">🛒 Mi carrito</h2>

      {/* BOTÓN SEGUIR COMPRANDO */}
      <div className="mb-4">
        <Link to="/Home" className="btn btn-outline-danger">
          ← Seguir comprando
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          Tu carrito está vacío.
          <div className="mt-3">
            <Link to="/Home" className="btn btn-danger">
              Ver nuestras pizzas 🍕
            </Link>
          </div>
        </div>
      ) : (
        <>
          {cart.map((pizza) => (
            <div className="card mb-3" key={pizza.id}>
              <div className="row g-0 align-items-center">
                <div className="col-md-3">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    className="img-fluid rounded-start"
                    style={{
                      height: "150px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="text-capitalize">{pizza.name}</h5>

                    <p>
                      Precio unitario: $
                      {Number(pizza.price).toLocaleString("es-CL")}
                    </p>

                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => restarUno(pizza.id)}
                      >
                        -
                      </button>

                      <span>{pizza.quantity}</span>

                      <button
                        className="btn btn-outline-success"
                        onClick={() => sumarUno(pizza.id)}
                      >
                        +
                      </button>

                      <button
                        className="btn btn-danger ms-auto"
                        onClick={() => eliminarProducto(pizza.id)}
                      >
                        Eliminar
                      </button>
                    </div>

                    <h6 className="mt-3">
                      Subtotal: $
                      {(Number(pizza.price) * pizza.quantity).toLocaleString(
                        "es-CL",
                      )}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="card p-4 mt-4">
            <h5>Productos: {cartLength}</h5>

            <h3>Total: ${totalCarrito.toLocaleString("es-CL")}</h3>

            <button
              className="btn btn-outline-danger mt-2"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>

            <button className="btn btn-success mt-2">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
