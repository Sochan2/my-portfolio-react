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
    src:"./img/sightseeing-map-project.png",
    alt:"Sightseeing Map project top imagee",
    url:"https://example.com/sightseeing-map/", 
    projectTitle:"Sightseeing Map",
    projectDescription: {
      en: "This project focuses on creating an interactive sightseeing map for travelers, helping them explore new places with ease and convenience. They can find the hidden place based on the evaluation and very detailed review from users.",
      ja: "旅行者向けにインタラクティブな観光地図を作成するプロジェクトです。評価やユーザーによる詳細なレビューを基に、隠れた観光スポットを簡単に見つけることができます。"
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

