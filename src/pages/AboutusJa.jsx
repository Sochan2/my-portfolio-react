import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutUsJa(){
  return(
    <>
    <Header />
    <main>
    <section class="about_me grid grid-cols-1 md:grid-cols-2 gap-8 gap-4 ">

      <div className = "aboutme-grid-text text-center ">
      <p>私のプロフィール</p>
     <h1>ユーザー体験を大切にするWebデベロッパー</h1> <p>私はフロントエンドエンジニアとして、レスポンシブでユーザーフレンドリーなウェブサイトやアプリの開発を得意としています。Reactをはじめとするモダンなツールと、HTML・CSS・JavaScriptといった基礎技術を活かし、直感的でユーザー中心のデジタル体験を提供することに情熱を持っています。</p> </div>

      <div className = "aboutme-grid-picture">
        <img src= "/img/aboutme-hero.png"></img>
      </div>
   </section>

   <section className = "my-journey grid grid-cols-1 md:grid-cols-2">
       <div className = "my-journey-image">
         <img src = "/img/journey.png"></img>
       </div>

       <div className="my-journey-text  ">
       <h2></h2>私のストーリー <p>私は近畿大学で経営学やマーケティングを学び、デジタルプラットフォームが企業と人々のつながり方をどのように変えているかについて理解を深めました。そこから興味が広がり、WebマーケティングやWeb開発に触れる中で、デジタル体験を支える技術面に強い関心を持つようになりました。<br></br><br></br>
      その関心をきっかけに大きな一歩を踏み出し、大学卒業後はオーストラリアに渡り、Web開発の道に進むことを決意しました。パースのTAFEで学び、HTML・CSS・JavaScript・Reactといった基礎からモダンな技術までしっかりと習得。単にコードを書く力だけでなく、コミュニケーション力やチームワークの大切さも身につけました。
      ビジネスとテクノロジーの両方の背景を持つことで、ユーザーの本当のニーズに応えるデジタル体験を提供できるのが私の強みです。
<br></br><br></br>さらに、テニスコーチとしての経験を通じて、相手に合わせた柔軟な対応力とわかりやすい伝え方を培いました。
       </p>
       </div>
    
   </section>



   <section className = "education grid grid-cols-1 md:grid-cols-2">
       <div className = "education-image">
         <img src = "/img/education.png"></img>
       </div>

       <div className="education-text ">
       <h2>Education</h2>
       <p><strong>TAFE Web開発 フロントエンド ディプロマ  </strong>/ 2025</p>
       <p>Sass、Wordpress、React他にリアルクライアントワークを通じてチームでの開発を実際に行った。</p> 
       <p><strong>TAFE 情報技術 Web開発 サーティフィケートIV</strong>  / 2024</p> <p>HTML・CSS・JavaScript・Web標準の基礎を習得。さらにWCAGを学び、アクセサビリティーを重視したウェブサイトについても学習</p> 
       <p><strong>近畿大学 経営学部　キャリアマネージメント学科  学士 </strong>/ 2023 </p> <p> 経営マネージメント、マーケティング。主に海外ビジネスやInternational marketingについて研究を行った</p> </div>
   </section>

</main>

<Footer />
</>
  );
}
