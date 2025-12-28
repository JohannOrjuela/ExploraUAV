import "../../styles/servicios.css";
import droneBg from "/images/servicios/LiDAR/LiDAR.png";

export default function LiDAR() {
  return (
    <div className="servicio-page">
      <header className="servicio-hero" style={{backgroundImage: `url(${droneBg})`,}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>LiDAR — Levantamientos de Alta Precisión</h1>
          <p>Generamos nubes de puntos densas y productos derivados para cartografía y topografía.</p>
        </div>
      </header>

      <main className="servicio-body">
        <section className="bloque">
          <div className="bloque-img">
          <video
                className="bloque-video"
                src="/videos/LevantamientoLiDAR.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

          </div>
          <div className="bloque-text">
            <h2>¿Qué hacemos?</h2>
            <p>
              Realizamos levantamientos LiDAR con sensores de grado profesional montados en UAVs para generar
              nubes de puntos clasificadas, modelos digitales del terreno (MDT) y superficie (MDS).
            </p>

          </div>
        </section>

        <section className="bloque reverse">
          <div className="bloque-img">
            <img src="/images/servicios/LiDAR/Las.png" alt="Procesamiento LiDAR" />
          </div>
          <div className="bloque-text">
            <h2>Procesamiento y Entregables</h2>
            <p>
              Clasificamos y entregamos nubes en formatos estándar (LAS/LAZ), modelos raster y reportes técnicos.
            </p>
          </div>
        </section>

        <section className="bloque">
          <div className="bloque-img">
            <img src="/images/servicios/LiDAR/Aplicaciones.jpg" alt="Aplicaciones LiDAR" />
          </div>
          <div className="bloque-text">
            <h2>Aplicaciones</h2>
            <p>
              Ideal para obras civiles, gestión de riesgo, cartografía básica,
               adecuación de tierras, modelamiento hidráulico, estudios geotécnicos,
               planificación de infraestructuras y análisis forestal.
            </p>

          </div>
        </section>
      </main>
    </div>
  );
}
