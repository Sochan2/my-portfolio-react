export default function Modal({project,onClose,isJapanese}){
  if (!project) return null;
return(
  <div className="bg-opacity-60 fixed inset-0 z-50">
    <div className="modal bg-white m-13 relative grid grid-cols-2">
      <div className = "modal-image">
      <button onClick={onClose}>X</button>
      <img
          src={project.image}
          alt={project.alt}
          className="rounded mb-4 w-[30%]"
        />
      </div>

      <div className="modal-text">
      <h2 className="text-xl font-bold mb-4">{project.title}</h2>

       <p className="text-sm mb-1">
          <strong>Where:</strong> {project.where[isJapanese ? "ja" : "en"]}
        </p>
        <p className="text-sm mb-1">
          <strong>Technology:</strong> {project.technology}
        </p>
        <p className="text-sm mb-1">
        <strong>Plan:</strong> {project.plan[isJapanese ? "ja" : "en"]}
        </p>
        <p className="text-sm mb-4">
        <strong>Users:</strong> {project.users[isJapanese ? "ja" : "en"]}
        </p>
        <button className = "modal-visit-button">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Visit Project
        </a>
        </button>
    
      </div>
       
      </div>
    </div>
  );
  
}