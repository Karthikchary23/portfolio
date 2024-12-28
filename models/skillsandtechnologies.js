import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  skill: { type: String, required: true },
  skillname: { type: String, required: true },
});
const skillmodel = mongoose.model("skillmodel", skillSchema);
export default skillmodel;
