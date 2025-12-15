import "../../styles/servicios.css";
import droneBg from "/images/servicios/cartografia/Cartografia.jpg";

export default function Cartografia() {
  return (
    <div className="servicio-page">
      <header className="servicio-hero" style={{backgroundImage: `url(${droneBg})`,}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Cartografía Basica y Temática</h1>
          <p>Mapas listos para integración en proyectos de ingeniería, planeación y gestión del territorio.</p>
        </div>
      </header>

      <main className="servicio-body">
        <section className="bloque">
          <div className="bloque-img">
            <img src="/images/servicios/cartografia/Mapa.jpg" alt="Cartografía" />
          </div>
          <div className="bloque-text">
            <h2>Qué entregamos</h2>
            <p>
              Cartografia basica, topográfica, temática y productos SIG listos para análisis y toma de decisiones.
            </p>
          </div>
        </section>

        <section className="bloque reverse">
          <div className="bloque-img">
            <img src="/images/servicios/cartografia/Gis.jpg" alt="GIS" />
          </div>
          <div className="bloque-text">
            <h2>Integración GIS</h2>
            <p>
              Trabajamos con estándares abiertos y formatos compatibles con las principales plataformas SIG.
            </p>
            <ul>
              <li>Shapefile, GeoJSON, GeoTIFF</li>
              <li>Compatibilidad con QGIS y ArcGIS</li>
              <li>Metadatos y documentación técnica</li>
            </ul>
          </div>
        </section>

        <section className="bloque">
          <div className="bloque-img">
            <img src="/images/servicios/cartografia/Riesgos.png" alt="Mapas" />
          </div>
          <div className="bloque-text">
            <h2>Usos</h2>
            <p>
              Catastro, cartografia basica/tematica, monitoreo de obras,
              agricultura de precisión, levantamientos topográficos,
              modelamientos hidraulicos, ordenamiento territorial, entre otros.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
