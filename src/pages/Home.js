import { useEffect, useRef } from 'react';
import '../App.css';
import Header from '../components/header';
import Skills from '../components/my-skill';
import Project from '../components/project';
import Footer from '../components/footer';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

 export default function Home() {
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
     
      <h1 className="">I'm web designer and web developer</h1>
      <h2>I design code simply and beautifully!!</h2>
     
      
      <img src="img/portfolio_home.gif " alt=" do coding" />
    </section>

      <section className="intro">
        <h2>About me Little</h2>

        <p><strong>I am Soki,</strong> a Fron-end web developer based in Perth.<br/>
          My journey into this IT industory starts from 2023, I began as a certificate IV and finnaly 
          earned a diploma in front-end Web development at North Metropolitan TAFE.
        </p>
       <p>I build responsive, great UI/UX website and APP using React, JS and modern tools</p>
      </section>
      <Skills />
      <h2>Project</h2>
      <Project />
      </main>
      <Footer />
      </>

  );
}

