import { useEffect, useRef } from 'react';
import '../App.css';
import Header from '../components/header';
import Skills from '../components/my-skill';
import Project from '../components/project';
import Footer from '../components/footer';
import { useLocation } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

 export default function HomeJa() {
  const location = useLocation();
  const isJapanese = location.pathname.startsWith("/ja");
  const aboutRef = useRef(null);
   const imgRef = useRef(null);
  const expertiseRef = useRef(null);


   useEffect(()=>{
     gsap.fromTo(aboutRef.current, {

       opacity:0,
       y:40,
     },
     
     {
  
      opacity:1,
      y:0,
      duration:1,
      ease:"power2.out",
      scrollTrigger:{
        trigger:aboutRef.current,
        start:"top 80%",
        toggleActions: "play reverse play reverse",
      }
     });

     gsap.to(imgRef.current, {
      scale:1.2,
      scrollTrigger:{
        trigger:imgRef.current,
        start:'top center',
        scrub:true,
      }
     })

     gsap.fromTo(expertiseRef.current, {
      x:-200,
      opacity:0,
     },
     {
    x: 0,                    // 元の位置へ
    opacity: 1,
    duration: 1,
    ease: "power2.out",
     scrollTrigger: {
      trigger: expertiseRef.current,
      start: "top 80%",
      toggleActions: "play",
    }
     })
     
   },[]);

  return (
    <>
    <Header />
    <main>

       <section className="about_me" ref={aboutRef}>
      <div className="hero-grid">
        <div className="hero-text">
           <h1 className="">less noise<br></br>
      more flow </h1>
      <div className="hero-sub-text">
        <p>デザインとコードで、本質を届ける。</p> </div>
        </div>

        <div className="hero-image">
          <img ref={imgRef} src="/img/my-portfolio-hero.png" alt=" do coding" />
        </div>
        
     
      </div>
      <h2>Webデザインと開発で、体験をもっとシンプルに</h2>
      <h3>見やすく・使いやすい。そんなWebsiteをつくります</h3>
      
      <img src="/img/soki-coder.gif " alt=" do coding" />
    </section>
   
     
    

      <section className="intro">
      <section className="expertise-section">
        <h2>My Expertise</h2>
        <div className="expertise-background"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 expertise-grid ">
          <div className="design-section p-6 m-3 shadow-md">
          <img className="expertise-logo" src="/img/design-logo.png" alt="design logo picture with orange color" />
          <h3>Design</h3>

          <p>
            シンプルなデザインをモットーとしています。常にクリーンでユーザーにとって直感的でわかりやすいデザインを心がけています。 </p>
          <p><strong>自分のデザインの強み</strong></p> <ul>
            <li>UX, UI</li>
            <li>ワイヤーフレームとモックアップ</li>
            <li>カラーパレット</li>
            
          </ul>

          <p><strong>ツール</strong></p>
          <ul>
            <li>Figma(2年)</li>
            <li>Draw.io(1年)</li>
            <li>Canva(3年)</li>
          </ul>


          </div>

          <div className="development p-6 shadow-md m-3">
          <img className="expertise-logo" src="/img/development-logo.png" alt="design logo picture with orange color" />
          <h3>Development</h3>
          <p>
            チームで作るためにクリーンでわかりやすいコード、さらにスケーラビリティしやすいコードを心がけています。
        
          </p>
          <p><strong>私の技術</strong></p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React,Next.js</li>
            <li>basic typescript, PHP and MySQL</li>
            <li>Sass</li>
            <li>Wordpress</li>
             <li>Github メンテナンス</li>
            
          </ul>

          <p><strong>Tool</strong></p>
          <ul>
            <li>Tailwind（1年）</li>
            <li>Bootstrap（1年）</li>
            <li>VS code（2年）</li>
            <li>GitHub（2年）</li>
          </ul>

          </div>

          <div className="marketing p-6 shadow-md m-3">
          <img className="expertise-logo" src="/img/marketing-logo.png" alt="design logo picture with orange color" />
          <h3>マーケティング</h3>
          <p>
            ユーザーのニーズを理解し、彼らの行動を分析、それらの視点をSEO戦略に反映させます。 </p>
          <p><strong>取り組む分析</strong></p>
          <ul>
            <li>ペルソナ</li>
            <li>セグメンテーション</li>
            <li>マーケットリサーチ</li>
            <li>ABテスト</li>
          </ul>

          <p><strong>Tool</strong></p>
          <ul>
            <li>Google Analytics</li>
            <li>Google Search Console</li>
            <li>Keyword Planner</li>
          </ul>

          </div>
          
      
     

        </div>
        </section>

       


  
      </section>
      <h2>Project</h2>
      <Project isJapanese={isJapanese} />

      <h2>職務経験</h2>
<div ref={expertiseRef}>
  <h3>SEO・Webマーケティング会社 – Webデベロッパー（パートタイム）</h3>
  <p>2025〜2026 | リモート（日本）</p>
  <li>ワイヤーフレームをもとにSEOを意識したHTML/CSSの実装・修正</li>
  <li>構造化要素（H1/H2、FAQセクション、スキーマ的コンテンツ）の追加</li>
  <li>テクニカルSEO監査の実施</li>
  <li>既存のDOM構造を維持しながらの実装</li>
  <li>クライアント向けSEO提案資料（PowerPoint）の作成</li>
</div>
      </main>
      <Footer />
      </>

  );
}