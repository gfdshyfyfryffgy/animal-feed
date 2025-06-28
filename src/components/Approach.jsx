import React, { useEffect } from "react";
import { Leaf, ShieldCheck, Droplets } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ApproachSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      style={{ backgroundColor: "#FFF8E8" }}
      className="py-16 px-4 md:px-8 lg:px-16"
      data-aos="fade-up"
    >
      {/* Label */}
      <div className="text-center mb-4" data-aos="zoom-in">
        <span
          className="inline-block px-4 py-1 rounded-full text-sm font-medium tracking-wide"
          style={{ backgroundColor: "#F7EED3", color: "#674636" }}
        >
          Our Approach
        </span>
      </div>

      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-2"
        style={{ color: "#674636" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Innovative Feed Solutions
      </h2>
      <p
        className="text-center max-w-2xl mx-auto mt-4 text-base"
        style={{ color: "#674636" }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        We combine cutting-edge research with sustainable practices to create animal feed that’s better for animals, farmers, and the planet.
      </p>

      {/* Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div
          className="p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          style={{ backgroundColor: "#FFF8E8", border: "1px solid #F7EED3" }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6" style={{ backgroundColor: "#F7EED3" }}>
            <Leaf className="w-8 h-8" style={{ color: "#AAB396" }} />
          </div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#674636" }}>
            Eco-Friendly
          </h3>
          <p className="text-base text-center" style={{ color: "#674636" }}>
            Our feed is made with sustainable ingredients that reduce environmental impact while maintaining optimal nutrition.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          style={{ backgroundColor: "#FFF8E8", border: "1px solid #F7EED3" }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6" style={{ backgroundColor: "#F7EED3" }}>
            <ShieldCheck className="w-8 h-8" style={{ color: "#AAB396" }} />
          </div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#674636" }}>
            Quality Assured
          </h3>
          <p className="text-base text-center" style={{ color: "#674636" }}>
            Rigorous testing ensures our products meet the highest standards for animal health and performance.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
          style={{ backgroundColor: "#FFF8E8", border: "1px solid #F7EED3" }}
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full mb-6" style={{ backgroundColor: "#F7EED3" }}>
            <Droplets className="w-8 h-8" style={{ color: "#AAB396" }} />
          </div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#674636" }}>
            Resource Efficient
          </h3>
          <p className="text-base text-center" style={{ color: "#674636" }}>
            Our production process uses 70% less water and 80% less land compared to traditional feed production.
          </p>
        </div>
      </div>
    </section>
  );
}