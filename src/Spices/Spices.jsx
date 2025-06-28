import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import chilledImage from "../assets/hen.jpg"; // Replace with actual "chilled" related image

const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

export default function Spices() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 40 });
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div style={{ background: COLORS.background1, padding: "3.5rem 0" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h1 className="text-6xl font-extrabold" style={{ color: COLORS.heading }}>
              Chilled Products
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
            <img
              src={chilledImage}
              alt="Chilled Products"
              className="object-contain"
              style={{ width: 410, height: 410 }}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Features + About */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {/* Features */}
          <div data-aos="fade-up">
            <h2 className="text-xl font-bold mb-3 text-[#40642C]">
              Chilled Storage Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#40642C] text-[1.08rem] font-medium">
              <li>Extended shelf life & freshness</li>
              <li>Maintains nutrients and quality</li>
              <li>Prepares for export & long logistics</li>
            </ul>
          </div>

          {/* About */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h2 className="text-xl font-bold mb-3" style={{ color: COLORS.heading }}>
              About Chilled Category
            </h2>
            <p
              className="text-[1.07rem] font-medium"
              style={{ color: COLORS.heading, lineHeight: 1.7 }}
            >
              Our chilled category features products like potatoes, onions, tomatoes, garlic, and other vegetables, all preserved with top-class refrigeration and cold chain techniques. Chilling helps protect against spoilage, reduce wastage, and retain texture, color, and flavor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}