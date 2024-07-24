import express, { Request, Response, NextFunction } from "express";
import { create } from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes/router";

const app = express();
const PORT = 3002;

// Middleware
const hbs = create({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "../../client/views/layouts"),
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../../client/views"));
app.use(express.static(path.join(__dirname, "../../client/public")))
app.use(bodyParser.urlencoded({ extended: true }))

// Anexando rotas:
app.use(router);

// Rodando servidor:
app.listen(PORT, ():void => {
    console.log("Servidor está rodando na porta:", PORT);
}) 