import React from 'react'
import hen from '../assets/hen.jpg'
import { Link } from 'react-router-dom'
const ThridSection = () => {
    return (
        <>
           <div className=" py-10">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
    
    {/* Text Section */}
    <div className="flex-1">
      <div className="text-center mb-4">
        <span className="inline-block ml-[-400px] bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          Our Mission
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Sustainable animal<br />nutrition for a healthier planet
      </h1>
      <p className="text-lg text-gray-700">
  At NutriPlanet, we aim to transform animal nutrition with sustainable, high-quality feed that boosts livestock health and supports a greener agricultural ecosystem.
</p>

      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium">
       <Link to="/about">Learn More →</Link>
      </button>
       <Link to="/contact">
  <button className="mt-6 ml-4 bg-white hover:bg-gray-100 border border-gray-300 px-6 py-2 rounded font-medium">
    Contact Us
  </button>
</Link>

    </div>

    {/* Image Section */}
    <div className="flex-1">
      <img src={hen} alt="Hen" className="w-full rounded-lg shadow-md" />
    </div>
    
  </div>
</div>

        </>
    )
}

export default ThridSection
