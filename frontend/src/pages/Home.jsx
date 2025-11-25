import "../styles/home.css";
import { Link } from "react-router-dom";
// --- ÍCONOS PARA LA BARRA DE CONFIANZA (Reemplazados por IMG) ---
// NOTA: Estas rutas apuntan a archivos locales que debes asegurar que existan.
const IconAccuracy = () => (<img src="src/assets/images/icon-accuracy.svg" alt="Icono de Precisión" className="trust-icon" />);
const IconSpeed = () => (<img src="src/assets/images/icon-speed.svg" alt="Icono de Velocidad" className="trust-icon" />);
const IconSafety = () => (<img src="src/assets/images/icon-safety.svg" alt="Icono de Seguridad" className="trust-icon" />);
const IconCoverage = () => (<img src="src/assets/images/icon-coverage.svg" alt="Icono de Cobertura" className="trust-icon" />);
// --- Componentes de Ícono de Servicio (Usando tus imágenes y placeholders) ---
const IconLidar = () => (<img src="uploaded:image_e36b92.png-23282d1f-7835-4ae4-8d03-304fc4d90641" alt="Ícono de Servicio LiDAR" className="service-logo" />);
const IconCamera = () => (<img src="uploaded:image_e36037.png-d2ea92df-3550-469b-9c2a-75c65900d9c7" alt="Ícono de Servicio Fotogrametría" className="service-logo" />);
const IconMap = () => (<img src="https://placehold.co/80x80/00a8d6/ffffff?text=Map" alt="Ícono de Servicio Cartografía" className="service-logo" />);
const IconBook = () => (<img src="https://placehold.co/80x80/00a8d6/ffffff?text=Cap" alt="Ícono de Servicio Capacitación" className="service-logo" />);
const IconHome = () => (<img src="https://placehold.co/80x80/00a8d6/ffffff?text=Cat" alt="Ícono de Servicio Catastro" className="service-logo" />);
const IconProjects = () => (<img src="https://placehold.co/80x80/00a8d6/ffffff?text=Proj" alt="Ícono de Proyectos" className="service-logo" />);
const IconDrone = () => (<img src="https://placehold.co/80x80/00a8d6/ffffff?text=Equip" alt="Ícono de Equipos" className="service-logo" />);
// --- Componente Principal ---
export default function Home() {
  return (
    <div className="home-container">
      {/* ----------------- HERO ----------------- */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="hero-content fade-stagger">
          <h1 className="title floating">ExploraUAV</h1>
          <p className="subtitle">
            Tecnología aérea para mapear, medir y transformar tu entorno.
          </p>
          <Link to="/contacto">
            <button className="btn-primary">Cotizar Proyecto</button>
          </Link>
        </div>
      </section>
      {/* ----------------- SECCIÓN: BARRA DE CONFIANZA ----------------- */}
      <section className="trust-bar scroll-fade">
        {/* Usando los componentes que ahora contienen etiquetas <img> */}
        <div className="trust-item">
          <IconAccuracy />
          <h4>Máxima Precisión</h4>
          <p>Datos georreferenciados con exactitud centimétrica.</p>
        </div>
        <div className="trust-item">
          <IconSpeed />
          <h4>Entrega Rápida</h4>
          <p>Reducción de tiempos de levantamiento hasta en un 70%.</p>
        </div>
        <div className="trust-item">
          <IconSafety />
          <h4>Seguridad Garantizada</h4>
          <p>Minimización de riesgos al evitar personal en zonas peligrosas.</p>
        </div>
        <div className="trust-item">
          <IconCoverage />
          <h4>Cobertura Extensa</h4>
          <p>Mapeo eficiente de grandes extensiones territoriales.</p>
        </div>
      </section>
      {/* ----------------- SECCIÓN: SERVICIOS ----------------- */}
      <section className="services-preview scroll-fade">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {/* Tarjeta LiDAR (con tu imagen) */}
          <div className="service-card card-3d">
            <IconLidar />
            <h3>LiDAR</h3>
            <p>Mapeo láser de alta precisión para topografía avanzada.</p>
            <Link to="/servicios/lidar" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Fotogrametría (con tu imagen) */}
          <div className="service-card card-3d">
            <IconCamera />
            <h3>Fotogrametría</h3>
            <p>Modelos 2D y 3D a partir de imágenes captadas con drones.</p>
            <Link to="/servicios/fotogrametria" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Cartografía (placeholder) */}
          <div className="service-card card-3d">
            <IconMap />
            <h3>Cartografía</h3>
            <p>Mapas profesionales para ingeniería, minería y obras civiles.</p>
            <Link to="/servicios/cartografia" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Capacitación (placeholder) */}
          <div className="service-card card-3d">
            <IconBook />
            <h3>Capacitación</h3>
            <p>Formación profesional en operación de drones y análisis de datos.</p>
            <Link to="/servicios/capacitacion" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Catastro (placeholder) */}
          <div className="service-card card-3d">
            <IconHome />
            <h3>Catastro</h3>
            <p>Levantamientos catastrales modernos con tecnología UAV.</p>
            <Link to="/servicios/catastro" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Proyectos (placeholder) */}
          <div className="service-card card-3d">
            <IconProjects />
            <h3>Proyectos</h3>
            <p>Explora nuestros proyectos destacados y casos de éxito.</p>
            <Link to="/proyectos" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Equipos (placeholder) */}
          <div className="service-card card-3d">
            <IconDrone />
            <h3>Equipos</h3>
            <p>Conoce los drones y equipos que utilizamos para tus proyectos.</p>
            <Link to="/equipos" className="card-link">Ver más →</Link>
          </div>
        </div>
      </section>
      {/* ----------------- SECCIÓN: PROCESO DE TRABAJO ----------------- */}
      <section className="how-it-works scroll-fade">
        <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
        <div className="process-grid">
          <div className="process-step scroll-fade">
            <div className="process-number">01</div>
            <h3>Planificación y Vuelo</h3>
            <p>Definimos la zona de interés y configuramos la misión con drones equipados con tecnología RTK/PPK.</p>
          </div>
          <div className="process-step scroll-fade">
            <div className="process-number">02</div>
            <h3>Procesamiento de Datos</h3>
            <p>Utilizamos software especializado para transformar las imágenes en modelos 2D, 3D y nubes de puntos de alta densidad.</p>
          </div>
          <div className="process-step scroll-fade">
            <div className="process-number">03</div>
            <h3>Entrega de Resultados</h3>
            <p>Te entregamos ortomosaicos, DTM/DSM, modelos 3D y reportes listos para integrar en tu software GIS.</p>
          </div>
        </div>
      </section>
      {/* ----------------- CTA FINAL ----------------- */}
      <section className="cta">
        <h2>¿Listo para iniciar tu proyecto?</h2>
        <p>Obtén una asesoría sin costo con nuestros expertos.</p>
        <Link to="/contacto">
          <button className="btn-outline">Contactar Ahora</button>
        </Link>
      </section>
    </div>
  );
}