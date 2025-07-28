import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "../components/Modal";

export default function Work(){
  const [selectProject, setSelectProject]=useState(null);

  const projects = [
    {
      title:"Japan rice",
      technology: "HTML, CSS, PWA",
      image:"./img/japan_rice_homepage.jpg",
      alt:"Japan rice MICO website preview picture",
      plan:"Think about SEO and Responsive design. Include latest web technology,PWA",
      users:"This is Japanese rice farm website. This products are made in Nabari city and sell products for foreign people.",
      link:"https://sochan2.github.io/japanese-rice/"

    },

    {
      title:"Magic Book",
      technology: "PHP, MySQL",
      image:"img/magicbook_website.jpg",
      alt:"Magic book thumbnail picture",
      plan:"Easy Content Management System which include Login system. And, easy to make your favourite book list website",
      users:"Users will make their own favorite book list by themselve. They can upload book picture, enter title, Author and published age.",
      link:""

    },

    {
      title:"One Ring Rental",
      technology: "React, Bootstrap, Next.js",
      image:"img/react_work.png",
      alt:"One ring rental thumbnail picture",
      plan:"Change the website from HTML to React and Next.js. As a CSS, I installed bootstrap. Also, make counting sculpture list. In order  to make it, used useState. More important things of this web app is changing from all HTML and CSS website to React and Next.js ",
      users:"This is just a template property rental web app website.",
      link:"https://my-react-2xddgjhxe-sochan2s-projects.vercel.app/"

    },

    {
      title:"Generate Password",
      technology: "HTML, CSS, JS",
      image:"img/generate-password-site.png",
      alt:"generate password site preview",
      plan:"You can copy generated password only one click. If you click button, make strong password for you",
      users:"These days, weak password cause a big problem. To solve that, make strong password!",
      link:"https://sochan2.github.io/generateio/"

    },

    {
      title:"Boom Radio",
      technology: "HTML, CSS, JS, React, Tailwind css",
      image:"img/boom_radio.png",
      alt:"generate password site preview",
      plan:"We focused on UI and UX design to ensure the menu remains clean and user-friendly on mobile. Also, we include great functions such as live playing and retrieve latest potcast episode from Spotify and able to listen on website. ",
      users:"This is real client project. Target audience is students age who lives in Perth. They try to spread a community in Perth",
      link:"https://boom-radio.vercel.app/"

    },

    {
      title:"Sightseeing map app",
      technology: "Next.js, Tailwind css, Python, Django, MongoDB, Google map API",
      image:"img/sightseeing-map-thumbnail.png",
      alt:"sightseeing map app preview",
      plan:"Make web app from scratch to cooperate with backend people. We really focus on database,UI and Login page so far ",
      users:"This app helps to find user's gem's restaurants, cafe and sightseeing spots. Users can write very detailed reviews like blog and post. They only can see spots within 30 min from current place not to disturb User Interface.",
      link:"https://github.com/AstromaoLabs/sightseeing-map"

    },


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

      <Modal project={selectProject} onClose={()=>setSelectProject(null)} />
 
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