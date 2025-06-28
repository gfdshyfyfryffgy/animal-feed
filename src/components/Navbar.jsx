import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const categories = [
  {
    title: "Chilled",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🥔",
    prefix: "chilled",
    items: [
      { name: "Potato", slug: "potato" },
      { name: "Onion", slug: "onion" },
      { name: "Tomato", slug: "tomato" },
      { name: "Garlic", slug: "garlic" },
      { name: "Rose Onion", slug: "rose-onion" },
      { name: "Shallot Onion", slug: "shallot-onion" },
    ],
  },
  {
    title: "Dehydrated Product",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🧅",
    prefix: "dehydrated",
    items: [],
  },
  {
    title: "Freeze Dried Product - IQF",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "❄",
    prefix: "iqf",
    items: [],
  },
  {
    title: "Beans, Pulses & Grains",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🌾",
    prefix: "pulses-grains",
    items: [],
  },
  {
    title: "Spices",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🌶",
    prefix: "spices",
    items: [
      { name: "Cumin", slug: "cumin" },
      { name: "Red Chilli", slug: "red-chilli" },
      { name: "Turmeric", slug: "turmeric" },
      { name: "Pepper", slug: "pepper" },
      { name: "Cassia", slug: "cassia" },
      { name: "Grounded Spices", slug: "grounded" },
    ],
  },
  {
    title: "Feed, Additives & Supplements",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🐄",
    prefix: "feed",
    items: [
      { name: "Oil Cake", slug: "oil-cake" },
      { name: "Meals", slug: "meals" },
      { name: "FMA", slug: "fma" },
      { name: "Other Additives", slug: "other-additives" },
    ],
  },
  {
    title: "Dry Fruits",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🥜",
    prefix: "dry-fruits",
    items: [
      { name: "Raisin", slug: "raisin" },
      { name: "Cashew", slug: "cashew" },
      { name: "Almond", slug: "almond" },
    ],
  },
  {
    title: "Fresh Fruits & Vegetables",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🍎",
    prefix: "fresh-produce",
    items: [],
  },
  {
    title: "Coffee & Tea",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "☕",
    prefix: "coffee-tea",
    items: [
      { name: "Black Tea", slug: "black-tea" },
      { name: "Green Tea", slug: "green-tea" },
      { name: "Robusta Coffee", slug: "robusta-coffee" },
      { name: "Arabica Coffee", slug: "arabica-coffee" },
    ],
  },
  {
    title: "Millets & Super Foods",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🌱",
    prefix: "millets-superfoods",
    items: [
      { name: "Chia Seed", slug: "chia-seed" },
      { name: "Foxtail", slug: "foxtail" },
      { name: "Proso", slug: "proso" },
      { name: "Kodo", slug: "kodo" },
      { name: "Kutki", slug: "kutki" },
      { name: "Other Millets", slug: "other-millets" },
    ],
  },
  {
    title: "Oils",
    color: "text-[#3E3F5B]",
    iconColor: "bg-[#F6F1DE]",
    icon: "🛢",
    prefix: "oils",
    items: [
      { name: "Rapeseed Oil", slug: "rapeseed-oil" },
      { name: "Soybean Oil", slug: "soybean-oil" },
      { name: "Mustard Oil", slug: "mustard-oil" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsHover, setProductsHover] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Careers", path: "/Careers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white shadow fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold" style={{ color: "#3E3F5B" }}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            NutriPlanet
          </Link>
        </h1>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) =>
            item.name === "Products" ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setProductsHover(true)}
                onMouseLeave={() => setProductsHover(false)}
              >
                <li>
                  <Link
                    to={item.path}
                    className={`hover:text-[#8AB2A6] ${isActive(item.path) ? "text-[#8AB2A6] font-semibold" : ""
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              </div>
            ) : (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`hover:text-[#8AB2A6] ${isActive(item.path) ? "text-[#8AB2A6] font-semibold" : ""
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mega Menu */}
      {productsHover && (
        <div
  className="absolute left-0 right-0 top-full mt-[-25px] z-50 shadow-lg rounded-2xl max-h-[80vh] overflow-y-auto"
  onMouseEnter={() => setProductsHover(true)}
  onMouseLeave={() => setProductsHover(false)}
>

          <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-b-2xl border-t border-gray-200 px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {categories.map((menu, index) => (
                <div
                  key={index}
                  className={`px-2 ${index !== 0 ? "border-l border-gray-200" : ""
                    }`}
                >
                  <Link
                    to={`/${menu.prefix}`}
                    onClick={() => setProductsHover(false)}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div
                      className={`w-14 h-14 ${menu.iconColor} flex items-center justify-center rounded-full text-2xl`}
                    >
                      {menu.icon}
                    </div>
                    <h4
                      className={`text-base font-semibold mt-2 ${menu.color}`}
                    >
                      {menu.title}
                    </h4>
                  </Link>
                  <div
                    className="w-8 h-1 mt-1 rounded-full mx-auto"
                    style={{ backgroundColor: "#ACD3A8" }}
                  ></div>
                  <ul className="text-sm text-[#3E3F5B] font-medium space-y-1 mt-3 text-center">
                    {menu.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={`/${menu.prefix}/${item.slug}`}
                          onClick={() => setProductsHover(false)}
                          className="block hover:text-[#8AB2A6] transition duration-150 ease-in-out"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium bg-white shadow">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block hover:text-[#8AB2A6] ${isActive(item.path) ? "text-[#8AB2A6] font-semibold" : ""
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
