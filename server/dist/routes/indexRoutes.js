"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Impportando controles:
const indexControll_1 = require("../controllers/indexControll");
const indexRoutes = (0, express_1.Router)();
// Aplicando rotas:
indexRoutes.get("/", indexControll_1.renderIndex);
exports.default = indexRoutes;
