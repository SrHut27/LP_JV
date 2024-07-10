import { Router } from "express";

// Impportando controles:
import { renderIndex } from "../controllers/indexControll";

const indexRoutes = Router();

// Aplicando rotas:
indexRoutes.get("/", renderIndex);

export default indexRoutes;