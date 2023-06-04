"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todocontroller_1 = require("../controllers/todocontroller");
const todorouter = (0, express_1.Router)();
todorouter.get("/get/:id", todocontroller_1.getTodo);
todorouter.post("/create", todocontroller_1.createTodo);
todorouter.post("/delete/:id", todocontroller_1.deleteTodo);
todorouter.post("/update/:id", todocontroller_1.updateTodo);
exports.default = todorouter;
