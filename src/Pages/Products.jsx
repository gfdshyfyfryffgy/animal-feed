import React from "react";
import { Link } from "react-router-dom";
import { Mail, Drumstick, Droplet, Leaf } from "lucide-react";
import hen from "../assets/hen.jpg";
import fish from "../assets/fish.jpg";
import cattle from "../assets/cattle.jpg";
import sheep from "../assets/sheep.jpg"; // Adjust the path as necessary

const categories = [
  {
    title: "Poultry Feed",
    image: hen,
    description:
      "Formulated to improve egg quality, broiler weight gain, and chick survival with essential nutrients for poultry health."
  },
  {
    title: "Aquaculture Feed",
    image: fish,
    description:
      "Balanced formulas for fish and shrimp, promoting rapid growth, resistance to disease, and sustainable aquaculture performance."
  },
  {
    title: "Cattle Feed",
    image: cattle,
    description:
      "Formulated to boost milk yield, enhance digestion, and maintain overall herd health with essential nutrients."
  }
];

const extraProducts = [
  {
    icon: <Drumstick size={80} className="text-green-600 mx-auto mb-4" />,
    title: "Protein",
    desc: "A dry protein powder used as a feed ingredient for aquaculture, pet food and other animal feed."
  },
  {
    icon: <Droplet size={80} className="text-green-600 mx-auto mb-4" />,
    title: "Oil",
    desc: "A lipid product for use as a feed ingredient for aquaculture and other animal feed."
  },
  {
    icon: <Leaf size={80} className="text-green-600 mx-auto mb-4" />,
    title: "Grow",
    desc: "A natural fertilizer made from Black Soldier Fly frass and their organic waste, for use in agriculture."
  }
];

const Products = () => {
  return (
    <>
      {/* Section 1 - Intro */}
      <div className="py-16 px-6 md:px-20 bg-green-500 mt-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-white">Our Product Range</h2>
            <p className="text-white">
              At NutriPlanet, our products are formulated with sustainable ingredients
              to promote health and growth in animals while supporting eco-friendly practices.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={sheep}
              alt="Eco-Friendly Ingredients"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - Categories */}
      <div className="bg-white px-6 py-16 md:px-16">
        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Nutrition Categories
          </span>
          <h2 className="text-3xl font-bold mt-4">
            Specialized Feed for Every Livestock Type
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            NutriPlanet delivers science-backed formulas tailored for poultry, aquaculture,
            and livestock. Designed for growth, immunity, and optimal productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 text-center"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2B - Extra Products */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {extraProducts.map((product, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl p-6 text-center shadow hover:shadow-md"
            >
              {product.icon}
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
              <a
                href={`mailto:sochinnovative19@gmail.com?subject=Inquiry about ${product.title}`}
                className="inline-flex items-center gap-2 text-green-600 hover:underline font-semibold"
              >
                <Mail size={16} /> More Information
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 - Call to Action */}
      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Animal Nutrition?
            </h2>
            <p className="text-gray-600">
              Contact us today to learn more about our products and how we can
              support your farming needs.
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
    </>
  );
};

export default Products;
