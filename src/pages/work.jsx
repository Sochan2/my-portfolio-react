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
      plan:{
        en:"Think about SEO and Responsive design. Include latest web technology,PWA",
        ja:"SEOとリスポンシブルデザインを考えて作りましたそして、最新のテクノロジーであるPWAも入れ込みました",
      },
      users:{
        en:"This is Japanese rice farm website. This products are made in Nabari city and sell products for foreign people.",
        ja:"日本のお米農家のウェブサイトです。この商品は名張市でできたお米で海外の方をターゲットにウェブサイトを構築しました。"
      },
      link:"https://sochan2.github.io/japanese-rice/"

    },
  

    {
      title:"Generate Password",
       where: {"en": "Individual project", 
              "ja": "Javascriptを使った個人プロジェクト" },
      technology: "HTML, CSS, JS",
      image:"/img/generate-password-site.png",
      alt:"generate password site preview",
      plan: {
        en: "You can copy generated password only one click. If you click button, make strong password for you",
        ja: "生成されたパスワードをワンクリックでコピー可能。ボタンを押すと強力なパスワードを生成します。"
      },
      users: {
        en: "These days, weak password cause a big problem. To solve that, make strong password!",
        ja: "最近、弱いパスワードは大きな問題になります。そのため、強力なパスワードを作成しました。"
      },
      link:"https://sochan2.github.io/generateio/"
    },

    {
      title:"Boom Radio",
       where: {"en": "TAFE school project", 
              "ja": "TAFE学校プロジェクト"
            },
      technology: "WordPress (PHP), HTML5, CSS3, JavaScript (ES6+), Bootstrap, Git/GitHub",
      image:"/img/boom_radio.png",
      alt:"Boom Radio project preview",
      plan: {
        en: "Key features include live radio streaming and Spotify integration, which automatically retrieves and plays the latest podcast episodes on the website. My role was designing Wireframe, custom post types to manage content and github management",
        ja: "UI/UXデザインに重点を置き、モバイルでもメニューが見やすくユーザーフレンドリーになるよう設計。また、ライブ再生やSpotifyから最新のポッドキャストを取得してウェブ上で聴ける機能も実装しました。現在はクライアントの都合上公開されてませんが、ローカル環境で再現できます。" },
      users: {
        en: "This is real client project. Target audience is students age who lives in Perth. They try to spread a community in Perth",
        ja: "実際のクライアントプロジェクト。ターゲットはパース在住の学生で、コミュニティを広げることを目的としています。"
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
      plan: {
        en: "In this project, it is used Bootstrap technology especially. I managed to implement carousel and grid style in the website. Also, in the contact form, you can see stylish type of selecting form.",
        ja: "このプロジェクトはバックエンド開発者との協働で進めました。私の役割はフロントエンドを担当し、Next.js・Tailwind を用いたUI開発、ログイン機能、APIフェッチの実装、Google Maps APIの統合、そしてデータベーススキーマ設計を行いました。"
      },
      users: {
        en: "Client is a george garden center. This corporation is a gardening shop and selling a variety of products. They want to show users different type of products on product page. Also, it is essential to introduce carousel.",
        ja: "クライアントは George Garden Center です。この企業はガーデニングショップで、さまざまな製品を販売しています。ユーザーに向けて、製品ページで異なる種類の商品を見せたいと考えており、カルーセルの導入が不可欠となっています。"
      },
      link:"https://sochan2.github.io/george-garden/"
    },

     {
      title:"Typescript and React Weather App",
        where: {"en": "Individual project", 
              "ja": "ReactとTypescriptを使った個人プロジェクト" },
      technology: "React, Typescript, OpenWeather API",
      image:"/img/weather-app.png",
      alt:"weather app preview",
      plan: {
        en: "In this project, I focused on building a weather application using React and Typescript. I integrated the OpenWeather API to fetch weather data and display it as a user-friendly interface.",
        ja: "このプロジェクトでは、React と Typescript を使用して天気アプリケーションを構築しました。OpenWeather API を統合して天気データを取得し、ユーザーフレンドリーな方法で表示しました。" },
      users: {
        en: "This app provides information to local weather. It provides the location, temperatures, humidity, air pressure, wind speed, sunrise and sunset information. Also, I implemented weather forecasts every 6 hours.",
        ja: "このアプリはローカルの天気情報を表示するアプリです。位置情報、気温、湿度、気圧、風速、日の出と日の入りの情報を提供します。また、6時間ごとの天気予報も実装しました。"
      },
      link:"https://react-app-sage-nine.vercel.app/"
    },

     {
      title:" Artwork Project",
        where: {"en": "Collaborative Team Project", 
              "ja": "共同プロジェクト" },
      technology: "Typescript, Next.js, Tailwind CSS, Django and Supabase",
      image:"/img/artwork.png",
      alt:"artwork sharing website ",
      plan: {
        en: "Deep thinking about UI/UX design and database structure. My role is frontend development using Next.js and Tailwind CSS. Also,integrated frontend with REST API built by backend engineer",
        ja: "UI/UXデザインとデータベース構造について深く考えました。Next.js と Tailwind CSS を使用したフロントエンド開発を担当し、バックエンドエンジニアが作成した REST API との統合も行いました。" },
      users: {
        en: "Uses will cheer up painters and can interact so closely. They can share their artworks, purchase products and get feedback from other users.",
        ja: "このプロジェクトでは、アートワークを共有、他のユーザーからフィードバックを得られるプラットフォームを提供します。" },
       link:"https://github.com/AstromaoLabs-V2/artlift"
    }



     


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