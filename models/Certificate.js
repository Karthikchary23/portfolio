import mongoose from "mongoose";
const certificateSchema = new mongoose.Schema({
  certificateimage: { type: String, required: true },
  certificatename: { type: String, required: true },
  certificateprovider: { type: String, required: true },
});
const certificateModel = mongoose.model("certificateModel", certificateSchema);
export default certificateModel;
