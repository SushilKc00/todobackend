import { Request, Response } from "express";
import { todolist } from "../models/todoschema";

const getTodo = async (req: Request, res: Response) => {
  const works = await todolist.find({ userid: req.params.id });
  if (works.length > 0) {
    return res.json({ success: true, works });
  }
  res.json({ success: false });
};

const createTodo = async (req: Request, res: Response) => {
  await todolist.create(req.body);
  res.json({ success: true, message: "work added" });
};
const deleteTodo = async (req: Request, res: Response) => {
  await todolist.deleteOne({ _id: req.params.id });
  res.json({ success: true, message: "work remove" });
};

const updateTodo = async (req: Request, res: Response) => {
  await todolist.updateOne(
    { _id: req.params.id },
    { $set: { works: req.body.works } },
    { new: true }
  );
  res.json({ success: true, message: "work update" });
};

export { createTodo, getTodo, deleteTodo, updateTodo };
