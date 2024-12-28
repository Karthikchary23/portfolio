"use client";
import Link from "next/link";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [home, sethome] = useState({
    description: "",
    seconddescription: "",
    instagram: null,
    facebook: null,
    linkedin: null,
    twitter: null,
    github: null,
    image: null,
  });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    axios
      .get("http://localhost:5000/homedata")
      .then((response) => {
        if (response.data.length > 0) {
          sethome(response.data[0]);
        } else {
          console.error("No data found in the response");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-12 sm:mt-24 text-white">
        {/* Left Section */}
        <div className="w-full sm:w-[60%] flex flex-col gap-6 sm:gap-10 sm:ml-4 px-4">
          <div>
            <div className="flex flex-col gap-4">
              <span className="greetings text-2xl sm:text-md md:text-xl lg:text-2xl" data-aos="fade-up">
                Hello!
              </span>
              <span className="name text-4xl sm:text-lg  md:text-3xl lg:text-5xl font-bold" data-aos="zoom-in">
                I am Lingoji Karthik Chary
              </span>
              <span className="professin text-4xl sm:text-2xl md:3xl lg:text-4xl" data-aos="fade-up">
                {home.seconddescription || "Your Profession Here"}
              </span>
              <div className="description mt-3 text-sm sm:text-md md:text-lg " data-aos="fade-up">
                {home.description || "Your Description Here"}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {home.instagram && (
              <div className="w-14 h-14 sm:w-16 sm:h-16">
                <Link href={home.instagram}>
                  <img src="/insta.gif" alt="Instagram" />
                </Link>
              </div>
            )}
            {home.facebook && (
              <div className="w-14 h-14 sm:w-16 sm:h-16">
                <Link href={home.facebook}>
                  <img src="/facebook.gif" alt="Facebook" />
                </Link>
              </div>
            )}
            {home.linkedin && (
              <div className="w-14 h-14 sm:w-16 sm:h-16">
                <Link href={home.linkedin}>
                  <img src="/linkedin.gif" alt="LinkedIn" />
                </Link>
              </div>
            )}
            {home.twitter && (
              <div className="w-14 h-14 sm:w-16 sm:h-16">
                <Link href={home.twitter}>
                  <img src="/twitter.gif" alt="Twitter" />
                </Link>
              </div>
            )}
            {home.github && (
              <div className="w-14 h-14 sm:w-16 sm:h-16">
                <Link href={home.github}>
                  <img src="/github.png" alt="GitHub" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full sm:w-[40%] px-4 sm:px-10 h-full">
  {home.image ? (
    <img
      className="rounded-full w-44 h-44 sm:w-48 sm:h-48  sm:mt-11 sm:mb-14 md:w-64 md:h-64 lg:w-96 lg:h-96 mx-auto "
      src={home.image}
      alt="Photo of Karthik"
    />
  ) : (
    <div className="rounded-full w-80 h-80 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto bg-gray-500">
      {/* Placeholder for image */}
    </div>
  )}
</div>

      </div>
    </>
  );
}
