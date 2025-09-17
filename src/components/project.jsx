import { Link } from "react-router-dom";

const projects = [
  {
    src:"/img/boom-radio-thumbnail.png",
    alt:"Boom Radio project top image",
    url:"https://boom-radio.vercel.app/", 
    projectTitle:"Boom Radio",
    projectDescription: {
      en: "Website prototype for TAFE radio students. This website is itegrated in Wordpress",
      ja: "このプロジェクトは、ラジオやポッドキャストを学ぶTAFEの学生向けのWebサイトです。現在はプロトタイプを作成済みで、さらにWordPressを用いてポッドキャストを組み込んだり、クライアント自身が自分でコンテンツをアップロードできる仕組みを整えました。"
    }    
  },

  {
    src:"/img/mi-co-farm-thumbnail.png",
    alt:"Sightseeing Map project top imagee",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "This website is for a rice farmer who is producing in Nabari city in Japan. And, our target audience is foreigners. I have not implemented payment system though, it is considered accessibility. This website is Used HTML, CSS, JS and PWA technology ",
      ja: "このウェブサイトのクライアントは名張市でお米農家をしています。ターゲットオーディエンスは海外の方を想定してお米を売るためのプラットフォームです。まだ決済機能は搭載していませんが、アクセシビリティーに配慮したHTML, CSS, JS, PWAの技術を使って作ったWebsiteです。"
    }
  },

  {
    src:"/img/bootstrap-thumbnail.png",
    alt:"george garden center website using bootstrap",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "This is a plant shop website and used sass and bootstrap technique. It is Expecting real client, George garden center and created. ",
      ja: "このウェブサイトはお花ショップのウェブサイトで、BootstrapとSassのスキルを使って作っています。ジョージガーデンセンターというフラワーショップを想定してクライアントが欲しいファンクションを組み込んでいるウェブサイトです。" } },

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
    <>
    
    
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

  <div className="button-section flex items-center justify-center m-9">
<button className="modal-visit-button">
  <Link to="/work" className="rounded-lg">View all works</Link>
</button>
</div>
  </>




);

}

