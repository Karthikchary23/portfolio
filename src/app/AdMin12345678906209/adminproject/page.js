"use client";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/projectdetails", data)
      .then((response) => {
        console.log(response.data);
      });
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Add Project
        </h2>

        {/* File input for project image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Project Image
          </label>
          <input
            type="text"
            placeholder="Enter project image url"
            {...register("projectimage", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.projectimage && (
            <span className="text-red-500 text-sm">
              Project image is required
            </span>
          )}
        </div>

        {/* Text input for project name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Project Name
          </label>
          <input
            type="text"
            placeholder="Enter project name"
            {...register("projectname", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.projectname && (
            <span className="text-red-500 text-sm">
              Project name is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Github link
          </label>
          <input
            type="text"
            placeholder="Enter project name"
            {...register("github", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.projectname && (
            <span className="text-red-500 text-sm">
              Project name is required
            </span>
          )}
        </div>

        {/* Textarea for project description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Project Description
          </label>
          <textarea
            placeholder="Enter project description"
            {...register("projectdescription", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
          {errors.projectdescription && (
            <span className="text-red-500 text-sm">
              Project description is required
            </span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-md text-lg font-medium hover:bg-indigo-600 transition duration-300"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
