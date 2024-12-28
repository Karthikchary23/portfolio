import mongoose from "mongoose";

// Define the schema for education details
const educationDetailsSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  degree: { type: String, required: true },
  cgpa: { type: String, required: true },
  academicYear: { type: String, required: true },
  imageOfcollege: { type: String, required: true }, // Image URL
});

// Create the model
const educationModel = mongoose.model(
  "Educationdetails",
  educationDetailsSchema
);

export default educationModel;
