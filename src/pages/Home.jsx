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
     
      <h1 className="">I'm web designer <br></br>
      &nbsp; &nbsp;&web developer</h1>
      <h2>I design code simply and beautifully!!</h2>
     
      
      <img src="/public/img/soki-coder.gif " alt=" do coding" />
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
            I value with a simple design. I always keep in mind to clean design, user interactive designs. 
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

          <div className="development p-6 shadow-md m-3">
          <img className="expertise-logo" src="/img/development-logo.png" alt="design logo picture with orange color" />
          <h3>Development</h3>
          <p>
          I write clean and understandable code that is easy for teams to work together and maintain. 
          </p>
          <p><strong>What I will write code</strong></p>
          <ul>
            <li>UX, UI</li>
            <li>Wireframe and Mockup</li>
            <li>Color palletes</li>
            
          </ul>

          <p><strong>Tool</strong></p>
          <ul>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>VS code</li>
            <li>GitHub</li>
          </ul>

          </div>

          <div className="marketing p-6 shadow-md m-3">
          <img className="expertise-logo" src="/img/marketing-logo.png" alt="design logo picture with orange color" />
          <h3>Marketing</h3>
          <p>
          I value understanding user needs. I analyse user behaviour and apply those insights to SEO strategies to improve engagement.          </p>
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

       


  
      </section>
     
      <h2>My Work</h2>
      <Project />
      </main>
      <Footer />
      </>

  );
}

