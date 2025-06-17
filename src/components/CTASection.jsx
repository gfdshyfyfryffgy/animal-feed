// src/components/CTASection.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <div className="bg-green-600 text-white py-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 min-h-[200px]">
      <div className="text-2xl font-bold text-center md:text-left w-80">
        Why choose our animal feed approach?
      </div>
      <div className="max-w-xl text-center md:text-left">
        Join thousands of farmers who have switched to our sustainable feed
        solutions and seen improved animal health and productivity.
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3">
        <Link to="/contact">
          <button className="bg-white text-green-600 font-semibold px-6 py-2 rounded-lg shadow w-48 hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
       
      </div>
    </div>
  )
}
