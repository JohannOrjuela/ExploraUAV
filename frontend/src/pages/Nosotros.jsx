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
              la eficiencia y la seguridad en todas las misiones de captura de datos. Su experticia se
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
            <h2>Diego Arturo Preciado Sánchez</h2>
            <p>
              Profesional en Relaciones Económicas Internacionales | Tecnólogo en Desarrollo de Software |
               Técnico Profesional en Electromecánica | Piloto RPAS Certificado

              Profesional multidisciplinario con formación en relaciones económicas internacionales,
              desarrollo de software y electromecánica, complementada con estudios en ingeniería de sistemas.
              Cuenta con más de 15 años de experiencia en el área comercial y logística, integrando capacidades
               de gestión, coordinación operativa y análisis estratégico con habilidades técnicas aplicadas a
              entornos tecnológicos y geoespaciales.
              Certificado como Piloto de Operaciones RPAS desde 2017, con experiencia en apoyo operativo y
              logístico en proyectos de levantamientos cartográficos con drones, actividades de campo,
              coordinación y notificación a autoridades competentes, materialización y demarcación de
              puntos de control, ejecución de vuelos fotogramétricos y misiones LiDAR, garantizando
              cumplimiento normativo, precisión y eficiencia operativa.
              Posee competencias en planificación logística, organización de recursos, gestión con equipos
              de trabajo en campo y soporte técnico en operaciones UAV. Su formación le permite comprender
               e integrar soluciones digitales, procesamiento de datos y estructuración de sistemas de
               información aplicados a proyectos geoespaciales.
              Se caracteriza por su pensamiento analítico, capacidad de adaptación a entornos tecnológicos,
              orientación a resultados y compromiso con la calidad y seguridad en operaciones técnicas.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
