import { Link } from "react-router-dom";

const projects = [
  {
    src:"/img/boom-radio-thumbnail.png",
    alt:"Boom Radio project top image",
    url:"https://boom-radio.vercel.app/", 
    projectTitle:"Boom Radio",
    projectDescription: {
      en: "Community radio platform for Perth-based students, built on WordPress with live streaming and Spotify integration that auto-pulls the latest podcast episodes.Designed wireframes in Figma, built custom post types for content management, and handled GitHub version control throughout the project.",
      ja: "このプロジェクトは、パースを拠点とする学生のためのコミュニティラジオプラットフォームで、WordPressをベースに構築され、ライブストリーミングとSpotify統合が特徴です。最新のポッドキャストエピソードを自動的に取得します。Figmaでワイヤーフレームを設計し、コンテンツ管理のためのカスタム投稿タイプを構築し、プロジェクト全体でGitHubバージョン管理を担当しました。"
    }    
  },

  {
    src:"/img/artwork.png",
    alt:"Sightseeing Map project top imagee",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "Art community platform built for painters to share work, sell products, and get real feedback — without the noise of mainstream social media. Built with Next.js + Supabase + Django REST API.",
      ja: "このプロジェクトは、アートコミュニティプラットフォームで、画家が作品を共有し、製品を販売し、主流のソーシャルメディアのノイズなしで実際のフィードバックを得るために構築されました。Next.js + Supabase + Django REST APIを使用して構築されました。"
    }    
  },
    
  {
    src:"/img/bootstrap-thumbnail.png",
    alt:"george garden center website using bootstrap",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "E-commerce style product showcase for a local gardening business. Designed to display product variety clearly across all devices, with smooth carousel navigation.",
      ja: "このプロジェクトは、地元の園芸ビジネス向けのEコマーススタイルの商品ショーケースです。すべてのデバイスで商品の多様性を明確に表示し、スムーズなカルーセルナビゲーションを備えています。" } },



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
   
        <img
          src={project.src}
          alt={project.alt}
          className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
        />
  
    
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

