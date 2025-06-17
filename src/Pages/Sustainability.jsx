import React from "react";
import hen from "../assets/hen.jpg"; // Use different images if you have them
// import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
const Sustainability = () => {
  const sustainabilityPillars = [
    {
      icon: "🌱",
      title: "Sustainable Sourcing",
      description: "We source ingredients locally and use agricultural by-products that would otherwise go to waste.",
      metrics: ["80% locally sourced ingredients", "Upcycled agricultural co-products"]
    },
    {
      icon: "♻️",
      title: "Circular Economy",
      description: "We implement closed-loop systems that minimize waste and maximize resource efficiency.",
      metrics: ["Zero waste production", "100% recyclable packaging"]
    },
    {
      icon: "💧",
      title: "Resource Conservation",
      description: "Our production processes use significantly less water and energy than conventional methods.",
      metrics: ["70% less water usage", "60% energy reduction"]
    },
    {
      icon: "🌍",
      title: "Carbon Reduction",
      description: "We actively work to minimize our carbon footprint across our entire supply chain.",
      metrics: ["80% lower carbon emissions", "Carbon-neutral shipping"]
    }
  ];

  const faqs = [
    {
      question: 'How quickly can you deliver feed?',
      answer: 'We typically deliver within 3-5 business days for standard orders. Emergency deliveries can be arranged within 24-48 hours.',
    },
    {
      question: 'Do you offer custom feed formulations?',
      answer: 'Yes! Our nutrition experts can create custom formulations based on your specific animal needs and farm conditions.',
    },
    {
      question: 'What makes your feed sustainable?',
      answer: 'We use upcycled agricultural by-products, local sourcing, and energy-efficient production methods to reduce environmental impact by up to 80%.',
    },
    {
      question: 'Do you provide nutritional support?',
      answer: 'Our team includes certified animal nutritionists who provide ongoing support and feeding recommendations.',
    },
  ];

  return (
    <div>
      {/* --- Product Range Section --- */}
      <div className="py-16 px-6 md:px-20 bg-green-500 mt-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Our Commitment to Sustainability
            </h2>
            <p className="text-white">
              Discover how we’re creating a more sustainable future for animal nutrition and our planet.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={hen}
              alt="Eco-Friendly Ingredients"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* --- Mission Section --- */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              Our Mission
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Creating a World Without Waste
          </h2>
          <p className="text-gray-600 text-lg">
            At NutriPlanet, sustainability isn't just a buzzword—it's the foundation of everything we do.
            We believe that animal nutrition can be both high-performing and environmentally responsible.
            Our mission is to transform the feed industry by creating products that are good for animals,
            farmers, and the planet.
          </p>
        </div>
      </section>

      {/* --- Sustainability Pillars --- */}
      <div className="bg-green-50 p-8">
        <div className="text-center mb-8">
         <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              Our Approach
            </span>
          <h2 className="text-3xl font-bold mt-2">Four Pillars of Sustainability</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Our comprehensive approach to sustainability addresses every aspect of our business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sustainabilityPillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-gray-600 mb-4">{pillar.description}</p>
              <ul className="space-y-2 text-left">
                {pillar.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start text-green-700">
                    <span className="mr-2">→</span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- FAQ Section --- */}
     <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
    <p className="mt-4 text-gray-600">
      Quick answers to common questions about our products and services.
    </p>
  </div>

  <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {faqs.map((faq, index) => (
      <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
        <dd className="mt-2 text-gray-700">{faq.answer}</dd>
      </div>
    ))}
  </div>
</section>


      {/* --- CTA Section --- */}
     <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Side Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
            Ready to Build a More Sustainable Future?
            </h2>
            <p className="text-gray-600">
              Partner with NutriPlanet to reduce your environmental impact while enhancing animal nutrition. 
  Let's grow together — responsibly and sustainably.
            </p>
          </div>

          {/* Right Side Button */}
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
}

export default Sustainability;
