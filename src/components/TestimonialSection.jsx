import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

// Testimonial data
const testimonials = [
  {
    name: "Atul Tyagi",
    image: "https://i.pravatar.cc/100?img=1", // Use your own image URL
    quote:
      "Innovative Soch has been a great company to work with. They are very knowledgeable in the field of animal feeds and they really helped us understand the different options that were out there. Highly Recommended.",
  },
  {
    name: "Priya Mehra",
    image: "https://i.pravatar.cc/100?img=2",
    quote:
      "Professional and reliable service every time. We trust Innovative Soch for consistent supply and excellent customer care.",
  },
  {
    name: "John Matthew",
    image: "https://i.pravatar.cc/100?img=3",
    quote:
      "The support and quality we received from the team was outstanding. Highly professional and committed people.",
  },
];

export default function TestimonialSection() {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2
          className="text-4xl font-bold text-[#3E3F5B]"
          data-aos="fade-up"
        >
          WHAT PEOPLE SAY <span className="font-light">ABOUT</span>
        </h2>
        <h3
          className="text-2xl font-light text-[#3E3F5B] mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          INNOVATIVE SOCH
        </h3>
        <p
          className="mt-4 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Don’t just take our word for it. These are some of our real customers and their words.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto px-6" data-aos="fade-up" data-aos-delay="300">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="text-center px-4">
              <div className="text-5xl text-red-500 mb-4">“</div>
              <p className="italic text-xl text-[#7B7B7B] leading-relaxed">
                {item.quote}
              </p>
              <div className="mt-6 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#3E3F5B]"
                />
                <p className="mt-2 font-semibold text-[#3E3F5B]">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
