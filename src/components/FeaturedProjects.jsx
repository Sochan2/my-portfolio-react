import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";

export default function FeaturedProjects({ isJapanese }){
  return(
    <>
    <section className="projects card-grid grid grid-cols-1 sm:grid-cols-2">
    {featuredProjects.map((project, index) => (
      <article 
        key={index} 
        className="flex flex-col bg-white dark:bg-zinc-900  dark:border-white/15 rounded-2xl overflow-hidden shadow-lg shadow-zinc-900/5 dark:shadow-black/40 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
      >
        <a href={project.url} className="relative overflow-hidden group block aspect-[4/3]" rel="noopener noreferrer">
        <img
          src={project.src}
          alt={project.alt}
          className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        </a>
        <div className="card-body flex flex-col flex-grow justify-between">
              <div>
                {/* タイトル */}
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.projectTitle}
                  </a>
                </h3>

                {/* 技術タグ */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((techItem, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="small-text px-2.5 py-0.5 font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* 説明文 */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.projectDescription[isJapanese ? "ja" : "en"]}
                </p>
              </div>

              {/* リンクボタン */}
              <div className="flex items-center">
                <a href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center project-btn"
                >
                  <span>Visit Project</span>
                  <div className="project-btn-icon">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
      </article>
    
    ))}

  </section>

  <div className="button-section flex items-center justify-center">
<button className="modal-visit-button">
  <Link to="/work" className="rounded-lg">View all works</Link>
</button>
</div>
  </>




);

}

