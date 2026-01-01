import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <Link to="/">
            <img src="/images/logo/Logo_UAV.png" alt="Logo UAV" />
          </Link>
        </div>

        <ul className="nav-links">

          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>

          {/* Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="dropdown-title">Servicios ▾</span>

            {open && (
              <ul className="dropdown-menu">
                <li><Link to="/servicios/lidar">LiDAR</Link></li>
                <li><Link to="/servicios/fotogrametria">Fotogrametría</Link></li>
                <li><Link to="/servicios/cartografia">Cartografía</Link></li>
                <li><Link to="/servicios/capacitacion">Capacitación</Link></li>
                <li><Link to="/servicios/catastro">Catastro</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>

        </ul>
      </div>
    </nav>
  );
}
