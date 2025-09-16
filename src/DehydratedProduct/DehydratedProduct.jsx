import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import d1 from "../assets/products/DehydratedProduct.png";

const COLORS = {
  heading: "#3E3F5B",
  accent: "#AAB396",
  background1: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)",
  text: "#243642",
  tableBorder: "#3E3F5B",
};

// Example dehydrated product details
const dehydratedDetails = [
  { type: "Form", details: "Flakes / Powder / Minced" },
  { type: "Color", details: "Natural White / Off-White / Golden" },
  { type: "Aroma", details: "Retains natural aroma" },
  { type: "Moisture", details: "Below 8%" },
  { type: "Shelf Life", details: "12–24 months in sealed packaging" },
  { type: "Use Cases", details: "Culinary, Food Processing, Snacks, Seasoning" },
  { type: "Packing", details: "10kg / 25kg Bags, Vacuum Packs" },
];

export default function DehydratedProduct() {
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
              Dehydrated Product
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
            <img
              src={d1}
              alt="Dehydrated Product"
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
            <h2
              className="text-xl font-bold mb-3 text-[#40642C]"
            >
              Dehydrated Product Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#40642C] text-[1.08rem] font-medium">
              <li>Available in Flakes, Powder, or Minced form</li>
              <li>Natural aroma and flavor retained</li>
              <li>Long shelf life for storage and export</li>
              <li>Ideal for food processing, seasoning, and snacks</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: COLORS.heading }}
            >
              About Dehydrated Product
            </h2>
            <p
              className="text-[1.07rem] font-medium"
              style={{ color: COLORS.heading, lineHeight: 1.7 }}
            >
              Our dehydrated products are made from carefully selected fresh
              produce, processed under controlled conditions to remove moisture
              while preserving natural flavor, color, and nutrients. Perfect
              for culinary use, industrial food processing, seasoning blends,
              and snacks, they offer long shelf life and convenient storage.
              Available in bulk and retail-friendly packaging for domestic and
              export markets.
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
                {dehydratedDetails.map((item, i) => (
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
