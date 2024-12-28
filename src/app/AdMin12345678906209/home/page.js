"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function HomeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can send the data to your backend using Axios or Fetch API
    // Example: axios.post('http://localhost:5000/home', data)
    axios
      .post("http://localhost:5000/homedetails", data)
      .then((resposnse) => {});
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Home Form</h2>

        {/* Image URL */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: "Image URL is required" })}
            className={`shadow appearance-none border ${
              errors.image ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700`}
            placeholder="Enter image URL"
          />
          {errors.image && (
            <p className="text-red-500 text-xs italic">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* Instagram */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="instagram"
          >
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            {...register("instagram", {
              required: "Instagram link is required",
            })}
            className={`shadow appearance-none border ${
              errors.instagram ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700`}
            placeholder="Enter Instagram link"
          />
          {errors.instagram && (
            <p className="text-red-500 text-xs italic">
              {errors.instagram.message}
            </p>
          )}
        </div>

        {/* Facebook */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="facebook"
          >
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            {...register("facebook", { required: "Facebook link is required" })}
            className={`shadow appearance-none border ${
              errors.facebook ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700`}
            placeholder="Enter Facebook link"
          />
          {errors.facebook && (
            <p className="text-red-500 text-xs italic">
              {errors.facebook.message}
            </p>
          )}
        </div>

        {/* LinkedIn */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="linkedin"
          >
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedin"
            {...register("linkedin", { required: "LinkedIn link is required" })}
            className={`shadow appearance-none border ${
              errors.linkedin ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700`}
            placeholder="Enter LinkedIn link"
          />
          {errors.linkedin && (
            <p className="text-red-500 text-xs italic">
              {errors.linkedin.message}
            </p>
          )}
        </div>

        {/* Twitter */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="twitter"
          >
            Twitter
          </label>
          <input
            type="text"
            id="twitter"
            {...register("twitter", { required: "Twitter link is required" })}
            className={`shadow appearance-none border ${
              errors.twitter ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700`}
            placeholder="Enter Twitter link"
          />
          {errors.twitter && (
            <p className="text-red-500 text-xs italic">
              {errors.twitter.message}
            </p>
          )}
        </div>

        {/* GitHub */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="github"
          >
            GitHub
          </label>
          <input
            type="text"
            id="github"
            {...register("github", { required: "GitHub link is required" })}
            className={`shadow appearance-none border ${
              errors.github ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700`}
            placeholder="Enter GitHub link"
          />
          {errors.github && (
            <p className="text-red-500 text-xs italic">
              {errors.github.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className={`shadow appearance-none border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700`}
            placeholder="Enter description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs italic">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Second Description */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="seconddescription"
          >
            Second Description
          </label>
          <textarea
            id="seconddescription"
            {...register("seconddescription", {
              required: "Second description is required",
            })}
            className={`shadow appearance-none border ${
              errors.seconddescription ? "border-red-500" : "border-gray-300"
            } rounded w-full py-2 px-3 text-gray-700`}
            placeholder="Enter second description"
          ></textarea>
          {errors.seconddescription && (
            <p className="text-red-500 text-xs italic">
              {errors.seconddescription.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
