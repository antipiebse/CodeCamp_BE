import mongoose from "mongoose";

//schema란 colum이라고 생각하면 됨!
const starbucksSchema = new mongoose.Schema({
    Name: String,
    _id: String
})
export const Starbucks = mongoose.model("Starbucks", starbucksSchema)