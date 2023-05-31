import { Router } from "express";
import {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todocontroller";
const todorouter = Router();

todorouter.get("/get/:id", getTodo);
todorouter.post("/create", createTodo);
todorouter.post("/delete/:id", deleteTodo);
todorouter.post("/update/:id", updateTodo);

export default todorouter;
