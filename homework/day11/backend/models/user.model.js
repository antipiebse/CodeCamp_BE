import mongoose from "mongoose";

//schema란 colum이라고 생각하면 됨!
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    personal:String,
    prefer:String,
    pwd:String,
    phone:String,
    og:{
        title:String,
        description: String,
        image:String
    }
})
export const User = mongoose.model("User", userSchema)