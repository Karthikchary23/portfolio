"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles

const Page = () => {
  const [educationDetails, setEducationDetails] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the page loads
    axios
      .get("http://localhost:5000/educationdetailget")
      .then((response) => {
        console.log(response.data);
        setEducationDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching education details:", error);
      });
    axios.get("http://localhost:5000/skills").then((response) => {
      console.log(response.data);
      setSkills(response.data);
    });

    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* bg-gray-900 */}

      <div className="  text-white flex flex-col items-center py-10">
        {/* education */}
        <div className="w-full max-w-5xl px-5">
          <h1 className="text-2xl font-extrabold text-center mb-10 md:text-4xl lg:text-5xl">
            Education Details
          </h1>

          {/* Education Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationDetails.map((detail, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-gray-800"
              >
                <img
                  className="w-full h-56 object-cover opacity-60"
                  src={detail.imageOfcollege}
                  alt={detail.collegeName}
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center p-5 text-center bg-black bg-opacity-50">
                  <h2 className="text-2xl font-bold mb-2">
                    {detail.collegeName}
                  </h2>
                  <p className="text-lg font-medium">{detail.degree}</p>
                  <p className="text-sm font-light">CGPA: {detail.cgpa}</p>
                  <p className="text-sm font-light">
                    Academic Year: {detail.academicYear}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* skills */}
      </div>
      <div className="text-white">
        <h1 className="text-2xl font-extrabold text-center mb-10 md:text-4xl lg:text-5xl">
          Skills & Technologies
        </h1>
        <div className="skillimages  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16">
          {skills.map((detail, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col items-center justify-center w-24 h-32  rounded-lg shadow-lg p-2"
            >
              <img
                className="w-20 h- object-contain mb-2"
                src={detail.skill}
                alt={detail.skillname}
              />
              <span className="text-white font-semibold text-md text-center">
                {detail.skillname}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
