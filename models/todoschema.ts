import mongoose, { Schema, model } from "mongoose";

const schemaTodo = new Schema({
  works: { type: String, required: true, trim: true },
  userid: { type: mongoose.Types.ObjectId, ref: "todoauth", required: true },
});

export const todolist = model("todolist", schemaTodo);
