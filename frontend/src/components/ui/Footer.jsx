import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <h3>ExploraUAV</h3>
          <p>Soluciones profesionales con drones para tu proyecto.</p>
        </div>

        <div className="col">
          <h4>Servicios</h4>
          <ul>
            <li>LiDAR</li>
            <li>Fotogrametría</li>
            <li>Cartografía</li>
            <li>Capacitación</li>
            <li>Catastro</li>
            <li>Proyectos</li>
            <li>Equipos</li>
          </ul>
        </div>

        <div className="col">
          <h4>Contacto</h4>
          <p>Email: info@explorauav.com</p>
          <p>Tel: +57 300 000 0000</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ExploraUAV — Todos los derechos reservados
      </div>
    </footer>
  );
}
