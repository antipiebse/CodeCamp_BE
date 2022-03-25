import mongoose from "mongoose";

//schema란 colum이라고 생각하면 됨!
const stockSchema = new mongoose.Schema({
    name: String,
    date: Date,
    price: Number
})
export const Stock = mongoose.model("Stock", stockSchema)