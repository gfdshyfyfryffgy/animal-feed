import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Product data
const categories = [
  {
    title: "Chilled",
    icon: "🥔",
    prefix: "chilled",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
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
    icon: "🫕",
    prefix: "dehydrated",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
    items: [],
  },
  {
    title: "Freeze Dried Product - IQF",
    icon: "❄️",
    prefix: "iqf",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
    items: [],
  },
  {
    title: "Beans, Pulses & Grains",
    icon: "🌾",
    prefix: "pulses-grains",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
    items: [],
  },
  {
    title: "Spices",
    icon: "🌶️",
    prefix: "spices",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
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
    icon: "🐄",
    prefix: "feed",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
    items: [
      { name: "Oil Cake", slug: "oil-cake" },
      { name: "Meals", slug: "meals" },
      { name: "FMA", slug: "fma" },
      { name: "Other Additives", slug: "other-additives" },
    ],
  },
  {
    title: "Dry Fruits",
    icon: "🥜",
    prefix: "dry-fruits",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
    items: [
      { name: "Raisin", slug: "raisin" },
      { name: "Cashew", slug: "cashew" },
      { name: "Almond", slug: "almond" },
    ],
  },
  {
    title: "Fresh Fruits & Vegetables",
    icon: "🍎",
    prefix: "fresh-produce",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
    items: [],
  },
  {
    title: "Coffee & Tea",
    icon: "☕",
    prefix: "coffee-tea",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
    items: [
      { name: "Black Tea", slug: "black-tea" },
      { name: "Green Tea", slug: "green-tea" },
      { name: "Robusta Coffee", slug: "robusta-coffee" },
      { name: "Arabica Coffee", slug: "arabica-coffee" },
    ],
  },
  {
    title: "Millets & Super Foods",
    icon: "🌱",
    prefix: "millets-superfoods",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
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
    icon: "🚓",
    prefix: "oils",
    iconColor: "bg-[#F6F1DE]",
    color: "text-[#3E3F5B]",
    items: [
      { name: "Rapeseed Oil", slug: "rapeseed-oil" },
      { name: "Soybean Oil", slug: "soybean-oil" },
      { name: "Mustard Oil", slug: "mustard-oil" },
    ],
  },
];

function ProductCard({ title, icon, color, iconColor, items, prefix }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${prefix}`)}
      className="min-w-[260px] max-w-[275px] bg-white rounded-2xl shadow-md border border-[#F6F1DE] p-6 mx-2 flex flex-col items-center transition hover:scale-[1.09] hover:shadow-xl group cursor-pointer"
    >
      <div className={`w-14 h-14 ${iconColor} rounded-full flex items-center justify-center text-3xl mb-3`}>
        {icon}
      </div>
      <div className={`font-bold text-lg mb-2 ${color} `}>{title}</div>
      <ul className="text-sm text-[#3E3F5B] font-medium space-y-1 w-full text-center">
        {items.length > 0 ? (
          items.map((item) => (
            <li
              key={item.slug}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/${prefix}/${item.slug}`);
              }}
              className=" transition cursor-pointer"
            >
              {item.name}
            </li>
          ))
        ) : (
          <li className="text-xs text-gray-400 italic text-center">Coming Soon...</li>
        )}
      </ul>
    </div>
  );
}


export default function ProductInfiniteScroll() {
  const scrollRef = useRef(null);
  const [productCards] = useState([...categories, ...categories, ...categories]); // More for seamless scroll
  const [paused, setPaused] = useState(false);
  const pauseTimeout = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Auto scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 1.5;
    let reqId;

    const scroll = () => {
      if (!paused) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 3) el.scrollLeft = 0;
      }
      reqId = requestAnimationFrame(scroll);
    };

    reqId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(reqId);
  }, [paused]);

  // Pause auto-scroll for 2s on interaction
  const temporarilyPause = () => {
    setPaused(true);
    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setPaused(false), 2000);
  };

  // Mouse drag scroll
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      slider.classList.add("cursor-grabbing");
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      temporarilyPause();
    };
    const onMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
    };
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      temporarilyPause();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mouseleave", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mouseleave", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const handleScroll = (direction) => {
    temporarilyPause();
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 bg-[#F6F1DE] relative">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-[#3E3F5B] mb-8 text-center">Our Products</h2>

        <div className="flex justify-center mb-4 gap-2">
          <button
            onClick={() => handleScroll("left")}
            className="bg-white border border-[#F6F1DE] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#f6f1de] text-[#3E3F5B] text-xl"
            style={{ cursor: "pointer" }}
          >
            &#8592;
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="bg-white border border-[#F6F1DE] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-[#f6f1de] text-[#3E3F5B] text-xl text-center"
            style={{ cursor: "pointer" }}
          >
            &#8594;
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide py-2 cursor-grab select-none"
          style={{ scrollBehavior: "smooth", minHeight: 320, userSelect: "none" }}
          onMouseEnter={temporarilyPause}
          onMouseLeave={() => setPaused(false)}
        >
          {productCards.map((cat, idx) => (
            <ProductCard key={cat.title + idx} {...cat} />
          ))}
        </div>
      </div>

      {/* Gradient edges */}
      <div className="pointer-events-none absolute top-0 left-0 w-14 h-full bg-gradient-to-r from-[#F6F1DE] to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 w-14 h-full bg-gradient-to-l from-[#F6F1DE] to-transparent z-10" />

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .cursor-grabbing { cursor: grabbing !important; }
      `}</style>
    </section>
  );
}