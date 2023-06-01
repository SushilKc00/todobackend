"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = void 0;
var mongoose_1 = require("mongoose");
var schemaAuth = new mongoose_1.Schema({
    username: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true, min: 3 },
});
exports.authSchema = (0, mongoose_1.model)("todoauth", schemaAuth);
