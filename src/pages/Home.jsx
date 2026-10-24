import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

 export default function Home() {
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
    x: 0,                  
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
        <p>Designing and building the web with clarity and intention</p>
      </div>
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
            <li className="badge">Wireframe</li>
          </ul>
          <p>Not only aesthetic of UI, also make structures of wireframe and mockup in framer considering behavioral psychology and accessibilities.</p>
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
            <li className="badge">Github maintainance</li>
          </ul>
          <p>Provide application development smoothly from HTML, CSS and WordPress to modern frontend technologies such as React, Next.js and Typescript.</p>
          </div>
         
          </div>

          <div className="expertise-card shadow-md">
          <img className="expertise-logo" src="/img/expertise/seo.png" alt="design logo picture with orange color" />
          <div className="flex flex-col gap-2">
          <h3>SEO & Growth Strategy</h3>
          <ul className="badge-container">
            <li className="badge">SEO</li>
            <li className="badge">Keyword Analysis</li>
            <li className="badge">CVR Improvement</li>
            <li className="badge">Google Analytics</li>
            <li className="badge">Google Search Console</li>
          </ul>
          <p>Maltiple with SEO perspective from working experence and basic marketing knowledge that I studied at university and suggest web to connect benefits.</p>
          </div>          
          </div>
        </div>
        </section>

      <section className="section project">
        <h2>My Work</h2>
        <FeaturedProjects />
      </section>

      <section className="section work-experience">
      <h2>Working Experience</h2>
      <div ref={expertiseRef}>
        <h3>SEO & Web Marketing Company – Web Developer </h3>
      <p>2025~2026| Remote (Japan)</p>
      <ul>
      <li>Implemented SEO-driven HTML/CSS updates based on wireframes</li>
      <li>Added structured elements (H1/H2, FAQ sections, schema-like content)</li>
      <li>Conducted technical SEO audits</li>
      <li>Ensured existing DOM structure was preserved</li>
      <li>Created PowerPoint-based SEO proposals for clients</li>
     </ul>
      </div>
      </section>
      </main>
      <Footer />
      </>

  );
}

