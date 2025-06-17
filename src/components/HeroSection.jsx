import React from "react";
import hen from "../assets/hen.jpg";
import { Link } from "react-router-dom";
// import RotatingText from "./RotatingText/RotatingText";
export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center text-center px-4 pt-20 pb-10 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={hen}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sustainable Animal <br className="hidden sm:block" /> Feed for a Growing World
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
            To feed everyone on the planet by 2050, we need innovative and
            sustainable solutions. Our eco-friendly animal feed is the answer.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium">
              <Link to="/products">Discover Our Products →</Link>
            </button>
            <button className="bg-white hover:bg-gray-100 border border-gray-300 px-6 py-2 rounded font-medium">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
