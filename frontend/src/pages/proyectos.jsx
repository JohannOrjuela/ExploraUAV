import "../styles/proyectos.css";

export default function Proyectos() {
  return (
    <div className="proyectos-container">

      {/* ----------- HEADER ----------- */}
      <section className="header-proyectos">
        <h1>Proyectos Realizados</h1>
        <p>
          En <strong>ExploraUAV</strong> hemos trabajado en proyectos de alto impacto
          para empresas, constructoras, entidades territoriales y estudios
          especializados. A continuación, algunos de nuestros proyectos destacados.
        </p>
      </section>

      {/* ----------- PROYECTO 1 ----------- */}
      <div className="proyecto-item">
        <img
          src="https://placehold.co/700x450/00a8d6/ffffff?text=Proyecto+1"
          alt="Proyecto LiDAR"
          className="proyecto-img"
        />
        <div className="proyecto-info">
          <h2>Mapeo LiDAR para Análisis Topográfico</h2>
          <p>
            Levantamiento LiDAR de 320 hectáreas para modelado digital del
            terreno (MDT), curvas de nivel y análisis de pendientes.
            Información clave para el diseño de vías y obras civiles.
          </p>
          <ul>
            <li>✔ Precisión centimétrica</li>
            <li>✔ Nube de puntos clasificada</li>
            <li>✔ MDT + MDS + Curvas cada 1 metro</li>
          </ul>
        </div>
      </div>

      {/* ----------- PROYECTO 2 ----------- */}
      <div className="proyecto-item reverse">
        <img
          src="https://placehold.co/700x450/0077aa/ffffff?text=Proyecto+2"
          alt="Fotogrametría"
          className="proyecto-img"
        />
        <div className="proyecto-info">
          <h2>Ortomosaicos para Catastro Multipropósito</h2>
          <p>
            Captura fotogramétrica de alta resolución para actualización
            catastral y análisis urbano-rural. Entrega certificada
            con geoetiquetado y precisión registrada.
          </p>
          <ul>
            <li>✔ Ortomosaico 2.3 cm/pixel</li>
            <li>✔ Procesamiento con estándares IGAC</li>
            <li>✔ Análisis parcelario con segmentación</li>
          </ul>
        </div>
      </div>

      {/* ----------- PROYECTO 3 ----------- */}
      <div className="proyecto-item">
        <img
          src="https://placehold.co/700x450/005f88/ffffff?text=Proyecto+3"
          alt="Inspección y análisis"
          className="proyecto-img"
        />
        <div className="proyecto-info">
          <h2>Inspecciones Aéreas e Infraestructura</h2>
          <p>
            Inspecciones de torres, techos industriales y líneas eléctricas
            utilizando drones con cámaras térmicas y zoom óptico.
          </p>
          <ul>
            <li>✔ Detección de anomalías</li>
            <li>✔ Imágenes térmicas + RGB</li>
            <li>✔ Reporte técnico automatizado</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
