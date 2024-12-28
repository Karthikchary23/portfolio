"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EducationDetails() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    register: registerSkill,
    handleSubmit: handleSkillSubmit,
    reset: resetSkill,
    formState: { errors: skillErrors },
  } = useForm();

  const [educationDetails, setEducationDetails] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/educationdetailget").then((response) => {
      setEducationDetails(response.data);
    });
    axios.get("http://localhost:5000/skillsget").then((response) => {
      setSkills(response.data);
    });
  }, []);

  // Handle Education Details Form Submission
  const onSubmitEducation = (data) => {
    axios
      .post("http://localhost:5000/educationdetail", data)
      .then((response) => {
        setEducationDetails([...educationDetails, response.data]);
        reset();
      })
      .catch((error) => {
        console.error("Error saving education details:", error);
      });
  };

  // Handle Skills Form Submission
  const onSubmitSkills = (data) => {
    axios
      .post("http://localhost:5000/skills", data)
      .then((response) => {
        setSkills([...skills, response.data]);
        resetSkill();
      })
      .catch((error) => {
        console.error("Error saving skills:", error);
      });
  };

  // Handle delete for education
  const handleDeleteEducation = (index) => {
    const updatedDetails = educationDetails.filter((_, i) => i !== index);
    setEducationDetails(updatedDetails);
  };

  // Handle delete for skills
  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-5">
      <h1 className="text-4xl font-bold mb-5">Education Details</h1>

      {/* Education Form */}
      <form
        className="bg-gray-800 p-5 rounded-lg shadow-lg mb-10"
        onSubmit={handleSubmit(onSubmitEducation)}
      >
        <div className="flex flex-col gap-4">
          <input
            {...register("collegeName", { required: true })}
            placeholder="College Name"
            className="p-2 rounded bg-gray-700 text-white"
          />
          {errors.collegeName && (
            <span className="text-red-500">College name is required</span>
          )}

          <input
            {...register("degree", { required: true })}
            placeholder="Degree"
            className="p-2 rounded bg-gray-700 text-white"
          />
          {errors.degree && (
            <span className="text-red-500">Degree is required</span>
          )}

          <input
            {...register("cgpa", { required: true })}
            placeholder="CGPA"
            className="p-2 rounded bg-gray-700 text-white"
          />
          {errors.cgpa && (
            <span className="text-red-500">CGPA is required</span>
          )}

          <input
            {...register("academicYear", { required: true })}
            placeholder="Academic Year"
            className="p-2 rounded bg-gray-700 text-white"
          />
          {errors.academicYear && (
            <span className="text-red-500">Academic Year is required</span>
          )}

          <input
            {...register("imageOfCollege", { required: true })}
            placeholder="College Image URL"
            className="p-2 rounded bg-gray-700 text-white"
          />
          {errors.imageOfCollege && (
            <span className="text-red-500">College image is required</span>
          )}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Add Education Detail
          </button>
        </div>
      </form>

      {/* Display Education Details */}
      <div className="grid gap-5">
        {educationDetails.map((detail, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-5 rounded-lg shadow-lg"
          >
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                onClick={() => handleDeleteEducation(index)}
              >
                Delete
              </button>
            </div>
            <h2 className="text-2xl font-bold">{detail.collegeName}</h2>
            <p>Degree: {detail.degree}</p>
            <p>CGPA: {detail.cgpa}</p>
            <p>Academic Year: {detail.academicYear}</p>
            {detail.imageOfCollege && (
              <img
                src={detail.imageOfCollege}
                alt="College"
                className="w-32 h-32 object-cover mt-2"
              />
            )}
          </div>
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-5 mt-10">Skills & Technologies</h1>

      {/* Skills Form */}
      <form
        className="bg-gray-800 p-5 rounded-lg shadow-lg mb-10"
        onSubmit={handleSkillSubmit(onSubmitSkills)}
      >
        <div className="flex flex-col gap-4">
          <input
            {...registerSkill("skill", { required: true })}
            placeholder="Enter a Skill or Technology"
            className="p-2 rounded bg-gray-700 text-white"
          />
          {skillErrors.skill && (
            <span className="text-red-500">Skill is required</span>
          )}
          <input
            {...registerSkill("skillname", { required: true })}
            placeholder="Enter a Skill or Technology"
            className="p-2 rounded bg-gray-700 text-white"
          />
          {skillErrors.skill && (
            <span className="text-red-500">Skill is required</span>
          )}

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Add Skill
          </button>
        </div>
      </form>

      {/* Display Skills */}
      <div className="grid gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-800 p-3 rounded-lg shadow-lg"
          >
            <span>{skill.skill}</span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
              onClick={() => handleDeleteSkill(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
