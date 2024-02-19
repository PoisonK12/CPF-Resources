import mongoose from "mongoose";
const { Schema } = mongoose;

const setSchema = new Schema({
  name: String,
  img: String,
  description: String,
  plankSize: String,
  lockingSystem: String,
  bevel: String,
  plasticTile: String,
  generalCommercial: String,
  plankWidth: String,
  plankLength: String,
  thickness: String,
  boxesPerPallet: String,
  palletSqft: String,
  palletWeight: String,
  planksPerBox: String,
  sqftPerBox: String,
  boxWeight: String,
});

const Set = mongoose.model("Set", setSchema);

export default Set;
