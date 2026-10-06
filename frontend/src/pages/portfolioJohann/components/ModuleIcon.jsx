const iconPaths = {
  software: (
    <>
      <path d="M8 9 3 12l5 3" />
      <path d="m16 9 5 3-5 3" />
      <path d="m14 5-4 14" />
    </>
  ),
  automation: (
    <>
      <rect x="5" y="7" width="14" height="11" rx="3" />
      <path d="M9 11h.01M15 11h.01M9 15h6M12 7V4M9 4h6" />
    </>
  ),
  games: (
    <>
      <path d="M7.5 9h9a4.5 4.5 0 0 1 4.2 6.1l-1 2.6a2 2 0 0 1-3.2.8L14 16h-4l-2.5 2.5a2 2 0 0 1-3.2-.8l-1-2.6A4.5 4.5 0 0 1 7.5 9Z" />
      <path d="M8 12v4M6 14h4M16 13h.01M18 15h.01" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l10-2v13" />
      <ellipse cx="6" cy="18" rx="3" ry="2" />
      <ellipse cx="16" cy="16" rx="3" ry="2" />
    </>
  ),
  research: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
      <path d="M7.5 16h9M9 13h6" />
    </>
  ),
};

export default function ModuleIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}
