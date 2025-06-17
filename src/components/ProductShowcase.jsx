import React from "react";

const leaders = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Expert in sustainable agriculture and animal nutrition with over 20 years of industry leadership.",
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Technology innovator driving efficiency in sustainable feed manufacturing systems worldwide.",
  },
  {
    name: "Emma Thompson",
    role: "Head of Operations",
    bio: "Leads global operations to implement sustainable farming practices and ensure product quality.",
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-green-600 uppercase mb-2 bg-green-200 rounded-2xl w-25 ml-130">Our Team</p>
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Leadership</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our diverse team of experts brings together decades of experience in
          nutrition, sustainability, and agriculture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {leader.name}
              </h3>
              <p className="text-green-600 font-medium mb-2">{leader.role}</p>
              <p className="text-sm text-gray-600">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
