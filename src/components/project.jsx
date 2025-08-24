const projects = [
  {
    src:"./img/boom_radio.png",
    alt:"Boom Radio project top image",
    url:"https://boom-radio.vercel.app/", 
    projectTitle:"Boom Radio",
    projectDescription: {
      en: "This project is making a website for TAFE students who are studying radio, such as Podcasts. We made a prototype so far. We will start making and incorporating Podcasts with WordPress.",
      ja: "このプロジェクトは、ラジオやポッドキャストを学ぶTAFEの学生向けのWebサイトです。現在はプロトタイプを作成済みで、今後WordPressを用いてポッドキャストを組み込む予定です。"
    }    
  },

  {
    src:"./img/japan_rice_homepage.jpg",
    alt:"Sightseeing Map project top imagee",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "This website is for a rice farmer who is producing in Nabari city in Japan. And, we are targetting for foreigners. ",
      ja: "このウェブサイトのクライアントは名張市でお米を農家をしています。ターゲットオーディエンスは海外の方を想定しています。HTML, CSS, JS, PWAの技術を使って作ったWebsiteです。"
    }
  }
]



export default function Project({ isJapanese }){
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
          <p>{project.projectDescription[isJapanese ? "ja" : "en"]}</p>
          </div>
      </article>
      );
})}
  </section>
);
}

