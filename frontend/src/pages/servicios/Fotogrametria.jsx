import "../../styles/servicios.css";
import droneBg from "/images/servicios/fotogrametria/ORTOFOTO.jpg";

export default function Fotogrametria() {
  return (
    <div className="servicio-page">
      <header className="servicio-hero" style={{backgroundImage: `url(${droneBg})`,}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Fotogrametría Aérea</h1>
          <p>Generamos información geoespacial de alta precisión a partir de imágenes captadas por UAV.</p>
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
              Entregamos ortomosaicos georreferenciados, DTM/DSM, modelos 3D y cartografia.
            </p>
          </div>
        </section>

        <section className="bloque reverse">
          <div className="bloque-img">
            <img src="/images/servicios/fotogrametria/PlanificacionVuelo.png" alt="Volumetría" />
          </div>
          <div className="bloque-text">
            <h2>Flujo de trabajo</h2>
            <p>
               Ubicación y captura de GCP, planificación y ejecución de vuelo, chequeo de la integridad de la información,
               procesamiento de datos, control de calidad y entrega de productos.
            </p>
          </div>
        </section>

        <section className="bloque">
          <div className="bloque-img">
            <img src="/images/servicios/fotogrametria/Ortomosaico.png" alt="Aplicaciones Fotogrametría" />
          </div>
          <div className="bloque-text">
            <h2>Usos comunes</h2>
            <p>
              Catastro, cartografía básica/temática, monitoreo de obras,
              agricultura de precisión, levantamientos topográficos,
              modelamientos hidráulicos, ordenamiento territorial, entre otros.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
