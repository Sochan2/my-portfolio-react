import React from 'react';
import NavLinks from './navLinks';
import NavLinksJa from './navLinkJa';

export default function DesktopNav({isJapanese}){
  return(
  <nav className="desktop-navigation">
  {isJapanese ? <NavLinksJa /> : <NavLinks />}
    </nav>
  );
}