import React, { useEffect } from "react";
import hen from "../assets/hen.jpg"; // Replace with actual tomato image path
import AOS from "aos";
import "aos/dist/aos.css";

// Brand colors reused from Potato.js
const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  background2: "#AAB396",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

// Tomato-specific table data
const tomatoDetails = [
  { type: "Variety", details: "Heirloom / Vine-Ripened" },
  { type: "Moisture", details: "94-95%" },
  { type: "Size", details: "Average Diameter: 6-8 cm" },
  { type: "Firmness", details: "Firm enough for transport" },
  { type: "Sortex", details: "100% Sortex Cleaned" },
  { type: "Loadability", details: "Up to 24 Metric Tons (depends on packing)" },
  { type: "Shape", details: "Round & Plum shapes" },
  { type: "Color", details: "Bright Red" },
  { type: "Admixture", details: "0%" },
  {
    type: "Packing",
    details:
      "1kg, 5kg, 10kg Crates / Cartons / Custom as per export requirements",
  },
];

export default function Tomato() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 40 });
  }, []);

  return (
    <div>
      {/* Section 1: Heading + Image */}
      <div
        style={{
          background: COLORS.background1,
          padding: "3.5rem 0 3.5rem 0",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          {/* Left: Heading */}
          <div
            className="w-full md:w-1/2 flex justify-start"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h1
              className="text-6xl md:text-8xl font-extrabold"
              style={{ color: COLORS.heading, letterSpacing: "0.01em" }}
            >
              Tomato
            </h1>
          </div>

          {/* Right: Image */}
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src={hen}
              alt="Tomato"
              className="object-contain"
              style={{ width: 410, height: 410, maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Features + About */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Features */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: "#40642C" }}>
              Chilled Tomato Features
            </h2>
            <ul
              className="list-disc list-inside space-y-2"
              style={{
                color: "#40642C",
                fontWeight: 500,
                fontSize: "1.08rem",
              }}
            >
              <li>Firm and ripe</li>
              <li>Packed and cooled immediately after harvest</li>
              <li>Ideal for sauces, slicing, and export</li>
            </ul>
          </div>

          {/* About content */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: COLORS.heading }}>
              About Chilled Tomato
            </h2>
            <p
              style={{
                color: COLORS.heading,
                fontSize: "1.07rem",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              Our chilled tomatoes are harvested at peak ripeness and immediately
              cooled to lock in freshness, color, and flavor. Perfect for global
              export and long-distance shipping, they meet high standards required
              by retail chains, restaurants, and food processors.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Table */}
      <div className="w-full" style={{ background: "#fff", padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto px-6" data-aos="fade-up" data-aos-delay="120">
          <div
            style={{
              overflowX: "auto",
              borderRadius: "10px",
              border: `1.5px solid ${COLORS.tableBorder}`,
              background: "#fff",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "inherit",
                fontSize: "1rem",
                color: COLORS.text,
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: `1px solid ${COLORS.tableBorder}`,
                      padding: "10px 14px",
                      background: "#fff",
                      fontWeight: "bold",
                      textAlign: "left",
                      letterSpacing: "0.01em",
                    }}
                  >
                    TYPE
                  </th>
                  <th
                    style={{
                      border: `1px solid ${COLORS.tableBorder}`,
                      padding: "10px 14px",
                      background: "#fff",
                      fontWeight: "bold",
                      textAlign: "left",
                      letterSpacing: "0.01em",
                    }}
                  >
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {tomatoDetails.map((row, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        border: `1px solid ${COLORS.tableBorder}`,
                        padding: "10px 14px",
                        background: "#fff",
                        fontWeight: 500,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {row.type}
                    </td>
                    <td
                      style={{
                        border: `1px solid ${COLORS.tableBorder}`,
                        padding: "10px 14px",
                        background: "#fff",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}