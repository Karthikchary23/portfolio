import mongoose from "mongoose";
const homeSchema = new mongoose.Schema({
  image: { type: String, required: true },
  instagram: { type: String, required: true },
  facebook: { type: String, required: true },
  linkedin: { type: String, required: true },
  twitter: { type: String, required: true },
  github: { type: String, required: true },
  seconddescription: { type: String, required: true },
  description: { type: String, required: true },
});
const homeModel = mongoose.model("homeModel", homeSchema);
export default homeModel;
