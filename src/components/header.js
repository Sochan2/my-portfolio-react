import React from 'react';
import { Link } from "react-router-dom";
export default function Header(){
  return(
    <>
  <header>
    <img src="img/profile.png" alt="soki's profile logo"/>
    <nav>
      <ul className="nav-menu">
        <li><Link to ="/" className="nav-link">Home</Link></li>
        <li><Link to ="/about" className="nav-link">About Us</Link></li>
        <li><Link to ="/work" className="nav-link">Work</Link></li>
        <li><Link to ="/contact" className="nav-link">Contact</Link></li>
        
      </ul>
    </nav>

    <div className="language">
      <a href="index_ja.html"><img src="img/japanese_language.png" alt="Japanese language icon"/></a>
      <a href="index.html"><img src="img/english_language.png" alt="English language icon"/></a>
    </div>
    <div className="hamberger">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>

    
  </header>
  </>
  );
}