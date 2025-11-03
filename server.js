import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";
import authRoutes from "./routes/authRoutes.js";
import cursosRoutes from "./routes/cursosRoutes.js"; // Nueva importación

const { Pool } = pkg;

// Cargar variables de entorno
dotenv.config();

// Configuración del servidor
const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // URL del frontend
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Conexión a PostgreSQL
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Probar conexión inmediata al iniciar
pool.connect()
  .then(() => console.log("🟢 Conectado correctamente a PostgreSQL"))
  .catch(err => console.error("Error al conectar con PostgreSQL:", err));

// ✅ Rutas del sistema
app.use("/api/auth", authRoutes);
app.use("/api/cursos", cursosRoutes); // Añadido para manejar los cursos

// Ruta base de prueba
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      mensaje: "Servidor APERTURA funcionando correctamente ✅",
      hora: result.rows[0].now,
    });
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    res.status(500).json({ error: "Error al conectar con la base de datos" });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
