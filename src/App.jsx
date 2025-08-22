import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
 import Work from "./pages/work";
 import Contact from "./pages/Contact";
 import Blog from './pages/Blog';
 import BlogDetail from './pages/BlogDetail';
 import './App.css';
 import HomeJa from "./pages/Home-ja";
 import AboutUsJa from "./pages/AboutusJa";
 


 const App = () => {
   return (
   
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/ja" element={<HomeJa />} />
        <Route path="/ja/about" element={<AboutUsJa />} />
        <Route path="/ja/work" element={<Work />} />
      </Routes>
    
   );
 };

 export default App;
