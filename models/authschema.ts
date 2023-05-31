import { Schema, model } from "mongoose";

const schemaAuth = new Schema({
  username: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true, min: 3 },
});

export const authSchema = model("todoauth", schemaAuth);
