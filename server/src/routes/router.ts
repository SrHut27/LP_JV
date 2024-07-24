import { Router } from "express";
const router = Router();

import indexRouter from "./indexRouter";

// Aplicando rotas:
router.use(indexRouter);

export default router;