import React from "react";
import hen from "../assets/hen.jpg"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import dog from "../assets/dog.jpg"; // Adjust the path as necessary
import henfeed from "../assets/henfeed.jpg"; // Adjust the path as necessary
import certificate1 from  "../assets/certificate1.jpg"
import certificate3 from  "../assets/certificate3.jpg"
import certificate2 from  "../assets/certificate2.jpg"// Adjust the path as necessary
import {
  Leaf,
  Star,
  Handshake,
  Lightbulb,
  Eye,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: <Leaf className="text-green-600 w-8 h-8 mb-3" />,
    title: "Sustainability First",
    desc: "We prioritize eco-friendly solutions for long-term farming success.",
  },
  {
    icon: <Star className="text-yellow-500 w-8 h-8 mb-3" />,
    title: "Quality & Excellence",
    desc: "Our products are rigorously tested for quality and performance.",
  },
  {
    icon: <Handshake className="text-blue-500 w-8 h-8 mb-3" />,
    title: "Partnership",
    desc: "We grow together with our farmers and ecosystem partners.",
  },
  {
    icon: <Lightbulb className="text-purple-600 w-8 h-8 mb-3" />,
    title: "Innovation",
    desc: "We improve continuously using scientific feedback and data.",
  },
  {
    icon: <Eye className="text-teal-600 w-8 h-8 mb-3" />,
    title: "Transparency",
    desc: "We’re open about our processes, results, and commitments.",
  },
  {
    icon: <ShieldCheck className="text-red-500 w-8 h-8 mb-3" />,
    title: "Responsibility",
    desc: "We hold ourselves to the highest standards of accountability.",
  },
];

const certificates = [
  {
    title: "Certified Organic",
    description:
      "Our organic feed products meet the strictest standards for organic certification.",
    icon: certificate1,
  },
  {
    title: "Carbon Trust Standard",
    description:
      "Recognized for our efforts in reducing carbon emissions and environmental impact.",
    icon: certificate2,
  },
  {
    title: "Sustainability Commitment",
    description:
      "We are validated by top-tier sustainability benchmarks and ethical production standards.",
    icon: certificate3,
  },
];



const About = () => {
  return (
    <>
      <div className="py-16 px-6 md:px-20 bg-green-500 mt-10 w-100%">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-white">About Us</h2>
            <p className="text-white">
              NutriPlanet is dedicated to providing high-quality, sustainable
              animal feed solutions. We combine science and care to support
              healthy livestock and a greener planet.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={henfeed}
              alt="Eco-Friendly Ingredients"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-800 px-6 md:px-16 lg:px-32 py-16 space-y-20">
        {/* Section 1: Introduction */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Transforming Animal Nutrition Since 2018
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our company was founded with a mission to provide high-quality,
              science-based animal feed solutions. Since 2018, we have been
              dedicated to improving animal health and farm productivity.
              <br />
              <br />
              With a focus on research, innovation, and sustainability, we
              continue to serve thousands of customers across the region.
            </p>
          </div>
          <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center">
            {/* Placeholder for image */}
            <img
              src={dog}
              alt="About Us"
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Section 2: Stats & Mission/Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
          {/* Key Highlights */}
          <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Key Highlights
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span> 1000+ Happy Farmers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span> 80% Lower Cost for
                Farmers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span> 70% Better Feed
                Efficiency
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔</span> 6x Yearly Growth
              </li>
            </ul>
          </div>

          {/* Mission & Vision */}
          <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Our Mission
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              To deliver sustainable, effective feed solutions that increase
              productivity and promote animal well-being.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-green-700">
              Our Vision
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To become a global leader in animal nutrition by empowering
              farmers with innovative, affordable solutions.
            </p>
          </div>
        </section>

        {/* Section 3: Core Values */}
        <section className="bg-gray-50 py-20 px-4 md:px-16 lg:px-32 w-100%">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            What Drives Us Forward
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-4">
                    {React.cloneElement(value.icon, { className: "w-6 h-6" })}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-center text-gray-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-center text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="bg-green-600 text-white py-12 px-6 md:px-16 rounded-xl shadow-md mt-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              {/* Left Side: Text */}
              <div className="md:w-1/2 space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Why Choose Our Feed Solutions?
                </h3>
                <p className="text-white text-sm md:text-base leading-relaxed">
                  Trusted by thousands of farmers, our science-backed,
                  eco-friendly feed improves livestock health and increases
                  productivity — sustainably.
                </p>
              </div>

              {/* Right Side: Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <Link to="/contact">
                  <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition w-48 text-center">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
     <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold text-green-600 uppercase mb-2">
          Recognized Excellence
        </p>
        <h2 className="text-4xl font-bold mb-4">Our Certifications</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Our commitment to sustainability is validated by leading industry certifications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <img
                src={cert.icon}
                alt={cert.title}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
