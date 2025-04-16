import Header from "../components/header";
import Footer from "../components/footer";

export default function Work(){
  return(
  <>
  <Header />
  <main>
    <h1>Work</h1>


      <section class="grid grid-cols-3 gap-4">

      <section class="work_card">
        <img src="img/japan_rice_homepage.jpg" alt="Japan rice MICO website preview picture"/>
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
      </section>
 
  </main>

  <Footer />
  
  </>
  );
}