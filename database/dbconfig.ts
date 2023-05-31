import mongoose from "mongoose";

export const dbconnection = async()=>{
    await mongoose.connect("mongodb://localhost:27017/todo")
    console.log("db connect")
}

