import Header from "./Header";
import CardPizza from "./CardPizza";



function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <CardPizza
              nombre="Napolitana"
              precio={12990}
              imagen="https://amalitaliano.wordpress.com/wp-content/uploads/2017/03/pizza-napoletana.jpg"
              ingredientes="Tomate, mozzarella y albahaca"
            />
          </div>

          <div className="col-md-4">
            <CardPizza
              nombre="Pepperoni"
              precio={13990}
              imagen="https://cdn.procook.co.uk/9bfb7344-02a2-4448-819b-b43500b8065d/Product-image-square/Pepperoni-pizza-1.jpg?disable=upscale&fit=crop&width=650&height=558&dpr=2"
              ingredientes="Mozzarella y pepperoni"
            />
          </div>

          <div className="col-md-4">
            <CardPizza
              nombre="Vegetariana"
              precio={11990}
              imagen="https://images.squarespace-cdn.com/content/v1/68708bc6f0b0597f15c2a0ee/f3b3628d-5c4e-4597-b418-222f434e75ec/05+VEGETARIANA+VISTA+PICADA+CON+FONDO.jpg?format=1000w"
              ingredientes="Tomate, champiñones, aceitunas y pimentón"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Home;
