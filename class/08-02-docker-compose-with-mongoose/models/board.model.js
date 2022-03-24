import mongoose from "mongoose";

//schema란 colum이라고 생각하면 됨!
const boardSchema = new mongoose.Schema({
    writer: String,
    title: String,
    contents:String
})
export const Board = mongoose.model("Board", boardSchema)