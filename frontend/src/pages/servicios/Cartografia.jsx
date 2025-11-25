import "../../styles/servicios.css";
import droneBg from "../../assets/images/drone-bg.jpg";

export default function Cartografia() {
  return (
    <div className="servicio-page">
      <header className="servicio-hero" style={{backgroundImage: `url(${droneBg})`,}}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Cartografía Técnica y Temática</h1>
          <p>Mapas listos para integración en proyectos de ingeniería, planeación y gestión del territorio.</p>
        </div>
      </header>

      <main className="servicio-body">
        <section className="bloque">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/00334d/ffffff?text=Cartografia" alt="Cartografía" />
          </div>
          <div className="bloque-text">
            <h2>Qué entregamos</h2>
            <p>
              Mapas topográficos, temáticos y productos SIG listos para análisis y toma de decisiones.
            </p>
            <ul>
              <li>• Mapas topográficos y temáticos</li>
              <li>• Capas SIG y shapefiles</li>
              <li>• Geoprocesamiento y análisis espacial</li>
            </ul>
          </div>
        </section>

        <section className="bloque reverse">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/006688/ffffff?text=GIS" alt="GIS" />
          </div>
          <div className="bloque-text">
            <h2>Integración GIS</h2>
            <p>
              Trabajamos con estándares abiertos y formatos compatibles con las principales plataformas SIG.
            </p>
            <ul>
              <li>• Shapefile, GeoJSON, GeoTIFF</li>
              <li>• Compatibilidad con QGIS y ArcGIS</li>
              <li>• Metadatos y documentación técnica</li>
            </ul>
          </div>
        </section>

        <section className="bloque">
          <div className="bloque-img">
            <img src="https://placehold.co/900x600/00a8d6/ffffff?text=Mapas" alt="Mapas" />
          </div>
          <div className="bloque-text">
            <h2>Usos</h2>
            <p>
              Planeación urbana, gestión del riesgo, ordenamiento territorial y apoyo a proyectos de infraestructura.
            </p>
            <ul>
              <li>• Ordenamiento territorial</li>
              <li>• Gestión de riesgo y vulnerabilidad</li>
              <li>• Soporte a diseño y construcción</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
