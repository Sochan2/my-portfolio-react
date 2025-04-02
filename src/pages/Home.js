
import '../App.css';
import Header from '../components/header';
import Skills from '../components/my-skill';
import Project from '../components/project';
import Footer from '../components/footer';

 export default function Home() {
  return (
    <>
    <Header />
    <main>
   
    <section className="about_me">
     
      <h1 className="">I'm web designer and web developer</h1>
      <h2>I design code simply and beautifully!!</h2>
      
      <img src="img/portfolio_home.gif " alt=" do coding"/>
    </section>

      <section className="intro">
        <h2>About me Little</h2>

        <p>I am Soki, a Fron-end web developer based in Perth.<br/>
          My journey into this IT industory starts from 2023, I began as a certificate IV and finnaly 
          earned a diploma in front-end Web development at North Metropolitan TAFE.
        </p>
      </section>
      <Skills />
      <h2>Project</h2>
      <Project />
      </main>
      <Footer />
      </>

  );
}

