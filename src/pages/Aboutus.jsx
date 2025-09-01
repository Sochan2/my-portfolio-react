import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutUs(){
  return(
    <>
    <Header />
    <main>
    <section class="about_me grid grid-cols-2 gap-4 ">

      <div className = "aboutme-grid-text text-center ">
      <p>About Me Little</p>
     <h1>User-Centric Frontend Development</h1>
     <p>I am Soki, who is a frontend developer specialising in building responsive, user-friendly websites and apps. My passion is building responsive websites and apps. I use React and modern tools to create intuitive digital experiences.</p>
      </div>

      <div className = "aboutme-grid-picture">
        <img src= "/img/aboutme-hero.png"></img>
      </div>
   </section>

   <section className = "my-journey grid grid-cols-2">
       <div className = "my-journey-image">
         <img src = "/img/journey.png"></img>
       </div>

       <div className="my-journey-text ">
       <h2>My Journey</h2>
       <p>At first, I was studying about business administrations and marketings in Kinki University, where I gained insight into how digital platforms shape the way businesses connect with people.  That curiosity led me to explore web marketing and web developments, which sparked my interest in the technical side of digital experiences. <br></br><br></br>
       That interest led me to take a big step. After graduation of universities, I decided to move to Australia and dive into the web development industry. I ended up at TAFE in Perth and built a strong foundation in essential skills like HTML, CSS, JavaScript, and React. Not only the code, but also knew the importance of communication and teamwork skills. As a consequences,
my background in both business and tech gives me a unique perspective and this provides users digital experiences that truly meet a user's needs.
<br></br><br></br>In addition, my experience as a tennis coach strengthened my ability to communicate clearly and adapt to different people’s needs.
       </p>
       </div>
    
   </section>


   <section className = "education grid grid-cols-2">
       <div className = "education-image">
         <img src = "/img/education.png"></img>
       </div>

       <div className="education-text ">
       <h2>Education</h2>
       <p><strong>TAFE Webdevelopment Frontend Diploma  </strong>/ 2025</p>
       <p>Focus on frontend frameworks, UI/UX, and responsive design</p>
       <p><strong>TAFE Information Technology web development CertificateIV</strong>  / 2024</p>
       <p>Gained foundation in HTML, CSS, JavaScript, and web standards</p>
       <p><strong>inki University Business administration Bachelar </strong>/ 2023 </p>
       <p> Studied management, marketing, and business strategy</p>
       </div>
    
   </section>

</main>

<Footer />
</>
  );
}

