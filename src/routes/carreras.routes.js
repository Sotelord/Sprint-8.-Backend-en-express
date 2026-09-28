import { Router } from "express";

import {
  getCarreras,
  getCarreraById,
} from "../controller/carreras.controller.js";

const router = Router();

//GET /carreras
router.get("/carreras", getCarreras);

//GET /carreras/:id
router.get("/carreras/:id", getCarreraById);

export default router;
