import { Router } from "express";

import {
  createResena,
  updateResena,
  deleteResena,
  getReviewsCarreraId,
  getReviewsUsuarioId,
} from "../controller/resenas.controller.js";

const router = Router();

//POST /resenas
router.post("/resenas", createResena);

//GET /carreras/:id/resenas
router.get("/carreras/:id/resenas", getReviewsCarreraId);

//GET /usuarios/:id/resenas
router.get("/usuarios/:id/resenas", getReviewsUsuarioId);

//DELETE /resenas/:id
router.delete("/resenas/:id", deleteResena);

//PUT /resenas/:id
router.put("/resenas/:id", updateResena);

export default router;
