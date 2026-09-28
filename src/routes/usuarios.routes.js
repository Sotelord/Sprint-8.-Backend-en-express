import { Router } from "express";
import { getUsuarioById } from "../controller/usuarios.controller.js";

const router = Router();

//GET /usuarios/:id
router.get("/usuarios/:id", getUsuarioById);

export default router;
