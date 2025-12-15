import "../styles/nosotros.css";

export default function Nosotros() {
  return (
    <div className="nosotros-container">

      {/* ----------- SECCIÓN INTRO ----------- */}
      <section className="intro-section">
        <h1>¿Quiénes Somos?</h1>
        <p>
          En <strong>ExploraUAV</strong> somos un equipo de ingenieros apasionados por la
          tecnología aérea, la georreferenciación y la innovación en la captura
          de datos. Nuestro compromiso es ofrecer soluciones avanzadas en
          fotogrametría, LiDAR, cartografía y análisis espacial para impulsar
          el desarrollo territorial y la toma de decisiones.
        </p>
      </section>

      {/* ----------- SECCIÓN EQUIPO ----------- */}
      <section className="equipo-section">

        {/* ------------- INGENIERO 1 ------------- */}
        <div className="equipo-item">
          <img
            src="/images/nosotros/pilotoUAV.png"
            className="equipo-img"
            alt="Ingeniero 1"
          />
          <div className="equipo-info">
            <h2>Mauricio Orjuela Rojas</h2>
            <p>
              Líder Geoespacial | Gerente Explora UAV
              Profesional con una trayectoria de 18 años como Ingeniero Catastral y Geodesta,
              especializado en transformar la captura y el procesamiento de datos en inteligencia
              geoespacial accionable. Mauricio ha construido su carrera dominando áreas críticas como
              la Geodesia de alta precisión, la Fotogrametría y los SIG. Como Gerente de Explora UAV
              y Jefe de Pilotos, lidera la integración de la tecnología de aeronaves no tripuladas para
              optimizar la recopilación de datos, garantizando la calidad y la eficiencia en los proyectos
              cartográficos más complejos.
            </p>
          </div>
        </div>

        {/* ------------- INGENIERO 2 ------------- */}
        <div className="equipo-item reverse">
          <img
            src="/images/nosotros/ingeniera.png"
            className="equipo-img"
            alt="Ingeniera 2"
          />
          <div className="equipo-info">
            <h2>Nelcy Azucena Hernández</h2>
            <p>
              Ingeniera Catastral y Geodesta | Magíster en Geografía y Ordenamiento Territorial
              Profesional con una sólida trayectoria que fusiona la excelencia académica y la experiencia
              técnica avanzada. Como Magíster en Geografía con énfasis en Ordenamiento
              Territorial, Nelcy aporta una visión integral para el análisis geográfico. Posee 25 años de
              experiencia, especializándose en la producción de Cartografía Básica y Temática
              (análoga y digital), el manejo avanzado de Imágenes de Satélite, Fotografías Aéreas y
              Bases de Datos Geográficas.
              Además, es Piloto Profesional de Aeronaves No Tripuladas (UAV) con enfoque en
              Fotogrametría y se desempeña como Jefe de Seguridad Operacional (SMS), garantizando
              la eficiencia y la seguridad en todas las misiones de captura de datos. Su expertise se
              complementa con 5 años de experiencia docente en Fotogrametría y SIG en la UDCA.
            </p>
          </div>
        </div>

        {/* ------------- INGENIERO 3 ------------- */}
        <div className="equipo-item">
          <img
            src="/images/nosotros/ingeniero.png"
            className="equipo-img"
            alt="Ingeniero 3"
          />
          <div className="equipo-info">
            <h2>Diego Andrés Marlés Monje</h2>
            <p>
              Ingeniero Catastral y Geodesta | Especialista en Formulación y Evaluación de Proyectos

              Profesional con más de 15 años de experiencia en catastro, conservación catastral
              y manejo de información geoespacial. Especializado en estudios de títulos inmobiliarios,
              avalúo de inmuebles y sistemas de información geográfica (SIG). Ha liderado procesos
              catastrales y cartográficos así como proyectos territoriales en entidades como el
              Instituto Geográfico Agustín Codazzi y la Corporación Autónoma para el Desarrollo
              de la Amazonia a través de la Universidad de la Amazonia. Posee habilidades avanzadas en
              software geoespacial como ArcGIS, QGIS y AutoCAD, complementadas con una estudios de maestría
              en Geografía y Especialización en Pedagogía.. Destaca por su capacidad de análisis integral,
              liderazgo y compromiso en la gestión eficiente en torno a metas concretas.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
