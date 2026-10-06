import { useState } from "react";

export default function ProjectVisual({ project, compact = false }) {
  const [failedImage, setFailedImage] = useState(null);
  const imageAvailable = failedImage !== project.image;

  return (
    <div
      className={`jp-project-visual ${compact ? "is-compact" : ""} ${
        imageAvailable ? "has-image" : "has-placeholder"
      }`}
    >
      {imageAvailable && (
        <img
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          onError={() => setFailedImage(project.image)}
        />
      )}

      {!imageAvailable && (
        <div className="jp-project-placeholder" aria-label="Imagen pendiente">
          <span>{project.label}</span>
          <strong>{project.title}</strong>
          <i>PREVIEW FILE PENDING</i>
        </div>
      )}

      <span className="jp-project-visual-code" aria-hidden="true">
        {project.id.toUpperCase()}
      </span>
    </div>
  );
}
