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
      .post("http://localhost:5000/certificatedetails", data)
      .then((response) => {});
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
          Add Certificate
        </h2>

        {/* File input for project image */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Certificate Image
          </label>
          <input
            type="text"
            placeholder="Enter certificate image url"
            {...register("certificateimage", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.certificateimage && (
            <span className="text-red-500 text-sm">
              Certificate image is required
            </span>
          )}
        </div>

        {/* Text input for project name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Certificate Name
          </label>
          <input
            type="text"
            placeholder="Enter certificate name"
            {...register("certificatename", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.certificatename && (
            <span className="text-red-500 text-sm">
              Certificate name is required
            </span>
          )}
        </div>

        {/* Text input for certificate provider */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Certificate Provider
          </label>
          <input
            type="text"
            placeholder="Enter certificate provider"
            {...register("certificateprovider", { required: true })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          {errors.certificateprovider && (
            <span className="text-red-500 text-sm">
              Certificate provider is required
            </span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-md text-lg font-medium hover:bg-indigo-600 transition duration-300"
        >
          Add Certificate
        </button>
      </form>
    </div>
  );
}
