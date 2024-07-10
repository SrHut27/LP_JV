import { Router } from "express";

// Importando sub_rotas:
import indexRoutes from "./indexRoutes";

const router = Router();

// Aplicando rotas:
router.use(indexRoutes);

export default router;