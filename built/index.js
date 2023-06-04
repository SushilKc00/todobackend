"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const cors_1 = __importDefault(require("cors"));
const dbconfig_1 = require("./database/dbconfig");
const todorouter_1 = __importDefault(require("./routes/todorouter"));
const app = (0, express_1.default)();
let url = process.env.DB_URL ||
    "mongodb+srv://sushilkc:kc12526688@cluster0.5khn2mb.mongodb.net/todo?retryWrites=true&w=majority";
let Port = 5000;
//midelwares
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//router middleware
app.use("/api/auth", router_1.default);
app.use("/todo", todorouter_1.default);
//dbconnection
(0, dbconfig_1.dbconnection)(url);
app.listen(Port, () => {
    console.log("server running");
});
