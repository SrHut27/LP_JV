import express, { Request, Response, NextFunction } from "express";
import { create } from "express-handlebars";
import router from "./routes/routes";
import createFolders from "./functions/createFolders";

import path from "path";

const app = express();
const PORT = 3002;

// Middlewares:
createFolders();
const hbs = create ({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "../../client/views/layouts"),
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../../client/views"));
app.use(express.static(path.join(__dirname, "../../client/public")))

// Aplicando rotas:/
app.use(router);

// Middleware de tratamento de erro:
app.use((error: Error, req: Request,  res: Response, next: NextFunction):void => {
    console.error(error.stack);
    res.render("404")
});

app.listen(PORT, () => console.log("App is running"));