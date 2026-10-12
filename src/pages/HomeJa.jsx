import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';
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

       <section className="section about_me" ref={aboutRef}>
      <div className="hero-grid">
        <div className="hero-text">
          <div className="label-container">
          <span className="label">DESIGN ENGINEER</span>
          </div>
           <h1 className="">less noise<br></br>
      more flow </h1>
      <div className="hero-sub-text">
        <p>デザインと実装の壁をなくす、高機能なWeb開発</p> </div>
        </div>

        <div className="hero-image">
          <img className="h-lvh" ref={imgRef} src="/img/home/portfolio-hero.png" alt=" do coding" />
        </div>
        
     
      </div>
    
    </section>
   
     
    

      <section className="section expertise-section">
        <h2>My Expertise</h2>
        <div className="card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="expertise-card shadow-md">
          <img className="expertise-logo" src="/img/expertise/design.png" alt="design logo picture with orange color" />
          <div className="flex flex-col gap-2">
          <h3>UI/UX & Design Systems</h3>
          <ul className="badge-container">
            <li className="badge">Figma</li>
            <li className="badge">Auto Layout</li>
            <li className="badge">Framer</li>
            <li className="badge">ワイヤーフレーム</li>
          </ul>
          <p>見た目の美しさだけでなく、ユーザーの行動心理とアクセシビリティを考慮したFigmaでのワイヤーフレーム・UI設計。実装を見据えたシステム構築を行います。 </p>
          </div>
          </div>

          <div className="expertise-card shadow-md">
          <img className="expertise-logo" src="/img/expertise/development.png" alt="design logo picture with orange color" />
          <div className="flex flex-col gap-2">
          <h3>Front-End Engineering</h3>
          <ul className="badge-container">
            <li className="badge">HTML/ CSS/JavaScript</li>
            <li className="badge">Typescript/React/Next.js</li>
            <li className="badge">WordPress</li>
            <li className="badge">Github メンテナンス</li>
          </ul>
          <p>HTML/CSS/WordPressの堅実な構築から、React・Next.js・TypeScriptを用いたモダンなWebアプリケーション開発までスムーズな実装を提供します</p>
          </div>
         
          </div>

          <div className="expertise-card shadow-md">
          <img className="expertise-logo" src="/img/expertise/seo.png" alt="design logo picture with orange color" />
          <div className="flex flex-col gap-2">
          <h3>SEO & Growth Strategy</h3>
          <ul className="badge-container">
            <li className="badge">SEO</li>
            <li className="badge">キーワード分析</li>
            <li className="badge">CVR改善</li>
            <li className="badge">Google Analytics</li>
            <li className="badge">Google Search Console</li>
          </ul>
          <p>実務経験で培ったSEOの知見と、大学で学んだマーケティングの基礎を掛け合わせ、作っただけで終わらせない「集客・成果に繋がるWeb」を提案します。</p>
          </div>
          
          </div>
        </div>
        </section>

       
       <section className="section project">
        <h2>Project</h2>
        <FeaturedProjects isJapanese={isJapanese} />
       </section>
  
      
<section className="section work-experience">
  <h2>職務経験</h2>
  <div ref={expertiseRef}>
    <h3>SEO・Webマーケティング会社 – Webデベロッパー</h3>
    <p>2025〜2026 | リモート（日本）</p>
    <ul>
      <li>ワイヤーフレームをもとにSEOを意識したHTML/CSSの実装・修正</li>
      <li>構造化要素（H1/H2、FAQセクション、スキーマ的コンテンツ）の追加</li>
      <li>テクニカルSEO監査の実施</li>
      <li>既存のDOM構造を維持しながらの実装</li>
      <li>クライアント向けSEO提案資料（PowerPoint）の作成</li>
    </ul>
   
  </div>
</section>
      </main>
      <Footer />
      </>

  );
}