import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs(){
  return(
    <>
    <Header />
    <main>
    <section className="section split grid grid-cols-1 md:grid-cols-2">

      <div className="text-left space-y-4">
        <h1 className="page-title font-extrabold text-zinc-900">
          User-Centric<br />
          <span className="text-zinc-700">Frontend Development</span>
        </h1>

        <p className="text-zinc-600">I am Soki, who is a frontend developer specializing in building responsive, user-friendly websites and apps. With a strong foundation in HTML, CSS, and JavaScript, along with modern tools like React, I am passionate about creating intuitive and engaging digital experiences.</p>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-lg border border-zinc-100 bg-zinc-50 aspect-[4/3]">
          <img
            src="/img/about/hero.png"
            alt="Soki Iwae profile picture"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
   </section>

   <section className="section split my-journey grid grid-cols-1 md:grid-cols-2">
       <div className = "my-journey-image">
         <img src="/img/about/journey.png" alt="My journey illustration" />
       </div>

       <div className="my-journey-text  ">
       <h2>My Journey</h2>
       <p>At first, I was studying about business administrations and marketings in Kinki University, where I gained insight into how digital platforms shape the way businesses connect with people.  That curiosity led me to explore web marketing and web developments, which sparked my interest in the technical side of digital experiences. <br></br><br></br>
       That interest led me to take a big step. After graduation of universities, I decided to move to Australia and dive into the web development industry. I ended up at TAFE in Perth and built a strong foundation in essential skills like HTML, CSS, JavaScript, and React. Not only the code, but also knew the importance of communication and teamwork skills. As a consequences,
my background in both business and tech gives me a unique perspective and this provides users digital experiences that truly meet a user's needs.
<br></br><br></br>In addition, my experience as a tennis coach strengthened my ability to communicate clearly and adapt to different people’s needs.
       </p>
       </div>
    
   </section>


   <section className="section split education grid grid-cols-1 md:grid-cols-2">
       <div className = "education-image">
         <img src="/img/about/education.png" alt="Education illustration" />
       </div>

       <div className="education-text ">
       <h2>Education</h2>
       <div className="flex flex-col gap-4">
       <div>
       <h3><strong>TAFE Webdevelopment Frontend Diploma  </strong>/ 2025</h3>
       <p className="text-left">Focus on frontend frameworks, UI/UX, and responsive design</p>
       </div>

       <div>
       <h3><strong>TAFE Information Technology web development CertificateIV</strong>  / 2024</h3>
       <p className="text-left">Gained foundation in HTML, CSS, JavaScript, and web standards</p>
       </div>

       <div>
       <h3><strong>Kinki University Business administration Bachelar </strong>/ 2023 </h3>
       <p className="text-left"> Studied management, marketing, and business strategy</p>
       </div>
       </div>
       </div>
    
   </section>

</main>

<Footer />
</>
  );
}

