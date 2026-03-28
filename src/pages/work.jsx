import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "../components/Modal";

export default function Work(){
  const location = useLocation();
  const isJapanese = location.pathname.startsWith("/ja");
  const [selectProject, setSelectProject]=useState(null);

  const projects = [
    {
      title:"Japan rice",
      where: {"en": "TAFE school project", 
              "ja": "TAFE学校プロジェクト"
            },


      technology: "HTML, CSS, PWA",
      image:"/img/japan_rice_homepage.jpg",
      alt:"Japan rice MICO website preview picture",
     problem:{
        en:"There are no website to show their own rice products for Japanese rice farmers.",
        ja:"日本の米農家が自分たちの米製品を紹介するためのウェブサイトが存在しないことが問題でした。",
      },
      solutions:{
        en:"To solve that, I created a website to show what kind of products they have and their strengths. Also, I implemented PWA features to make users can access the website easily.",
        ja:"その問題を解決するために、彼らが持っている製品とその強みを紹介するウェブサイトを作成しました。また、ユーザーが簡単にウェブサイトにアクセスできるようにPWA機能を実装しました。"
      },

       results:{
        en:"Delivered a functional website with PWA features, improving user accessibility.",
        ja:"PWA機能を備えた機能的なウェブサイトを提供し、ユーザーのアクセシビリティを向上させました。"
      },
      link:"https://sochan2.github.io/japanese-rice/"

    },

    {
      title:"Boom Radio",
       where: {"en": "TAFE school real client project", 
              "ja": "TAFE学校リアルクライアントプロジェクト" },
      technology: "WordPress (PHP), HTML5, CSS3, JavaScript (ES6+), Bootstrap, Git/GitHub",
      image:"/img/boom_radio.png",
      alt:"Boom Radio project preview",
      problem: {
        en: "A Perth student radio station's previous website does not have live streaming and connecting to Spotify function. Also, they want to send regular newsletter to users but they cannot do it.",
        ja: "UI/UXデザインに重点を置き、モバイルでもメニューが見やすくユーザーフレンドリーになるよう設計。また、ライブ再生やSpotifyから最新のポッドキャストを取得してウェブ上で聴ける機能も実装しました。" },
      solutions: {
        en: "We implemented live streaming and Spotify integration to address the limitations of the previous website. Additionally, we set up a newsletter to keep users informed. ",
        ja: "前のウェブサイトの制限を解決するために、ライブストリーミングとSpotify統合を実装しました。さらに、WordPressを使用してニュースレターシステムを設定し、クライアントが自分でコンテンツとニュースレターを管理できるようにしました。" },
      results: {
        en: "Implementing live streaming and Spotify integration enhanced user engagement. We handed over the project following with action plan.",
        ja: "ライブストリーミングとSpotify統合の実装により、ユーザーエンゲージメントが向上しました。アクションプランに従ってプロジェクトを引き渡しました。"
      },
      link:"https://github.com/Sochan2/boom-radio-wordpress"
    },

    

    {
      title:"George Garden Center",
       where: {"en": "TAFE school project", 
              "ja": "TAFE学校プロジェクト"
            },
      technology: "HTML, CSS, JS, Sass, Bootstrap",
      image:"/img/bootstrap-thumbnail.png",
      alt:"george garden center website's appearence",
      problem: {
        en: "A local gardening business does not have a website to show their products and services.",
        ja: "地元の園芸ビジネスが、製品やサービスを紹介するためのウェブサイトを持っていないことが問題でした。"
      },
      solutions: {
        en: "To solve that, I created a website to show what kind of products they have and their strengths. Also, I implemented smooth carousel products card and Youtube video into the website.",
        ja: "その問題を解決するために、彼らが持っている製品とその強みを紹介するウェブサイトを作成しました。また、スムーズなカルーセル商品カードとYouTube動画をウェブサイトに統合しました。"
      },
      results: {
        en: "Delivered a functional website with improved user experience, showcasing products effectively.",
        ja: "機能的なウェブサイトを提供し、ユーザーエクスペリエンスを向上させ、製品を効果的に紹介しました。"
      },
      link:"https://sochan2.github.io/george-garden/"
    },

     {
      title:" Artwork Project",
        where: {"en": "Collaborative Team Project", 
              "ja": "共同プロジェクト" },
      technology: "Typescript, Next.js, Tailwind CSS, Django and Supabase",
      image:"/img/artwork.png",
      alt:"artwork sharing website ",
      problem: {
      en: "Artists had no dedicated space to share work and get genuine feedback without the noise of mainstream social media.",
      ja: "アーティストは、主流のソーシャルメディアのノイズなしで作品を共有し、本質的なフィードバックを得るための専用スペースがありませんでした。"
     },
    solutions: {
      en: "Co-built a full-stack art community platform. Responsible for frontend UI, REST API integration with Django backend, and GitHub project management.",
      ja: "フルスタックのアートコミュニティプラットフォームを共同で構築。フロントエンドUI、DjangoバックエンドとのREST API統合、およびGitHubプロジェクト管理を担当しました。"
    },
    results: {
      en: "Launched a working platform where artists can share artworks, get feedback, and connect with other creators.",
      ja: "アーティストが作品を共有し、フィードバックを得て、他のクリエイターとつながることができる動作するプラットフォームを立ち上げました。",
    },
       link:"https://github.com/AstromaoLabs-V2/artlift"
    },



     


  ]

  return(
  <>
  <Header />
  <main>
    <h1>Work</h1>


      <section class="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project,index)=>{
          return(
          <section class="work_card">
          <img src={project.image} alt={project.alt}/>
          <button className="mt-2 work-button" onClick={()=>setSelectProject(project)}>Click here</button>
          <h3><a href={project.link}>{project.title}</a></h3>
          <p className="text-sm text-gray-600 mb-2">{project.technology}</p>
        
        </section>
          );
        })}
      </section>

      {selectProject && (
  <Modal 
    project={selectProject} 
    onClose={() => setSelectProject(null)} 
    isJapanese={isJapanese} 
  />
)}
 
  </main>

  <Footer />
  
  </>
  );
}

/*
<section class="work_card">
        <img src="img/japan_rice_homepage.jpg" alt="Japan rice MICO website preview picture"/>
        <button className="work-button">Click here</button>
        <h3><a href="https://sochan2.github.io/japanese-rice/">Japan rice ( HTML and CSS)</a></h3>
      
      </section>


      <section className="work_card">
        <a href=""><img src="img/magicbook_website.jpg" alt="Magicbook website preview"/></a>
        <h3>Magicbook(PHP, MySQL)</h3>
      
      </section>

      <section class="work_card">
        <img src="img/market_place.png" alt="Magicbook website preview"/>
        <h3>Market Place(HTML, CSS)</h3>
      
      </section>

      <section class="work_card">
        <img src="img/react_work.png" alt="Magicbook website preview"/>
        <h3><a href = "https://my-react-2xddgjhxe-sochan2s-projects.vercel.app/">One Ring(JS,React,Next-js)</a></h3>
      
      </section>

      <section class="work_card">
        <img src="img/generate-password-site.png" alt="generate password site preview"/>
        <h3><a href = "https://sochan2.github.io/generateio/">Generate password</a></h3>
      
      </section>
      */