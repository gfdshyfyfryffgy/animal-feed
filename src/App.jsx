import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import ContactSection from "./Pages/ContactSection";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import OurProcess from "./pages/OurProcess";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./Pages/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <Routes>
       <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/process" element={<OurProcess />} />
      
      </Routes>
      <Footer />
    </div>
  );
}
