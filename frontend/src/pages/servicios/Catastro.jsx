import "../../styles/servicios.css";
import droneBg from "../../assets/images/drone-bg.jpg";

export default function Catastro() {
  return (
    <div className="servicio-page">
      <header className="servicio-hero" style={{backgroundImage: `url(${droneBg})`,}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Catastro Multipropósito</h1>
          <p>Actualización y levantamientos para procesos catastrales y gestión predial.</p>
        </div>
      </header>

      <main className="servicio-body">
        <section className="bloque">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/004466/ffffff?text=Catastro" alt="Catastro" />
          </div>
          <div className="bloque-text">
            <h2>Servicios Catastrales</h2>
            <p>
              Levantamientos para actualización catastral, delimitación de predios y generación de planos.
            </p>
            <ul>
              <li>Levantamientos parcelarios</li>
              <li>Digitalización y georreferenciación</li>
              <li>Entregables compatibles con normativa</li>
            </ul>
          </div>
        </section>

        <section className="bloque reverse">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/006688/ffffff?text=Parcelario" alt="Parcelario" />
          </div>
          <div className="bloque-text">
            <h2>Integración de Datos</h2>
            <p>
              Unimos datos fotogramétricos, LiDAR y GNSS para ofrecer productos catastrales completos y auditables.
            </p>
            <ul>
              <li>• Control con GCP o RTK</li>
              <li>• Entregables GIS y CAD</li>
              <li>• Metadatos y trazabilidad</li>
            </ul>
          </div>
        </section>

        <section className="bloque">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/00a8d6/ffffff?text=Municipios" alt="Aplicaciones catastrales" />
          </div>
          <div className="bloque-text">
            <h2>Clientes típicos</h2>
            <p>
              Municipalidades, oficinas catastrales, empresas consultoras y proyectos de planificación territorial.
            </p>
            <ul>
              <li>• Alcaldías y municipios</li>
              <li>• Consultoras privadas</li>
              <li>• Proyectos de planificación</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
