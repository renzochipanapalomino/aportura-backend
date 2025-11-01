import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../server.js"; // usamos la conexión del server
import dotenv from "dotenv";

dotenv.config();

// REGISTRO DE USUARIO
export const register = async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    if (!nombre || !correo || !contraseña) {
      return res.status(400).json({ mensaje: "Faltan datos obligatorios ❌" });
    }

    // Verificar si el usuario ya existe
    const userExists = await pool.query("SELECT * FROM usuarios WHERE correo = $1", [correo]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ mensaje: "El usuario ya existe ❌" });
    }

    // Encriptar contraseña
    const hashed = await bcrypt.hash(contraseña, 10);

    // Guardar usuario (⚠️ cambia a 'contrasena')
    await pool.query(
      "INSERT INTO usuarios (nombre, correo, contrasena) VALUES ($1, $2, $3)",
      [nombre, correo, hashed]
    );

    res.status(201).json({ mensaje: "Usuario registrado exitosamente ✅" });
  } catch (error) {
    console.error("Error en registro:", error);
    res.status(500).json({ mensaje: "Error interno del servidor ❌" });
  }
};

// LOGIN DE USUARIO
export const login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    const result = await pool.query("SELECT * FROM usuarios WHERE correo = $1", [correo]);
    if (result.rows.length === 0) {
      return res.status(404).json({ mensaje: "Usuario no encontrado ❌" });
    }

    const usuario = result.rows[0];
    const valido = await bcrypt.compare(contraseña, usuario.contrasena);

    if (!valido) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta ❌" });
    }

    // Crear token
    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ mensaje: "Inicio de sesión exitoso ✅", token });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ mensaje: "Error interno del servidor ❌" });
  }
};
