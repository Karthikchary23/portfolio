"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

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

  const [IsAdmin1234567890, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if admin session exists
    const adminSession = localStorage.getItem("IsAdmin1234567890") === "true";
    setIsAdmin(adminSession);

    // Fetch home data
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
    <div>
      {/* Navbar - User and Admin Version */}
      <div className={`bg-${IsAdmin1234567890 ? 'gray-900' : 'slate-700'} h-16 flex items-center justify-between px-6 shadow-lg`}>
        <div className="flex items-center">
          <img
            src={home.image}
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white text-lg font-semibold ml-2">
            {IsAdmin1234567890 ? 'Admin Dashboard' : 'My Portfolio'}
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {IsAdmin1234567890 ? (
            <>
              <Link href="/AdMin12345678906209/home" className="text-white hover:text-blue-300 transition duration-200">Home</Link>
              <Link href="/AdMin12345678906209/adminabout" className="text-white hover:text-blue-300 transition duration-200">Admin About</Link>
              <Link href="/AdMin12345678906209/adminproject" className="text-white hover:text-blue-300 transition duration-200">Admin Projects</Link>
              <Link href="/AdMin12345678906209/admincertificate" className="text-white hover:text-blue-300 transition duration-200">Admin Certificates</Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-white hover:text-blue-300 transition duration-200">Home</Link>
              <Link href="/about" className="text-white hover:text-blue-300 transition duration-200">About</Link>
              <Link href="/project" className="text-white hover:text-blue-300 transition duration-200">Projects</Link>
              <Link href="/certificate" className="text-white hover:text-blue-300 transition duration-200">Certificates</Link>
              <Link href="/contact" className="text-white hover:text-blue-300 transition duration-200">Contact</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-slate-700 p-4`}
      >
        {IsAdmin1234567890 ? (
          <>
            <Link href="/AdMin12345678906209/home" className="block text-white hover:text-blue-300 transition duration-200">Home</Link>
            <Link href="/AdMin12345678906209/adminabout" className="block text-white hover:text-blue-300 transition duration-200">Admin About</Link>
            <Link href="/AdMin12345678906209/adminproject" className="block text-white hover:text-blue-300 transition duration-200">Admin Projects</Link>
            <Link href="/AdMin12345678906209/admincertificate" className="block text-white hover:text-blue-300 transition duration-200">Admin Certificates</Link>
          </>
        ) : (
          <>
            <Link href="/" className="block text-white hover:text-blue-300 transition duration-200">Home</Link>
            <Link href="/about" className="block text-white hover:text-blue-300 transition duration-200">About</Link>
            <Link href="/project" className="block text-white hover:text-blue-300 transition duration-200">Projects</Link>
            <Link href="/certificate" className="block text-white hover:text-blue-300 transition duration-200">Certificates</Link>
            <Link href="/contact" className="block text-white hover:text-blue-300 transition duration-200">Contact</Link>
          </>
        )}
        {/* Logout Button for Admin */}
        {IsAdmin1234567890 && (
          <button
            onClick={() => {
              localStorage.removeItem("IsAdmin1234567890");
              setIsAdmin(false);
              router.push("/");
            }}
            className="block w-full bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 transition duration-200"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
