import "../styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">

      <section className="hero">
        <div className="hero-bg-overlay"></div>

        <div className="hero-content fade-stagger">
            <h1 className="title floating">ExploraUAV</h1>
            <p className="subtitle">
            Tecnología aérea para mapear, medir y transformar tu entorno.
            </p>

            <Link to="/contacto">
            <button className="btn-primary">Cotizar Proyecto</button>
            </Link>
        </div>
        </section>


      {/* SERVICIOS */}
      <section className="services-preview scroll-fade">
        <h2 className="section-title">Nuestros Servicios</h2>

        <div className="services-grid">

          <div className="service-card card-3d">
            <h3>LiDAR</h3>
            <p>Mapeo láser de alta precisión para topografía avanzada.</p>
            <Link to="/servicios/lidar" className="card-link">Ver más →</Link>
          </div>

          <div className="service-card card-3d">
            <h3>Fotogrametría</h3>
            <p>Modelos 2D y 3D a partir de imágenes captadas con drones.</p>
            <Link to="/servicios/fotogrametria" className="card-link">Ver más →</Link>
          </div>

          <div className="service-card card-3d">
            <h3>Cartografía</h3>
            <p>Mapas profesionales para ingeniería, minería y obras civiles.</p>
            <Link to="/servicios/cartografia" className="card-link">Ver más →</Link>
          </div>

          <div className="service-card card-3d">
            <h3>Capacitación</h3>
            <p>Formación profesional en operación de drones y análisis de datos.</p>
            <Link to="/servicios/capacitacion" className="card-link">Ver más →</Link>
          </div>

          <div className="service-card card-3d">
            <h3>Catastro</h3>
            <p>Levantamientos catastrales modernos con tecnología UAV.</p>
            <Link to="/servicios/catastro" className="card-link">Ver más →</Link>
          </div>
          <div className="service-card card-3d"> 
            <h3>Proyectos</h3>
            <p>Explora nuestros proyectos destacados y casos de éxito.</p>
            <Link to="/proyectos" className="card-link">Ver más →</Link>
          </div>
           <div className="service-card card-3d"> 
            <h3>Equipos</h3>
            <p>Conoce los drones y equipos que utilizamos para tus proyectos.</p>
            <Link to="/equipos" className="card-link">Ver más →</Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta scroll-fade">
        <h2>¿Listo para iniciar tu proyecto?</h2>
        <p>Obtén una asesoría sin costo con nuestros expertos.</p>
        <Link to="/contacto">
          <button className="btn-outline">Contactar Ahora</button>
        </Link>
      </section>

    </div>
  );
}
