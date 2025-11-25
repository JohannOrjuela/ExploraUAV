import "../../styles/servicios.css";
import droneBg from "../../assets/images/drone-bg.jpg";

export default function Capacitacion() {
  return (
    <div className="servicio-page">
      <header className="servicio-hero" style={{backgroundImage: `url(${droneBg})`,}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Capacitación Profesional</h1>
          <p>Cursos y talleres en operación de UAV, fotogrametría, LiDAR y SIG.</p>
        </div>
      </header>

      <main className="servicio-body">
        <section className="bloque">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/00b8e6/ffffff?text=Capacitacion" alt="Capacitación" />
          </div>
          <div className="bloque-text">
            <h2>Modalidades</h2>
            <p>
              Ofrecemos cursos teórico-prácticos, talleres in-company y formación a medida.
            </p>
            <ul>
              <li>• Fundamentos de operación UAV</li>
              <li>• Procesamiento fotogramétrico</li>
              <li>• Análisis SIG y LiDAR</li>
            </ul>
          </div>
        </section>

        <section className="bloque reverse">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/0077aa/ffffff?text=Talleres" alt="Talleres" />
          </div>
          <div className="bloque-text">
            <h2>Certificación y prácticas</h2>
            <p>
              Incluimos ejercicios prácticos con datos reales y certificación al finalizar según la modalidad.
            </p>
            <ul>
              <li>• Ejercicios con datasets reales</li>
              <li>• Soporte post-curso</li>
              <li>• Certificado de asistencia</li>
            </ul>
          </div>
        </section>

        <section className="bloque">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/005f88/ffffff?text=InCompany" alt="In-company" />
          </div>
          <div className="bloque-text">
            <h2>Dirigido a</h2>
            <p>
              Profesionales de la ingeniería, topografía, minería, consulta pública y técnicos de campo.
            </p>
            <ul>
              <li>• Empresas y consultoras</li>
              <li>• Entidades públicas</li>
              <li>• Equipos técnicos y operativos</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
