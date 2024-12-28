"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles

const Page = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/projectdata").then((response) => {
      setProjects(response.data);
    });
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white p-8">
      <h1 className="font-extrabold text-5xl text-center mb-12">Projects</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-lg overflow-hidden shadow-xl hover:shadow-2xl border-2 border-white transition-all duration-300 transform hover:scale-105 hover:translate-y-2"
          >
            <img
              src={project.projectimage} // Replace with actual image URL
              alt={project.projectname}
              className="w-full h-56 object-cover transition-all duration-300 group-hover:opacity-80"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.projectname}</h2>
              <p className="text-gray-300 text-sm mb-4">
                {expandedIndex === index
                  ? project.projectdescription
                  : project.projectdescription
                  ? project.projectdescription.substring(0, 120) + "..."
                  : "No description available"}
              </p>
              <button
                onClick={() => handleToggleDescription(index)}
                className="text-blue-500 hover:underline mt-2 transition-all duration-200 transform hover:scale-105"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
              <p className="text-md font-bold mb-2">
                Github:
                <span className="text-md text-blue-500 ml-4">
                  <Link href={project.github}>Click here for code</Link>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
