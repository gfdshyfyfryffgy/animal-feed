import React from 'react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <div
      className="text-white py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 min-h-[200px]"
      style={{ backgroundColor: '#243642' }}
    >
      <div className="text-2xl font-bold text-center md:text-left w-80">
        Why choose our animal feed approach?
      </div>
      <div className="max-w-xl text-center md:text-left">
        Join thousands of farmers who have switched to our sustainable feed
        solutions and seen improved animal health and productivity.
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3">
        <Link to="/contact">
          <button
            className="font-semibold px-6 py-2 rounded-lg shadow w-48 transition"
            style={{
              backgroundColor: '#ACD3A8',
              color: '#3E3F5B',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#F6F1DE';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ACD3A8';
              e.currentTarget.style.color = '#3E3F5B';
            }}
          >
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
