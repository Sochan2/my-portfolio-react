import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Work from "./pages/work";
import Contact from "./pages/Contact";
import Blog from './pages/Blog';
import './App.css';


const App = () => {
  return (
   
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
  );
};

export default App;
