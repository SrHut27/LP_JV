"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const PORT = 3002;
// Middleware
const hbs = (0, express_handlebars_1.create)({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path_1.default.join(__dirname, "../../client/views/layouts"),
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "../../client/views"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../client/public")));
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Anexando rotas:
app.use(router_1.default);
// Rodando servidor:
app.listen(PORT, () => {
    console.log("Servidor está rodando na porta:", PORT);
});
