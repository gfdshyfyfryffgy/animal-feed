import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Simple SVG avatar icons for each leader, using your brand colors
const leaderAvatars = [
  // CEO (female)
  (
    <svg width="80" height="80" viewBox="0 0 80 80" key="ceo">
      <circle cx="40" cy="40" r="36" fill="#FFF8E8" />
      <ellipse cx="40" cy="50" rx="21" ry="19" fill="#F7EED3" />
      <ellipse cx="40" cy="39" rx="16" ry="15" fill="#AAB396" />
      <ellipse cx="40" cy="43" rx="12" ry="11" fill="#FFF8E8" />
      <ellipse cx="31" cy="37" rx="2" ry="3" fill="#674636" />
      <ellipse cx="49" cy="37" rx="2" ry="3" fill="#674636" />
      <ellipse cx="40" cy="49" rx="5" ry="2" fill="#674636" opacity="0.16" />
      <ellipse cx="40" cy="45" rx="2.5" ry="1" fill="#674636" />
    </svg>
  ),
  // CTO (male)
  (
    <svg width="80" height="80" viewBox="0 0 80 80" key="cto">
      <circle cx="40" cy="40" r="36" fill="#FFF8E8" />
      <ellipse cx="40" cy="52" rx="22" ry="17" fill="#F7EED3" />
      <ellipse cx="40" cy="40" rx="16" ry="15" fill="#AAB396" />
      <ellipse cx="40" cy="45" rx="12" ry="11" fill="#FFF8E8" />
      <ellipse cx="32" cy="41" rx="2" ry="3" fill="#674636" />
      <ellipse cx="48" cy="41" rx="2" ry="3" fill="#674636" />
      <ellipse cx="40" cy="49" rx="5" ry="2" fill="#674636" opacity="0.16" />
      <rect x="36" y="35" width="8" height="4" rx="2" fill="#674636" />
    </svg>
  ),
  // Operations (female)
  (
    <svg width="80" height="80" viewBox="0 0 80 80" key="operations">
      <circle cx="40" cy="40" r="36" fill="#FFF8E8" />
      <ellipse cx="40" cy="50" rx="21" ry="18" fill="#F7EED3" />
      <ellipse cx="40" cy="41" rx="15" ry="14" fill="#AAB396" />
      <ellipse cx="40" cy="46" rx="10" ry="9" fill="#FFF8E8" />
      <ellipse cx="34" cy="44" rx="2" ry="2.5" fill="#674636" />
      <ellipse cx="46" cy="44" rx="2" ry="2.5" fill="#674636" />
      <ellipse cx="40" cy="49" rx="4" ry="1.5" fill="#674636" opacity="0.16" />
      <ellipse cx="40" cy="47" rx="2" ry="1" fill="#674636" />
    </svg>
  ),
];

const leaders = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Expert in sustainable agriculture and animal nutrition with over 20 years of industry leadership.",
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Technology innovator driving efficiency in sustainable feed manufacturing systems worldwide.",
  },
  {
    name: "Emma Thompson",
    role: "Head of Operations",
    bio: "Leads global operations to implement sustainable farming practices and ensure product quality.",
  },
];

const ProductShowcase = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section
      className="py-20 px-6 md:px-20"
      style={{ backgroundColor: "#AAB396" }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p
          className="text-sm font-semibold uppercase mb-2 rounded-2xl w-fit mx-auto px-4 py-1"
          style={{ backgroundColor: "#FFF8E8", color: "#674636", letterSpacing: "0.06em" }}
          data-aos="zoom-in"
        >
          Our Team
        </p>
        <h2
          className="text-4xl font-bold mb-4"
          style={{ color: "#674636" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Meet Our Leadership
        </h2>
        <p
          className="max-w-2xl mx-auto mb-12"
          style={{ color: "#674636" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our diverse team of experts brings together decades of experience in
          nutrition, sustainability, and agriculture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-md hover:shadow-2xl transition bg-white flex flex-col items-center"
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full border-4 border-[#F7EED3] bg-[#FFF8E8] shadow">
                {leaderAvatars[index]}
              </div>
              <h3
                className="text-xl font-semibold mb-1"
                style={{ color: "#674636" }}
              >
                {leader.name}
              </h3>
              <p
                className="font-medium mb-2"
                style={{ color: "#674636", letterSpacing: "0.01em" }}
              >
                {leader.role}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#674636" }}>
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;