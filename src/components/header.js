import React from 'react';

import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
export default function Header(){

  return(
    <>
  <header>
    <img src="img/profile.png" alt="soki's profile logo"/>
    <DesktopNav />
    <MobileNav />

    <div className="language">
      <a href="index_ja.html"><img src="img/japanese_language.png" alt="Japanese language icon"/></a>
      <a href="index.html"><img src="img/english_language.png" alt="English language icon"/></a>
    </div>
   
    
  </header>
  </>
  );
}