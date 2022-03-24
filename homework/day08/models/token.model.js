import mongoose from "mongoose";

//schema란 colum이라고 생각하면 됨!
const tokenSchema = new mongoose.Schema({
    token: String,
    phone: String,
    isAuth: Boolean
})
export const Token = mongoose.model("Token", tokenSchema)