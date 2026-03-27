import { Link } from "react-router-dom";

const projects = [
  {
    src:"/img/boom-radio-thumbnail.png",
    alt:"Boom Radio project top image",
    url:"https://boom-radio.vercel.app/", 
    projectTitle:"Boom Radio",
    projectDescription: {
      en: "A student radio community platform based in Perth. We designed wireframes in Figma, then built with customized WordPress post types for content management, integrated spotify API to auto fetch latest podcast episodes. We mainly solved the problem that clients cannot send regular newsletter to users, watch live podcast in the browser.",
      ja: "パースを拠点とする学生ラジオコミュニティプラットフォーム。Figmaでワイヤーフレームを設計し、カスタマイズされたWordPressの投稿タイプを使用してコンテンツ管理を行い、Spotify APIを統合して最新のポッドキャストエピソードを自動的に取得しました。私たちは主に、クライアントがユーザーに定期的なニュースレターを送信できない問題や、ブラウザでライブポッドキャストを視聴できない問題を解決しました。" }    
  },

  {
    src:"/img/artwork.png",
    alt:"Sightseeing Map project top imagee",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "Art community platform built for painters to share work, sell products, and get real feedback without the noise of mainstream social media. Built with Next.js + Supabase + Django REST API. We focused on UI/UX design and database structure. My role is frontend development using Next.js and Tailwind CSS. Also,integrated frontend with REST API built by backend engineer",
      ja: "主流のソーシャルメディアのノイズなしで、画家が作品を共有し、製品を販売し、本質的なフィードバックをアーティストが得られ、将来の売買につながるようにサポートをするArtist専用のsnsプラットフォームです。このプロジェクトはNext.js + Supabase + Django REST APIで構築されました。UI/UXデザインとデータベース構造に重点を置いており、私の役割は、Next.jsとTailwind CSSを使用したフロントエンド開発です。また、バックエンドエンジニアが構築したREST APIとフロントエンドを統合しました。" }    
  },
    
  {
    src:"/img/bootstrap-thumbnail.png",
    alt:"george garden center website using bootstrap",
    url:"https:japanricerealm.com", 
    projectTitle:"Japan Rice Mico ",
    projectDescription: {
      en: "E-commerce style product showcase for a local gardening business. Built with Bootstrap, it can show physical products online. It supports smooth carousel products card and Youtube video into the website.",
      ja: "地元の園芸ビジネス向けのEコマーススタイルの商品ショーケース。Bootstrapで構築され、物理的な製品をオンラインで表示できます。スムーズなカルーセル商品カードとYouTube動画をウェブサイトに統合しています。" } },



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

