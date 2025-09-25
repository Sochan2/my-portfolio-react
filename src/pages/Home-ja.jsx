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
     
   },[]);

  return (
    <>
    <Header />
    <main>
   
    <section className="about_me" ref={aboutRef}>
     
      <h1 className="">Webデザインと開発で、体験をもっとシンプルに</h1>
      <h2>見やすく・使いやすい。そんなWebsiteをつくります</h2>
      
      <img src="img/portfolio_home.gif " alt=" do coding" />
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
      </main>
      <Footer />
      </>

  );
}