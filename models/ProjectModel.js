import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  projectimage: { type: String, required: true }, // Store Base64-encoded image
  projectname: { type: String, required: true },
  projectdescription: { type: String, required: true },
  github: { type: String, required: true },
});
const projectModel = mongoose.model("projectModel", projectSchema);
export default projectModel;
