import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ModuleNavigation from "./components/ModuleNavigation";
import ModulePanel from "./components/ModulePanel";
import SystemOverview from "./components/SystemOverview";
import { portfolioModules } from "./portfolioData";
import "../../styles/portfolio-johann.css";

export default function PortfolioJohann() {
  const [activeModuleId, setActiveModuleId] = useState(null);
  const portfolioRef = useRef(null);

  const activeModule = portfolioModules.find(
    (module) => module.id === activeModuleId,
  );

  useEffect(() => {
    const previousTitle = document.title;
    document.body.classList.add("portfolio-mode");
    document.title = "Johann Orjuela | Portfolio Terminal";

    return () => {
      document.body.classList.remove("portfolio-mode");
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    function closePanel(event) {
      if (event.key === "Escape") {
        setActiveModuleId(null);
      }
    }

    window.addEventListener("keydown", closePanel);
    return () => window.removeEventListener("keydown", closePanel);
  }, []);

  function trackPointer(event) {
    if (!portfolioRef.current) return;

    portfolioRef.current.style.setProperty("--pointer-x", `${event.clientX}px`);
    portfolioRef.current.style.setProperty("--pointer-y", `${event.clientY}px`);
  }

  return (
    <div
      ref={portfolioRef}
      className={`jp-portfolio ${activeModule ? "has-active-module" : ""}`}
      onPointerMove={trackPointer}
    >
      <div className="jp-boot-sequence" aria-hidden="true">
        <span>BOOTING JOHANN.OS</span>
        <span>LOADING PERSONAL ARCHIVE</span>
        <strong>PORTFOLIO TERMINAL READY</strong>
      </div>

      <div className="jp-grid-layer" aria-hidden="true" />
      <div className="jp-noise-layer" aria-hidden="true" />
      <div className="jp-pointer-light" aria-hidden="true" />

      <header className="jp-topbar">
        <Link to="/" className="jp-brand" aria-label="Volver a ExploraUAV">
          <span className="jp-brand-mark">JO</span>
          <span>
            JOHANN.OS
            <small>PERSONAL OPERATIONS SYSTEM</small>
          </span>
        </Link>

        <div className="jp-system-path" aria-label="Ruta del sistema">
          <span>ROOT</span>
          <i>/</i>
          <span>PORTFOLIO</span>
          <i>/</i>
          <strong>{activeModule?.code || "PORTFOLIO_HOME"}</strong>
        </div>

        <div className="jp-live-status">
          <span className="jp-live-dot" />
          <span>SYSTEM ONLINE</span>
          <time dateTime="2026">V.2026</time>
        </div>
      </header>

      <main className="jp-main">
        <section className="jp-command-column">
          <div className="jp-command-intro">
            <span className="jp-kicker">
              <i />
              INTERACTIVE PORTFOLIO / JOHANN ORJUELA
            </span>
            <h1>
              PORTFOLIO
              <span>TERMINAL</span>
            </h1>
            <p>
              Explora mi trabajo, intereses y proyectos a través de los sistemas
              que construyo: software, automatización, videojuegos, música e
              infraestructura.
            </p>
          </div>

          <div className="jp-terminal-label">
            <span>AVAILABLE MODULES</span>
            <span>05 NODES DETECTED</span>
          </div>

          <ModuleNavigation
            modules={portfolioModules}
            activeId={activeModuleId}
            onSelect={setActiveModuleId}
          />

          <div className="jp-command-prompt" aria-live="polite">
            <span>operator@johann:~$</span>
            <strong>
              {activeModule
                ? `open --module ${activeModule.id}`
                : "select module..."}
            </strong>
            <i />
          </div>
        </section>

        <div className="jp-display-column">
          {activeModule ? (
            <ModulePanel
              key={activeModule.id}
              module={activeModule}
              onClose={() => setActiveModuleId(null)}
            />
          ) : (
            <SystemOverview />
          )}
        </div>
      </main>

      <footer className="jp-statusbar">
        <div>
          <span>CPU</span>
          <i><b style={{ width: "38%" }} /></i>
          <strong>38%</strong>
        </div>
        <div>
          <span>CREATIVE CORE</span>
          <i><b style={{ width: "92%" }} /></i>
          <strong>92%</strong>
        </div>
        <div className="jp-status-message">
          <span>SECURE CONNECTION</span>
          <strong>COLOMBIA / UTC-5</strong>
        </div>
        <Link to="/">EXIT TO EXPLORAUAV ↗</Link>
      </footer>
    </div>
  );
}
