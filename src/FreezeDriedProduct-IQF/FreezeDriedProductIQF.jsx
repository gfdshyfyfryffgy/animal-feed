import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import f1 from "../assets/products/FreezeDriedProductIQF.png";

const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

// Example Freeze-Dried IQF product details
const freezeDriedDetails = [
  { type: "Form", details: "Whole / Minced / Flakes / Powder" },
  { type: "Color", details: "Natural White / Off-White / Golden" },
  { type: "Aroma", details: "Retains natural aroma" },
  { type: "Moisture", details: "Below 5%" },
  { type: "Shelf Life", details: "18–24 months in sealed packaging" },
  { type: "Use Cases", details: "Culinary, Food Processing, Snacks, Ready-to-Eat Meals" },
  { type: "Packing", details: "10kg / 25kg Bags, Vacuum Packs, Bulk Packs" },
];

export default function FreezeDriedProductIQF() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, offset: 40 });
  }, []);

  return (
    <div>
      {/* Heading + Image */}
      <div style={{ background: COLORS.background1, padding: "3.5rem 0" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <h1
              className="text-6xl font-extrabold"
              style={{ color: COLORS.heading }}
            >
              Freeze-Dried Product
              <br />
              IQF
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
            <img
              src={f1}
              alt="Freeze-Dried Product IQF"
              className="object-contain"
              style={{ width: 410, height: 410 }}
            />
          </div>
        </div>
      </div>

      {/* Features & About */}
      <div style={{ background: COLORS.accent, padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div data-aos="fade-up">
            <h2 className="text-xl font-bold mb-3 text-[#40642C]">
              Freeze-Dried Product IQF Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#40642C] text-[1.08rem] font-medium">
              <li>Available in whole, minced, flakes, or powder forms</li>
              <li>Retains natural aroma, color, and nutrients</li>
              <li>Ultra-low moisture for extended shelf life</li>
              <li>Perfect for culinary, ready-to-eat meals, and industrial use</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h2 className="text-xl font-bold mb-3" style={{ color: COLORS.heading }}>
              About Freeze-Dried Product IQF
            </h2>
            <p
              className="text-[1.07rem] font-medium"
              style={{ color: COLORS.heading, lineHeight: 1.7 }}
            >
              Our Freeze-Dried IQF products are produced from carefully selected fresh produce, frozen instantly, and dehydrated under vacuum conditions. This process locks in natural flavor, color, and nutrients, providing a lightweight, long-lasting product ideal for bulk packaging, exports, food processing, and ready-to-eat meals. Convenient, easy-to-use, and perfect for culinary professionals and industrial applications.
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ background: "#fff", padding: "3rem 0" }}>
        <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
          <div
            style={{
              overflowX: "auto",
              borderRadius: "10px",
              border: `1.5px solid ${COLORS.tableBorder}`,
            }}
          >
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr>
                  <th
                    style={{
                      border: `1px solid ${COLORS.tableBorder}`,
                      padding: "10px 14px",
                      fontWeight: "bold",
                    }}
                  >
                    TYPE
                  </th>
                  <th
                    style={{
                      border: `1px solid ${COLORS.tableBorder}`,
                      padding: "10px 14px",
                      fontWeight: "bold",
                    }}
                  >
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {freezeDriedDetails.map((item, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        border: `1px solid ${COLORS.tableBorder}`,
                        padding: "10px 14px",
                        fontWeight: 500,
                      }}
                    >
                      {item.type}
                    </td>
                    <td
                      style={{
                        border: `1px solid ${COLORS.tableBorder}`,
                        padding: "10px 14px",
                      }}
                    >
                      {item.details}
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
