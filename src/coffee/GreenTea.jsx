import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hen from "../assets/hen.jpg";

const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

const garlicDetails = [
  { type: "Form", details: "Whole Bulbs / Peeled Garlic / Flakes" },
  { type: "Color", details: "White & Creamy" },
  { type: "Pungency", details: "Strong Aroma & Taste" },
  { type: "Storage", details: "Humidity Controlled, Chilled Storage" },
  { type: "Moisture", details: "Below 65%" },
  { type: "Use Cases", details: "Culinary, Medicinal, Processed Food" },
  { type: "Packing", details: "10kg / 25kg Gunny, Mesh Bags, Vacuum Packs" },
];

export default function GreenTea() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 40 });
  }, []);

  return (
    <div>
      {/* Heading + Image */}
      <div style={{ background: COLORS.background1, padding: "3.5rem 0" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h1 className="text-6xl font-extrabold" style={{ color: COLORS.heading }}>
              GreenTea
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
            <img src={hen} alt="Garlic" className="object-contain" style={{ width: 410, height: 410 }} />
          </div>
        </div>
      </div>

      {/* Features & About */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div data-aos="fade-up">
            <h2 className="text-xl font-bold mb-3 text-[#40642C]">GreenTea Features</h2>
            <ul className="list-disc list-inside space-y-2 text-[#40642C] text-[1.08rem] font-medium">
              <li>Whole and Peeled available</li>
              <li>Natural aroma retained in cold storage</li>
              <li>Preserved for health and kitchen use</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h2 className="text-xl font-bold mb-3" style={{ color: COLORS.heading }}>About Chilled Garlic</h2>
            <p className="text-[1.07rem] font-medium" style={{ color: COLORS.heading, lineHeight: 1.7 }}>
              Our GreenTea products are stored under strict chilling conditions, locking flavor and extending shelf life. Ideal for bulk packaging, exports, and food processing.
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ background: "#fff", padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
          <div style={{ overflowX: "auto", borderRadius: "10px", border: `1.5px solid ${COLORS.tableBorder}` }}>
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr>
                  <th style={{ border: `1px solid ${COLORS.tableBorder}`, padding: "10px 14px", fontWeight: "bold" }}>TYPE</th>
                  <th style={{ border: `1px solid ${COLORS.tableBorder}`, padding: "10px 14px", fontWeight: "bold" }}>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {garlicDetails.map((item, i) => (
                  <tr key={i}>
                    <td style={{ border: `1px solid ${COLORS.tableBorder}`, padding: "10px 14px", fontWeight: 500 }}>{item.type}</td>
                    <td style={{ border: `1px solid ${COLORS.tableBorder}`, padding: "10px 14px" }}>{item.details}</td>
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