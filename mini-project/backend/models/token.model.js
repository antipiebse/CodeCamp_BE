import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    token:String,
    phone:String,
    isAuth:Boolean
})
export const Token = mongoose.model("Token", tokenSchema)