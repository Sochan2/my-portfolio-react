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
           <h1 className="">less noise<br></br>
      more flow </h1>
      <div className="hero-sub-text">
        <p>Designing and building the web with clarity and intention</p>
      </div>
        </div>

        <div className="hero-image">
          <img ref={imgRef} src="/img/home/portfolio-hero.png" alt=" do coding" />
        </div>
        
     
      </div>
     
      <h2>Frontend Developer with UI/UX & Marketing background</h2>
      <h3>I design code simply and beautifully!!</h3>
     
      
      <img src="/img/home/soki-coder.gif" alt=" do coding" />
    </section>

      <section className="section expertise-section text-center">

           <h2>My Expertise</h2>
      
       
       
        <div className="expertise-grid card-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="design-section shadow-md">
            <div className="image-flex">
                <img className="expertise-logo" src="/img/expertise/design.png" alt="design logo picture with orange color" />
            </div>
        
          <h3>Design</h3>

          <p>
            I value simplicity in design and focus on creating clean, user-friendly interfaces.
          </p>
          <p><strong>What I will design</strong></p>
          <ul>
            <li>UX, UI</li>
            <li>Wireframe and Mockup</li>
            <li>Color palletes</li>
            
          </ul>

          <p><strong>Tool</strong></p>
          <ul>
            <li>Figma</li>
            <li>Draw.io</li>
            <li>Canva</li>
          </ul>


          </div>

          <div className="development shadow-md">
             <div className="image-flex">
               <img className="expertise-logo" src="/img/expertise/development.png" alt="design logo picture with orange color" />
             </div>
          <h3>Development</h3>
          <p>
          I write clean and understandable code that is easy for teams to work together and maintain. 
          </p>
          <p><strong>What I build</strong></p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React,Next.js</li>
            <li>basic typescript, PHP and MySQL</li>
            <li>Sass</li>
            <li>Wordpress</li>
             <li>Github maintenance</li>
          </ul>

          <p><strong>Tool</strong></p>
          <ul>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>VS code</li>
            <li>GitHub</li>
          </ul>

          </div>

          <div className="marketing shadow-md">
             <div className="image-flex">
                <img className="expertise-logo" src="/img/expertise/seo.png" alt="design logo picture with orange color" />
             </div>
          <h3>Marketing</h3>
          <p>
          Designed the UI based on a primary persona: Hidden artists seeking the place where they sell their artworks. The best thing is making community with their fans. This led to clean layouts, minimal distractions, and a structured comment system.I analyze user behaviour and apply those insights to SEO strategies to improve engagement. </p>
          <p><strong>What I will analyze</strong></p>
          <ul>
            <li>Persona</li>
            <li>Segmentation</li>
            <li>Market Research</li>
            <li>AB testing</li>
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

