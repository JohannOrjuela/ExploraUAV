import ProjectVisual from "./ProjectVisual";

export default function ProjectDetail({ project, onBack }) {
  return (
    <article className="jp-project-detail">
      <header className="jp-project-detail-header">
        <button type="button" className="jp-project-back" onClick={onBack}>
          <span aria-hidden="true">←</span>
          PROJECT INDEX
        </button>

        <div className="jp-project-badges">
          <span>{project.context}</span>
          <strong className={project.repository ? "" : "is-private"}>
            {project.status}
          </strong>
        </div>
      </header>

      <div className="jp-project-detail-grid">
        <ProjectVisual project={project} />

        <div className="jp-project-detail-copy">
          <span className="jp-kicker">{project.label}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>

          <div className="jp-project-highlights">
            <span>PROJECT CAPABILITIES</span>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="jp-project-detail-footer">
        <div className="jp-project-stack" aria-label="Tecnologías">
          {project.stack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {project.repository ? (
          <a href={project.repository} target="_blank" rel="noreferrer">
            VIEW SOURCE
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="jp-private-repository">
            {project.accessLabel || "PRIVATE REPOSITORY"}
          </span>
        )}
      </footer>
    </article>
  );
}
