import React from "react";
import { Leaf, ShieldCheck, Droplets } from "lucide-react";

export default function ApproachSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      {/* Label */}
      <div className="text-center mb-4">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Our Approach
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Innovative Feed Solutions
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
        We combine cutting-edge research with sustainable practices to create animal feed that’s better for animals, farmers, and the planet.
      </p>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <Leaf className="text-green-600 w-8 h-8 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Eco-Friendly</h3>
          <p className="text-gray-600 mt-2">
            Our feed is made with sustainable ingredients that reduce environmental impact while maintaining optimal nutrition.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <ShieldCheck className="text-green-600 w-8 h-8 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Quality Assured</h3>
          <p className="text-gray-600 mt-2">
            Rigorous testing ensures our products meet the highest standards for animal health and performance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <Droplets className="text-green-600 w-8 h-8 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">Resource Efficient</h3>
          <p className="text-gray-600 mt-2">
            Our production process uses 70% less water and 80% less land compared to traditional feed production.
          </p>
        </div>
      </div>
    </section>
  );
}