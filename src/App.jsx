import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeJa from "./pages/HomeJa";
import About from "./pages/About";
import AboutJa from "./pages/AboutJa";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import { LoadingScreen } from "./components/LoadingScreen";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ja" element={<HomeJa />} />
      <Route path="/ja/about" element={<AboutJa />} />
      <Route path="/ja/work" element={<Work />} />
    </Routes>
  );
};

export default App;
