"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase/firebase";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      // Setting admin session
      localStorage.setItem("IsAdmin1234567890", true); // Set to true if the user is an admin
      router.push("AdMin12345678906209/home");
      alert("User logged in successfully!");
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg bg-white shadow-md">
      <h1 className="text-2xl text-center font-semibold mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="text-sm font-medium mb-2">Email:</label>
        <input
          type="email"
          {...register("email")}
          className="p-3 mb-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <label className="text-sm font-medium mb-2">Password:</label>
        <input
          type="password"
          {...register("password")}
          className="p-3 mb-6 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
} 