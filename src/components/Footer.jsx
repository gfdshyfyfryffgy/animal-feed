import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const products = [
  { name: 'Livestock Feed', path: '/products#livestock' },
  { name: 'Poultry Feed', path: '/products#poultry' },
  { name: 'Aquaculture Feed', path: '/products#aquaculture' },
  { name: 'Specialty Feed', path: '/products#specialty' },
];

const company = [
  { name: 'About Us', path: '/about' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Our Process', path: '/process' },
  { name: 'Careers', path: '/careers' },
];

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#3E3F5B] text-[#fff] py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Social */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded mr-3" style={{ backgroundColor: '#8AB2A6' }} />
              <span className="text-xl font-bold text-white">NutriPlanet</span>
            </div>
            <p className="text-sm mb-4">
              Revolutionizing animal feed with sustainable solutions for a better planet.
            </p>
            <div className="flex space-x-4 text-[#fff]">
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
              {products.map((item) => (
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
              {company.map((item) => (
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
        <div className="border-t border-[#4B4C66] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#fff]">
          <p>&copy; 2025 NutriPlanet. All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white cursor-pointer">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
