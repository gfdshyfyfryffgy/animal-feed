import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import hen from "../assets/hen.png";
import pig from "../assets/pig.png";
import sheep from "../assets/sheep.png";
import "aos/dist/aos.css";

// Carousel for animal nutrition images (poultry, pig, sheep)
function AnimalNutritionCarousel() {
  const images = [
    { src: hen, alt: "Poultry Nutrition" },
    { src: pig, alt: "Pig Nutrition" },
    { src: sheep, alt: "Sheep Nutrition" },
  ];
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] mx-auto">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: idx === current ? 20 : 10 }}
        />
      ))}
    </div>
  );
}

const ThridSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section style={{ backgroundColor: "#AAB396" }} className="py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <div className="text-left mb-4">
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "#3E3F5B",
                color: "#fff",
                letterSpacing: "0.04em",
              }}
            >
              Our Mission
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#3E3F5B" }}
            data-aos="fade-right"
          >
            Sustainable animal
            <br />
            nutrition for a healthier planet
          </h1>
          <p
            className="text-lg mb-6"
            style={{ color: "#3E3F5B" }}
            data-aos="fade-right"
          >
            At NutriPlanet, we aim to transform animal nutrition with
            sustainable, high-quality feed that boosts livestock health and
            supports a greener agricultural ecosystem.
          </p>
          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link to="/about">
              <button className="px-6 py-2 font-medium rounded shadow transition text-white bg-[#3E3F5B] hover:bg-[#8AB2A6]">
                Learn More →
              </button>
            </Link>
            <Link to="/contact">
              <button
                className="px-6 py-2 font-medium rounded border shadow transition hover:bg-[#F6F1DE]"
                style={{
                  backgroundColor: "#fff",
                  color: "#3E3F5B",
                  borderColor: "#8AB2A6",
                }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Image Carousel Section */}
        <div
          className="flex-1 flex justify-center items-center"
          data-aos="fade-left"
        >
          <AnimalNutritionCarousel />
        </div>
      </div>
    </section>
  );
};

export default ThridSection;