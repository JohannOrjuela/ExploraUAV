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
          src="/images/proyectos/Guajira.jpg"
          alt="Proyecto LiDAR"
          className="proyecto-img"
        />
        <div className="proyecto-info">
          <h2>Levantamiento LiDAR para infraestructura de acueducto</h2>
          <p>
            Levantamiento geoespacial multipropósito sobre 40 kilómetros
            de corredor en La Guajira, desarrollado como soporte técnico
            para el diseño y la construcción de infraestructura de acueducto.
            La integración de tecnología LiDAR y fotogrametría permitió convertir
            la captura aérea en información detallada sobre el terreno, la superficie
            y los elementos existentes a lo largo del corredor.
          </p>
          <ul>
            <li>Ubicación: La Guajira</li>
            <li>Extensión: 40 km </li>
          </ul>
        </div>
      </div>

      {/* ----------- PROYECTO 2 ----------- */}
      <div className="proyecto-item reverse">
        <img
          src="/images/proyectos/Parque Solar.jpg"
          alt="Fotogrametría"
          className="proyecto-img"
        />
        <div className="proyecto-info">
          <h2>Parque Puerta de Oro Solar</h2>
          <p>
          Levantamiento LiDAR y fotogramétrico realizado en el
          parque Puerta de Oro Solar para generar un modelo
          digital detallado del terreno. El procesamiento
          permite representar las variaciones del relieve
          y disponer de información topográfica útil para el
          análisis del área y la planificación técnica del
          proyecto energético.
          </p>
        </div>
      </div>
      {/* ----------- PROYECTO 3 ----------- */}
     <div className="proyecto-item">
        <video
          className="proyecto-img"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/Modelos3D.mp4" type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>

        <div className="proyecto-info">
          <h2>Cartografía y modelo 3D para análisis catastral</h2>

          <p>
            Levantamiento fotogramétrico desarrollado en San Vicente, Antioquia,
            para la generación de cartografía y un modelo tridimensional con fines
            catastrales. La reconstrucción digital permite observar edificaciones,
            cubiertas, vías, vegetación y demás elementos del entorno desde una
            perspectiva espacial continua.
          </p>

          <ul>
            <li>Ubicación: San Vicente, Antioquia</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
