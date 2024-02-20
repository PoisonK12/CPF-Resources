import mongoose from "mongoose";
const { Schema } = mongoose;

const archiveSchema = new Schema({
    name: String,
    theme: String,
    fileUrl: String 
});

export const Archive = mongoose.model("Archive", archiveSchema);