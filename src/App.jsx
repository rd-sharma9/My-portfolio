import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; // ✅ You already imported it
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* ✅ Skills Section */}
      <Skills />

      {/* Projects Section*/}
      <Projects/>

      {/*Contact Section */}
      <Contact/>

      {/*Contact Section */}
      <Footer/>
      </div>
  );
}

export default App;
