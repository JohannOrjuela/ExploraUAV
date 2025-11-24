import { useState } from "react";
import "../../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">ExploraUAV</div>

        <ul className="nav-links">

          <li><a href="/">Inicio</a></li>
          <li><a href="/nosotros">Nosotros</a></li>

          {/* Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="dropdown-title">Servicios ▾</span>

            {open && (
              <ul className="dropdown-menu">
                <li><a href="/servicios/lidar">LiDAR</a></li>
                <li><a href="/servicios/fotogrametria">Fotogrametría</a></li>
                <li><a href="/servicios/cartografia">Cartografía</a></li>
                <li><a href="/servicios/capacitacion">Capacitación</a></li>
                <li><a href="/servicios/catastro">Catastro</a></li>
              </ul>
            )}
          </li>
          <li><a href="/proyectos">Proyectos</a></li>
            <li><a href="/equipos">Equipos</a></li>
          <li><a href="/contacto">Contacto</a></li>

        </ul>
      </div>
    </nav>
  );
}
