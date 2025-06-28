import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Images (only use .jpg or .png)
import hen from "../assets/hen.png";
import pig from "../assets/pig.png";
import sheep from "../assets/sheep.png";

const slides = [
  {
    image: hen,
    title: "Healthy Nutrition for Poultry",
    description: "Support poultry health and productivity with our high-quality, sustainable feeds.",
  },
  {
    image: pig,
    title: "Optimal Feed for Swine",
    description: "Premium formulations to improve growth, health, and sustainability in pig farming.",
  },
  {
    image: sheep,
    title: "Balanced Diets for Sheep",
    description: "Innovative nutrition solutions for strong, healthy, and productive flocks.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-x-hidden"
      style={{ background: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)" }}
    >
      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="hidden md:block absolute -top-24 -left-24 w-[420px] h-[420px] bg-gradient-to-tr from-[#8AB2A6]/30 via-[#F6F1DE]/60 to-[#3E3F5B]/10 rounded-full blur-3xl" />
        <div className="hidden md:block absolute -bottom-28 -right-28 w-[480px] h-[480px] bg-gradient-to-br from-[#8AB2A6]/25 via-[#F6F1DE]/45 to-[#3E3F5B]/10 rounded-full blur-3xl" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl px-6 pt-24 md:pt-0">
        {/* Image Carousel */}
        <div className="w-full md:w-2/5 flex flex-col items-center">
          <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] mx-auto overflow-hidden rounded-2xl shadow-lg border-4 border-white bg-[#F6F1DE]">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.title}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentIndex && fade ? "opacity-100" : "opacity-0"
                }`}
                style={{ zIndex: index === currentIndex ? 20 : 10 }}
              />
            ))}
          </div>
          <div className="flex gap-2 mt-5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full border border-[#8AB2A6] transition-all duration-300 ${
                  idx === currentIndex ? "bg-[#3E3F5B]" : "bg-[#F6F1DE]"
                }`}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setFade(true);
                  }, 200);
                }}
              />
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#3E3F5B] drop-shadow"
            data-aos="fade-right"
            key={slides[currentIndex].title}
          >
            {slides[currentIndex].title}
          </h1>
          <p
            className="text-lg md:text-xl mb-8 font-medium text-[#3E3F5B]/90"
            data-aos="fade-right"
            data-aos-delay="200"
            key={slides[currentIndex].description}
          >
            {slides[currentIndex].description}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 w-full md:justify-start justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link to="/products">
              <button className="px-7 py-3 rounded-lg font-semibold text-white bg-[#3E3F5B] hover:bg-[#8AB2A6] shadow transition-colors duration-300">
                Discover Our Products →
              </button>
            </Link>
            <Link to="/about">
              <button className="border px-7 py-3 rounded-lg font-semibold bg-white text-[#3E3F5B] border-[#8AB2A6] hover:bg-[#F6F1DE] shadow">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className="md:hidden absolute inset-0 bg-[#F6F1DE]/60 pointer-events-none z-0" />
    </section>
  );
}
