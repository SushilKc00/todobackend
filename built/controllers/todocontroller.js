"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.getTodo = exports.createTodo = void 0;
const todoschema_1 = require("../models/todoschema");
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const works = yield todoschema_1.todolist.find({ userid: req.params.id });
    if (works.length > 0) {
        return res.json({ success: true, works });
    }
    res.json({ success: false });
});
exports.getTodo = getTodo;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield todoschema_1.todolist.create(req.body);
    res.json({ success: true, message: "work added" });
});
exports.createTodo = createTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield todoschema_1.todolist.deleteOne({ _id: req.params.id });
    res.json({ success: true, message: "work remove" });
});
exports.deleteTodo = deleteTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield todoschema_1.todolist.updateOne({ _id: req.params.id }, { $set: { works: req.body.works } }, { new: true });
    res.json({ success: true, message: "work update" });
});
exports.updateTodo = updateTodo;
