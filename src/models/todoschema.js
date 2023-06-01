"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todolist = void 0;
var mongoose_1 = require("mongoose");
var schemaTodo = new mongoose_1.Schema({
    works: { type: String, required: true, trim: true },
    userid: { type: mongoose_1.default.Types.ObjectId, ref: "todoauth", required: true },
});
exports.todolist = (0, mongoose_1.model)("todolist", schemaTodo);
