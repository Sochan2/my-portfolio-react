import React from 'react';
import { Link } from "react-router-dom";
export default function NavLinksJa(){
  return(
  <nav>
      <ul className="nav-menu">
        <li><Link to ="/ja" className="nav-link">Home</Link></li>
        <li><Link to ="/ja/about" className="nav-link">About Us</Link></li>
        <li><Link to ="/ja/work" className="nav-link">Work</Link></li>
        <li><Link to ="/blog" className="nav-link">Blog</Link></li>
        <li><Link to ="/contact" className="nav-link">Contact</Link></li>
        
        
      </ul>
    </nav>
  );
}