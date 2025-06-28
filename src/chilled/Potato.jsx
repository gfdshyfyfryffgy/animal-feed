import React, { useEffect } from "react";
import hen from "../assets/hen.png";
import AOS from "aos";
import "aos/dist/aos.css";

// Brand colors
const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  background2: "#AAB396",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

const potatoDetails = [
  { type: "Variety", details: "Single Boiled/Double Boiled" },
  { type: "Moisture", details: "13%" },
  { type: "Length", details: "Average 5 MM" },
  { type: "Broken", details: "5% Max" },
  { type: "Sortex", details: "100% Sortex" },
  { type: "Loadability", details: "20 to 26 M.Tons depends upon the packing" },
  { type: "Shape", details: "Short and Round" },
  { type: "Color", details: "Brown" },
  { type: "Admixture", details: "0%" },
  { type: "Packing", details: "1,2,5,10,25,50 Kg PP bag, Non Woven bag, BOPP bag, Jute bag & Customized Packing" },
];

export default function Potato() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 40 });
  }, []);

  return (
    <div>
      {/* Section 1: Only "Potato" heading at left, image at right, background gradient */}
      <div
        className="w-full"
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
              Potato
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
              alt="Potato"
              className="object-contain"
              style={{ width: 410, height: 410, maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Main content, green accent background */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Left: Categories/features */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: "#40642C" }}
            >
              Chilled Potato Features
            </h2>
            <ul
              className="list-disc list-inside space-y-2"
              style={{
                color: "#40642C",
                fontWeight: 500,
                fontSize: "1.08rem",
              }}
            >
              <li>High-quality chilled storage</li>
              <li>Long shelf life</li>
              <li>Ideal for export markets</li>
            </ul>
          </div>
          {/* Right: Main about content */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-anchor-placement="top-bottom"
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: COLORS.heading }}
            >
              About Chilled Potato
            </h2>
            <p
              style={{
                color: COLORS.heading,
                fontSize: "1.07rem",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              Our chilled potatoes are stored at optimal temperatures to maintain
              freshness and quality, perfect for culinary use. We use advanced
              chilling and logistics to guarantee long shelf life and export
              quality, making our potatoes ideal for retail, food service, and
              industrial processing markets.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Potato Details Table */}
      <div className="w-full" style={{ background: "#fff", padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto px-6" data-aos="fade-up" data-aos-delay="120">
          <div style={{
            overflowX: 'auto',
            borderRadius: "10px",
            border: `1.5px solid ${COLORS.tableBorder}`,
            background: "#fff"
          }}>
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
                {potatoDetails.map((row, i) => (
                  <tr key={row.type}>
                    <td
                      style={{
                        border: `1px solid ${COLORS.tableBorder}`,
                        padding: "10px 14px",
                        background: "#fff",
                        verticalAlign: "top",
                        fontWeight: 500,
                        fontFamily: "inherit",
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
                        verticalAlign: "top",
                        fontFamily: "inherit",
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