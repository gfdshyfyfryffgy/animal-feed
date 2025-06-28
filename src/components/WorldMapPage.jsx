import React from "react";
import map1 from "../assets/map23.png";



export default function WorldMapPage() {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#3E3F5B" }}>
          Our Global Reach
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          NutriPlanet is committed to providing quality nutrition solutions worldwide.
        </p>
       <img src={map1} alt="World Map" style={{ width: '1100px', height: '600px' }} className="mx-auto" />

      </div>
    </section>
  );
}
