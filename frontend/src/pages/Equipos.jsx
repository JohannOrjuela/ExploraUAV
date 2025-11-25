import "../styles/equipos.css";

export default function Equipos() {
  return (
    <div className="equipos-container">

      {/* ----------- HEADER GENERAL ----------- */}
      <section className="header-equipos">
        <h1>Nuestros Equipos</h1>
        <p>
          En <strong>ExploraUAV</strong> utilizamos tecnología de punta en drones,
          sensores, antenas GNSS y software especializado para garantizar datos
          precisos, confiables y listos para análisis profesional.
        </p>
      </section>

      {/* ════════════════════════════════════ */}
      {/*              HARDWARE               */}
      {/* ════════════════════════════════════ */}

      <h2 className="subtitulo-seccion">Equipos de Hardware</h2>

      {/* -------- DRONES -------- */}
      <div className="equipo-item">
        <img
          src="https://placehold.co/700x450/00a8d6/ffffff?text=Drone"
          className="equipo-img"
          alt="Drone Profesional"
        />
        <div className="equipo-info">
          <h3>Drones Profesionales para Fotogrametría y LiDAR</h3>
          <p>
            Utilizamos drones multirotor y VTOL diseñados para misiones de alta precisión,
            permitiendo capturas seguras y eficientes en terrenos complejos.
          </p>
          <ul>
            <li>✔ Autonomía extendida</li>
            <li>✔ Cámaras de alta resolución</li>
            <li>✔ Compatibilidad con sensores LiDAR</li>
          </ul>
        </div>
      </div>

      {/* -------- LIDAR -------- */}
      <div className="equipo-item reverse">
        <img
          src="https://placehold.co/700x450/005f88/ffffff?text=LiDAR"
          className="equipo-img"
          alt="Sensor LiDAR"
        />
        <div className="equipo-info">
          <h3>Sensores LiDAR de Alta Densidad</h3>
          <p>
            Sistemas LiDAR de grado profesional capaces de generar nubes de puntos densas
            con precisión centimétrica, ideales para topografía y modelado 3D.
          </p>
          <ul>
            <li>✔ Hasta 320.000 pts/seg</li>
            <li>✔ Alcance +120 m</li>
            <li>✔ Sensores IMU integrados</li>
          </ul>
        </div>
      </div>

      {/* -------- GNSS / GPS -------- */}
      <div className="equipo-item">
        <img
          src="https://placehold.co/700x450/0077aa/ffffff?text=GNSS+RTK"
          className="equipo-img"
          alt="GPS RTK"
        />
        <div className="equipo-info">
          <h3>Antenas GNSS RTK / PPK de Alta Precisión</h3>
          <p>
            Equipos GNSS para georreferenciación precisa, asegurando que cada
            dato capturado mantenga precisión registrada.
          </p>
          <ul>
            <li>✔ Correcciones RTK/PPK</li>
            <li>✔ Precisión centimétrica</li>
            <li>✔ Compatibles con estaciones base</li>
          </ul>
        </div>
      </div>

      {/* -------- Antenas & Estación base -------- */}
      <div className="equipo-item reverse">
        <img
          src="https://placehold.co/700x450/00334d/ffffff?text=Base+Station"
          className="equipo-img"
          alt="Estación base GNSS"
        />
        <div className="equipo-info">
          <h3>Antenas, Estaciones Base y Sistemas de Corrección</h3>
          <p>
            Infraestructura propia de estaciones base para correcciones en campo
            y soporte a misiones UAV.
          </p>
          <ul>
            <li>✔ Antenas profesionales</li>
            <li>✔ SOPORTE a levantamientos de precisión</li>
            <li>✔ Red de correcciones personalizable</li>
          </ul>
        </div>
      </div>

      {/* ════════════════════════════════════ */}
      {/*                 SOFTWARE             */}
      {/* ════════════════════════════════════ */}

      <h2 className="subtitulo-seccion">Software Especializado</h2>

      {/* -------- Fotogrametría -------- */}
      <div className="equipo-item">
        <img
          src="https://placehold.co/700x450/0099cc/ffffff?text=Software"
          className="equipo-img"
          alt="Software de Fotogrametría"
        />
        <div className="equipo-info">
          <h3>Software de Fotogrametría y Modelado 3D</h3>
          <p>
            Programas profesionales para generar ortomosaicos, modelos 3D y
            reconstrucciones precisas a partir de imágenes aéreas.
          </p>
          <ul>
            <li>✔ Reconstrucción 3D de alta calidad</li>
            <li>✔ Ortomosaicos milimétricos</li>
            <li>✔ Compatibilidad con GIS</li>
          </ul>
        </div>
      </div>

      {/* -------- LiDAR Processing -------- */}
      <div className="equipo-item reverse">
        <img
          src="https://placehold.co/700x450/006688/ffffff?text=LiDAR+Processing"
          className="equipo-img"
          alt="Procesamiento LiDAR"
        />
        <div className="equipo-info">
          <h3>Procesamiento de Nube de Puntos LiDAR</h3>
          <p>
            Software avanzado para clasificación, filtrado, suavizado y generación
            de modelos digitales del terreno y superficie.
          </p>
          <ul>
            <li>✔ Clasificación automática inteligente</li>
            <li>✔ Modelos MDT/MDS</li>
            <li>✔ Exportación a CAD y SIG</li>
          </ul>
        </div>
      </div>

      {/* -------- GIS -------- */}
      <div className="equipo-item">
        <img
          src="https://placehold.co/700x450/004466/ffffff?text=GIS"
          className="equipo-img"
          alt="Software GIS"
        />
        <div className="equipo-info">
          <h3>Plataformas GIS y Análisis Geo-Espacial</h3>
          <p>
            Herramientas GIS para análisis territorial avanzado, consultas
            espaciales, geoprocesamiento y cartografía profesional.
          </p>
          <ul>
            <li>✔ Análisis espacial avanzado</li>
            <li>✔ Integración con CAD / LiDAR / Fotogrametría</li>
            <li>✔ Producción de mapas técnicos</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
