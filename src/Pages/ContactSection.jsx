// src/components/ContactSection.jsx

import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import hen from '../assets/hen.jpg'
import horse from '../assets/horse.jpg'

const farmSizes = ['Small (<50)', 'Medium (50–200)', 'Large (>200)']
const animalTypes = ['Poultry', 'Cattle', 'Swine', 'Aquaculture', 'Other']

export default function ContactSection() {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    company: '',
    farm_size: '',
    animal_type: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.from_name.trim()) errs.from_name = 'Required'
    if (!form.from_email.match(/^[^@]+@[^@]+\.[^@]+$/)) errs.from_email = 'Invalid email'
    if (!form.message.trim()) errs.message = 'Required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setSending(true)

    const templateParams = {
      from_name: form.from_name || 'N/A',
      from_email: form.from_email || 'N/A',
      company: form.company || 'N/A',
      farm_size: form.farm_size || 'N/A',
      animal_type: form.animal_type || 'N/A',
      message: form.message || 'N/A',
      time: new Date().toLocaleString(),
    }

    try {
      await emailjs.send(
        'service_flmd3qx',        // ✅ your actual service ID
        'template_v8greqs',       // ✅ your actual template ID
        templateParams,
        'DPXwOwjIRRQRdSBNQ'        // ✅ your public key
      )
      setSuccess('Message sent! We’ll be in touch within 24 hours.')
      setForm({
        from_name: '',
        from_email: '',
        company: '',
        farm_size: '',
        animal_type: '',
        message: '',
      })
    } catch (error) {
      console.error('Email send error:', error)
      setSuccess('Oops—something went wrong. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Header */}
      <div className="py-16 px-6 md:px-20 bg-green-500 mt-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-white">
              NutriPlanet is dedicated to providing high-quality, sustainable
              animal feed solutions. We combine science and care to support
              healthy livestock and a greener planet.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={horse} alt="Contact" className="rounded-lg shadow-md w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
            <p className="mb-6 text-gray-600">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    className={`mt-1 w-full border rounded px-3 py-2 ${
                      errors.from_name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.from_name && <p className="text-red-500 text-sm">{errors.from_name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    className={`mt-1 w-full border rounded px-3 py-2 ${
                      errors.from_email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.from_email && <p className="text-red-500 text-sm">{errors.from_email}</p>}
                </div>
              </div>

              {/* Company & Farm Size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Company/Farm Name</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Farm Size</label>
                  <select
                    name="farm_size"
                    value={form.farm_size}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">Select farm size</option>
                    {farmSizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Animal Type */}
              <div>
                <label className="block text-sm font-medium">Animal Type</label>
                <select
                  name="animal_type"
                  value={form.animal_type}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Select animal type</option>
                  {animalTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`mt-1 w-full border rounded px-3 py-2 ${
                    errors.message ? 'border-red-500' : 'border-green-500'
                  }`}
                  placeholder="Tell us about your animal feed needs..."
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
              >
                {sending ? 'Sending…' : 'Send Message'}
              </button>

              {success && <p className="mt-4 text-center text-green-600">{success}</p>}
            </form>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Our experts are here to help. Reach out by phone or email with any questions.
            </p>

            <div className="text-sm space-y-6">
              <div>
                <p className="font-semibold">Email</p>
                <p>info@nutriplanet.com</p>
                <p className="text-gray-500 text-xs">We respond within 24 hours</p>
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+1 (555) 123-4567</p>
                <p className="text-gray-500 text-xs">Mon–Fri, 8AM–6PM</p>
              </div>
              <div>
                <p className="font-semibold">Office</p>
                <p>123 Green Street, Eco City, EC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Thank You Section */}
<div className="bg-green-50 py-16 px-6 md:px-20 mt-16">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
      Thank You for Reaching Out!
    </h2>
    <p className="text-gray-700 text-lg md:text-xl mb-6">
      We appreciate your interest in NutriPlanet. Our team will get back to you as soon as possible. 
      Meanwhile, feel free to explore more about our products and solutions.
    </p>
    <div className="flex justify-center">
      <a
        href="/products"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow"
      >
        Explore Our Products
      </a>
    </div>
  </div>
</div>



    </>
  )
}
