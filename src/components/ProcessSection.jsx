import React from "react";

const steps = [
  {
    number: 1,
    title: "Sustainable Sourcing",
    description:
      "We carefully select sustainable ingredients, including agricultural co-products, that would otherwise go to waste. Our sourcing process prioritizes local suppliers to reduce transportation emissions and support regional economies.",
    bullets: [
      "80% of ingredients sourced within 100 miles",
      "Upcycled agricultural by-products",
      "Strict quality control standards",
    ],
  },
  {
    number: 2,
    title: "Innovative Processing",
    description:
      "Our proprietary processing technology transforms raw ingredients into highly nutritious feed while using 70% less energy than conventional methods. We employ advanced fermentation techniques to enhance digestibility and nutrient availability.",
    bullets: [
      "Low-temperature processing preserves nutrients",
      "70% energy reduction compared to industry standard",
      "Zero waste production system",
    ],
  },
  {
    number: 3,
    title: "Quality Testing",
    description:
      "Every batch of feed undergoes rigorous testing to ensure it meets our high standards for nutritional content, safety, and performance. Our in-house laboratory conducts over 20 different tests on each production run.",
    bullets: [
      "Comprehensive nutritional analysis",
      "Contaminant and pathogen screening",
      "Digestibility and performance testing",
    ],
  },
  {
    number: 4,
    title: "Sustainable Packaging & Distribution",
    description:
      "We use recyclable and biodegradable packaging materials to minimize waste. Our optimized logistics reduce transportation emissions while ensuring timely delivery to farms across the country.",
    bullets: [
      "100% recyclable packaging",
      "Carbon-neutral shipping partners",
      "Bulk delivery options to reduce packaging",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-white bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
              <ul className="list-disc list-inside text-green-700 font-medium space-y-1 pl-2">
                {step.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>

            {/* Placeholder Image */}
            <div className="bg-gray-100 aspect-video w-full rounded-lg border border-dashed flex items-center justify-center text-gray-400">
              <span className="text-sm">Image Placeholder</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}