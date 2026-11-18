import { Link } from "react-router-dom";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const horarios = [
    { dia: "Lunes a jueves", hora: "12:00 – 22:00" },
    { dia: "Viernes y sábado", hora: "12:00 – 23:00" },
    { dia: "Domingo", hora: "12:00 – 21:00" },
  ];

  return (
    <main className="home-mamamia">
      {/* PORTADA */}
      <section className="home-hero">
        <div className="home-hero-overlay">
          <div className="container home-hero-content">
            <span className="home-eyebrow">
              PIZZA MAMAMIA · SABOR Y TRADICIÓN
            </span>

            <h1>
              El auténtico sabor
              <br />
              de una pizza <span>artesanal</span>
            </h1>

            <p>
              Elaboramos cada pizza con dedicación, ingredientes seleccionados y
              el inconfundible toque de nuestro horno de piedra.
            </p>

            <div className="home-hero-buttons">
              <Link to="/Pizzas" className="home-btn-primary">
                Ver nuestras pizzas
              </Link>

              <Link to="/Cart" className="home-btn-secondary">
                Mi carrito
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTACIÓN */}
      <section className="home-about container">
        <div className="home-about-image">
          <img
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85"
            alt="Pizza artesanal recién preparada"
          />
          <div className="home-image-label">
            <strong>100%</strong>
            <span>Pasión por la pizza</span>
          </div>
        </div>

        <div className="home-about-text">
          <span className="home-section-tag">NUESTRA HISTORIA</span>
          <h2>En Mamamia, cada pizza tiene su propia historia</h2>

          <p>
            En Pizza Mamamia creemos que una buena pizza comienza mucho antes de
            llegar a la mesa. Por eso cuidamos cada etapa de su preparación,
            desde la selección de los ingredientes hasta el momento de servirla.
          </p>

          <p>
            Nuestro equipo trabaja con dedicación, experiencia y atención a los
            detalles para ofrecer una experiencia deliciosa, cercana y de
            calidad profesional.
          </p>

          <Link to="/Pizzas" className="home-text-link">
            Descubre nuestro menú →
          </Link>
        </div>
      </section>

      {/* PREPARACIÓN */}
      <section className="home-process">
        <div className="container">
          <div className="home-section-heading">
            <span className="home-section-tag">
              EL SECRETO DE NUESTRO SABOR
            </span>
            <h2>Preparadas con pasión, horneadas en piedra</h2>
            <p>
              Cada detalle importa para conseguir una pizza sabrosa, equilibrada
              y preparada en el momento.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <article className="home-process-card">
                <div className="home-process-icon">🌾</div>
                <h3>Ingredientes seleccionados</h3>
                <p>
                  Elegimos cuidadosamente nuestros ingredientes para conseguir
                  una combinación de sabores y calidad en cada preparación.
                </p>
              </article>
            </div>

            <div className="col-12 col-md-4">
              <article className="home-process-card">
                <div className="home-process-icon">🔥</div>
                <h3>Horno de piedra</h3>
                <p>
                  Nuestras pizzas se preparan en horno de piedra, buscando una
                  cocción adecuada, una base dorada y una textura irresistible.
                </p>
              </article>
            </div>

            <div className="col-12 col-md-4">
              <article className="home-process-card">
                <div className="home-process-icon">👨‍🍳</div>
                <h3>Trabajo hecho con dedicación</h3>
                <p>
                  Nuestro equipo pone atención y compromiso en cada pizza,
                  cuidando su preparación y presentación antes de entregarla.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIA MAMAMIA */}
      <section className="home-difference container">
        <div>
          <span className="home-section-tag">¿POR QUÉ ELEGIRNOS?</span>
          <h2>Mucho más que una pizza</h2>
          <p>
            Queremos que cada visita sea una buena experiencia. Nos esforzamos
            por entregar productos de calidad, una atención cordial y el sabor
            que hace especial compartir una pizza.
          </p>
        </div>

        <div className="home-values">
          <div className="home-value">
            <span>✓</span>
            <div>
              <h3>Calidad en cada preparación</h3>
              <p>Cuidamos los ingredientes y cada etapa del proceso.</p>
            </div>
          </div>

          <div className="home-value">
            <span>✓</span>
            <div>
              <h3>Atención cercana</h3>
              <p>
                Nos importa que nuestros clientes se sientan bien atendidos.
              </p>
            </div>
          </div>

          <div className="home-value">
            <span>✓</span>
            <div>
              <h3>Compromiso con nuestro trabajo</h3>
              <p>Cada integrante del equipo aporta dedicación y esfuerzo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN DEL LOCAL */}
      <section className="home-info">
        <div className="container">
          <div className="home-section-heading">
            <span className="home-section-tag">VEN A CONOCERNOS</span>
            <h2>Estamos esperándote</h2>
            <p>
              Revisa nuestra información y ven a disfrutar de una rica pizza.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6">
              <article className="home-info-card">
                <div className="home-info-icon">📍</div>
                <h3>Dirección</h3>
                <p>Agregar dirección del local</p>
                <span>Ciudad, Región de Chile</span>
              </article>
            </div>

            <div className="col-12 col-md-6">
              <article className="home-info-card">
                <div className="home-info-icon">🕒</div>
                <h3>Horarios de atención</h3>

                <div className="home-hours">
                  {horarios.map((item) => (
                    <div className="home-hour-row" key={item.dia}>
                      <span>{item.dia}</span>
                      <strong>{item.hora}</strong>
                    </div>
                  ))}
                </div>
                <small>
                  Horarios referenciales: confirmar antes de publicar.
                </small>
              </article>
            </div>

            <div className="col-12 col-md-6">
              <article className="home-info-card">
                <div className="home-info-icon">📞</div>
                <h3>Contacto</h3>
                <p>Teléfono: +56 9 XXXX XXXX</p>
                <span>Correo: contacto@pizzamamamia.cl</span>
              </article>
            </div>

            <div className="col-12 col-md-6">
              <article className="home-info-card">
                <div className="home-info-icon">🍕</div>
                <h3>Haz tu pedido</h3>
                <p>Conoce nuestras variedades y encuentra tu favorita.</p>
                <Link to="/Pizzas" className="home-text-link">
                  Explorar pizzas →
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADO FINAL */}
      <section className="home-final">
        <div className="container">
          <span>EL SABOR QUE MERECES</span>
          <h2>¡Una buena pizza siempre es una buena idea!</h2>
          <p>Elige tu favorita y disfruta el sabor de Pizza Mamamia.</p>
          <button
            className="home-btn-primary"
            onClick={() => navigate("/Login")}
          >
            Ver menú y pedir
          </button>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="home-footer">
        <div className="container">
          <div className="home-footer-brand">
            🍕 Pizza <strong>Mamamia</strong>
          </div>
          <p>Pasión, dedicación y sabor en cada pizza.</p>
          <small>
            © {new Date().getFullYear()} Pizza Mamamia. Todos los derechos
            reservados.
          </small>
        </div>
      </footer>
    </main>
  );
}

export default Home;
