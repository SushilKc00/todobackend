"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router_1 = require("./routes/router");
var cors_1 = require("cors");
var dbconfig_1 = require("./database/dbconfig");
var todorouter_1 = require("./routes/todorouter");
var app = (0, express_1.default)();
var url = process.env.DB_URL ||
    "mongodb+srv://sushilkc:kc12526688@cluster0.5khn2mb.mongodb.net/todo?retryWrites=true&w=majority";
var Port = 5000;
//midelwares
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//router middleware
app.use("/api/auth", router_1.default);
app.use("/todo", todorouter_1.default);
//dbconnection
(0, dbconfig_1.dbconnection)(url);
app.listen(Port, function () {
    console.log("server running");
});
