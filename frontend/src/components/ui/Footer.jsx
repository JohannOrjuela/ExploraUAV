import { Link } from "react-router-dom";
import "../../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <h3>ExploraUAV</h3>
          <p>Información geoespacial multipropósito.</p>
        </div>

        <div className="col">
          <h4>Servicios</h4>
          <ul>
            <li><Link to="/servicios/lidar">LiDAR</Link></li>
            <li><Link to="/servicios/fotogrametria">Fotogrametría</Link></li>
            <li><Link to="/servicios/cartografia">Cartografía</Link></li>
            <li><Link to="/servicios/capacitacion">Capacitación</Link></li>
            <li><Link to="/servicios/catastro">Catastro</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
          </ul>
        </div>

        <div className="col">
          <h4>Contacto</h4>
          <p>Correos:</p>
          <p>proyectos@explorauav.com.co</p>
          <p>gerencia@explorauav.com.co</p>
          <p>comercial@explorauav.com.co</p>

          <p>Cel: +57 300 367 8766</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ExploraUAV — Todos los derechos reservados
      </div>
    </footer>
  );
}
