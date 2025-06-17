// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react'

const products = [
  { name: 'Livestock Feed', path: '/products#livestock' },
  { name: 'Poultry Feed', path: '/products#poultry' },
  { name: 'Aquaculture Feed', path: '/products#aquaculture' },
  { name: 'Specialty Feed', path: '/products#specialty' },
]

const company = [
  { name: 'About Us', path: '/about' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Our Process', path: '/process' },
  { name: 'Careers', path: '/careers' },
]

export default function Footer() {
  return (
    <footer>
      {/* Call to Action Bar
      <div className="bg-green-600 text-white py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 min-h-[200px]">
        <div className="text-2xl font-bold text-center md:text-left w-80">
          Why choose our animal feed approach?
        </div>
        <div className="max-w-xl text-center md:text-left">
          Join thousands of farmers who have switched to our sustainable feed solutions and seen improved animal health and productivity.
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3">
          <Link to="/contact">
            <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded-lg shadow w-48 hover:bg-gray-100 transition">
              Contact Us
            </button>
          </Link>
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-lg text-gray-800 w-60"
          />
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="bg-gray-900 text-gray-300 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Social */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded mr-3" />
              <span className="text-xl font-bold text-white">NutriPlanet</span>
            </div>
            <p className="text-sm mb-4">
              Revolutionizing animal feed with sustainable solutions for a better planet.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="hover:text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} className="hover:text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="hover:text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="hover:text-white" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              {products.map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white cursor-pointer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {company.map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-white cursor-pointer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">123 Green Street, Eco City, 10001</p>
            <p className="text-sm mt-2">
              <a href="mailto:info@nutriplanet.com" className="hover:text-white">
                info@nutriplanet.com
              </a>
            </p>
            <p className="text-sm mt-2">
              <a href="tel:+1234567890" className="hover:text-white">
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-500">&copy; 2025 NutriPlanet. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white cursor-pointer">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
