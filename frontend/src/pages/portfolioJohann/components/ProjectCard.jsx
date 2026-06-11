import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <button
      type="button"
      className="jp-project-card"
      onClick={() => onSelect(project)}
      aria-label={`Abrir detalles de ${project.title}`}
    >
      <ProjectVisual project={project} compact />

      <div className="jp-project-card-body">
        <div className="jp-operation-topline">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.label}</span>
        </div>

        <div className="jp-project-card-heading">
          <h3>{project.title}</h3>
          <span aria-hidden="true">↗</span>
        </div>

        <p>{project.detail}</p>

        <footer>
          <span>{project.context}</span>
          <strong>
            {project.cardAction || (project.repository ? "VIEW CASE" : "OPEN CASE")}
          </strong>
        </footer>
      </div>
    </button>
  );
}
