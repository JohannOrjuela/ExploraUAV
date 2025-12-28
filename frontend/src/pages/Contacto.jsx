import "../styles/contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-container">

      {/* ------- HERO DE CONTACTO ------- */}
      <header className="contacto-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contáctanos</h1>
          <p>
            Estamos listos para ayudarte en tu próximo proyecto aéreo.
          </p>
        </div>
      </header>

      {/* ------- SECCIÓN DE CONTACTO RÁPIDO ------- */}
      <section className="contacto-rapido">
        <h2>Comunicación Directa</h2>
        <p>Escríbenos por los siguientes medios</p>

        <div className="contacto-grid">

          <a
            href="https://wa.me/573003678766"
            target="_blank"
            className="contact-card"
          >
            <img src="/images/icons/wasap.png" alt="WhatsApp" />
            <h3>WhatsApp</h3>
            <p>+57 300 367 8766</p>
          </a>

          <div className="contact-card">
            <img src="/images/icons/telefono.png" alt="Teléfono" />
            <h3>Teléfono</h3>
            <p>+57 300 781 5853</p>
          </div>

          <div className="contact-card">
            <img src="/images/icons/correo.png" alt="Correo" />
            <h3>Email</h3>
            <p>proyectos@explorauav.com.co</p>
            <p>gerencia@explorauav.com.co</p>
            <p>comercial@explorauav.com.co</p>
          </div>
        </div>
      </section>
    </div>
  );
}
