import React from 'react';
import NavLinks from './navLinks';
import {MdOutlineMenu, MdClose } from 'react-icons/md';
import { useState } from "react";



export default function MobileNav({ isJapanese}){

  const [click, setClick] = useState(false);
  

  return(
    <nav className="mobile-navigation">
      {click ? (

      <MdClose
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setClick(false)}
    />
      ):(
          <MdOutlineMenu
          className="HamburgerMenu"
          size="30px"
          color="black"
          onClick={() => setClick(true)}
        />

      )}
     
      <div className={`nav-menu ${click ? "active" : ""}`}>
      {click && (isJapanese ? <NavLinksJa /> : <NavLinks />)}
      </div>
    </nav>
  );
}