import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import r1 from "../assets/products/roseonion.png";

const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

const roseOnionDetails = [
  { type: "Variety", details: "Pink Rose (India Export Grade)" },
  { type: "Skin", details: "Light Red to Pinkish" },
  { type: "Flavor", details: "Mild & Sweet" },
  { type: "Size", details: "35–55 mm" },
  { type: "Moisture", details: "Dry Outer Layers" },
  { type: "Loadability", details: "Up to 25 MT / FCL" },
  { type: "Admixture", details: "0%" },
  { type: "Packing", details: "5kg / 10kg / 25kg Mesh / Jute Bags" },
];

export default function RoseOnion() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 40 });
  }, []);

  return (
    <div>
      {/* Heading */}
      <div style={{ background: COLORS.background1, padding: "3.5rem 0" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h1 className="text-6xl font-extrabold" style={{ color: COLORS.heading }}>
              Rose Onion
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
            <img src={r1} alt="Rose Onion" className="object-contain" style={{ width: 410, height: 410 }} />
          </div>
        </div>
      </div>

      {/* Features & About */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div data-aos="fade-up">
            <h2 className="text-xl font-bold mb-3 text-[#40642C]">Chilled Rose Onion Features</h2>
            <ul className="list-disc list-inside space-y-2 text-[#40642C] text-[1.08rem] font-medium">
              <li>Pinkish-red color</li>
              <li>Balanced flavor & high sugar</li>
              <li>Popular in South Asia & Gulf markets</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h2 className="text-xl font-bold mb-3" style={{ color: COLORS.heading }}>
              About Rose Onion
            </h2>
            <p className="text-[1.07rem] font-medium" style={{ color: COLORS.heading, lineHeight: 1.7 }}>
              A specialty onion known for its mild taste and appealing color, Rose Onions are preferred in salads, pickles, and fresh exports. Chilled carefully to ensure long-lasting freshness.
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ background: "#fff", padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
          <div style={{ overflowX: "auto", borderRadius: "10px", border: `1.5px solid ${COLORS.tableBorder}`, background: "#fff" }}>
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr>
                  <th style={{ border: `1px solid ${COLORS.tableBorder}`, padding: "10px 14px", fontWeight: "bold" }}>TYPE</th>
                  <th style={{ border: `1px solid ${COLORS.tableBorder}`, padding: "10px 14px", fontWeight: "bold" }}>DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {roseOnionDetails.map((item, i) => (
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