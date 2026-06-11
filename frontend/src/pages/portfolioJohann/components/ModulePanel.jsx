import { useState } from "react";
import ModuleIcon from "./ModuleIcon";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

export default function ModulePanel({ module, onClose }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="jp-module-panel"
      style={{ "--active-accent": module.accent }}
      aria-labelledby={`module-${module.id}-title`}
    >
      <div className="jp-panel-scan" aria-hidden="true" />

      <header className="jp-panel-header">
        <div className="jp-panel-identity">
          <span className="jp-panel-icon">
            <ModuleIcon name={module.id} />
          </span>
          <div>
            <span className="jp-kicker">
              MODULE {module.number} / {module.code}
            </span>
            <h2 id={`module-${module.id}-title`}>{module.title}</h2>
          </div>
        </div>

        <button type="button" className="jp-close-button" onClick={onClose}>
          <span>CLOSE</span>
          <span aria-hidden="true">×</span>
        </button>
      </header>

      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <>
          <p className="jp-panel-description">{module.description}</p>

          <div className="jp-capability-row" aria-label="Capacidades">
            {module.capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>

          {module.projects ? (
            <div className="jp-projects" aria-label="Proyectos de software">
              {module.projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="jp-operations">
              {module.operations.map((operation, index) => (
                <article key={operation.title} className="jp-operation-card">
                  <div className="jp-operation-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{operation.label}</span>
                  </div>
                  <h3>{operation.title}</h3>
                  <p>{operation.detail}</p>
                  <div className="jp-card-signal" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </article>
              ))}
            </div>
          )}
        </>
      )}

      {!selectedProject && (
        <footer className="jp-panel-footer">
          <span>ACTIVE TOOLCHAIN</span>
          <div>
            {module.telemetry.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </footer>
      )}
    </section>
  );
}
