import ModuleIcon from "./ModuleIcon";

function updateButtonGlow(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--button-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--button-y", `${event.clientY - rect.top}px`);
}

export default function ModuleNavigation({ modules, activeId, onSelect }) {
  function handleKeyDown(event, index) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowDown") nextIndex = (index + 1) % modules.length;
    if (event.key === "ArrowUp") nextIndex = (index - 1 + modules.length) % modules.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = modules.length - 1;

    event.currentTarget.parentElement.children[nextIndex]?.focus();
  }

  return (
    <nav className="jp-module-nav" aria-label="Módulos del portafolio">
      {modules.map((module, index) => (
        <button
          key={module.id}
          type="button"
          className={`jp-module-button ${activeId === module.id ? "is-active" : ""}`}
          style={{ "--module-accent": module.accent }}
          aria-pressed={activeId === module.id}
          onClick={() => onSelect(module.id)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          onPointerMove={updateButtonGlow}
        >
          <span className="jp-module-number">[{module.number}]</span>
          <span className="jp-module-icon">
            <ModuleIcon name={module.id} />
          </span>
          <span className="jp-module-name">{module.shortName}</span>
          <span className="jp-module-state">
            {activeId === module.id ? "OPEN" : "STANDBY"}
          </span>
          <span className="jp-module-arrow" aria-hidden="true">
            ↗
          </span>
        </button>
      ))}
    </nav>
  );
}
