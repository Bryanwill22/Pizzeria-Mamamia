import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./pizzas";

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
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
