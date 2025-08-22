import React from 'react';
import NavLinks from './navLinks';
import {MdOutlineMenu} from 'react-icons/md';
import { useState } from "react";



export default function MobileNav({ isJapanese}){

  const [click, setClick] = useState(false);
  

  return(
    <nav className="mobile-navigation">
      <MdOutlineMenu
        className={`HamburgerMenu ${click ? "active" : ""}`}
        size="30px"
        color="black"
        onClick={() => setClick(!click)}
      />
      <div className={`nav-menu ${click ? "active" : ""}`}>
      {click && (isJapanese ? <NavLinksJa /> : <NavLinks />)}
      </div>
    </nav>
  );
}