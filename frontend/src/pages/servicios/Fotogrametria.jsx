import "../../styles/servicios.css";
import droneBg from "/images/servicios/fotogrametria/ORTOFOTO.jpg";

export default function Fotogrametria() {
  return (
    <div className="servicio-page">
      <header className="servicio-hero" style={{backgroundImage: `url(${droneBg})`,}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Fotogrametría Aérea</h1>
          <p>Ortomosaicos y modelos 3D precisos a partir de imágenes captadas por UAV.</p>
        </div>
      </header>

      <main className="servicio-body">
        <section className="bloque">
          <div className="bloque-img">
             <video
                className="bloque-video"
                src="/videos/Modelos3D.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

          </div>
          <div className="bloque-text">
            <h2>Productos</h2>
            <p>
              Entregamos ortomosaicos georreferenciados, nubes de puntos derivadas y modelos texturizados.
            </p>
            <ul>
              <li>Orto 1–5 cm/pixel según sensor</li>
              <li>Modelos 3D texturizados</li>
              <li>Inspección y control de obra</li>
            </ul>
          </div>
        </section>

        <section className="bloque reverse">
          <div className="bloque-img">
            <img src="/images/servicios/fotogrametria/PlanificacionVuelo.png" alt="Volumetría" />
          </div>
          <div className="bloque-text">
            <h2>Flujos de trabajo</h2>
            <p>
              Procesos completos: planificación de vuelo, captura, calibración de GCP/RTK y postprocesamiento.
            </p>
            <ul>
              <li>Misión planificada y optimizada</li>
              <li>Control con GCP o RTK</li>
              <li>Entrega en formatos GIS y CAD</li>
            </ul>
          </div>
        </section>

        <section className="bloque">
          <div className="bloque-img">
            <img src="/images/servicios/fotogrametria/Ortomosaico.png" alt="Aplicaciones Fotogrametría" />
          </div>
          <div className="bloque-text">
            <h2>Usos comunes</h2>
            <p>
              Catastro, monitoreo de obras, agricultura de precisión, y levantamientos topográficos.
            </p>
            <ul>
              <li>Mapas temáticos</li>
              <li>Control de progreso de obra</li>
              <li>Análisis de cambio temporal</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
