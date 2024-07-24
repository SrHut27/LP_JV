"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexRouter = (0, express_1.Router)();
// Importando controles para aplicar nas rotas:
const indexControllers_1 = require("../controllers/indexControllers");
// Aplicando rotas:
indexRouter.get("/", indexControllers_1.renderIndex);
exports.default = indexRouter;
