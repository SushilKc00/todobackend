"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = (0, express_1.Router)();
router.post("/register", auth_1.authRegister);
router.post("/login", auth_1.authLogin);
exports.default = router;