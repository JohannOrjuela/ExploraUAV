import "../styles/home.css";
import { Link } from "react-router-dom";
// --- ÍCONOS PARA LA BARRA DE CONFIANZA (Reemplazados por IMG) ---
// NOTA: Estas rutas apuntan a archivos locales que debes asegurar que existan.
const IconAccuracy = () => (<img src="/images/icons/precision_trust.png" alt="Icono de Precisión" className="trust-icon" />);
const IconSpeed = () => (<img src="/images/icons/velocidad_trust.png" alt="Icono de Velocidad" className="trust-icon" />);
const IconSafety = () => (<img src="/images/icons/seguridad_trust.png" alt="Icono de Seguridad" className="trust-icon" />);
const IconCoverage = () => (<img src="/images/icons/cobertura_trust.png" alt="Icono de Cobertura" className="trust-icon" />);
// --- Componentes de Ícono de Servicio (Usando tus imágenes y placeholders) ---
const IconLidar = () => (<img src="/images/icons/lidar_servicios.png" alt="Ícono de Servicio LiDAR" className="service-logo" />);
const IconCamera = () => (<img src="/images/icons/fotogrametria_servicios.png" alt="Ícono de Servicio Fotogrametría" className="service-logo" />);
const IconMap = () => (<img src="/images/icons/cartografia_servicios.png" alt="Ícono de Servicio Cartografía" className="service-logo" />);
const IconBook = () => (<img src="/images/icons/capacitacion_servicios.png" alt="Ícono de Servicio Capacitación" className="service-logo" />);
const IconHome = () => (<img src="/images/icons/catastro_servicios.jpg" alt="Ícono de Servicio Catastro" className="service-logo" />);
const IconProjects = () => (<img src="/images/icons/proyectos_servicios.png" alt="Ícono de Proyectos" className="service-logo" />);
const IconDrone = () => (<img src="/images/icons/equipos_servicios.png" alt="Ícono de Equipos" className="service-logo" />);
// --- Componente Principal ---
export default function Home() {
  return (
    <div className="home-container">
      {/* ----------------- HERO ----------------- */}
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/video_home.mp4" type="video/mp4" />
        </video>

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
          <IconSafety />
          <h4>Seguridad Garantizada</h4>
          <p>Contamos con pólizas de seguro de responsabilidad civil vigentes y
             aseguramos el estricto cumplimiento de toda la normativa aeronáutica
             actual para nuestras operaciones.</p>
        </div>

        <div className="trust-item">
          <IconAccuracy />
          <h4>Máxima Precisión</h4>
          <p>Cumplimos con los estándares de calidad propuestos por las entidades.</p>
        </div>
        <div className="trust-item">
          <IconSpeed />
          <h4>Equipo Altamente Cualificado</h4>
          <p>Contamos con profesionales que tienen formación académica especializada
            en generación de información geoespacial.
          </p>
        </div>

        <div className="trust-item">
          <IconCoverage />
          <h4>Cobertura Extensa</h4>
          <p>Contamos con la experiencia suficiente para el mapeo de grandes extenciones.</p>
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
            <p>Mapeo láser de alta precisión.</p>
            <Link to="/servicios/lidar" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Fotogrametría (con tu imagen) */}
          <div className="service-card card-3d">
            <IconCamera />
            <h3>Fotogrametría</h3>
            <p>Mapeo por métodos fotogramétricos de alta precisión.</p>
            <Link to="/servicios/fotogrametria" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Cartografía (placeholder) */}
          <div className="service-card card-3d">
            <IconMap />
            <h3>Cartografía</h3>
            <p>Generación de cartografía básica y temática bajo los estándares de calidad vigentes.</p>
            <Link to="/servicios/cartografia" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Capacitación (placeholder) */}
          <div className="service-card card-3d">
            <IconBook />
            <h3>Capacitación</h3>
            <p>Formación técnica en áreas de captura de datos, fotogrametria y lidar.</p>
            <Link to="/servicios/capacitacion" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Catastro (placeholder) */}
          <div className="service-card card-3d">
            <IconHome />
            <h3>Catastro</h3>
            <p>Apoyo mediante levantamientos fotogramétricos para la valoración,
              formación y actualización de catastros.</p>
            <Link to="/servicios/catastro" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Proyectos (placeholder) */}
          <div className="service-card card-3d">
            <IconProjects />
            <h3>Proyectos</h3>
            <p>Explora algunos de nuestros proyectos destacados y casos de éxito.</p>
            <Link to="/proyectos" className="card-link">Ver más →</Link>
          </div>
          {/* Tarjeta Equipos (placeholder) */}
        </div>
      </section>
      {/* ----------------- SECCIÓN: PROCESO DE TRABAJO ----------------- */}
      <section className="how-it-works scroll-fade">
        <h2 className="section-title">Nuestro Proceso de Trabajo</h2>

        <div className="process-grid">

        <div className="process-step scroll-fade">
          <div className="process-number">01</div>
          <h3>Análisis de Seguridad</h3>
          <p>Definimos la zona de interés, evaluamos riesgos operacionales
            y gestionamos permisos ante la autoridad aeronáutica.</p>
        </div>

        <div className="process-step scroll-fade">
          <div className="process-number">02</div>
          <h3>Actividades de Campo</h3>
          <p> Cordinación y aviso a autoridades, materialización y/o demarcación
              de puntos de control y vuelos fotogramétricos y/o LiDAR.</p>
        </div>

        <div className="process-step scroll-fade">
          <div className="process-number">03</div>
          <h3>Procesamiento de Datos</h3>
          <p>Procesamos datos GNSS, Imágenes y datos LiDAR.</p>
        </div>

        <div className="process-step scroll-fade">
          <div className="process-number">04</div>
          <h3>Aseguramiento de la Calidad</h3>
          <p>Aplicamos control de calidad (QA/QC) y verificamos la precisión de los resultados.</p>
        </div>

        <div className="process-step scroll-fade">
          <div className="process-number">05</div>
          <h3>Entrega de Resultados</h3>
          <p>Entregamos ortomosaicos, DTM/DSM, modelos 3D, cartografía.</p>
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