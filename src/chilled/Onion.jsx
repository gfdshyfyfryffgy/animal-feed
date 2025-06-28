import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hen from "../assets/hen.png"; // Use a real onion image if available

const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  background2: "#AAB396",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

const onionDetails = [
  { type: "Variety", details: "Red, Yellow, White Onions" },
  { type: "Shelf Life", details: "Up to 90 days (chilled)" },
  { type: "Size Range", details: "40-70 mm" },
  { type: "Storage Temp", details: "0–4°C (Chilled)" },
  { type: "Packing", details: "Mesh Bags, Jute Bags, or Custom Packaging" },
  { type: "Loadability", details: "28 M.Tons in 40' HC Container" },
  { type: "Quality", details: "GAP-Certified Farms, No Sprouting" },
  { type: "Usage", details: "Food Service, Export, Industrial Use" },
];

export default function Onion() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 40 });
  }, []);

  return (
    <div>
      {/* Section 1: Heading + Image */}
      <div
        className="w-full"
        style={{
          background: COLORS.background1,
          padding: "3.5rem 0",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
          >
            <h1
              className="text-6xl md:text-8xl font-extrabold"
              style={{ color: COLORS.heading }}
            >
              Onion
            </h1>
          </div>
          <div
            className="w-full md:w-1/2 flex justify-center md:justify-end"
            data-aos="fade-left  "
          >
            <img
              src={hen}
              alt="Onion"
              className="object-contain"
              style={{ width: 410, height: 410, maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Description + Features */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          <div data-aos="fade-up">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#40642C" }}>
              Chilled Onion Features
            </h2>
            <ul
              className="list-disc list-inside space-y-2"
              style={{
                color: "#40642C",
                fontWeight: 500,
                fontSize: "1.08rem",
              }}
            >
              <li>Red, yellow, and white varieties available</li>
              <li>Extended shelf life via chilled logistics</li>
              <li>Carefully sorted and cleaned</li>
              <li>Available in export and domestic packs</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-xl font-bold mb-3" style={{ color: COLORS.heading }}>
              About Chilled Onion
            </h2>
            <p
              style={{
                color: COLORS.heading,
                fontSize: "1.07rem",
                lineHeight: 1.7,
                fontWeight: 500,
              }}
            >
              Our onions are sourced from certified farms and handled with care using
              temperature-controlled transportation. With proper chilling, they retain
              taste, freshness, and are ideal for international markets, food service, and
              processors.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Onion Details Table */}
      <div className="w-full" style={{ background: "#fff", padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
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
                    }}
                  >
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {onionDetails.map((row) => (
                  <tr key={row.type}>
                    <td
                      style={{
                        border: `1px solid ${COLORS.tableBorder}`,
                        padding: "10px 14px",
                        fontWeight: 500,
                      }}
                    >
                      {row.type}
                    </td>
                    <td
                      style={{
                        border: `1px solid ${COLORS.tableBorder}`,
                        padding: "10px 14px",
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
