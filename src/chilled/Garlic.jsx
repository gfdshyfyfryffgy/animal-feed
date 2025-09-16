import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import h1 from "../assets/products/garlic.png"; // replace with fresh garlic image if available

const COLORS = {
  heading: "#3E3F5B",
  accent: "#F3E8C9",
  background1: "linear-gradient(120deg, #FFF9E5 0%, #F7F9EF 100%)",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

const freshGarlicDetails = [
  { type: "Form", details: "Whole Bulbs / Loose Cloves" },
  { type: "Color", details: "Natural White / Off-White" },
  { type: "Aroma", details: "Pungent & Strong" },
  { type: "Moisture", details: "65% – 70%" },
  { type: "Use Cases", details: "Culinary, Household, Pickling, Spices" },
  { type: "Packing", details: "5kg / 10kg / 20kg Mesh Bags, Cartons" },
  { type: "Storage", details: "Cool, Dry, Ventilated Warehouses" },
];

export default function FreshGarlic() {
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
              Fresh Garlic
            </h1>
          </div>
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="fade-left"
          >
            <img
              src={h1}
              alt="Fresh Garlic"
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
              Fresh Garlic Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#40642C] text-[1.08rem] font-medium">
              <li>Handpicked, naturally grown garlic</li>
              <li>High pungency and authentic flavor</li>
              <li>Ideal for cooking, pickling, and seasoning</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: COLORS.heading }}
            >
              About Fresh Garlic
            </h2>
            <p
              className="text-[1.07rem] font-medium"
              style={{ color: COLORS.heading, lineHeight: 1.7 }}
            >
              Our fresh garlic is sourced from trusted farms and carefully packed
              to preserve its natural flavor, pungency, and health benefits. It
              is rich in essential nutrients and widely used in culinary,
              medicinal, and processing industries. Perfect for{" "}
              <strong>
                households, restaurants, exporters, and spice manufacturers
              </strong>
              .
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
                {freshGarlicDetails.map((item, i) => (
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
