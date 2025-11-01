import express from "express";
import { register, login } from "../controllers/authController.js";
import { verificarToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Rutas públicas
router.post("/register", register);
router.post("/login", login);

// Ruta protegida (requiere token)
router.get("/perfil", verificarToken, (req, res) => {
  res.json({
    mensaje: "Acceso permitido ✅",
    usuario: req.usuario,
  });
});

export default router;
