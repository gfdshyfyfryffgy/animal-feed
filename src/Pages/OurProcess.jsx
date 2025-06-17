import React from "react";
import wheat from "../assets/wheat.jpg";
import testing from "../assets/testing.jpg";
import packagingImg from "../assets/packagingImg.jpg";
import Sustainable from "../assets/Sustainable.jpg";
import hen from "../assets/hen.jpg";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";

const steps = [
  {
    number: 1,
    title: "Sustainable Sourcing",
    description:
      "We carefully select sustainable ingredients, including agricultural co-products, that would otherwise go to waste.",
    bullets: [
      "80% of ingredients sourced within 100 miles",
      "Upcycled agricultural by-products",
      "Strict quality control standards",
    ],
    image: Sustainable,
  },
  {
    number: 2,
    title: "Innovative Processing",
    description:
      "Our proprietary processing transforms raw ingredients into feed using 70% less energy.",
    bullets: [
      "Low-temp nutrient preservation",
      "70% energy reduction",
      "Zero waste production",
    ],
    image: hen,
  },
  {
    number: 3,
    title: "Quality Testing",
    description:
      "Each batch undergoes rigorous tests for nutritional value and safety.",
    bullets: [
      "Nutritional analysis",
      "Pathogen screening",
      "Performance testing",
    ],
    image: testing,
  },
  {
    number: 4,
    title: "Eco Packaging & Delivery",
    description: "We use recyclable packaging and carbon-neutral logistics.",
    bullets: [
      "100% recyclable packaging",
      "Carbon-neutral shipping",
      "Bulk delivery to reduce waste",
    ],
    image: packagingImg,
  },
];

const OurProcess = () => {
  return (
    <div>
      {/* Intro Section */}
      <div className="py-16 px-6 md:px-20 bg-green-500 mt-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Our Sustainable Process
            </h2>
            <p className="text-white mb-6">
              At NutriPlanet, we follow environmentally conscious practices to
              create healthy animal feed while preserving the planet.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={wheat}
              alt="Eco-Friendly Ingredients"
              className="rounded-lg shadow-md w-full object-cover h-98"
            />
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10`}
            >
              {/* Text Section */}
              <div className="md:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-white bg-green-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">
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

              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-md w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50 text-center">
        <div className="mb-12">
          <p className="text-sm text-green-700 font-semibold uppercase tracking-wide mb-2">
            Environmental Impact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Making a Difference
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our sustainable approach creates measurable environmental benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-3xl font-bold text-green-600 mb-2">80%</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Carbon Footprint Reduction
            </h4>
            <p className="text-gray-600 text-sm">
              Compared to conventional feed production, our process
              significantly reduces greenhouse gas emissions.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-3xl font-bold text-green-600 mb-2">70%</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Water Conservation
            </h4>
            <p className="text-gray-600 text-sm">
              Our production requires significantly less water than traditional
              feed manufacturing.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-3xl font-bold text-green-600 mb-2">90%</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Waste Reduction
            </h4>
            <p className="text-gray-600 text-sm">
              We upcycle agricultural by-products that would otherwise end up in
              landfills.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Discover How We Make Sustainability Work
            </h2>
            <p className="text-gray-600">
              From ingredient sourcing to final delivery, our process is built
              on transparency, innovation, and care for the planet. Learn how
              NutriPlanet is redefining animal nutrition — step by step.
            </p>
          </div>

          <div className="text-center md:text-right">
            <Link to="/contact">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-base font-semibold shadow">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
