import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import cors from "cors";
import educationModel from "./models/Educationdetails.js";
import dotenv from "dotenv";
dotenv.config();
import skillmodel from "./models/skillsandtechnologies.js";
import projectModel from "./models/ProjectModel.js";
import certificateModel from "./models/Certificate.js";
import homeModel from "./models/Homepage.js";

const app = express();
const http = createServer(app);
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://karthik:19248cm230@portfolio.tmyso.mongodb.net/?retryWrites=true&w=majority&appName=portfolio"
);
app.get("/educationdetailget", async (req, res) => {
  try {
    const educationDetails = await educationModel.find(); // Fetch all education details from the database
    res.status(200).json(educationDetails); // Send the data as response
  } catch (error) {
    console.error("Error fetching education details:", error);
    res.status(500).json({ error: error.message });
  }
});

// POST route to save education details
app.post("/educationdetail", async (req, res) => {
  const { collegeName, degree, cgpa, academicYear, imageOfcollege } = req.body;
  try {
    const education = new educationModel({
      collegeName,
      degree,
      cgpa,
      academicYear,
      imageOfcollege,
    });
    await education.save();
    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Adding Skills
app.post("/skills", async (req, res) => {
  const { skill, skillname } = req.body;
  try {
    const skillimage = new skillmodel({ skill, skillname });
    await skillimage.save();
    res.status(201).json(skillimage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetching Skills
app.get("/skills", async (req, res) => {
  try {
    const skill = await skillmodel.find();
    res.status(200).json(skill);
  } catch (error) {
    console.error("Error fetching education details:", error);
    res.status(500).json({ error: error.message });
  }
});

//Project details adding
app.post("/projectdetails", async (req, res) => {
  const { projectimage, projectname, projectdescription, github } = req.body;
  try {
    const project = new projectModel({
      projectimage,
      projectname,
      projectdescription,
      github,
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//project data
app.get("/projectdata", async (req, res) => {
  try {
    const project = await projectModel.find();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// certificate
app.post("/certificatedetails", async (req, res) => {
  const { certificateimage, certificatename, certificateprovider } = req.body;
  try {
    const certificate = new certificateModel({
      certificateimage,
      certificatename,
      certificateprovider, // Corrected the field name here
    });
    await certificate.save();
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Certificate fetching
app.get("/certificatedata", async (req, res) => {
  try {
    const certificate = await certificateModel.find();
    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/homedetails", async (req, res) => {
  const {
    image,
    instagram,
    facebook,
    linkedin,
    twitter,
    github,
    description,
    seconddescription,
  } = req.body;
  try {
    const home = new homeModel({
      image,
      instagram,
      facebook,
      linkedin,
      twitter,
      github,
      description,
      seconddescription,
    });
    await home.save();
    res.status(201).json(home);
  } catch (error) {
    res.status(501).json({ error: "error occured" });
  }
});

app.get("/homedata", async (req, res) => {
  try {
    const home = await homeModel.find();
    res.status(200).json(home);
  } catch (error) {
    console.error("Error fetching education details:", error);
    res.status(500).json({ error: error.message });
  }
});
http.listen(5000, function () {
  console.log("Server running on port 5000");
});
