import mongoose from "mongoose";
const { Schema } = mongoose

const setSchema = new Schema({
    name: String,
    img: String,
    description: String,
    plankSize: String,
    lockingSystem: String,
    bevel: String, 
    plasticTile: String,
    generalCommercial: String,
    plankSpecifications: {
        plankWidth: String,
        plankLength: String,
        thickness: String,
    },
    palletSpecifications: {
        boxesPerPallet: String,
        palletSqft: String,
        palletWeight: String
    },
    boxSpecifications: {
        planksPerBox: String,
        sqftPerBox: String,
        boxWeight: String
    }
});

const Set = mongoose.model("Set", setSchema)

export default Set