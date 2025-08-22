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
      <h2>見やすく・使いやすいーそんなWebsiteをつくります</h2>
     
      
      <img src="img/portfolio_home.gif " alt=" do coding" />
    </section>

      <section className="intro">
        <h2>About me</h2>

        <p><strong>初めまして。Sokiです</strong> パースを拠点に活動しているフロントエンドエンジニアです。<br/>
         2023年からWeb開発の世界に入り、CertificateIVで基礎を学び、オーストラリアのNorthbridgeTAFEでDiplomaコースを卒業しました。
        </p>
       <p>ReactやJavaScriptを中心に、モダンで使いやすいUI/UXを意識したWebサイトやアプリを制作しています。</p>
      </section>
      <Skills />
      <h2>Project</h2>
      <Project isJapanese={isJapanese} />
      </main>
      <Footer />
      </>

  );
}