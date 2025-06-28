import React, { useEffect } from "react";
import hen from "../assets/hen.png";
import dog from "../assets/dog.jpg";
import henfeed from "../assets/henfeed.jpg";
import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg";
import certificate3 from "../assets/certificate3.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Leaf,
  Star,
  Handshake,
  Lightbulb,
  Eye,
  ShieldCheck,
} from "lucide-react";

// Brand palette
const PALETTE = {
  cream: "#FFF8E8",
  lightCream: "#F7EED3",
  greenish: "#AAB396",
  darkBrown: "#674636",
};

const values = [
  {
    icon: <Leaf />,
    title: "Sustainability First",
    desc: "We prioritize eco-friendly solutions for long-term farming success.",
    iconBg: PALETTE.lightCream,
    iconColor: PALETTE.greenish,
  },
  {
    icon: <Star />,
    title: "Quality & Excellence",
    desc: "Our products are rigorously tested for quality and performance.",
    iconBg: PALETTE.lightCream,
    iconColor: PALETTE.darkBrown,
  },
  {
    icon: <Handshake />,
    title: "Partnership",
    desc: "We grow together with our farmers and ecosystem partners.",
    iconBg: PALETTE.lightCream,
    iconColor: PALETTE.greenish,
  },
  {
    icon: <Lightbulb />,
    title: "Innovation",
    desc: "We improve continuously using scientific feedback and data.",
    iconBg: PALETTE.lightCream,
    iconColor: PALETTE.darkBrown,
  },
  {
    icon: <Eye />,
    title: "Transparency",
    desc: "We’re open about our processes, results, and commitments.",
    iconBg: PALETTE.lightCream,
    iconColor: PALETTE.greenish,
  },
  {
    icon: <ShieldCheck />,
    title: "Responsibility",
    desc: "We hold ourselves to the highest standards of accountability.",
    iconBg: PALETTE.lightCream,
    iconColor: PALETTE.darkBrown,
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="py-16 px-6 md:px-20"
        style={{ background: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)" }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2" data-aos="fade-right">
            <h2 className="text-5xl font-bold mb-4" style={{ color: PALETTE.darkBrown }}>
              About Us
            </h2>
            <p className="font-bold" style={{ color: PALETTE.darkBrown }}>
              NutriPlanet is dedicated to providing high-quality, sustainable animal feed solutions. We combine science and care to support healthy livestock and a greener planet.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <img
              src={hen}
              alt="Eco-Friendly Ingredients"
            
            />
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div
        className="px-6 md:px-16 lg:px-32 py-20 space-y-24"
       style={{ backgroundColor: "#AAB396" }}
      >
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4 text-[#3E3F5B]">
              Transforming Animal Nutrition Since 2018
            </h2>
            <p className="leading-relaxed text-bold text-[#3E3F5B]">
              Our company was founded with a mission to provide high-quality, science-based animal feed solutions. Since 2018, we have been dedicated to improving animal health and farm productivity.
              <br />
              <br />
              With a focus on research, innovation, and sustainability, we continue to serve thousands of customers across the region.
            </p>
          </div>
          <div
            className="h-64 rounded-xl overflow-hidden shadow-md flex items-center"
            style={{ backgroundColor: PALETTE.lightCream }}
            data-aos="fade-left"
          >
            <img
              src={dog}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
     

        {/* Highlights + Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className="shadow-md rounded-xl p-8 border hover:shadow-lg transition"
            style={{ backgroundColor: PALETTE.cream, borderColor: PALETTE.lightCream, color: PALETTE.darkBrown }}
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: PALETTE.greenish }}>
              Key Highlights
            </h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">✔ 1000+ Happy Farmers</li>
              <li className="flex items-start gap-2">
                ✔ 80% Lower Cost for Farmers
              </li>
              <li className="flex items-start gap-2">
                ✔ 70% Better Feed Efficiency
              </li>
              <li className="flex items-start gap-2">✔ 6x Yearly Growth</li>
            </ul>
          </div>
          <div
            className="shadow-md rounded-xl p-8 border hover:shadow-lg transition"
            style={{ backgroundColor: PALETTE.cream, borderColor: PALETTE.lightCream, color: PALETTE.darkBrown }}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: PALETTE.greenish }}>
              Our Mission
            </h3>
            <p className="leading-relaxed mb-4">
              To deliver sustainable, effective feed solutions that increase productivity and promote animal well-being.
            </p>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: PALETTE.greenish }}>
              Our Vision
            </h3>
            <p className="leading-relaxed">
              To become a global leader in animal nutrition by empowering farmers with innovative, affordable solutions.
            </p>
          </div>
        </section>
           </div>

        {/* Core Values */}
        <section
          className="py-20 px-4 md:px-16 lg:px-32"
          style={{ backgroundColor: PALETTE.lightCream }}
        >
          <h2
            className="text-4xl font-bold text-center mb-16"
            style={{ color: PALETTE.darkBrown }}
            data-aos="fade-up"
          >
            What Drives Us Forward
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border"
                style={{
                  backgroundColor: PALETTE.cream,
                  borderColor: PALETTE.lightCream,
                  color: PALETTE.darkBrown,
                }}
                data-aos="zoom-in-up"
                data-aos-delay={i * 100}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="rounded-full p-4"
                    style={{
                      backgroundColor: value.iconBg,
                    }}
                  >
                    {React.cloneElement(value.icon, {
                      style: { color: value.iconColor, width: "2rem", height: "2rem" },
                    })}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-center mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-center leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section data-aos="fade-up">
          <div
            className="py-12 px-6 md:px-16 rounded-xl shadow-md"
            style={{
              backgroundColor: PALETTE.greenish,
              color: PALETTE.cream,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="md:w-1/2 space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Why Choose Our Feed Solutions?
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Trusted by thousands of farmers, our science-backed, eco-friendly feed improves livestock health and increases productivity — sustainably.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <Link to="/contact">
                  <button
                    className="font-semibold px-6 py-2 rounded-md transition w-48 text-center"
                    style={{
                      backgroundColor: PALETTE.cream,
                      color: PALETTE.darkBrown,
                    }}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section
          className="py-20 px-6 md:px-20"
          data-aos="fade-up"
          style={{ backgroundColor: PALETTE.cream, color: PALETTE.darkBrown }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <p
              className="text-sm font-semibold uppercase mb-2"
              style={{ color: PALETTE.greenish, letterSpacing: "0.12em" }}
            >
              Recognized Excellence
            </p>
            <h2 className="text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              Our commitment to sustainability is validated by leading industry certifications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-6 shadow hover:shadow-md transition"
                  style={{
                    backgroundColor: PALETTE.lightCream,
                    borderColor: PALETTE.greenish,
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={cert.icon}
                    alt={cert.title}
                    className="w-16 h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </>
  );
};

export default About;