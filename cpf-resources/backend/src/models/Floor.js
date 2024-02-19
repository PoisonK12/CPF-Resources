import mongoose from "mongoose";
const { Schema, ObjectId } = mongoose;

const floorSchema = new Schema({
    name: String,
    img: String,
    color: String,
    product: String,
    myCollection: {
        type: ObjectId,
        ref: "Set"
    },
    forSale: Boolean
});

const Floor = mongoose.model("Floor", floorSchema);

export default Floor;