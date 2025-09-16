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
      title:"One Ring Rental",
      technology: "React, Bootstrap, Next.js",
      image:"/img/react_work.png",
      alt:"One ring rental thumbnail picture",
      plan: {
        en: "Change the website from HTML to React and Next.js. As a CSS, I installed bootstrap. Also, make counting sculpture list. In order  to make it, used useState. More important things of this web app is changing from all HTML and CSS website to React and Next.js",
        ja: "HTMLからReactとNext.jsへサイトを変更。CSSにはBootstrapを使用。また、カウント可能なスカルプチャリストを作成するためにuseStateを使用。このWebアプリで最も重要なのは、HTMLとCSSだけのサイトをReactとNext.jsに移行したことです。"
      },
      users: {
        en: "This is just a template property rental web app website.",
        ja: "これはテンプレートの不動産レンタルWebアプリです。"
      },
      link:"https://my-react-2xddgjhxe-sochan2s-projects.vercel.app/"
    },
  

    {
      title:"Generate Password",
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
      technology: "WordPress (PHP), HTML5, CSS3, JavaScript (ES6+), Bootstrap, Git/GitHub",
      image:"/img/boom_radio.png",
      alt:"Boom Radio project preview",
      plan: {
        en: "Key features include live radio streaming and Spotify integration, which automatically retrieves and plays the latest podcast episodes on the website. My role was designing Wireframe, custom post types to manage content and github management",
        ja: "UI/UXデザインに重点を置き、モバイルでもメニューが見やすくユーザーフレンドリーになるよう設計。また、ライブ再生やSpotifyから最新のポッドキャストを取得してウェブ上で聴ける機能も実装しました。"
      },
      users: {
        en: "This is real client project. Target audience is students age who lives in Perth. They try to spread a community in Perth",
        ja: "実際のクライアントプロジェクト。ターゲットはパース在住の学生で、コミュニティを広げることを目的としています。"
      },
      link:"https://github.com/Sochan2/boom-radio-wordpress"
    },

    {
      title:"Sightseeing map app",
      technology: "Next.js, Tailwind css, Python, Django, MongoDB, Google map API",
      image:"/img/sightseeing-map-thumbnail.png",
      alt:"Sightseeing map app preview",
      plan: {
        en: "This project was a collaboration with backend developers. My role focused on frontend (Next.js, Tailwind, login UI, API fetch integration, Google Maps API) and database schema design.",
        ja: "このプロジェクトはバックエンド開発者との協働で進めました。私の役割はフロントエンドを担当し、Next.js・Tailwind を用いたUI開発、ログイン機能、APIフェッチの実装、Google Maps APIの統合、そしてデータベーススキーマ設計を行いました。"
      },
      users: {
        en: "This app helps to find user's gem's restaurants, cafe and sightseeing spots. Users can write very detailed reviews like blog and post. They only can see spots within 30 min from current place not to disturb User Interface.",
        ja: "このアプリはユーザーが隠れたレストラン、カフェ、観光スポットを見つけるのを助けます。ユーザーはブログのように詳細なレビューを書け、現在地から30分以内のスポットのみ表示され、UIを妨げません。"
      },
      link:"https://github.com/AstromaoLabs/sightseeing-map"
    },

    {
      title:"George Garden Center",
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