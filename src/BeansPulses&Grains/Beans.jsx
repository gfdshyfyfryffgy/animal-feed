import React, { useEffect } from "react";
import hen from "../assets/hen.png"; // Change this to your actual beans image path
import AOS from "aos";
import "aos/dist/aos.css";

const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

const beansDetails = [
  { type: "Variety", details: "Kidney Beans / Black Beans / Pinto Beans" },
  { type: "Moisture", details: "12-14% Max" },
  { type: "Purity", details: "99% Min" },
  { type: "Admixture", details: "1% Max" },
  { type: "Size", details: "6-8 mm (Varies by type)" },
  { type: "Packing", details: "25/50 Kg PP or Jute Bags or Custom Packaging" },
  { type: "Usage", details: "Cooking, Canning, Industrial Use" },
];

export default function Beans() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 40 });
  }, []);

  return (
    <div>
      {/* Section 1: Heading and Image */}
      <div
        className="w-full"
        style={{
          background: COLORS.background1,
          padding: "3.5rem 0",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          <div
            className="w-full md:w-1/2 flex justify-start"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <h1
              className="text-6xl md:text-8xl font-extrabold"
              style={{ color: COLORS.heading }}
            >
              Beans
            </h1>
          </div>
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src={hen}
              alt="Beans"
              className="object-contain"
              style={{ width: 410, height: 410, maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Features and Description */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: "#40642C" }}>
              Key Features
            </h2>
            <ul
              className="list-disc list-inside space-y-2"
              style={{
                color: "#40642C",
                fontWeight: 500,
                fontSize: "1.08rem",
              }}
            >
              <li>Rich in protein and fiber</li>
              <li>Perfect for canning and cooking</li>
              <li>Sourced from premium farms</li>
            </ul>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-anchor-placement="top-bottom"
          >
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: COLORS.heading }}
            >
              About Our Beans
            </h2>
            <p
              style={{
                color: COLORS.heading,
                fontSize: "1.07rem",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              Our beans are carefully selected, cleaned, and packed to ensure top
              quality and consistent size. Ideal for culinary use, retail shelves,
              and bulk food industries. We maintain strict quality control for both
              local and international export standards.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Beans Details Table */}
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
                {beansDetails.map((row) => (
                  <tr key={row.type}>
                    <td
                      style={{
                        border: `1px solid ${COLORS.tableBorder}`,
                        padding: "10px 14px",
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
