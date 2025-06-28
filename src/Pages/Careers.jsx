import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Job Card Component
function JobCard({ title, location, department, type, description, onApply, index }) {
  return (
    <div
      className="rounded-xl border px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm hover:shadow-md transition mb-5"
      style={{ background: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)" }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-2">
          <span>📍 {location}</span>
          <span>🏢 {department}</span>
          <span>🕐 {type}</span>
        </div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <button
        onClick={() => onApply(title)}
        className="mt-4 md:mt-0 md:ml-6 px-6 py-2 bg-[#3E3F5B] text-white rounded-md font-medium hover:bg-[#2e2f48] transition"
      >
        Apply Now
      </button>
    </div>
  );
}

export default function Careers() {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const jobs = [
    {
      title: "Agricultural Product Manager",
      location: "New York, NY",
      department: "Operations",
      type: "Full-time",
      description: "Lead product development and management for our agricultural product lines.",
    },
    {
      title: "Quality Control Specialist",
      location: "California, CA",
      department: "Quality Assurance",
      type: "Full-time",
      description: "Ensure product quality standards are met throughout the supply chain.",
    },
    {
      title: "Sales Representative",
      location: "Texas, TX",
      department: "Sales",
      type: "Full-time",
      description: "Build relationships with clients and drive sales growth in assigned territories.",
    },
    {
      title: "Supply Chain Coordinator",
      location: "Remote",
      department: "Logistics",
      type: "Full-time",
      description: "Coordinate supply chain operations and optimize logistics processes.",
    },
  ];

  const openForm = (jobTitle = null) => {
    setSelectedJob(jobTitle);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  return (
    <div
      className="min-h-screen px-4 pt-10 pb-20 mt-20"
      style={{ background: "linear-gradient(120deg, #F6F1DE 0%, #E4E9F7 100%)" }}
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-600 mb-10">
          We’re always looking for passionate individuals ready to make an impact.
        </p>
      </div>

      {/* Job Listings */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6" data-aos="fade-right">
          Current Openings
        </h2>
        {jobs.map((job, index) => (
          <JobCard key={job.title} {...job} index={index} onApply={openForm} />
        ))}

        {/* General Resume Submission */}
        <div className="text-center mt-10" data-aos="fade-up">
          <p className="text-gray-600 mb-4">Don’t see the role you’re looking for?</p>
          <button
            onClick={() => openForm(null)}
            className="px-6 py-2 bg-[#3E3F5B] text-white rounded-md font-medium hover:bg-[#2e2f48] shadow-sm transition"
          >
            Send Us Your Resume
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={closeForm}
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4 text-[#3E3F5B]">
              {selectedJob ? `Apply for: ${selectedJob}` : "Submit Your Resume"}
            </h3>

            {/* Formsubmit Form */}
            <form
              action="https://formsubmit.co/0c2c5733bc93f7a46fe99b272a94fabf"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="hidden" name="_subject" value={`New Resume: ${selectedJob || "General"}`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border rounded-md px-3 py-2 mb-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border rounded-md px-3 py-2 mb-3"
              />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full border rounded-md px-3 py-2 mb-4"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeForm}
                  className="px-4 py-2 border rounded-md text-[#3E3F5B] hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#3E3F5B] text-white rounded-md hover:bg-[#2e2f48]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}