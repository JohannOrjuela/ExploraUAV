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
            src="https://placehold.co/500x500/00a8d6/ffffff?text=Ingeniero+1"
            className="equipo-img"
            alt="Ingeniero 1"
          />
          <div className="equipo-info">
            <h2>Ing. Juan Rodríguez</h2>
            <p>
              Especialista en sistemas LiDAR y procesamiento avanzado de nubes
              de puntos. Encargado de coordinar vuelos, calibración de sensores
              y análisis técnico de precisión centimétrica.
            </p>
          </div>
        </div>

        {/* ------------- INGENIERO 2 ------------- */}
        <div className="equipo-item reverse">
          <img
            src="https://placehold.co/500x500/0077aa/ffffff?text=Ingeniera+2"
            className="equipo-img"
            alt="Ingeniera 2"
          />
          <div className="equipo-info">
            <h2>Ing. Laura Martínez</h2>
            <p>
              Experta en fotogrametría digital y modelado 3D. Lidera los
              procesos de reconstrucción, ortomosaicos, curvas de nivel y
              cartografía aplicada.
            </p>
          </div>
        </div>

        {/* ------------- INGENIERO 3 ------------- */}
        <div className="equipo-item">
          <img
            src="https://placehold.co/500x500/005f88/ffffff?text=Ingeniero+3"
            className="equipo-img"
            alt="Ingeniero 3"
          />
          <div className="equipo-info">
            <h2>Ing. Carlos Pérez</h2>
            <p>
              Ingeniero en telecomunicaciones especializado en UAV y sistemas
              remotos. Responsable del mantenimiento de flotas, enlaces de
              comunicación y supervisión técnica de campo.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
