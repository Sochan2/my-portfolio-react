import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUsJa(){
  return(
    <>
    <Header />
    <main>
        
        {/* ヒーローセクション（最上部） */}
        <section className="section split grid grid-cols-1 md:grid-cols-2">
          
          {/* 左側：テキストエリア */}
          <div className="text-left space-y-4">
        
            <h1 className="page-title font-extrabold text-zinc-900">
              ユーザー体験を大切にする<br />
              <span className="text-zinc-700">Webデベロッパー</span>
            </h1>
            
            <p className="text-zinc-600">
              私はフロントエンドエンジニアとして、レスポンシブでユーザーフレンドリーなウェブサイトやアプリの開発を得意としています。Reactをはじめとするモダンなツールと基礎技術を活かし、直感的でユーザー中心のデジタル体験を提供します。
            </p>
          </div>

          {/* 右側：プロフィール写真エリア */}
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
       <h2>私のストーリー</h2>
       <p>私は近畿大学で経営学やマーケティングを学び、デジタルプラットフォームが企業と人々のつながり方をどのように変えているかについて理解を深めました。そこから興味が広がり、WebマーケティングやWeb開発に触れる中で、デジタル体験を支える技術面に強い関心を持つようになりました。<br></br><br></br>
      その関心をきっかけに大きな一歩を踏み出し、大学卒業後はオーストラリアに渡り、Web開発の道に進むことを決意しました。パースのTAFEで学び、HTML・CSS・JavaScript・Reactといった基礎からモダンな技術までしっかりと習得。単にコードを書く力だけでなく、コミュニケーション力やチームワークの大切さも身につけました。
      ビジネスとテクノロジーの両方の背景を持つことで、ユーザーの本当のニーズに応えるデジタル体験を提供できるのが私の強みです。
<br></br><br></br>さらに、テニスコーチとしての経験を通じて、相手に合わせた柔軟な対応力とわかりやすい伝え方を培いました。
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
       <h3><strong>TAFE Web開発 フロントエンド ディプロマ  </strong>/ 2025</h3>
       <p className="text-left">Sass、Wordpress、React他にリアルクライアントワークを通じてチームでの開発を実際に行った。</p> 
       </div>

      <div>
      <h3><strong>TAFE 情報技術 Web開発 サーティフィケートIV</strong>  / 2024</h3>
      <p className="text-left">HTML・CSS・JavaScript・Web標準の基礎を習得。さらにWCAGを学び、アクセサビリティーを重視したウェブサイトについても学習</p> 
      </div>

      <div>
        <h3><strong>近畿大学 経営学部 キャリアマネージメント学科  学士 </strong>/ 2023 </h3>
      <p className="text-left"> 経営マネージメント、マーケティング。主に海外ビジネスやInternational marketingについて研究を行った</p>
      </div>

       </div>
       
       
      
        </div>
   </section>

</main>

<Footer />
</>
  );
}
