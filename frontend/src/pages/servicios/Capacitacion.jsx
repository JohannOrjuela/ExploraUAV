import "../../styles/servicios.css";
import droneBg from "/images/servicios/Capacitacion/Domo.jpg";

export default function Capacitacion() {
  return (
    <div className="servicio-page">
      <header className="servicio-hero" style={{backgroundImage: `url(${droneBg})`,}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Capacitación Profesional</h1>
          <p>Cursos y talleres en fotogrametría, LiDAR y cartografia.</p>
        </div>
      </header>

      <main className="servicio-body">
        <section className="bloque">
          <div className="bloque-img">
            <img src="/images/servicios/Capacitacion/Capacitacion.JPG" alt="Capacitación" />
          </div>
          <div className="bloque-text">
            <h2>Modalidades</h2>
            <p>
              Ofrecemos cursos teórico-prácticos, talleres in-company y formación a medida.
            </p>
          </div>
        </section>


        <section className="bloque reverse">
          <div className="bloque-img">
            <img src="/images/servicios/Capacitacion/Capacitacion2.JPG" alt="In-company" />
          </div>
          <div className="bloque-text">
            <h2>Dirigido a</h2>
            <p>
              Tecnicos y profesionales relacionados con areas de la geomatica.
            </p>
            <ul>
              <li>Empresas</li>
              <li>Entidades públicas</li>
              <li>Particulares</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
