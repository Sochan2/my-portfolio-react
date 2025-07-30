export default function Modal({project,onClose}){
  if (!project) return null;
return(
  <div className="bg-opacity-60 fixed inset-0 z-50">
    <div className="bg-white p-6 max-w-3/4 relative">
      <button onClick={onClose}>X</button>
      <img
          src={project.image}
          alt={project.alt}
          className="rounded mb-4 w-[30%]"
        />
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm mb-1">
          <strong>Technology:</strong> {project.technology}
        </p>
        <p className="text-sm mb-1">
          <strong>Plan:</strong> {project.plan}
        </p>
        <p className="text-sm mb-4">
          <strong>Users:</strong> {project.users}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
  
}