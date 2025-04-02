import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutUs(){
  return(
    <>
    <Header />
    <main>
    <section class="about_me">
     
     <h1>I'm Soki.</h1>
     
     <p>I am Soki and frontend web developer. I love to work with enthusiasm people. This portfolio changes 
       every year because the technology changes all the time and my knowledge as web developer is updating all the time.
    

      After studying web marketing and marketing in university, I started this career as studying at Tafe in Western Australia. Going through Web development certificate IV,
       now, I'm taking Frontend Development diploma course. I gained variable experience in liaising with clients,
       managing, working the projects and collaboratively within the team. I highly have an ambicious to leverage my abilities as profecional web developer.
       Outside of coding, I am into playing tennis and spending time outsides. I love to go travel and walk around.
      </p>
   </section>
     
   

   

   <img class="my-timeline" src="img/my-skill.png" alt="my timelice picture. My brief history as website development."/>



<section class="policy">
 <h2>My Policy</h2>
 <p>we are committed to delivering high-quality services while prioritizing transparency, creativity, and trust. Our core values guide every project we undertake and every interaction we have with our clients and community.</p>
 <p>We believe in open communication. We ensure that our clients and partners have a clear understanding of our process, from initial planning to final execution.</p>
<p>Our job is not only making website. We will maintenance your website and change it to adopt SEO and improve profits.</p>

 </section>

</main>

<Footer />
</>
  );
}

