import "../styles/contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-container">

      {/* ------- HERO DE CONTACTO ------- */}
      <header className="contacto-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contáctenos</h1>
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
            <img src="src/assets/images/icon-whatsapp.svg" alt="WhatsApp" />
            <h3>WhatsApp</h3>
            <p>+57 300 367 8766</p>
          </a>

          <div className="contact-card">
            <img src="src/assets/images/icon-phone.svg" alt="Teléfono" />
            <h3>Teléfono</h3>
            <p>+57 601 555 8899</p>
          </div>

          <div className="contact-card">
            <img src="src/assets/images/icon-mail.svg" alt="Correo" />
            <h3>Email</h3>
            <p>contacto@explorauav.com</p>
          </div>
        </div>
      </section>

      {/* ------- FORMULARIO ------- */}
      <section className="form-section">
        <h2>Envíanos un Mensaje</h2>
        <p>Nos pondremos en contacto lo más pronto posible.</p>

        <form className="contact-form">

          <div className="input-group">
            <label>Nombre Completo</label>
            <input type="text" placeholder="Tu nombre" />
          </div>

          <div className="form-2-col">
            <div className="input-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="tucorreo@example.com" />
            </div>

            <div className="input-group">
              <label>Teléfono</label>
              <input type="text" placeholder="+57 ___ ___ ____" />
            </div>
          </div>

          <div className="input-group">
            <label>Servicio de Interés</label>
            <select>
              <option value="">Seleccionar...</option>
              <option value="lidar">LiDAR</option>
              <option value="fotogrametria">Fotogrametría</option>
              <option value="cartografia">Cartografía</option>
              <option value="capacitación">Capacitación</option>
              <option value="catastro">Catastro</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div className="input-group">
            <label>Mensaje</label>
            <textarea rows="5" placeholder="Cuéntanos sobre tu proyecto"></textarea>
          </div>

          <button className="btn-enviar">Enviar Mensaje</button>
        </form>
      </section>

    </div>
  );
}
