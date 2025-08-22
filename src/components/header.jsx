import React from 'react';
import { Link, useLocation} from "react-router-dom";
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import NavLinksJa from './navLinkJa';
import NavLinks from './navLinks';

export default function Header(){

  const location = useLocation();
  const isJapanese = location.pathname.startsWith("/ja");

  return(
    <>
  <header>
    <img src="/img/profile.png" alt="soki's profile logo"/>
    <DesktopNav isJapanese={isJapanese}/>
    <MobileNav isJapanese={isJapanese}/>

    <div className="language">
      <Link to='/ja'>
      <img src="/img/japanese_language.png" alt="Japanese language icon"/>
      </Link>

      <Link to='/'>
    <img src="/img/english_language.png" alt="English language icon"/>
      </Link>
    
     
    </div>
   
    
  </header>
  </>
  );
}