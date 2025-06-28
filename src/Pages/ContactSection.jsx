import React, { useState } from "react";
import emailjs from "@emailjs/browser"; 

import horse from "../assets/horse.jpg";

const COLORS = {
  cream: "#FFF8E8",
  lightCream: "#F7EED3",
  greenish: "#AAB396",
  darkBrown: "#674636",
  navy: "#243642",
  teal: "#387478",
  button: "#3E3F5B",
  buttonHover: "#8AB2A6",
};

const farmSizes = ["Small (<50)", "Medium (50–200)", "Large (>200)"];
const animalTypes = ["Poultry", "Cattle", "Swine", "Aquaculture", "Other"];

export default function ContactSection() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    company: "",
    farm_size: "",
    animal_type: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.from_name.trim()) errs.from_name = "Name is required.";
    if (!form.from_email.match(/^[^@]+@[^@]+\.[^@]+$/))
      errs.from_email = "Invalid email address.";
    if (!form.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        "service_flmd3qx",
        "template_v8greqs",
        {
          ...form,
          time: new Date().toLocaleString(),
        },
        "DPXwOwjIRRQRdSBNQ"
      );
      setSuccess("Thank you! We'll get back to you shortly.");
      setForm({
        from_name: "",
        from_email: "",
        company: "",
        farm_size: "",
        animal_type: "",
        message: "",
      });
    } catch (error) {
      setSuccess("An error occurred. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="w-full">
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-[#F6F1DE] to-[#E4E9F7]">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#3E3F5B] mb-4">Contact Us</h2>
            <p className="text-[#3E3F5B]">
              NutriPlanet offers sustainable animal feed solutions. Let's connect and grow together.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={horse} alt="Contact" className="rounded-2xl shadow w-full object-cover max-h-96" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 bg-[#FFF8E8]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-semibold text-[#3E3F5B] mb-2">Send us a Message</h3>
            <p className="mb-6 text-[#674636]">We’ll respond within 24 hours.</p>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#3E3F5B]">Full Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    className={`w-full rounded px-3 py-2 mt-1 border ${errors.from_name ? "border-red-500" : "border-[#AAB396]"} bg-[#F7EED3]`}
                  />
                  {errors.from_name && <p className="text-red-500 text-xs mt-1">{errors.from_name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3E3F5B]">Email Address *</label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    className={`w-full rounded px-3 py-2 mt-1 border ${errors.from_email ? "border-red-500" : "border-[#AAB396]"} bg-[#F7EED3]`}
                  />
                  {errors.from_email && <p className="text-red-500 text-xs mt-1">{errors.from_email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#3E3F5B]">Company/Farm Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded px-3 py-2 mt-1 border border-[#AAB396] bg-[#F7EED3]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3E3F5B]">Farm Size</label>
                  <select
                    name="farm_size"
                    value={form.farm_size}
                    onChange={handleChange}
                    className="w-full rounded px-3 py-2 mt-1 border border-[#AAB396] bg-[#F7EED3]"
                  >
                    <option value="">Select farm size</option>
                    {farmSizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3E3F5B]">Animal Type</label>
                <select
                  name="animal_type"
                  value={form.animal_type}
                  onChange={handleChange}
                  className="w-full rounded px-3 py-2 mt-1 border border-[#AAB396] bg-[#F7EED3]"
                >
                  <option value="">Select animal type</option>
                  {animalTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3E3F5B]">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full rounded px-3 py-2 mt-1 border ${errors.message ? "border-red-500" : "border-[#AAB396]"} bg-[#F7EED3]`}
                  placeholder="Tell us about your animal feed needs..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#3E3F5B] text-white py-3 rounded-lg font-medium hover:bg-[#8AB2A6] transition-colors"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
              {success && <p className="mt-3 text-center text-[#387478]">{success}</p>}
            </form>
          </div>

          <div className="space-y-8 text-sm">
            <div>
              <h3 className="text-xl font-semibold text-[#3E3F5B] mb-2">Get in Touch</h3>
              <p className="text-[#674636] mb-3">We’re here to help. Contact us by phone, email, or WhatsApp.</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#387478]">Email</p>
                  <a href="mailto:info@nutriplanet.com" className="text-[#3E3F5B] block">info@nutriplanet.com</a>
                </div>
                <div>
                  <p className="font-semibold text-[#387478]">Phone</p>
                  <a href="tel:+918307937782" className="text-[#3E3F5B] block">+91 8307937782</a>
                </div>
                <div>
                  <p className="font-semibold text-[#387478]">WhatsApp</p>
                  <a href="https://wa.me/918307937782" target="_blank" rel="noopener noreferrer" className="text-[#387478] underline">Chat on WhatsApp</a>
                </div>
                <div>
                  <p className="font-semibold text-[#387478]">Office</p>
                  <p className="text-[#3E3F5B]">Main Model Town, Panipat, Haryana, India</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow border-2 border-[#AAB396]">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Main+Model+Town,+Panipat,+Haryana,+India&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-[#F6F1DE] to-[#E4E9F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#3E3F5B] mb-4">Thank You for Reaching Out!</h2>
          <p className="text-lg text-[#3E3F5B] mb-6">We appreciate your interest in NutriPlanet. Our team will respond shortly. Meanwhile, explore our offerings.</p>
          <a href="/products" className="inline-block bg-[#3E3F5B] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#8AB2A6] transition-colors">Discover Our Products →</a>
        </div>
      </section>
    </div>
  );
}
