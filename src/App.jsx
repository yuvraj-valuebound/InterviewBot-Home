import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="outer-container">
      <div className="App app-container">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
