export default function Modal({ project, onClose, isJapanese, demo }) {
  if (!project) return null;

  const lang = isJapanese ? "ja" : "en";
  const sections = [
    { label: "Where / Type", text: project.where?.[lang] },
    { label: "Technology", text: project.technology },
    { label: "Problem", text: project.problem?.[lang] },
    { label: "Solutions", text: project.solutions?.[lang] },
    { label: "Results", text: project.results?.[lang] },
  ];

  const images = project.images
    ? project.images.map((src, index) => ({
        src,
        alt: Array.isArray(project.alt) ? project.alt[index] : project.alt || project.title,
      }))
    : [{ src: project.thumbnail, alt: project.thumbnailAlt || project.title }];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-6"
      onClick={onClose}
    >
      <div
        className="modal relative w-full max-w-5xl h-[90dvh] sm:h-[85vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-colors shadow-sm bg-zinc-100 hover:bg-zinc-200 text-zinc-800"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Mobile: the whole card scrolls. Desktop: each column scrolls on its own. */}
        <div className="h-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r md:overflow-y-auto">
            <div className="space-y-6">
              <h2 className="modal-title">{project.title}</h2>

              <div className="space-y-4 text-left">
                {sections.map(
                  ({ label, text }) =>
                    text && (
                      <div key={label} className="pb-3">
                        <span className="small-text block uppercase mb-1">{label}</span>
                        <p>{text}</p>
                      </div>
                    )
                )}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 flex flex-wrap gap-3 items-center">
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-full transition-colors underline"
                >
                  View Demo in YouTube
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full transition-colors shadow-sm"
                >
                  Visit Project &rarr;
                </a>
              )}
            </div>
          </div>

          <div className="md:w-1/2 p-4 sm:p-6 space-y-6 md:overflow-y-auto">
            {images.map(({ src, alt }) => (
              <div key={src} className="rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm">
                <img src={src} alt={alt} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
