import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import agrovet from "../assets/agrovet1.png";
import godrej from "../assets/gd.png";
import tiwana from "../assets/cg.png";
import star from "../assets/st.png";

const logos = [
  { src: godrej, alt: "Godrej" },
  { src: agrovet, alt: "Agrovet" },
  { src: tiwana, alt: "Tiwana" },
  { src: star, alt: "Star" },
];

export default function CustomerLogosSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const repeatCount = 6; // Enough for a long seamless scroll
  const repeated = Array.from({ length: repeatCount }, () => logos).flat();

  // Marquee pause on hover logic
  const marqueeRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;
    if (paused) {
      marqueeEl.style.animationPlayState = "paused";
    } else {
      marqueeEl.style.animationPlayState = "running";
    }
  }, [paused]);

  return (
    <section className="bg-[#F6F1DE] py-16 overflow-hidden relative">
      <div className="text-center mb-10 px-4" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3E3F5B] mb-3">
          SOME OF OUR <span className="font-normal">TOP NOTICABLE CLIENTS</span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Everybody needs reliable suppliers. We are a trusted partner to some of the most high-value brands all over the world.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade masks for pro look */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#F6F1DE] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#F6F1DE] to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div
          ref={marqueeRef}
          className="marquee-track flex items-center gap-12"
        >
          {repeated.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-36 h-24   rounded-xl mx-2 group transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 40}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              style={{
                cursor: "pointer",
                transition: " transform 0.3s, background 0.3s",
                // border: "1px solid #ececec",
                // filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.04))",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-14 object-contain transition-opacity duration-300"
                style={{
                  width: "100px",
                  height:"100px",
                  opacity: 0.85,
                  transition: "opacity 0.3s, filter 0.3s",
                  mixBlendMode: "multiply", // for transparent logos
                }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee animation */}
      <style>{`
        .marquee-track {
          min-width: 200%;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track > div:hover {
          // background: #f1f7ee !important;
          // box-shadow: 0 4px 24px 0 rgba(138,178,166,0.13);
          transform: scale(2.2);
        }
        .marquee-track > div:hover img {
          opacity: 1 !important;
          filter: drop-shadow(0 2px 12px #8ab2a633);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}