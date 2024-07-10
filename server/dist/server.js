"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const createFolders_1 = __importDefault(require("./functions/createFolders"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3002;
// Middlewares:
(0, createFolders_1.default)();
const hbs = (0, express_handlebars_1.create)({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path_1.default.join(__dirname, "../../client/views/layouts"),
    partialsDir: path_1.default.join(__dirname, "../../client/views/partials")
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "../../client/views"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../client/public")));
// Middleware de tratamento de erro:
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.render("404");
});
app.listen(PORT, () => console.log("App is running"));
