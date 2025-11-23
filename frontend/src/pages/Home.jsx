import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Soluciones profesionales con drones</h1>
          <p>
            Especialistas en LiDAR, Fotogrametría, Cartografía y Capacitación 
            para proyectos industriales, ambientales y topográficos.
          </p>

          <div className="hero-buttons">
            <a href="/contacto" className="btn-primary">Contáctanos</a>
            <a href="/servicios/lidar" className="btn-secondary">Ver Servicios</a>
          </div>
        </div>

        <img 
          src="/images/drones/drone1.png" 
          alt="Drone"
          className="hero-image"
        />
      </section>

      {/* Servicios */}
      <section className="services">
        <h2>Nuestros Servicios</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>LiDAR</h3>
            <p>
              Captura de nubes de puntos de alta precisión para modelado 3D y análisis topográfico.
            </p>
            <a href="/servicios/lidar">Más información →</a>
          </div>

          <div className="service-card">
            <h3>Fotogrametría</h3>
            <p>
              Mapeo aéreo detallado mediante imágenes de alta resolución.
            </p>
            <a href="/servicios/fotogrametria">Más información →</a>
          </div>

          <div className="service-card">
            <h3>Cartografía</h3>
            <p>
              Generación de mapas profesionales para proyectos ambientales y urbanos.
            </p>
            <a href="/servicios/cartografia">Más información →</a>
          </div>

          <div className="service-card">
            <h3>Capacitación</h3>
            <p>
              Entrenamiento para pilotos de drones y cursos técnicos especializados.
            </p>
            <a href="/servicios/capacitacion">Más información →</a>
          </div>
        </div>
      </section>

    </div>
  );
}
