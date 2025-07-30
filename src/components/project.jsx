const projects = [
  {
    src:"./img/boom_radio.png",
    alt:"Boom Radio project top image",
    url:"https://boom-radio.vercel.app/", 
    projectTitle:"Boom Radio",
    projectDescription : "This project is making a website for TAFE students who are studying radio, such as Podcasts. We made a prototype so far. We will start making and incorporating Podcasts with WordPress."
    
  },

  {
    src:"./img/sightseeing-map-project.png",
    alt:"Sightseeing Map project top imagee",
    url:"https://example.com/sightseeing-map/", 
    projectTitle:"Sightseeing Map",
    projectDescription : "This project focuses on creating an interactive sightseeing map for travelers, helping them explore new places with ease and convenience. They can find the hidden place based on the evaluation and very detailed review from users."
    
  }
]



export default function Project(){
  return(
  <section class="projects">
    {projects.map((project,index)=>{
      return(
      <article class="project">
        <a href={project.url}>
        <img src={project.src} alt={project.alt}/>
        </a>
        <div class="project-text">
          <h3>{project.projectTitle}</h3>
          <p>{project.projectDescription}</p>
          </div>
      </article>
      );
})}
  </section>
);
}

