import { Router } from "express";
const indexRouter = Router();

// Importando controles para aplicar nas rotas:
import { renderIndex } from "../controllers/indexControllers";

// Aplicando rotas:
indexRouter.get("/", renderIndex);

export default indexRouter;