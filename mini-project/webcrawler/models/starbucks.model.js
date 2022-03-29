import mongoose from "mongoose";

//schema란 colum이라고 생각하면 됨!
const starbucksSchema = new mongoose.Schema({
    name: String,
    img: String
})
export const Starbucks = mongoose.model("Starbucks", starbucksSchema)