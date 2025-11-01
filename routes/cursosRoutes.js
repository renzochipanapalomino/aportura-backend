import express from "express";
import {
  getCursos,
  createCurso,
  updateCurso,
  deleteCurso,
} from "../controllers/cursosController.js";
import { verificarToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Rutas públicas
router.get("/", getCursos);

// Rutas protegidas (solo con token)
router.post("/", verificarToken, createCurso);
router.put("/:id", verificarToken, updateCurso);
router.delete("/:id", verificarToken, deleteCurso);

export default router;
