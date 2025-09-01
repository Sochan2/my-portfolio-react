const projects = [
  {
    src:"/img/boom-radio-thumbnail.png",
    alt:"Boom Radio project top image",
    url:"https://boom-radio.vercel.app/", 
    projectTitle:"Boom Radio",
    projectDescription: {
      en: "Website prototype for TAFE radio students. Future plan: integrate podcasts with WordPress",
      ja: "このプロジェクトは、ラジオやポッドキャストを学ぶTAFEの学生向けのWebサイトです。現在はプロトタイプを作成済みで、今後WordPressを用いてポッドキャストを組み込む予定です。"
    }    
  },

  {
    src:"/img/mi-co-farm-thumbnail.png",
    alt:"Sightseeing Map project top imagee",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "This website is for a rice farmer who is producing in Nabari city in Japan. And, we are targetting for foreigners. ",
      ja: "このウェブサイトのクライアントは名張市でお米を農家をしています。ターゲットオーディエンスは海外の方を想定しています。HTML, CSS, JS, PWAの技術を使って作ったWebsiteです。"
    }
  },

  {
    src:"/img/bootstrap-thumbnail.png",
    alt:"george garden center website using bootstrap",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "This is a plant shop website and used sass and bootstrap technique ",
      ja: "このウェブサイトはお花ショップのウェブサイトで、BootstrapとSassのスキルを使って作っています"
    }
  },

  {
    src:"/img/onering-rental-thumbnail.png",
    alt:"george garden center website using bootstrap",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "This is a property rental web app  and used react.js and HTML skills. ",
      ja: "これは不動産のレンタルウェブアプリで、ReactとHTMLを使って作っています。"
    }
  }



]



export default function Project({ isJapanese }){
  return(
    <section className="projects grid grid-cols-1 sm:grid-cols-2 gap-9 mb-5">
    {projects.map((project, index) => (
      <article 
        key={index} 
        className="relative group overflow-hidden rounded-lg"
      >
        {/* サムネイル画像 */}
        <img
          src={project.src}
          alt={project.alt}
          className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
        />
  
        {/* オーバーレイ（ホバーで暗くなる＋テキスト表示） */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center p-4">
          <p className="text-white text-center opacity-0 group-hover:opacity-100 transition duration-300">
            {project.projectDescription[isJapanese ? "ja" : "en"]}
          </p>
        </div>
      </article>
    ))}
  </section>
);
}

