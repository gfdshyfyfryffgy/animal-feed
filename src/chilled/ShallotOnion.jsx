import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import s1 from "../assets/products/shelltonion.png";

const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

const shallotDetails = [
  { type: "Variety", details: "Indian Shallots / Sambar Onions" },
  { type: "Skin", details: "Pink to red outer skin" },
  { type: "Flavor", details: "Sweet and delicate" },
  { type: "Size", details: "Small – 2 to 4 cm" },
  { type: "Availability", details: "Year-round with chilled storage" },
  { type: "Applications", details: "Gourmet cooking, curries, sauces" },
  { type: "Packing", details: "5kg / 10kg mesh or jute sacks" },
];

export default function ShallotOnion() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 40 });
  }, []);

  return (
    <div>
      {/* Header + Image */}
      <div style={{ background: COLORS.background1, padding: "3.5rem 0" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h1 className="text-6xl font-extrabold" style={{ color: COLORS.heading }}>
              Shallot Onion
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
            <img src={s1} alt="Shallot Onion" className="object-contain" style={{ width: 410, height: 410 }} />
          </div>
        </div>
      </div>

      {/* Features & About */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div data-aos="fade-up">
            <h2 className="text-xl font-bold mb-3 text-[#40642C]">Shallot Features</h2>
            <ul className="list-disc list-inside space-y-2 text-[#40642C] text-[1.08rem] font-medium">
              <li>Delicate and sweet taste</li>
              <li>Ideal for gourmet dishes</li>
              <li>Chilled to extend shelf life</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h2 className="text-xl font-bold mb-3" style={{ color: COLORS.heading }}>About Shallot Onion</h2>
            <p className="text-[1.07rem] font-medium" style={{ color: COLORS.heading, lineHeight: 1.7 }}>
              Our shallot onions are carefully chilled to maintain their sweet flavor and extended storage. Widely used by chefs and restaurants for their rich gourmet taste.
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
                {shallotDetails.map((item, i) => (
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