"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles

const Page = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/certificatedata")
      .then((response) => {
        setCertificates(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching certificates:", error);
      });
  }, []);

  return (
    <div className="min-h-screenp-12 m-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-white">
        Certificates
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
        data-aos="fade-up"
      >
        {certificates.map((certificate) => (
          <div
            key={certificate._id}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => window.open(certificate.certificateimage, "_blank")}
          >
            <div className="relative">
              <img
                src={certificate.certificateimage}
                alt={certificate.certificatename}
                className="w-full h-64 object-cover rounded-t-xl group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-xl">
                <h3 className="text-xl font-semibold text-white">
                  {certificate.certificatename}
                </h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {certificate.certificateprovider}
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <p className="text-gray-600 text-sm">
                {certificate.certificatename} issued by{" "}
                {certificate.certificateprovider}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
