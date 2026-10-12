import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { works } from "../data/projects";

export default function Work() {
  const location = useLocation();
  const isJapanese = location.pathname.startsWith("/ja");
  const [selectProject, setSelectProject] = useState(null);

  return (
    <>
      <Header />
      <main className="section">
        <h1>Work</h1>

        <section className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {works.map((project) => {
            const currentWhere = project.where[isJapanese ? "ja" : "en"];
            return (
              <article key={project.title} className="flex flex-col gap-4">
                <button
                  type="button"
                  className="work_card"
                  onClick={() => setSelectProject(project)}
                >
                  <img src={project.thumbnail} alt={project.thumbnailAlt} />
                </button>
                <div className="flex justify-between items-center">
                  <h3>
                    <a href={project.link}>{project.title}</a>
                  </h3>
                  <span className="small-text">{currentWhere}</span>
                </div>
              </article>
            );
          })}
        </section>

        {selectProject && (
          <Modal
            project={selectProject}
            onClose={() => setSelectProject(null)}
            isJapanese={isJapanese}
            demo={selectProject.demo}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
